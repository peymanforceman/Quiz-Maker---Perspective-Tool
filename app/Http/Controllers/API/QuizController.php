<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\DimensionResource;
use App\Http\Resources\QuizResource;
use App\Http\Resources\ResultResource;
use App\Models\Dimension;
use App\Models\Explanation;
use App\Models\Participant;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\Result;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class QuizController extends Controller
{
    public function index(Quiz $quiz)
    {
        return QuizResource::collection($quiz->ordered()->get());
    }

    public function get_quiz(Quiz $quiz, $id)
    {
        return new QuizResource($quiz->where('id', $id)->with(['questions' => function ($q) {
            $q->ordered();
        }])->first());
    }

    public function send_quiz(Request $request, Question $question, $id)
    {
        $data = json_decode($request->getContent(), true);

        // step1 (validation ) : validate if json format is the way we want !
        $rule_quiz = [
            'email' => 'required|email',
            'quiz_id' => 'required|integer',
            'answers' => 'required|array',
            'answers.*.id' => 'required|integer',
            'answers.*.value' => 'required|integer'
        ];

        $validator = Validator::make($data, $rule_quiz);
        if (!$validator->passes()) {
            return Response::json([
                'error' => 'Error: Json parameters are incorrect !'
            ], 400);
        }

        // step 2 ( validation ) : validate if user has answered all of quiz questions and they didn't miss anything before submitting the form
        $questions = $question->with('dimension')
            ->where('quiz_id', $id)
            ->ordered('dimension_id')->get();

        $questions_array = array();

        foreach ($data['answers'] as $item) {
            $questions_array[] = $item['id'];
        }

        if ($questions->whereNotIn('id', $questions_array)->count() > 0) {
            return Response::json([
                'error' => 'Error: A question ( or many ) of the quiz has not been answered !'
            ], 400);
        }

        // save user information and answers
        $participant = Participant::updateOrCreate(['email' => $data['email']]);

        $answer_collection = collect([]);

        foreach ($data['answers'] as $question_answer) {

            $participant->answers()
                ->updateOrCreate(['question_id' => $question_answer['id']], ['point' => $question_answer['value']]);

            $answer_collection->push([
                'question_id' => $question_answer['id'],
                'point' => $question_answer['value'],
            ]);
        }

        // now calculate it and show results
        $explanation_key = $this->calculateAndSaveResult($answer_collection, $questions);

        $new_result = $participant->results()->updateOrCreate(
            ['quiz_id' => $id],
            ['explanation_id' => Explanation::where('quiz_id', $id)->where('key', $explanation_key)->first()->id]);

        return new ResultResource($new_result);
    }

    public function get_result($id)
    {
        return new ResultResource(Result::where('id', $id)->with('explanation')->first());
    }

    public function get_dimensions()
    {
        return DimensionResource::collection(Dimension::get());
    }

    private function calculateAndSaveResult($answers, $questions)
    {
        $dimension_grouped = $questions->groupBy('dimension_id');

        $dimensions_results = array();
        $user_dimension_result = '';

        foreach ($dimension_grouped as $dimension_id => $dimensionQuestions) {
            $dimensions_results[$dimensionQuestions->first()->dimension->abbreviation] =
                ['total_point' => 0, 'total_questions' => 0];

            foreach ($dimensionQuestions as $dimension_question) {
                if ($dimension_question->direction > 0) {
                    $dimensions_results[$dimension_question->dimension->abbreviation]['total_point'] +=
                        $answers->where('question_id', $dimension_question->id)->first()['point'];
                } else {
                    $dimensions_results[$dimension_question->dimension->abbreviation]['total_point'] +=
                        (8 - $answers->where('question_id', $dimension_question->id)->first()['point']);
                }

                $dimensions_results[$dimension_question->dimension->abbreviation]['total_questions']++;
            }
        }

        foreach ($dimensions_results as $dimension => $values) {
            if ($values['total_point'] / $values['total_questions'] <= 4) {
                $user_dimension_result .= $dimension[0];
            } else {
                $user_dimension_result .= $dimension[1];
            }
        }
        return $user_dimension_result;
    }
}

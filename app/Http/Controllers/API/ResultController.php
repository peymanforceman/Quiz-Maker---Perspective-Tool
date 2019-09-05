<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\AnswerResource;
use App\Http\Resources\ResultResource;
use App\Models\Answer;
use App\Models\Question;
use App\Models\Result;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ResultController extends Controller
{
    public function show_results()
    {
        return ResultResource::collection(Result::with('participant', 'explanation', 'quiz')
            ->latest()->paginate(10));
    }

    public function get_answers(Request $request)
    {
        $this->validate($request, [
            'result_id' => 'required|integer',
            'participant_id' => 'required|integer',
            'quiz_id' => 'required|integer',
        ]);

        // get questions of a quiz with answers of a participant
        return AnswerResource::collection(Question::with(['answers' => function ($q) use ($request) {
            $q->where('participant_id', $request->participant_id);
        }])->ordered()->get());
    }
}

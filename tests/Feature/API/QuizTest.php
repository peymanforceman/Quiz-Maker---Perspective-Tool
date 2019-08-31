<?php

namespace Tests\Feature\API;

use App\Models\Question;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class QuizTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_if_we_get_quizzes()
    {
        $this->artisan('db:seed');
        $this->json('GET', 'api/quizzes')->assertJsonFragment([
            'id' => 1
        ]);
    }

    public function test_if_we_get_questions_of_a_quiz()
    {
        $this->artisan('db:seed');

        $questions = Question::ordered()->get();
        $this->json('GET', 'api/quiz/1')->assertJsonFragment([
            'dimension_id' => $questions->get(0)->dimension_id,
            'direction' => $questions->get(0)->direction,
            'id' => $questions->get(0)->id
        ],
            [
                'dimension_id' => $questions->get(1)->dimension_id,
                'direction' => $questions->get(1)->direction,
                'id' => $questions->get(1)->id
            ]);
    }

    public function test_if_user_answer_questions()
    {
        $this->artisan('db:seed');
        $data = json_decode('{"email":"Peyman.forceman@gmail.com","quiz_id":1,"answers":[
        {"id":1,"value":7},{"id":2,"value":7},
        {"id":3,"value":7},{"id":4,"value":7},
        {"id":5,"value":7},{"id":6,"value":7},
        {"id":7,"value":7},{"id":8,"value":7},
        {"id":9,"value":7},{"id":10,"value":7}
        ]}', true);

        $this->json('POST', 'api/quiz/1', $data)->assertJsonFragment([
            'participant' => 'Peyman.forceman@gmail.com',
            'key' => 'ESTP',
        ]);
    }

    public function test_case_1()
    {
        $this->artisan('db:seed');
        $data = json_decode('{"email":"test1@gmail.com","quiz_id":1,"answers":[
        {"id":1,"value":4},
        {"id":2,"value":3},
        {"id":3,"value":1},
        {"id":4,"value":6},
        {"id":5,"value":7},
        {"id":6,"value":3},
        {"id":7,"value":5},
        {"id":8,"value":3},
        {"id":9,"value":6},
        {"id":10,"value":6}
        ]}', true);

        $this->json('POST', 'api/quiz/1', $data)->assertJsonFragment([
            'key' => 'ENTP',
        ]);
    }

    public function test_case_2()
    {
        $this->artisan('db:seed');
        $data = json_decode('{"email":"test2@gmail.com","quiz_id":1,"answers":[
        {"id":1,"value":1},
        {"id":2,"value":5},
        {"id":3,"value":4},
        {"id":4,"value":6},
        {"id":5,"value":5},
        {"id":6,"value":2},
        {"id":7,"value":6},
        {"id":8,"value":3},
        {"id":9,"value":3},
        {"id":10,"value":2}
        ]}', true);

        $this->json('POST', 'api/quiz/1', $data)->assertJsonFragment([
            'key' => 'ESTJ',
        ]);
    }

    public function test_case_3()
    {
        $this->artisan('db:seed');
        $data = json_decode('{"email":"test3@gmail.com","quiz_id":1,"answers":[
        {"id":1,"value":3},
        {"id":2,"value":2},
        {"id":3,"value":6},
        {"id":4,"value":1},
        {"id":5,"value":7},
        {"id":6,"value":3},
        {"id":7,"value":2},
        {"id":8,"value":5},
        {"id":9,"value":2},
        {"id":10,"value":7}
        ]}', true);

        $this->json('POST', 'api/quiz/1', $data)->assertJsonFragment([
            'key' => 'INFP',
        ]);
    }

    public function test_case_4()
    {
        $this->artisan('db:seed');
        $data = json_decode('{"email":"test4@gmail.com","quiz_id":1,"answers":[
        {"id":1,"value":3},
        {"id":2,"value":4},
        {"id":3,"value":7},
        {"id":4,"value":1},
        {"id":5,"value":2},
        {"id":6,"value":5},
        {"id":7,"value":4},
        {"id":8,"value":3},
        {"id":9,"value":2},
        {"id":10,"value":6}
        ]}', true);

        $this->json('POST', 'api/quiz/1', $data)->assertJsonFragment([
            'key' => 'ISFP',
        ]);
    }

    public function test_case_5()
    {
        $this->artisan('db:seed');
        $data = json_decode('{"email":"test5@gmail.com","quiz_id":1,"answers":[
        {"id":1,"value":4},
        {"id":2,"value":4},
        {"id":3,"value":4},
        {"id":4,"value":4},
        {"id":5,"value":4},
        {"id":6,"value":4},
        {"id":7,"value":4},
        {"id":8,"value":4},
        {"id":9,"value":4},
        {"id":10,"value":4}
        ]}', true);

        $this->json('POST', 'api/quiz/1', $data)->assertJsonFragment([
            'key' => 'ESTJ',
        ]);
    }

    public function test_case_6()
    {
        $this->artisan('db:seed');
        $data = json_decode('{"email":"test6@gmail.com","quiz_id":1,"answers":[
        {"id":1,"value":1},
        {"id":2,"value":1},
        {"id":3,"value":1},
        {"id":4,"value":1},
        {"id":5,"value":1},
        {"id":6,"value":1},
        {"id":7,"value":1},
        {"id":8,"value":1},
        {"id":9,"value":1},
        {"id":10,"value":1}
        ]}', true);

        $this->json('POST', 'api/quiz/1', $data)->assertJsonFragment([
            'key' => 'ISTJ',
        ]);
    }

    public function test_case_7()
    {
        $this->artisan('db:seed');
        $data = json_decode('{"email":"test7@gmail.com","quiz_id":1,"answers":[
        {"id":1,"value":7},
        {"id":2,"value":7},
        {"id":3,"value":7},
        {"id":4,"value":7},
        {"id":5,"value":7},
        {"id":6,"value":7},
        {"id":7,"value":7},
        {"id":8,"value":7},
        {"id":9,"value":7},
        {"id":10,"value":7}
        ]}', true);

        $this->json('POST', 'api/quiz/1', $data)->assertJsonFragment([
            'key' => 'ESTP',
        ]);
    }
}
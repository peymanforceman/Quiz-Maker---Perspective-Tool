<?php

use Illuminate\Http\Request;

Route::get('/quizzes', 'API\QuizController@index');
Route::get('/dimensions', 'API\QuizController@get_dimensions');
Route::get('/quiz/{id}', 'API\QuizController@get_quiz')->where('id', '[0-9]+');
Route::post('/quiz/{id}', 'API\QuizController@send_quiz')->where('id', '[0-9]+');
Route::get('/quiz/result/{id}', 'API\QuizController@get_result')->where('id', '[0-9]+');


Route::middleware('auth:api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/admin/register', 'Auth\AuthController@register');
    Route::any('/admin/results', 'API\ResultController@show_results');
    Route::any('/admin/result/answers', 'API\ResultController@get_answers');
    Route::any('/admin/new/quiz', 'API\QuizController@create_quiz');
    Route::post('/admin/logout', 'Auth\AuthController@logout');
});


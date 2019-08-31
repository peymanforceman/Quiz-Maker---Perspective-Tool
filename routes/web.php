<?php

Route::group(['prefix' => 'api'], function () {
    // this way we can avoid brute force attacks to login with CSRF protection
    Route::post('/admin/login', 'Auth\AuthController@login');
});

Route::get('{any}', 'HomeController@index')->where('any', '.*');
<?php

use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quizzes')->insert([[
            'sort_id' => 1,
            'title' => 'Discover Your Perspective',
            'description' => 'Complete the 7 min test and get a detailed report of your lenses on the world.',
        ]]);
    }
}

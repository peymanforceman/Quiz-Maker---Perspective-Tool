<?php

use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('questions')->insert([
            [
                'quiz_id' => 1,
                'dimension_id' => 1,
                'question' => 'You find it takes effort to introduce yourself to other people.',
                'direction' => 1,
                'sort_id' => 1,
            ],
            [
                'quiz_id' => 1,
                'dimension_id' => 2,
                'question' => 'You consider yourself more practical than creative.',
                'direction' => 0,
                'sort_id' => 2,
            ],
            [
                'quiz_id' => 1,
                'dimension_id' => 3,
                'question' => 'Winning a debate matters less to you than making sure no one gets upset.',
                'direction' => 1,
                'sort_id' => 3,
            ],
            [
                'quiz_id' => 1,
                'dimension_id' => 1,
                'question' => 'You get energized going to social events that involve many interactions.',
                'direction' => 0,
                'sort_id' => 4,
            ],
            [
                'quiz_id' => 1,
                'dimension_id' => 2,
                'question' => 'You often spend time exploring unrealistic and impractical yet intriguing ideas.',
                'direction' => 1,
                'sort_id' => 5,
            ],
            [
                'quiz_id' => 1,
                'dimension_id' => 4,
                'question' => 'Deadlines seem to you to be of relative rather than absolute importance.',
                'direction' => 1,
                'sort_id' => 6,
            ],
            [
                'quiz_id' => 1,
                'dimension_id' => 3,
                'question' => 'Logic is usually more important than heart when it comes to making important decisions.',
                'direction' => 0,
                'sort_id' => 7,
            ],
            [
                'quiz_id' => 1,
                'dimension_id' => 4,
                'question' => 'Your home and work environments are quite tidy.',
                'direction' => 0,
                'sort_id' => 8,
            ],
            [
                'quiz_id' => 1,
                'dimension_id' => 1,
                'question' => 'You do not mind being at the center of attention.',
                'direction' => 0,
                'sort_id' => 9,
            ],
            [
                'quiz_id' => 1,
                'dimension_id' => 4,
                'question' => 'Keeping your options open is more important than having a to-do list.',
                'direction' => 1,
                'sort_id' => 10,
            ]]
        );
    }
}

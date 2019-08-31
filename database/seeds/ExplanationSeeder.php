<?php

use Illuminate\Database\Seeder;

class ExplanationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('explanations')->insert([
            [
                'quiz_id' => 1,
                'key' => 'INTJ',
                'meaning' => 'Architect',
            ],
            [
                'quiz_id' => 1,
                'key' => 'INTP',
                'meaning' => 'Logician',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ENTJ',
                'meaning' => 'Commander',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ENTP',
                'meaning' => 'Debater',
            ],
            [
                'quiz_id' => 1,
                'key' => 'INFJ',
                'meaning' => 'Advocate',
            ],
            [
                'quiz_id' => 1,
                'key' => 'INFP',
                'meaning' => 'Mediator',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ENFJ',
                'meaning' => 'Protagonist',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ENFP',
                'meaning' => 'Campaigner',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ISTJ',
                'meaning' => 'Logistician',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ISFJ',
                'meaning' => 'Defender',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ESTJ',
                'meaning' => 'Executive',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ESFJ',
                'meaning' => 'Consul',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ISTP',
                'meaning' => 'Virtuoso',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ISFP',
                'meaning' => 'Adventurer',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ESTP',
                'meaning' => 'Entrepreneur',
            ],
            [
                'quiz_id' => 1,
                'key' => 'ESFP',
                'meaning' => 'Entertainer',
            ]]
        );
    }
}

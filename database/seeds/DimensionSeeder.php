<?php

use Illuminate\Database\Seeder;

class DimensionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('dimensions')->insert([
                [
                    'abbreviation' => 'EI',
                    'left_side' => 'Extraversion',
                    'right_side' => 'Introversion',
                ],
                [
                    'abbreviation' => 'SN',
                    'left_side' => 'Sensing',
                    'right_side' => 'Intuition',
                ],
                [
                    'abbreviation' => 'TF',
                    'left_side' => 'Thinking',
                    'right_side' => 'Feeling',
                ],
                [
                    'abbreviation' => 'JP',
                    'left_side' => 'Judging',
                    'right_side' => 'Perceiving',
                ]]
        );
    }
}

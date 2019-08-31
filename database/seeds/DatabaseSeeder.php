<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(QuizSeeder::class);
        $this->call(DimensionSeeder::class);
        $this->call(QuestionSeeder::class);
        $this->call(ExplanationSeeder::class);
    }
}

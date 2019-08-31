<?php

namespace App\Models;

use App\Models\Traits\IsOrderable;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use IsOrderable;

    public function questions()
    {
        return $this->hasMany('App\Models\Question');
    }

    public function results()
    {
        return $this->hasMany('App\Models\Result');
    }

    public function explanations()
    {
        return $this->hasMany('App\Models\Explanation');
    }
}

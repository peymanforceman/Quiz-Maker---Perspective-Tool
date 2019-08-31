<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dimension extends Model
{

    public function questions()
    {
        return $this->hasMany('App\Models\Question');
    }
}

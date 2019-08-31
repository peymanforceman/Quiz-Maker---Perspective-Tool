<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Explanation extends Model
{
    public function quiz()
    {
        return $this->belongsTo('App\Models\Quiz');
    }
}

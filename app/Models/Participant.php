<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    protected $fillable = ['email'];

    public function answers()
    {
        return $this->hasMany('App\Models\Answer');
    }

    public function results()
    {
        return $this->hasMany('App\Models\Result');
    }
}

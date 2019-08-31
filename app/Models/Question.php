<?php

namespace App\Models;

use App\Models\Traits\IsOrderable;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['quiz_id', 'dimension_id', 'question', 'direction', 'sort_id'];
    use IsOrderable;

    public function quiz()
    {
        return $this->belongsTo('App\Models\Quiz');
    }

    public function dimension()
    {
        return $this->belongsTo('App\Models\Dimension');
    }

    public function answers()
    {
        return $this->hasMany('App\Models\Answer');
    }
}

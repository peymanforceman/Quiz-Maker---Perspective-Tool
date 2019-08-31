<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $fillable = ['participant_id', 'quiz_id', 'explanation_id'];

    public function quiz()
    {
        return $this->belongsTo('App\Models\Quiz');
    }

    public function participant()
    {
        return $this->belongsTo('App\Models\Participant');
    }

    public function explanation()
    {
        return $this->belongsTo('App\Models\Explanation');
    }
}

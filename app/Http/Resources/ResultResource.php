<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\QuizResource;

class ResultResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'quiz_id' => $this->quiz_id,
            'quiz' => new QuizResource($this->whenLoaded('quiz')),
            'participant_id' => $this->participant_id,
            'participant' => $this->whenLoaded('participant', $this->participant->email),
            'key' => $this->explanation->key,
            'meaning' => $this->explanation->meaning,
        ];
    }
}
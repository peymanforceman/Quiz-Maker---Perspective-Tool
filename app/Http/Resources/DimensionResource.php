<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DimensionResource extends JsonResource
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
            'abbreviation' => $this->abbreviation,
            'left_side' => $this->left_side,
            'right_side' => $this->right_side,
        ];
    }
}

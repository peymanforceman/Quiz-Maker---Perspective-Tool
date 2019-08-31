<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\ResultResource;
use App\Models\Result;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ResultController extends Controller
{
    public function show_results(Request $request)
    {
        return ResultResource::collection(Result::with('participant', 'explanation', 'quiz')
            ->latest()->paginate(10));
    }
}

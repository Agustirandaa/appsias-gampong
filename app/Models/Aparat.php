<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aparat extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ['id'];



    // Handle Query Scope Search
    public function scopeSearch($query, $searchTerm)
    {
        return $query->where(function ($query) use ($searchTerm) {
            $query->where('name', 'like', '%' . $searchTerm . '%');
        });
    }
}

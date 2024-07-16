<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    use HasFactory, HasUuids;
    protected $guarded = ['id'];


    public function resident()
    {
        return $this->hasMany(Resident::class, 'family_id');
    }


    // Handle Query Scope Search

    public function scopeSearch($query, $searchTerm)
    {
        return $query->where(function ($query) use ($searchTerm) {
            $query->where('name', 'like', '%' . $searchTerm . '%')
                ->orWhereHas('resident', function ($query) use ($searchTerm) {
                    $query->where('nik', 'like', '%' . $searchTerm . '%')
                        ->orWhere('name', 'like', '%' . $searchTerm . '%');
                });
        });
    }
}

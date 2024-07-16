<?php

namespace App\Models;

use App\Models\Postings;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function posts()
    {
        return $this->hasMany(Postings::class, 'category_id');
    }
}

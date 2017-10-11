<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'abstract',
        'content',
        'category_id'
    ];

    public function category() {
        return $this->belongsTo('App\Category');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'product';
    protected $filltable = ['id', 'category_id', 'title', 'price', 'discount', 'thumbnail', 'description', 'created_at', 'update_at', 'delteted'];
}

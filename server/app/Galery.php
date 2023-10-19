<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Galery extends Model
{
    protected $table = 'galery';
    protected $filltable = ['id', 'product_id', 'thumbnail'];
}

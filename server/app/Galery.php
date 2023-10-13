<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Galery extends Model
{
    protected $table = 'Galery';
    protected $filltable = ['id', 'product_id', 'thumbnail'];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orders_Details extends Model
{
    protected $table = 'Orders_Details';
    protected $filltable = ['id', 'order_id', 'product_id', 'price', 'num', 'total_money'];
}

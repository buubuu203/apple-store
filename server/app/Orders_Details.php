<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orders_Details extends Model
{
    protected $table = 'orders_details';
    protected $filltable = ['id', 'order_id', 'product_id', 'price', 'num', 'total_money'];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $table = 'orders';
    protected $filltable = ['id', 'fullname', 'email', 'phone_number', 'address', 'note', 'order_date', 'status', 'total_money'];
}

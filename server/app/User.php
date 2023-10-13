<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'User';
    protected $filltable = ['id', 'fullname', 'email', 'phone_number', 'address', 'password', 'role_id', 'deleted'];

    protected $hidden = ['password'];
    
}

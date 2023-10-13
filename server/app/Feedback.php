<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $table = 'Feedback';
    protected $filltable = ['id', 'fullname', 'email', 'phone_number', 'subject_name', 'note'];
}

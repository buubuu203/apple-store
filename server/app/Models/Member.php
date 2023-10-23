<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $table = 'members';
    protected $primaryKey = 'member_id';
    protected $fillable = ['fullname','email', 'phone_number', 'address', 'password', 'role_id', 'deleted']; // Add 'product_id' to the fillable array.

    public function role() {
        return $this->belongsTo(Role::class);
    }

    public function feedback() {
        return $this->hasMany(Feedback::class);
    }

    public function order() {
        return $this->hasMany(Order::class);
    }
}

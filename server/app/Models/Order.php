<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';
    protected $primaryKey = 'order_id';
    protected $fillable = ['member_id', 'note', 'order_date', 'status', 'total_money', 'selected']; // Add 'product_id' to the fillable array.

    public function member() {
        return $this->belongsTo(Member::class);
    }
}

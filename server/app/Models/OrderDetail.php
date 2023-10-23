<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory;

    protected $table = 'order_details';
    protected $primaryKey = 'order_detail_id';
    protected $fillable = ['order_id', 'product_id', 'product_color_id', 'quantity', 'price', 'total_money'];

    public function order() {
        return $this->belongsTo(Order::class);
    }

    public function product() {
        return $this->belongsTo(Product::class);
    }

    public function productColor() {
        return $this->belongsTo(ProductColor::class);
    }
}

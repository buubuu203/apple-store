<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $table = 'feedback';
    protected $primaryKey = 'feedback_id';
    protected $fillable = ['member_id', 'product_id', 'rate', 'note'];

    public function member() {
        return $this->belongsTo(Member::class);
    }
}

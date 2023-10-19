<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->int('category_id');
            $table->string('title');
            $table->int('price');
            $table->int('discount');
            $table->string('thumbnail');
            $table->string('cpu');
            $table->int('ram');
            $table->string('resolution');
            $table->string('display');
            $table->float('batterylife');
            $table->float('weight');
            $table->string('size');
            $table->string('color');
            $table->int('capacities');
            $table->longtext('description');
            $table->datetime('created_at');
            $table->datetime('updated_at');
            $table->int('delected');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
}

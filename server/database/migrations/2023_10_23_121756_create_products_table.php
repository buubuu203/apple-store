<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('category_id');
            $table->string('title');
            $table->integer('price');
            $table->integer('discount');
            $table->longText('description');
            $table->string('cpu');
            $table->integer('ram');
            $table->string('resolution');
            $table->string('display');
            $table->float('batterylife');
            $table->float('weight');
            $table->string('size');
            $table->integer('capacities');
            $table->timestamps();
            $table->integer('deleted');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}


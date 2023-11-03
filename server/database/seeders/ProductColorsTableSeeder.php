<?php

namespace Database\Seeders;

use App\Models\ProductColors;
use Illuminate\Database\Seeder;
//php artisan db:seed --class=ProductColorsTableSeeder

class ProductColorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $colors = [
            //Iphone
            //product_id=1
            [
                'product_id' => 1,
                'name' => 'Xám',
                'quantity' => 30,
            ],
            [
                'product_id' => 1,
                'name' => 'Vàng',
                'quantity' => 25,
            ],
            [
                'product_id' => 1,
                'name' => 'Bạc',
                'quantity' => 20,
            ],
            //product_id=2
            [
                'product_id' => 2,
                'name' => 'Xám',
                'quantity' => 30,
            ],
            [
                'product_id' => 2,
                'name' => 'Trắng',
                'quantity' => 15,
            ],
            [
                'product_id' => 2,
                'name' => 'Bạc',
                'quantity' => 30,
            ],
            [
                'product_id' => 2,
                'name' => 'Đen',
                'quantity' => 26,
            ],
            //product_id=3
            [
                'product_id' => 3,
                'name' => 'Xám',
                'quantity' => 15,
            ],
            [
                'product_id' => 3,
                'name' => 'Bạc',
                'quantity' => 17,
            ],
            //product_id=4
            [
                'product_id' => 4,
                'name' => 'Xám',
                'quantity' => 35,
            ],
            [
                'product_id' => 4,
                'name' => 'Bạc',
                'quantity' => 40,
            ],
            //product_id = 5
            [
                'product_id' => 5,
                'name' => 'Xám',
                'quantity' => 27,
            ],
            [
                'product_id' => 5,
                'name' => 'Bạc',
                'quantity' => 10,
            ],
            //product_id = 6
            [
                'product_id' => 6,
                'name' => 'Xám',
                'quantity' => 38,
            ],
            [
                'product_id' => 6,
                'name' => 'Bạc',
                'quantity' => 30,
            ],
            //product_id = 7
            [
                'product_id' => 7,
                'name' => 'Xám',
                'quantity' => 20,
            ],
            [
                'product_id' => 7,
                'name' => 'Bạc',
                'quantity' => 30,
            ],
            [
                'product_id' => 7,
                'name' => 'Vàng',
                'quantity' => 30,
            ],
            [
                'product_id' => 7,
                'name' => 'Xanh đen',
                'quantity' => 29,
            ],
            //product_id = 8
            [
                'product_id' => 8,
                'name' => 'Xám',
                'quantity' => 19,
            ],
            [
                'product_id' => 8,
                'name' => 'Bạc',
                'quantity' => 30,
            ],
            //product_id = 9
            [
                'product_id' => 9,
                'name' => 'Xám',
                'quantity' => 19,
            ],
            [
                'product_id' => 9,
                'name' => 'Bạc',
                'quantity' => 30,
            ],
            //product_id = 10
            [
                'product_id' => 10,
                'name' => 'Xám',
                'quantity' => 18,
            ],
            [
                'product_id' => 10,
                'name' => 'Bạc',
                'quantity' => 30,
            ],
            //product_id = 11
            [
                'product_id' => 11,
                'name' => 'Xám',
                'quantity' => 30,
            ],
            [
                'product_id' => 11,
                'name' => 'Bạc',
                'quantity' => 30,
            ],
            //Iphone
            //product_id = 12 //1
            [
                'product_id' => 12,
                'name' => 'Trắng',
                'quantity' => 40,
            ],
            [
                'product_id' => 12,
                'name' => 'Đen',
                'quantity' => 30,
            ],
            [
                'product_id' => 12,
                'name' => 'Tím',
                'quantity' => 20,
            ],
            [
                'product_id' => 12,
                'name' => 'Vàng',
                'quantity' =>57,
            ],
            [
                'product_id' => 12,
                'name' => 'Đỏ',
                'quantity' => 39,
            ],
            [
                'product_id' => 12,
                'name' => 'Xanh',
                'quantity' => 40,
            ],
            //product_id = 13 //2
            [
                'product_id' => 13,
                'name' => 'Trắng',
                'quantity' => 35,
            ],
            [
                'product_id' => 13,
                'name' => 'Đen',
                'quantity' => 40,
            ],
            [
                'product_id' => 13,
                'name' => 'Tím',
                'quantity' => 30,
            ],
            [
                'product_id' => 13,
                'name' => 'Vàng',
                'quantity' => 20,
            ],
            [
                'product_id' => 13,
                'name' => 'Đỏ',
                'quantity' => 30,
            ],
            [
                'product_id' => 13,
                'name' => 'Xanh',
                'quantity' => 30,
            ],
            //product_id = 14 //3
            [
                'product_id' => 14,
                'name' => 'Trắng',
                'quantity' => 36,
            ],
            [
                'product_id' => 14,
                'name' => 'Đen',
                'quantity' => 32,
            ],
            [
                'product_id' => 14,
                'name' => 'Tím',
                'quantity' => 30,
            ],
            [
                'product_id' => 14,
                'name' => 'Vàng',
                'quantity' => 49,
            ],
            [
                'product_id' => 14,
                'name' => 'Đỏ',
                'quantity' => 30,
            ],
            [
                'product_id' => 14,
                'name' => 'Xanh',
                'quantity' => 31,
            ],
            //product_id = 15 //4
            [
                'product_id' => 15,
                'name' => 'Trắng',
                'quantity' => 30,
            ],
            [
                'product_id' => 15,
                'name' => 'Đen',
                'quantity' => 30,
            ],
            [
                'product_id' => 15,
                'name' => 'Tím',
                'quantity' => 49,
            ],
            [
                'product_id' => 15,
                'name' => 'Vàng',
                'quantity' => 30,
            ],
            [
                'product_id' => 15,
                'name' => 'Đỏ',
                'quantity' => 24,
            ],
            [
                'product_id' => 15,
                'name' => 'Xanh',
                'quantity' => 30,
            ],
            //product_id = 16 //5
            [
                'product_id' => 16,
                'name' => 'Trắng',
                'quantity' => 30,
            ],
            [
                'product_id' => 16,
                'name' => 'Đen',
                'quantity' => 30,
            ],
            [
                'product_id' => 16,
                'name' => 'Tím',
                'quantity' => 36,
            ],
            [
                'product_id' => 16,
                'name' => 'Vàng',
                'quantity' => 29,
            ],
            [
                'product_id' => 16,
                'name' => 'Đỏ',
                'quantity' => 38,
            ],
            [
                'product_id' => 16,
                'name' => 'Xanh',
                'quantity' => 25,
            ],
            //product_id = 17 //6
            [
                'product_id' => 17,
                'name' => 'Tím',
                'quantity' => 30,
            ],
            [
                'product_id' => 17,
                'name' => 'Vàng',
                'quantity' => 30,
            ],
            [
                'product_id' => 17,
                'name' => 'Xám',
                'quantity' => 20,
            ],
            [
                'product_id' => 17,
                'name' => 'Bạc',
                'quantity' => 20,
            ],
            //product_id = 18 //7
            [
                'product_id' => 18,
                'name' => 'Tím',
                'quantity' => 26,
            ],
            [
                'product_id' => 18,
                'name' => 'Vàng',
                'quantity' => 29,
            ],
            [
                'product_id' => 18,
                'name' => 'Xám',
                'quantity' => 40,
            ],
            [
                'product_id' => 18,
                'name' => 'Bạc',
                'quantity' => 30,
            ],
            //product_id = 19 //8
            [
                'product_id' => 19,
                'name' => 'Tím',
                'quantity' => 28,
            ],
            [
                'product_id' => 19,
                'name' => 'Vàng',
                'quantity' => 20,
            ],
            [
                'product_id' => 19,
                'name' => 'Xám',
                'quantity' => 20,
            ],
            [
                'product_id' => 19,
                'name' => 'Bạc',
                'quantity' => 24,
            ],
            //product_id = 20 //9
            [
                'product_id' => 20,
                'name' => 'Tím',
                'quantity' => 20,
            ],
            [
                'product_id' => 20,
                'name' => 'Vàng',
                'quantity' => 28,
            ],
            [
                'product_id' => 20,
                'name' => 'Xám',
                'quantity' => 42,
            ],
            [
                'product_id' => 20,
                'name' => 'Bạc',
                'quantity' => 31,
            ],
            //product_id = 21 //10
            [
                'product_id' => 21,
                'name' => 'Tím',
                'quantity' => 31,

            ],
            [
                'product_id' => 21,
                'name' => 'Vàng',
                'quantity' => 33,
            ],
            [
                'product_id' => 21,
                'name' => 'Xám',
                'quantity' => 32,
            ],
            [
                'product_id' => 21,
                'name' => 'Bạc',
                'quantity' => 33,
            ],
            //product_id = 22 //11
            [
                'product_id' => 22,
                'name' => 'Tím',
                'quantity' => 33,
            ],
            [
                'product_id' => 22,
                'name' => 'Vàng',
                'quantity' => 32,
            ],
            [
                'product_id' => 22,
                'name' => 'Xám',
                'quantity' => 31,
            ],
            [
                'product_id' => 22,
                'name' => 'Bạc',
                'quantity' => 32,
            ],
            //product_id = 23 //12
            [
                'product_id' => 23,
                'name' => 'Titan Xanh',
                'quantity' => 32,
            ],
            [
                'product_id' => 23,
                'name' => 'Titan Đen',
                'quantity' => 27,
            ],
            [
                'product_id' => 23,
                'name' => 'Titan Trắng',
                'quantity' => 32,
            ],
            [
                'product_id' => 23,
                'name' => 'Titan tự nhiên',
                'quantity' => 38,
            ],
            //product_id = 24 //13
            [
                'product_id' => 24,
                'name' => 'Xanh dương',
                'quantity' => 32,
            ],
            [
                'product_id' => 24,
                'name' => 'Vàng',
                'quantity' => 27,
            ],
            [
                'product_id' => 24,
                'name' => 'Đen',
                'quantity' => 38,
            ],
            [
                'product_id' => 24,
                'name' => 'Xanh lá',
                'quantity' => 39,
            ],
            [
                'product_id' => 24,
                'name' => 'Hồng',
                'quantity' => 35,
            ],
            //Ipad
            //product_id = 25 //1
            [
                'product_id' => 25,
                'name' => 'Bạc',
                'quantity' => 25,
            ],
            [
                'product_id' => 25,
                'name' => 'Xanh',
                'quantity' => 25,
            ],
            [
                'product_id' => 25,
                'name' => 'Hồng',
                'quantity' => 38,
            ],
            [
                'product_id' => 25,
                'name' => 'Vàng',
                'quantity' => 38,
            ],
            //product_id = 26 //2
            [
                'product_id' => 26,
                'name' => 'Bạc',
                'quantity' => 23,
            ],
            [
                'product_id' => 26,
                'name' => 'Xanh',
                'quantity' => 38,
            ],
            [
                'product_id' => 26,
                'name' => 'Hồng',
                'quantity' => 39,
            ],
            [
                'product_id' => 26,
                'name' => 'Vàng',
                'quantity' => 25,
            ],
            //product_id = 27 //3
            [
                'product_id' => 27,
                'name' => 'Bạc',
                'quantity' => 38,
            ],
            [
                'product_id' => 27,
                'name' => 'Xanh',
                'quantity' => 48,
            ],
            [
                'product_id' => 27,
                'name' => 'Hồng',
                'quantity' => 28,
            ],
            [
                'product_id' => 27,
                'name' => 'Vàng',
                'quantity' => 25,
            ],
            //product_id = 28 //4
            [
                'product_id' => 28,
                'name' => 'Bạc',
                'quantity' => 38,
            ],
            [
                'product_id' => 28,
                'name' => 'Xanh',
                'quantity' => 31,
            ],
            [
                'product_id' => 28,
                'name' => 'Hồng',
                'quantity' => 38,
            ],
            [
                'product_id' => 28,
                'name' => 'Vàng',
                'quantity' => 29,
            ],
            //product_id = 29 //5
            [
                'product_id' => 29,
                'name' => 'Xám',
                'quantity' => 40,
            ],
            [
                'product_id' => 29,
                'name' => 'Xanh',
                'quantity' => 38,
            ],
            [
                'product_id' => 29,
                'name' => 'Hồng',
                'quantity' => 35,
            ],
            [
                'product_id' => 29,
                'name' => 'Bạc',
                'quantity' => 38,
            ],
            [
                'product_id' => 29,
                'name' => 'Tím',
                'quantity' => 38,
            ],
            //product_id = 30 //6
            [
                'product_id' => 30,
                'name' => 'Xám',
                'quantity' => 30,
            ],
            [
                'product_id' => 30,
                'name' => 'Xanh',
                'quantity' => 38,
            ],
            [
                'product_id' => 30,
                'name' => 'Hồng',
                'quantity' => 27,
            ],
            [
                'product_id' => 30,
                'name' => 'Bạc',
                'quantity' => 34,
            ],
            [
                'product_id' => 30,
                'name' => 'Tím',
                'quantity' => 38,
            ],
            //product_id = 31 //7
            [
                'product_id' => 31,
                'name' => 'Xám',
                'quantity' => 31,
            ],
            [
                'product_id' => 31,
                'name' => 'Xanh',
                'quantity' => 38,
            ],
            [
                'product_id' => 31,
                'name' => 'Hồng',
                'quantity' => 38,
            ],
            [
                'product_id' => 31,
                'name' => 'Bạc',
                'quantity' => 28,
            ],
            [
                'product_id' => 31,
                'name' => 'Tím',
                'quantity' => 31,
            ],
            //product_id = 32 //8
            [
                'product_id' => 32,
                'name' => 'Xám',
                'quantity' => 32,
            ],
            [
                'product_id' => 32,
                'name' => 'Xanh',
                'quantity' => 38,
            ],
            [
                'product_id' => 32,
                'name' => 'Hồng',
                'quantity' => 34,
            ],
            [
                'product_id' => 32,
                'name' => 'Bạc',
                'quantity' => 33,
            ],
            [
                'product_id' => 32,
                'name' => 'Tím',
                'quantity' => 33,
            ],
            //product_id = 33 //9
            [
                'product_id' => 33,
                'name' => 'Xám',
                'quantity' => 34,
            ],
            [
                'product_id' => 33,
                'name' => 'Bạc',
                'quantity' => 33,
            ],
            //product_id = 34 //10
            [
                'product_id' => 34,
                'name' => 'Xám',
                'quantity' => 33,
            ],
            [
                'product_id' => 34,
                'name' => 'Bạc',
                'quantity' => 35,
            ],
            //product_id = 35 //11
            [
                'product_id' => 35,
                'name' => 'Xám',
                'quantity' => 33,
            ],
            [
                'product_id' => 35,
                'name' => 'Bạc',
                'quantity' => 25,
            ],
             //product_id = 36 //12
             [
                'product_id' => 36,
                'name' => 'Xám',
                'quantity' => 14,
            ],
            [
                'product_id' => 36,
                'name' => 'Bạc',
                'quantity' => 33,
            ],
            //product_id = 37 //13
            //product_id = 38 //14
            [
                'product_id' => 38,
                'name' => 'Hồng',
                'quantity' => 15,
            ],
            [
                'product_id' => 38,
                'name' => 'Bạc',
                'quantity' => 13,
            ],
            [
                'product_id' => 38,
                'name' => 'Xám đen',
                'quantity' => 43,
            ],
            [
                'product_id' => 38,
                'name' => 'Tím',
                'quantity' => 20,
            ],
             //product_id = 39 //15
             [
                'product_id' => 39,
                'name' => 'Hồng',
                'quantity' => 24,
            ],
            [
                'product_id' => 39,
                'name' => 'Bạc',
                'quantity' => 20,
            ],
            [
                'product_id' => 39,
                'name' => 'Xám đen',
                'quantity' => 20,
            ],
            [
                'product_id' => 39,
                'name' => 'Tím',
                'quantity' => 20,
            ],
             //product_id = 40 //16
             [
                'product_id' => 40,
                'name' => 'Hồng',
                'quantity' => 22,
            ],
            [
                'product_id' => 40,
                'name' => 'Bạc',
                'quantity' => 35,
            ],
            [
                'product_id' => 40,
                'name' => 'Xám đen',
                'quantity' => 20,
            ],
            [
                'product_id' => 40,
                'name' => 'Tím',
                'quantity' => 20,
            ],
             //product_id = 41 //17
             [
                'product_id' => 41,
                'name' => 'Hồng',
                'quantity' => 20,
            ],
            [
                'product_id' => 41,
                'name' => 'Bạc',
                'quantity' => 49,
            ],
            [
                'product_id' => 41,
                'name' => 'Xám đen',
                'quantity' => 32,
            ],
            [
                'product_id' => 41,
                'name' => 'Tím',
                'quantity' => 30,
            ],
            //product_id = 42 //18
            [
                'product_id' => 42,
                'name' => 'Hồng',
                'quantity' => 42,
            ],
            [
                'product_id' => 42,
                'name' => 'Bạc',
                'quantity' => 30,
            ],
            [
                'product_id' => 42,
                'name' => 'Xám đen',
                'quantity' => 48,
            ],
            [
                'product_id' => 42,
                'name' => 'Tím',
                'quantity' => 42,
            ],
            //product_id = 43 //19
            [
                'product_id' => 43,
                'name' => 'Hồng',
                'quantity' => 30,
            ],
            [
                'product_id' => 43,
                'name' => 'Bạc',
                'quantity' => 26,
            ],
            [
                'product_id' => 43,
                'name' => 'Xám đen',
                'quantity' => 30,
            ],
            [
                'product_id' => 43,
                'name' => 'Tím',
                'quantity' => 28,
            ],
            //product_id = 44 //20
            [
                'product_id' => 44,
                'name' => 'Hồng',
                'quantity' => 30,
            ],
            [
                'product_id' => 44,
                'name' => 'Bạc',
                'quantity' => 60,
            ],
            [
                'product_id' => 44,
                'name' => 'Xám đen',
                'quantity' => 59,
            ],
            [
                'product_id' => 44,
                'name' => 'Tím',
                'quantity' => 33,
            ],
            //product_id = 45 //21
            [
                'product_id' => 45,
                'name' => 'Hồng',
                'quantity' => 30,
            ],
            [
                'product_id' => 45,
                'name' => 'Bạc',
                'quantity' => 49,
            ],
            [
                'product_id' => 45,
                'name' => 'Xám đen',
                'quantity' => 30,
            ],
            [
                'product_id' => 45,
                'name' => 'Tím',
                'quantity' => 29, 
            ],
            //Airpod
            //product_id = 46 //1

        ];
        foreach ($colors as $color) {
            ProductColors::create($color);
        }
    }
}

<?php

use App\Category;
use App\Feedback;
use App\Galery;
use App\Orders;
use App\Orders_Details;
use App\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(FeedbackTableSeeder::class);
        $this->call(GaleryTableSeeder::class);
        $this->call(OrdersTableSeeder::class);
        $this->call(OrdersDetailsTableSeeder::class);
        $this->call(ProductTableSeeder::class);
        $this->call(RoleTableSeeder::class);
    }
}

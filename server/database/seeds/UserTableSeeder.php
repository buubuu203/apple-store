<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('User')->insert([
            [
                'del_flag' => false,
                'fullname' => 'John Doe',
                'email' => 'johndoe@example.com',
                'phone_number' => '1234567890',
                'address' => '123 Main St, City',
                'password' => Hash::make('password'), // Mã hóa mật khẩu
                'role_id' => 1, // ID của vai trò (nếu ứng dụng của bạn có vai trò)
                'deleted' => 0, // 0 cho người dùng không bị xóa
            ],
            [
                'del_flag' => false,
                'fullname' => 'Jane Smith',
                'email' => 'janesmith@example.com',
                'phone_number' => '9876543210',
                'address' => '456 Elm St, Town',
                'password' => Hash::make('password'),
                'role_id' => 2, // Ví dụ vai trò khác
                'deleted' => 0,
            ]
            // Thêm các bản ghi khác ở đây (nếu cần)
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    function register(Request $req)
    {
        $req->validate([
            'fullname' => 'required|string',
            'email' => 'required|email|unique:users',
            'phone_number' => 'required|string|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = new User();
        $user->fullname = $req->input('fullname');
        $user->email = $req->input('email');
        $user->phone_number = $req->input('phone_number');
        $user->password = Hash::make($req->input('password'));
        $user->role_id = 1; //Gán role_id là 1 cho người dùng
        $user->deleted = 0; //Gán delete là 0, khởi tạo người dùng
        $user->save();

        return response()->json(['message' => 'Người dùng đã đăng ký thành công']);
    }

    function login(Request $req)
    {
        $req->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $req->input('email'))->first();
        if ($user) {
            if (Hash::check($req->input('password'), $user->password)) {
                return response()->json(['message' => 'Đăng nhập thành công']);
            } else {
                return response()->json(['message' => 'Mật khẩu không đúng']);
            }
        } else {
            return response()->json(['message' => 'Email không đúng']);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

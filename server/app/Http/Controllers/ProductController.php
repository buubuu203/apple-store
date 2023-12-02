<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
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

    public function getProductsByCatID($id)
    {

        $products = DB::table('products')->where('category_id', $id)->get();
        return response()->json($products);
    }

    public function getProductByID($id)
    {

        $products = Product::with('product_colors', 'product_colors.colorDetails')->find($id);
        return response()->json($products);
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
    public function updateProduct(Request $request, $id)
    {
        // Validate incoming request data
        $validatedData = $request->validate([
            'category_id' => 'required',
            'title' => 'required',
            'price' => 'required',
            'historyCost' => 'nullable',
            'description' => 'nullable',
            'cpu' => 'nullable',
            'ram' => 'nullable',
            'resolution' => 'nullable',
            'display' => 'nullable',
            'batterylife' => 'nullable',
            'weight' => 'nullable',
            'size' => 'nullable',
            'capacities' => 'nullable',
            'thumbnail' => 'nullable',
            'deleted' => 'required',
        ]);

        // Find the product by ID
        $product = Product::findOrFail($id);

        // Update the product with the validated data
        $product->update($validatedData);

        // Return a JSON response with the status
        return response()->json(['status' => 'success', 'message' => 'Product updated successfully']);
    }


    public function deleteProductById($id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();

            return response()->json(['message' => 'Product deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete product', 'error' => $e->getMessage()], 500);
        }
    }

    public function createProduct(Request $request)
    {
        try {
            $product = Product::create($request->all());

            return response()->json(['message' => 'Product created successfully', 'data' => $product]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to create product', 'error' => $e->getMessage()], 500);
        }
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

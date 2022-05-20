<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('math', "MathController@index");
Route::get('multiplicacion/{multiplicando}/{multiplicador}', "MultiplicacionController@producto");
Route::get('multiplicacion', "MultiplicacionController@index");
Route::post('multiplicacion', "MultiplicacionController@store");
Route::delete('multiplicacion', 'MultiplicacionController@destroy');


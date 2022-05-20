<?php

namespace App\Http\Controllers;

use App\Multiplicacion;
use Illuminate\Http\Request;
use Ramsey\Uuid\Converter\Number\BigNumberConverter;
use DB;

class MultiplicacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Multiplicacion::all();
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'multiplicando' => 'required',
            'multiplicador' => 'required',
            'producto' => 'required',
        ]);
        $product = Multiplicacion::create($request->all());

        return response()->json($product, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Multiplicacion  $multiplicacion
     * @return \Illuminate\Http\Response
     */
    public function show(Multiplicacion $multiplicacion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Multiplicacion  $multiplicacion
     * @return \Illuminate\Http\Response
     */
    public function edit(Multiplicacion $multiplicacion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Multiplicacion  $multiplicacion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Multiplicacion $multiplicacion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Multiplicacion  $multiplicacion
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        DB::delete('DELETE FROM multiplicacions');
        return response()->json(null, 204);
    }
    public function producto($multiplicando = 0, $multiplicador = 0)
    {
        // number_format(float $number, int $decimals = 0)
        $operacion = number_format($multiplicador * $multiplicando, 0, '', '');
        $result = array("producto" => $operacion);

        return json_encode($result);
    }
}

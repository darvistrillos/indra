<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Multiplicacion extends Model
{
    protected $table = 'multiplicacions';
    protected $fillable = ['id','multiplicando', 'multiplicador', 'producto'];
}

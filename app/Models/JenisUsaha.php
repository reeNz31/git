<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisUsaha extends Model
{
    use HasFactory;
    protected $table = 'jenis_usahas';
    protected $fillable = ['nama_jenis_usaha'];
}

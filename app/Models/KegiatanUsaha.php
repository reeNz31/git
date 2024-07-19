<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KegiatanUsaha extends Model
{
    use HasFactory;

    protected $table = 'kegiatan_usahas';
    protected $fillable = ['nama_kegiatan_usaha'];
}

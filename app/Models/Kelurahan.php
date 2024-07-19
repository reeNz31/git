<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelurahan extends Model
{
    use HasFactory;
    protected $table = 'kelurahans';
    protected $fillable = ['nama_kelurahan', 'kabupaten_id', 'kecamatan_id', 'status'];

    public function kelurahan()
    {
        return $this->belongsTo(Kelurahan::class);
    }
    public function kecamatan()
    {
        return $this->belongsTo(Kecamatan::class);
    }
    public function kabupaten()
    {
        return $this->belongsTo(Kabupaten::class);
    }
}

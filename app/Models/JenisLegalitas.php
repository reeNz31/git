<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisLegalitas extends Model
{
    use HasFactory;
    protected $table = 'jenis_legalitas';
    protected $fillable = ['nama_jenis_legalitas'];
}

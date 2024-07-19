<?php

namespace Database\Seeders;

use App\Models\JenisLegalitas;
use Illuminate\Database\Seeder;

class JenisLegalitasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        JenisLegalitas::insert([
            'nama_jenis_legalitas' => "IUM",
        ]);

        JenisLegalitas::insert([
            'nama_jenis_legalitas' => "SIUP",
        ]);

        JenisLegalitas::insert([
            'nama_jenis_legalitas' => "P-IRT",
        ]);

        JenisLegalitas::insert([
            'nama_jenis_legalitas' => "TDP",
        ]);

        JenisLegalitas::insert([
            'nama_jenis_legalitas' => "IUM/013/408.68/I/2018",
        ]);

        JenisLegalitas::insert([
            'nama_jenis_legalitas' => "/3/408.71/2017",
        ]);
        JenisLegalitas::insert([
            'nama_jenis_legalitas' => "Halal",
        ]);
        JenisLegalitas::insert([
            'nama_jenis_legalitas' => "HO",
        ]);
    }
}

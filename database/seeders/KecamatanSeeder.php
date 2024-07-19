<?php

namespace Database\Seeders;

use App\Models\Kecamatan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KecamatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Kecamatan::insert(
            [
                [
                    'nama_kecamatan' => 'Arjosari',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Bandar',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Donorojo',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Kebonagung',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Nawangan',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Ngadirojo',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Pacitan',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Pringkuku',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Punung',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Sudimoro',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Tegalombo',
                    'kabupaten_id' => 1,
                ],
                [
                    'nama_kecamatan' => 'Tulakan',
                    'kabupaten_id' => 1,
                ],
            ],
        );
    }
}

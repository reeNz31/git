<?php

namespace App\Imports;

use App\Models\Kabupaten;
use App\Models\Kecamatan;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class KecamatansImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */

    protected $kabupatens;
    public function __construct()
    {
        $this->kabupatens = Kabupaten::select('id', 'nama_kabupaten')->get();
    }
    public function model(array $row)
    {
        $kabupaten = $this->kabupatens->where('nama_kabupaten', $row['nama_kabupaten'])->first();
        return new Kecamatan([
            'nama_kecamatan' => $row['nama_kecamatan'],
            'kabupaten_id' => $kabupaten->id ?? null,
        ]);
    }
}

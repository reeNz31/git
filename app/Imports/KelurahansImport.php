<?php

namespace App\Imports;

use App\Models\Kabupaten;
use App\Models\Kecamatan;
use App\Models\Kelurahan;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;


class KelurahansImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    protected $kabupatens;
    protected $kecamatans;
    public function __construct()
    {
        $this->kabupatens = Kabupaten::select('id', 'nama_kabupaten')->get();
        $this->kecamatans = Kecamatan::select('id', 'nama_kecamatan')->get();
    }

    public function model(array $row)
    {
        $kabupaten = $this->kabupatens->where('nama_kabupaten', $row['nama_kabupaten'])->first();
        $kecamatan = $this->kecamatans->where('nama_kecamatan', $row['nama_kecamatan'])->first();
        return new Kelurahan([
            'kabupaten_id' => $kabupaten->id ?? null,
            'kecamatan_id' => $kecamatan->id ?? null,
            'nama_kelurahan' => $row['nama_kelurahan'],
            'status' => $row['status'],
        ]);
    }
}

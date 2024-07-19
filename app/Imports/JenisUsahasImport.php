<?php

namespace App\Imports;

use App\Models\JenisUsaha;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class JenisUsahasImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new JenisUsaha([
            'nama_jenis_usaha' => $row['nama_jenis_usaha'],
        ]);
    }
}

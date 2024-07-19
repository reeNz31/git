<?php

namespace App\Exports;

use App\Models\JenisUsaha;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class JenisUsahasExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return JenisUsaha::select('nama_jenis_usaha')->get();
    }

    public function headings(): array
    {
        return [
            'Nama Jenis Usaha',
        ];
    }
}

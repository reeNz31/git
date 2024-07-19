<?php

namespace App\Exports;

use App\Models\JenisLegalitas;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class JenisLegalitasExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return JenisLegalitas::select('nama_jenis_legalitas')->get();
    }

    public function headings(): array
    {
        return [
            'Nama Jenis Legalitas',
        ];
    }
}

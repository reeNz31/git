<?php

namespace App\Exports;

use App\Models\KegiatanUsaha;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class KegiatanUsahaExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    public function collection()
    {
        return KegiatanUsaha::select('nama_kegiatan_usaha')->get();
    }

    public function headings(): array
    {
        return [
            'Nama Kegiatan Usaha',
        ];
    }
}

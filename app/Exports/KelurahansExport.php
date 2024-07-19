<?php

namespace App\Exports;

use App\Models\Kelurahan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class KelurahansExport implements FromCollection,  WithHeadings, ShouldAutoSize
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Kelurahan::select('kabupatens.nama_kabupaten',  'kecamatans.nama_kecamatan', 'kelurahans.nama_kelurahan', 'kelurahans.status')
            ->join('kabupatens', 'kelurahans.kabupaten_id', '=', 'kabupatens.id')
            ->join('kecamatans', 'kelurahans.kecamatan_id', '=', 'kecamatans.id')
            ->get();
    }

    public function headings(): array
    {
        return [
            'Nama Kabupaten',
            'Nama Kecamatan',
            'Nama Kelurahan',
            'Status'
        ];
    }
}

<?php

namespace App\Exports;

use App\Models\Kecamatan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class KecamatansExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Kecamatan::select('nama_kecamatan', 'kabupatens.nama_kabupaten')
            ->join('kabupatens', 'kecamatans.kabupaten_id', '=', 'kabupatens.id')
            ->get();
    }

    public function headings(): array
    {
        return [
            'Nama Kecamatan',
            'Nama Kabupaten'
        ];
    }
}

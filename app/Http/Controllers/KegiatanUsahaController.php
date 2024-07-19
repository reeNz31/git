<?php

namespace App\Http\Controllers;

use App\Exports\KegiatanUsahaExport;
use App\Http\Requests\ImportKegiatanUsahaRequest;
use App\Models\KegiatanUsaha;
use App\Http\Requests\StoreKegiatanUsahaRequest;
use App\Http\Requests\UpdateKegiatanUsahaRequest;
use App\Imports\KegiatanUsahaImport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class KegiatanUsahaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('permission:kegiatan-usaha.index')->only('index');
        $this->middleware('permission:kegiatan-usaha.create')->only('create', 'store');
        $this->middleware('permission:kegiatan-usaha.edit')->only('edit', 'update');
        $this->middleware('permission:kegiatan-usaha.destroy')->only('destroy');
    }

    public function index(Request $request)
    {
        $kegiatan_usahas = DB::table('kegiatan_usahas')
            ->when($request->input('nama_kegiatan_usaha'), function ($query, $nama_kegiatan_usaha) {
                return $query->where('nama_kegiatan_usaha', 'like', '%' . $nama_kegiatan_usaha . '%');
            })
            ->paginate(5);
        return view('master-table.kegiatan-usaha.index', compact('kegiatan_usahas'));
    }


    public function create()
    {
        return view('master-table.kegiatan-usaha.create');
    }


    public function store(StoreKegiatanUsahaRequest $request)
    {
        KegiatanUsaha::create([
            'nama_kegiatan_usaha' => $request->nama_kegiatan_usaha
        ]);
        return redirect()->route('kegiatan-usaha.index')->with('success', 'Tambah Data Kegiatan Usaha Sukses');
    }

    public function show(KegiatanUsaha $kegiatan_usaha)
    {
        //

    }

    public function edit(KegiatanUsaha $kegiatan_usaha)
    {
        return view('master-table.kegiatan-usaha.edit')->with('kegiatan_usaha', $kegiatan_usaha);
    }


    public function update(UpdateKegiatanUsahaRequest $request, KegiatanUsaha $kegiatan_usaha)
    {
        $validate = $request->validated();
        $kegiatan_usaha->update($validate);
        return redirect()->route('kegiatan-usaha.index')->with('success', 'Edit Data Kegiatan Usaha Sukses');
    }


    public function destroy(KegiatanUsaha $kegiatan_usaha)
    {
        $kegiatan_usaha->delete();
        return redirect()->route('kegiatan-usaha.index')->with('success', 'Hapus Data Kegiatan Usaha Sukses');
    }

    public function import(ImportKegiatanUsahaRequest $request)
    {

        Excel::import(new KegiatanUsahaImport, $request->file('import_file')->store('import_files'));
        return redirect()->route('kegiatan-usaha.index')->with('success', 'Tambahkan Data Kegiatan Usaha Sukses diimport');
    }

    public function export()
    {
        return Excel::download(new KegiatanUsahaExport, 'Kegiatan Usaha.xlsx');
    }
}

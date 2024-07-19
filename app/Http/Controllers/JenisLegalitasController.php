<?php

namespace App\Http\Controllers;

use App\Exports\JenisLegalitasExport;
use App\Http\Requests\StoreJenisLegalitas;
use App\Http\Requests\UpdateJenisLegalitas;
use App\Http\Requests\ImportJenisLegalitasRequest;
use App\Imports\JenisLegalitasImport;
use App\Models\JenisLegalitas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class JenisLegalitasController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('permission:jenis-legalitas.index')->only('index');
        $this->middleware('permission:jenis-legalitas.create')->only('create', 'store');
        $this->middleware('permission:jenis-legalitas.edit')->only('edit', 'update');
        $this->middleware('permission:jenis-legalitas.destroy')->only('destroy');
    }

    public function index(Request $request)
    {

        $jenis_legalitas = DB::table('jenis_legalitas')
            ->when($request->input('nama_jenis_legalitas'), function ($query, $nama_jenis_legalitas) {
                return $query->where('nama_jenis_legalitas', 'like', '%' . $nama_jenis_legalitas . '%');
            })
            ->paginate(5);
        return view('master-table.jenis-legalitas.index', compact('jenis_legalitas'));
    }

    public function create()
    {
        return view('master-table.jenis-legalitas.create');
    }

    public function store(StoreJenisLegalitas $request)
    {
        JenisLegalitas::create([
            'nama_jenis_legalitas' => $request->nama_jenis_legalitas
        ]);
        return redirect()->route('jenis-legalitas.index')->with('success', 'Tambah Data Jenis Legalitas Sukses');
    }

    public function show(JenisLegalitas $jenisLegalitas)
    {
        //
    }

    public function edit(JenisLegalitas $jenis_legalita)
    {
        return view('master-table.jenis-legalitas.edit')
            ->with('jenis_legalita', $jenis_legalita);
    }

    public function update(UpdateJenisLegalitas $request, JenisLegalitas $jenis_legalita)
    {
        $validate = $request->validated();
        $jenis_legalita->update($validate);
        return redirect()->route('jenis-legalitas.index')->with('success', 'Edit Data Jenis Legalitas Sukses');
    }

    public function destroy(JenisLegalitas $jenis_legalita)
    {
        $jenis_legalita->delete();
        return redirect()->route('jenis-legalitas.index')->with('success', 'Hapus Data Jenis Legalitas Sukses');
    }

    public function import(ImportJenisLegalitasRequest $request)
    {
        Excel::import(new JenisLegalitasImport, $request->file('import_file')->store('import_files'));
        return redirect()->route('jenis-legalitas.index');
    }

    public function export()
    {
        return Excel::download(new JenisLegalitasExport, 'Jenis Legalitas.xlsx');
    }
}

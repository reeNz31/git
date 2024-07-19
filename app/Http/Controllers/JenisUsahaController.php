<?php

namespace App\Http\Controllers;

use App\Exports\JenisUsahasExport;
use App\Http\Requests\StoreJenisUsaha;
use App\Http\Requests\UpdateJenisUsaha;
use App\Http\Requests\ImportJenisUsahaRequest;
use App\Imports\JenisUsahasImport;
use App\Models\JenisUsaha;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class JenisUsahaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('permission:jenis-usaha.index')->only('index');
        $this->middleware('permission:jenis-usaha.create')->only('create', 'store');
        $this->middleware('permission:jenis-usaha.edit')->only('edit', 'update');
        $this->middleware('permission:jenis-usaha.destroy')->only('destroy');
    }

    public function index(Request $request)
    {
        $jenis_usahas = DB::table('jenis_usahas')
            ->when($request->input('nama_jenis_usaha'), function ($query, $nama_jenis_usaha) {
                return $query->where('nama_jenis_usaha', 'like', '%' . $nama_jenis_usaha . '%');
            })
            ->paginate(5);
        return view('master-table.jenis-usaha.index', compact('jenis_usahas'));
    }

    public function create()
    {
        return view('master-table.jenis-usaha.create');
    }

    public function store(StoreJenisUsaha $request)
    {
        JenisUsaha::create([
            'nama_jenis_usaha' => $request->nama_jenis_usaha
        ]);
        return redirect()->route('jenis-usaha.index')->with('success', 'Tambah Data Jenis Usaha Sukses');
    }

    public function show(JenisUsaha $jenisUsaha)
    {
        //
    }

    public function edit(JenisUsaha $jenis_usaha)
    {
        return view('master-table.jenis-usaha.edit')
            ->with('jenis_usaha', $jenis_usaha);
    }

    public function update(UpdateJenisUsaha $request, JenisUsaha $jenis_usaha)
    {
        $validate = $request->validated();
        $jenis_usaha->update($validate);
        return redirect()->route('jenis-usaha.index')->with('success', 'Edit Data Jenis Usaha Sukses');
    }

    public function destroy(JenisUsaha $jenis_usaha)
    {
        $jenis_usaha->delete();
        return redirect()->route('jenis-usaha.index')->with('success', 'Hapus Data Jenis Usaha Sukses');
    }

    public function import(ImportJenisUsahaRequest $request)
    {
        Excel::import(new JenisUsahasImport, $request->file('import_file')->store('import_files'));
        return redirect()->route('jenis-usaha.index');
    }

    public function export()
    {
        return Excel::download(new JenisUsahasExport, 'Jenis Usaha.xlsx');
    }
}

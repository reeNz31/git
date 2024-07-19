<?php

namespace App\Http\Controllers;

use App\Exports\KecamatansExport;
use App\Models\Kabupaten;
use App\Models\Kecamatan;
use App\Http\Requests\StoreKecamatanRequest;
use App\Http\Requests\UpdateKecamatanRequest;
use App\Http\Requests\ImportKecamatanRequest;
use App\Imports\KecamatansImport;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;



class KecamatanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('permission:kecamatan.index')->only('index');
        $this->middleware('permission:kecamatan.create')->only('create', 'store');
        $this->middleware('permission:kecamatan.edit')->only('edit', 'update');
        $this->middleware('permission:kecamatan.destroy')->only('destroy');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $kecamatans = DB::table('kecamatans')
            ->select('kecamatans.*', 'kabupatens.nama_kabupaten as nama_kabupaten')
            ->leftJoin('kabupatens', 'kecamatans.kabupaten_id', '=', 'kabupatens.id')
            ->when($request->input('nama_kecamatan'), function ($query, $nama_kecamatan) {
                return $query->where('kecamatans.nama_kecamatan', 'like', '%' . $nama_kecamatan . '%');
            })
            ->when($request->input('nama_kabupaten'), function ($query, $nama_kabupaten) {
                return $query->where('nama_kabupaten', 'like', '%' . $nama_kabupaten . '%');
            })
            ->paginate(5);
        return view('master-table.kecamatan.index', compact('kecamatans'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $kabupatens = Kabupaten::all();
        $kecamatans = Kecamatan::all();
        return view('master-table.kecamatan.create', compact('kabupatens', 'kecamatans'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreKecamatanRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKecamatanRequest $request)
    {
        Kecamatan::create([
            'nama_kecamatan' => $request->nama_kecamatan,
            'kabupaten_id' => $request->kabupaten_id,
        ]);
        return redirect()->route('kecamatan.index')->with('success', 'Tambah Data Kecamatan Sukses');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kecamatan  $kecamatan
     * @return \Illuminate\Http\Response
     */
    public function show(Kecamatan $kecamatan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kecamatan  $kecamatan
     * @return \Illuminate\Http\Response
     */
    public function edit(Kecamatan $kecamatan)
    {
        $kabupaten = Kabupaten::all();

        return view('master-table.kecamatan.edit',)
            ->with(['kecamatan' => $kecamatan, 'kabupaten' => $kabupaten]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateKecamatanRequest  $request
     * @param  \App\Models\Kecamatan  $kecamatan
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateKecamatanRequest $request, Kecamatan $kecamatan)
    {
        $validate = $request->validated();
        $kecamatan->update($validate);
        return redirect()->route('kecamatan.index')->with('success', 'Edit Data Kecamatan Sukses');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kecamatan  $kecamatan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kecamatan $kecamatan)
    {
        $kecamatan->delete();
        return redirect()->route('kecamatan.index')->with('success', 'Hapus Data Kecamatan Sukses');
    }



    public function import(ImportKecamatanRequest $request)
    {
        Excel::import(new KecamatansImport(), $request->file('import_file')->store('import_files'));
        return redirect()->route('kecamatan.index');
    }

    public function export()
    {
        return Excel::download(new KecamatansExport, 'kecamatans.xlsx');
    }
}

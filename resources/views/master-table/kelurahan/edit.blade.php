@extends('layouts.app')

@section('content')
    <section class="section">
        <div class="section-header">
            <h1>Master Table</h1>
            <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                <div class="breadcrumb-item"><a href="#">Components</a></div>
                <div class="breadcrumb-item">Table</div>
            </div>
        </div>
        <div class="section-body">
            <h2 class="section-title">Edit Kelurahan</h2>
            <div class="card">
                <div class="card-header">
                    <h4>Validasi Edit Data</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('kelurahan.update', $kelurahan) }}" method="post">
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label>Nama Kabupaten</label>
                            <select
                                class="form-control select2
                                @error('kabupaten_id') is-invalid @enderror"
                                id="kabupaten_id" name="kabupaten_id" data-id="select-kabupaten">
                                <option value="">Pilih
                                    Nama Kabupaten</option>
                                @foreach ($kabupaten as $kabupaten)
                                    <option @selected($kabupaten->id == $kelurahan->kabupaten_id) value="{{ $kabupaten->id }}">
                                        {{ $kabupaten->nama_kabupaten }}
                                    </option>
                                @endforeach
                            </select>
                            @error('kabupaten_id')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label>Nama Kecamatan</label>
                            <select
                                class="form-control select2
                                 @error('kecamatan_id') is-invalid @enderror"
                                id="kecamatan_id" name="kecamatan_id" data-id="select-kecamatan">
                                <option value="">Pilih Nama Kecamatan</option>
                                @foreach ($kecamatan as $kecamatan)
                                    <option @selected($kecamatan->id == $kelurahan->kecamatan_id) value="{{ $kecamatan->id }}">
                                        {{ $kecamatan->nama_kecamatan }}
                                    </option>
                                @endforeach
                            </select>
                            @error('menu_group_id')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="nama_kelurahan">Nama Kelurahan</label>
                            <input type="text" class="form-control @error('nama_kelurahan') is-invalid @enderror"
                                id="nama_kelurahan" name="nama_kelurahan" placeholder="Nama kelurahan"
                                value="{{ old('nama_kabupaten', $kelurahan->nama_kelurahan) }}" data-id="nama-kelurahan">
                            @error('nama_kelurahan')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label>Status</label>
                            <select class="form-control select2 @error('status') is-invalid @enderror" id="status"
                                name="status" data-id="select-status">
                                <option @selected($kelurahan->status == 'desa') value="desa">
                                    Desa
                                </option>

                                <option @selected($kelurahan->status == 'kelurahan') value="kelurahan">
                                    Kelurahan
                                </option>
                            </select>
                            @error('status')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>

                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-primary" id="button"  data-id="submit">Submit</button>
                    <a class="btn btn-secondary" href="{{ route('kelurahan.index') }}" data-id="cancel">Cancel</a>
                </div>
                </form>
            </div>
        </div>
    </section>
@endsection

@push('customScript')
    <script src="/assets/js/select2.min.js"></script>
@endpush

@push('customStyle')
    <link rel="stylesheet" href="/assets/css/select2.min.css">
@endpush

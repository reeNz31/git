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
            <h2 class="section-title">Edit Kecamatan</h2>

            <div class="card">
                <div class="card-header">
                    <h4>Validasi Edit Data</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('kecamatan.update', $kecamatan) }}" method="post">
                        {{-- dd($kecamatan); --}}
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label>Nama Kabupaten</label>
                            <select class="form-control select2" name="kabupaten_id" data-id="select-kabupaten">
                                <option value="">Pilih Nama Kabupaten</option>
                                @foreach ($kabupaten as $kabupatens)
                                    <option @selected($kabupatens->id == $kecamatan->kabupaten_id) value="{{ $kabupatens->id }}">
                                        {{ $kabupatens->nama_kabupaten }}
                                    </option>
                                @endforeach

                                {{-- @foreach ($kecamatan->nama_kabupaten as $kecamatans)
                                    <option value="{{ $kecamatans }}">
                                        {{ $kecamatans }}</option>
                                @endforeach --}}

                            </select>
                            {{-- @error('menu_group_id')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror --}}
                        </div>
                        <div class="form-group">
                            <label for="nama_kecamatan">Nama Kecamatan</label>
                            <input type="text" class="form-control @error('nama_kecamatan') is-invalid @enderror"
                                id="nama_kecamatan" name="nama_kecamatan" placeholder="Nama Kecamatan"
                                value="{{ old('nama_kecamatan', $kecamatan->nama_kecamatan) }}" data-id="nama-kecamatan">
                            @error('nama_kecamatan')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-primary" data-id="submit">Submit</button>
                    <a class="btn btn-secondary" href="{{ route('kecamatan.index') }}">Cancel</a>
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

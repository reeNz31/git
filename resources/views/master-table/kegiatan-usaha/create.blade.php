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
            <h2 class="section-title">Tambah Kegiatan Usaha</h2>

            <div class="card">
                <div class="card-header">
                    <h4>Validasi Tambah Data</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('kegiatan-usaha.store') }}" method="post">
                        @csrf
                        <div class="form-group">
                            <label for="nama_kegiatan_usaha">Nama Kegiatan Usaha</label>
                            <input type="text" class="form-control @error('nama_kegiatan_usaha') is-invalid @enderror"
                                id="nama_kegiatan_usaha" name="nama_kegiatan_usaha" placeholder="Nama kegiatan Usaha"
                                value="{{ old('nama_kegiatan_usaha') }}" data-id="nama-kegiatan-usaha">
                            @error('nama_kegiatan_usaha')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-primary" data-id="submit">Submit</button>
                    <a class="btn btn-secondary" href="{{ route('kegiatan-usaha.index') }}">Cancel</a>
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

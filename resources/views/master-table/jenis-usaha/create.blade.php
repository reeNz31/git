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
            <h2 class="section-title">Tambah Jenis Usaha</h2>

            <div class="card">
                <div class="card-header">
                    <h4>Validasi Tambah Data</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('jenis-usaha.store') }}" method="post">
                        @csrf
                        <div class="form-group">
                            <label for="nama_jenis_usaha">Nama Jenis Usaha</label>
                            <input type="text" class="form-control @error('nama_jenis_usaha') is-invalid @enderror"
                                id="nama_jenis_usaha" name="nama_jenis_usaha" placeholder="Nama Jenis Usaha"
                                value="{{ old('nama_jenis_usaha') }}" data-id="nama-jenis-usaha">
                            @error('nama_jenis_usaha')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-primary" data-id="submit">Submit</button>
                    <a class="btn btn-secondary" href="{{ route('jenis-usaha.index') }}" data-id="cancel">Cancel</a>
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

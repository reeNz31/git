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
            <h2 class="section-title">Edit Kabupaten</h2>

            <div class="card">
                <div class="card-header">
                    <h4>Validasi Edit Data</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('kabupaten.update', $kabupaten) }}" method="post">
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label for="nama_kabupaten">Nama Kabupaten</label>
                            <input type="text" class="form-control @error('nama_kabupaten') is-invalid @enderror"
                                id="nama_kabupaten" name="nama_kabupaten" placeholder="Contoh : Pacitan | Nganjuk | Blitar"
                                value="{{ old('nama_kabupaten', $kabupaten->nama_kabupaten) }}" data-id="nama-kabupaten">
                            @error('nama_kabupaten')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-primary" data-id="submit">Submit</button>
                    <a class="btn btn-secondary" href="{{ route('kabupaten.index') }}">Cancel</a>
                </div>
                </form>
            </div>
        </div>
    </section>
@endsection

@push('customScript')
    <script src="/assets/js/select2.min.js"></script>
    {{-- <script>
        $(document).ready(function() {
            $('.form-control' || '.form-control select2').on('input change', function() {
                if ($(this).val() == '') {
                    $('#button').attr('disabled', true);
                } else {
                    $('#button').removeAttr('disabled', false);
                }
            });
        });
    </script> --}}
@endpush

@push('customStyle')
    <link rel="stylesheet" href="/assets/css/select2.min.css">
@endpush

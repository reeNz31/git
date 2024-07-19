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
            <h2 class="section-title">Master Table Management</h2>
            <div class="row">
                <div class="col-12">
                    @include('layouts.alert')
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h4>List Kelurahan</h4>
                            <div class="card-header-action">
                                <a class="btn btn-icon icon-left btn-primary" href="{{ route('kelurahan.create') }}"
                                    data-id="tambah">Tambah
                                    Data
                                    Kelurahan</a>
                                <a class="btn btn-info btn-primary active import" data-id="import">
                                    <i class="fa fa-download" aria-hidden="true"></i>
                                    Import Kelurahan</a>
                                <a class="btn btn-info btn-primary active" href="{{ route('kelurahan.export') }}"
                                    data-id="export">
                                    <i class="fa fa-upload" aria-hidden="true"></i>
                                    Export Kelurahan</a>
                                <a class="btn btn-info btn-primary active search" data-id="search">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                    Search Kelurahan</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="show-import" style="display: none">
                                @error('import_file')
                                    <div class="invalid-feedback d-flex mb-10" role="alert">
                                        <div class="alert_alert-dange_mt-1_mb-1">
                                            {{ $message }}
                                        </div>
                                    </div>
                                @enderror
                                <div class="custom-file">
                                    <form action="{{ route('kelurahan.import') }}" method="post"
                                        enctype="multipart/form-data">
                                        @csrf
                                        @method('POST')
                                        <label class="custom-file-label" for="file-upload">Choose File</label>
                                        <input type="file" id="file-upload" class="custom-file-input" name="import_file"
                                            data-id="send-import">
                                        <br /> <br />
                                        <div class="footer text-right">
                                            <button class="btn btn-primary" data-id="submit-import">Import File</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="show-search mb-3" style="display: none">
                                <form id="search" method="GET" action="{{ route('kelurahan.index') }}">
                                    <div class="form-col">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="role">Kabupaten</label>
                                                <input type="text" name="nama_kabupaten" class="form-control"
                                                    id="nama_kabupaten" placeholder="Nama Kabupaten"
                                                    data-id="search-kabupaten">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="role">Kecamatan</label>
                                                <input type="text" name="nama_kecamatan" class="form-control"
                                                    id="nama_kecamatan" placeholder="Nama Kecamatan"
                                                    data-id="search-kecamatan">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="role">Kelurahan</label>
                                                <input type="text" name="nama_kelurahan" class="form-control"
                                                    id="nama_kelurahan" placeholder="Nama Kelurahan"
                                                    data-id="search-kelurahan">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button class="btn btn-primary mr-1 button" disabled="disabled" type="submit"
                                            data-id="submit-search">Submit</button>
                                        <a class="btn btn-secondary" href="{{ route('kelurahan.index') }}"
                                            data-id="reset">Reset</a>
                                    </div>
                                </form>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-bordered table-md">
                                    <tbody>
                                        <tr>
                                            <th>#</th>
                                            <th>Nama Kabupaten</th>
                                            <th>Nama Kecamatan</th>
                                            <th>Nama Kelurahan</th>
                                            <th>Status</th>
                                            <th class="text-right">Action</th>
                                        </tr>
                                        @foreach ($kelurahans as $key => $kelurahan)
                                            <tr>
                                                <td>{{ ($kelurahans->currentPage() - 1) * $kelurahans->perPage() + $key + 1 }}
                                                </td>
                                                <td>{{ $kelurahan->nama_kabupaten }}</td>
                                                <td>{{ $kelurahan->nama_kecamatan }}</td>
                                                <td>{{ $kelurahan->nama_kelurahan }}</td>
                                                <td>{{ $kelurahan->status }}</td>
                                                <td class="text-right">
                                                    <div class="d-flex justify-content-end">
                                                        <a href="{{ route('kelurahan.edit', $kelurahan->id) }}"
                                                            class="btn btn-sm btn-info btn-icon "
                                                            data-id="edt-{{ $kelurahan->id }}"><i
                                                                class="fas fa-edit"></i>
                                                            Edit</a>
                                                        <form action="{{ route('kelurahan.destroy', $kelurahan->id) }}"
                                                            method="POST" class="ml-2" id="sel-<?= $kelurahan->id ?>">
                                                            <input type="hidden" name="_method" value="DELETE">
                                                            <input type="hidden" name="_token"
                                                                value="{{ csrf_token() }}">
                                                            <button type="submit" class="btn btn-sm btn-danger btn-icon "
                                                                data-confirm="Hapus Data Kelurahan?|Apakah Kamu Yakin?"
                                                                data-confirm-yes="submitDelet(<?= $kelurahan->id ?>)"
                                                                data-id="del-{{ $kelurahan->id }}"><i
                                                                    class="fas fa-times"></i>
                                                                Delete </button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach

                                    </tbody>
                                </table>
                                <div class="d-flex justify-content-center">
                                    {{ $kelurahans->withQueryString()->links() }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@push('customScript')
    <script>
        $(document).ready(function() {
            $('.import').click(function(event) {
                event.stopPropagation();
                $(".show-import").slideToggle("fast");
                $(".show-search").hide();
            });
            $('.search').click(function(event) {
                event.stopPropagation();
                $(".show-search").slideToggle("fast");
                $(".show-import").hide();
            });
            //ganti label berdasarkan nama file
            $('#file-upload').change(function() {
                var i = $(this).prev('label').clone();
                var file = $('#file-upload')[0].files[0].name;
                $(this).prev('label').text(file);
            });

        });

        function submitDel(id) {
            $('#del-' + id).submit()
        }
    </script>
    <script>
        $(document).ready(function() {
            $('.form-control' || '.form-control select2').on('input change', function() {
                if ($(this).val() == '') {
                    $('.button').attr('disabled', true);
                } else {
                    $('.button').removeAttr('disabled', false);
                }
            });
        });
    </script>
@endpush
@push('customStyle')
@endpush

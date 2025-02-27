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
                            <h4>List Jenis Usaha</h4>
                            <div class="card-header-action">
                                <a class="btn btn-icon icon-left btn-primary" href="{{ route('jenis-usaha.create') }}"
                                    data-id="tambah">Tambah Data
                                    Jenis Usaha</a>
                                <a class="btn btn-info btn-primary active import" data-id="import">
                                    <i class="fa fa-download" aria-hidden="true"></i>
                                    Import Jenis Usaha</a>
                                <a class="btn btn-info btn-primary active" href="{{ route('jenis.usaha.export') }}"
                                    data-id="export">
                                    <i class="fa fa-upload" aria-hidden="true"></i>
                                    Export Jenis Usaha</a>
                                <a class="btn btn-info btn-primary active search" data-id="search">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                    Search Jenis Usaha</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="show-import" style="display: none">
                                @error('import_file')
                                    <div class="invalid-feedback d-flex md-10" role="alert">
                                        <div class="alert_alert-dange_mt-1_mb-1">
                                            {{ $message }}
                                        </div>
                                    </div>
                                @enderror
                                <div class="custom-file">
                                    <form action="{{ route('jenis.usaha.import') }}" method="post"
                                        enctype="multipart/form-data">
                                        @csrf
                                        @method('POST')
                                        <label class="custom-file-label" for="file-upload">Choose File</label>
                                        <input type="file" id="file-upload" class="custom-file-input" name="import_file"
                                            data-id="send-import">
                                        <br /> <br />
                                        <div class="footer text-right">
                                            <button class="btn btn-primary" data-id="button-import">Import File</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="show-search mb-3" style="display: none">
                                <form id="search" method="GET" action="{{ route('jenis-usaha.index') }}">
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="role">Jenis Usaha</label>
                                            <input type="text" name="nama_jenis_usaha" class="form-control"
                                                id="nm_jenisusaha" placeholder="Nama Jenis Usaha"
                                                data-id="search-jenis-usaha">
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button class="btn btn-primary mr-1 button" disabled="disabled" type="submit"
                                            data-id="submit-search">Submit</button>
                                        <a class="btn btn-secondary" href="{{ route('jenis-usaha.index') }}">Reset</a>
                                    </div>
                                </form>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-bordered table-md">
                                    <tbody>
                                        <tr>
                                            <th>#</th>
                                            <th>Nama Jenis Usaha</th>
                                            <th class="text-right">Action</th>
                                        </tr>
                                        @foreach ($jenis_usahas as $key => $jenis_usaha)
                                            <tr>
                                                <td>{{ ($jenis_usahas->currentPage() - 1) * $jenis_usahas->perPage() + $key + 1 }}
                                                </td>
                                                <td>{{ $jenis_usaha->nama_jenis_usaha }}</td>
                                                <td class="text-right">
                                                    <div class="d-flex justify-content-end">
                                                        <a href="{{ route('jenis-usaha.edit', $jenis_usaha->id) }}"
                                                            class="btn btn-sm btn-info btn-icon "
                                                            data-id="edt-{{ $jenis_usaha->id }}"><i class="fas fa-edit"></i>
                                                            Edit</a>
                                                        <form action="{{ route('jenis-usaha.destroy', $jenis_usaha->id) }}"
                                                            method="POST" class="ml-2" id="del-<?= $jenis_usaha->id ?>">
                                                            <input type="hidden" name="_method" value="DELETE">
                                                            <input type="hidden" name="_token"
                                                                value="{{ csrf_token() }}"
                                                                data-id="{{ $jenis_usaha->id }}">
                                                            <button type="submit" id="#submit"
                                                                class="btn btn-sm btn-danger btn-icon "
                                                                data-confirm="Hapus Data Jenis Usaha?|Apakah Kamu Yakin?"
                                                                data-confirm-yes="submitDel(<?= $jenis_usaha->id ?> )"
                                                                data-id="del-{{ $jenis_usaha->id }}">
                                                                <i class="fas fa-times"> </i> Delete </button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                                <div class="d-flex justify-content-center">
                                    {{ $jenis_usahas->withQueryString()->links() }}

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

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKegiatanUsahaRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'nama_kegiatan_usaha' =>
            'string|required|regex:/^[a-zA-Z\s]+$/u|unique:kegiatan_usahas|min:3|max:50'
        ];
    }

    public function messages()
    {
        return [
            'nama_kegiatan_usaha.string' => 'Nama Kegiatan Usaha Wajib Diisi',
            'nama_kegiatan_usaha.required' => 'Nama Kegiatan Usaha Wajib Diisi',
            'nama_kegiatan_usaha.unique' => 'Nama Kegiatan Usaha Telah Ada',
            'nama_kegiatan_usaha.regex' => 'Nama Kegiatan Usaha Tidak Boleh Angka',
            'nama_kegiatan_usaha.min' => 'Nama Kegiatan Usaha Kurang Dari 3 Karakter',
            'nama_kegiatan_usaha.max' => 'Nama Kegiatan Usaha Melebihi Dari 50 Karakter',
        ];
    }
}

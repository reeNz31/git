<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKelurahanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'kabupaten_id' => 'required|string',
            'kecamatan_id' => 'required|string',
            'nama_kelurahan' => 'string|required|regex:/^[a-zA-Z\s]+$/u|unique:kelurahans|min:3|max:50',
            'status' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'kabupaten_id.required' => 'Nama Kabupaten Wajib Diisi',
            'kecamatan_id.required' => 'Nama Kecamatan Wajib Diisi',
            'nama_kelurahan.string' => 'Nama Kelurahan Wajib Diisi',
            'nama_kelurahan.required' => 'Nama Kelurahan Wajib Diisi',
            'nama_kelurahan.unique' => 'Nama Kelurahan Telah Ada',
            'nama_kelurahan.regex' => 'Nama Kelurahan Tidak Boleh Karakter',
            'nama_kelurahan.min' => 'Nama Kelurahan Kurang Dari Yang Ditentukan',
            'nama_kelurahan.max' => 'Nama Kelurahan Melebihi Dari Yang Ditentukan',
            'status.required' => 'Nama Status Wajib Diisi',

        ];
    }
}

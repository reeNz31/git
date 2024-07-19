<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateKelurahanRequest extends FormRequest
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
            'nama_kelurahan' => 'string|required|regex:/^[a-zA-Z\s]+$/u|min:3|max:50',
            'kecamatan_id' => 'string|required',
            'kabupaten_id' => 'string|required',
            'status' => 'string|required',
        ];
    }

    public function messages()
    {
        return [

            'nama_kelurahan.string' => 'Nama Kelurahan Wajib Diisi',
            'nama_kelurahan.required' => 'Nama Kelurahan Wajib Diisi',
            'nama_kelurahan.unique' => 'Nama Kelurahan Telah Ada',
            'nama_kelurahan.regex' => 'Nama Kelurahan Tidak Boleh Karakter',
            'nama_kelurahan.min' => 'Nama Kelurahan Kurang Dari Yang Ditentukan',
            'nama_kelurahan.max' => 'Nama Kelurahan Melebihi Dari Yang Ditentukan',
            'kecamatan_id.required' => 'Nama Kecamatan Wajib Diisi',
            'kabupaten_id.required' => 'Nama Kabupaten Wajib Diisi',
            'status.required' => 'Status Wajib Diisi',
        ];
    }
}

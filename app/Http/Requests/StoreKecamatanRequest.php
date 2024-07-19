<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKecamatanRequest extends FormRequest
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
            'nama_kecamatan' => 'string|required|regex:/^[a-zA-Z]+$/u|unique:kecamatans|min:3|max:50',
            'kabupaten_id' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'nama_kecamatan.string' => 'Nama Kecamatan Wajib Diisi',
            'nama_kecamatan.required' => 'Nama Kecamatan Wajib Diisi',
            'nama_kecamatan.unique' => 'Nama Kecamatan Telah Ada',
            'nama_kecamatan.regex' => 'Nama Kabupaten Tidak Boleh Karakter',
            'nama_kecamatan.min' => 'Nama Kecamatan Kurang Dari Yang Ditentukan',
            'nama_kecamatan.max' => 'Nama Kecamatan Melebihi Dari Yang Ditentukan',
            'kabupaten_id.required' => 'Nama Kabupaten Wajib Diisi',
        ];
    }
}

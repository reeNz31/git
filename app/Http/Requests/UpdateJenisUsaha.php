<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJenisUsaha extends FormRequest
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
            'nama_jenis_usaha' => 'required|string|regex:/^[a-zA-Z\s]+$/u',
        ];
    }

    public function messages()
    {
        return [
            'nama_jenis_usaha.string' => 'Nama Jenis Usaha Wajib Diisi',
            'nama_jenis_usaha.required' => 'Nama Jenis Usaha Wajib Diisi',
            'nama_jenis_usaha.regex' => 'Nama Jenis Usaha Tidak Boleh Karakter',
        ];
    }
}

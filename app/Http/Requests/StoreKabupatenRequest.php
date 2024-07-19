<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKabupatenRequest extends FormRequest
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
            'nama_kabupaten' =>
            'string|required|regex:/^[a-zA-Z]+$/u|unique:kabupatens|min:3|max:50'
        ];
    }

    public function messages()
    {
        return [
            'nama_kabupaten.string' => 'Nama Kabupaten Wajib Diisi',
            'nama_kabupaten.required' => 'Nama Kabupaten Wajib Diisi',
            'nama_kabupaten.unique' => 'Nama Kabupaten Telah Ada',
            'nama_kabupaten.regex' => 'Nama Kabupaten Tidak Boleh Karakter',
            'nama_kabupaten.min' => 'Nama Kabupaten Kurang Dari 3 Karakter',
            'nama_kabupaten.max' => 'Nama Kabupaten Melebihi Dari 50 Karakter',
        ];
    }
}

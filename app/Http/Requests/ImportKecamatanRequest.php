<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImportKecamatanRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'import_file' => 'required|mimes:xlsx, csv, xls|max:10240'
        ];
    }

    public function messages()
    {
        return [
            'import_file.mimes' => 'Jenis File Excel Tidak Sesuai',
            'import_file.required' => 'File Excel Wajib Diisi',
            'import_file.max' => 'Ukuran File Excel Melebihi 10MB',
        ];
    }
}

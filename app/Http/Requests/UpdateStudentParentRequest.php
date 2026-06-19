<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Enums\BloodEnum;
use App\Models\StudentParent;

class UpdateStudentParentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
         
        'firstname'=>'required|max:55',
        'lastname'=>'required|max:55',
        'date_of_birth'=>'required|date',
        'gender'=>['required',Rule::in(['male','female'])],
        'blood_type'=>['required',Rule::enum(BloodEnum::class)],
        'address'=>'required|max:255',
         'phone_number' => ['required', Rule::unique(StudentParent::class)->ignore($this->route('studentParent'))],//HADI KATKHALIHA UNIQUE GHIR F CREATE, W F UPDATE KATIGNORI L'ID DYAL PARENT LI GHADI TUPDATE
         'email' => ['required', Rule::unique(StudentParent::class)->ignore($this->route('studentParent'))],
        ];
    }
}

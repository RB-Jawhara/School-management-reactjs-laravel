<?php

namespace App\Http\Controllers;

use App\Models\StudentParent;
use App\Http\Requests\StoreStudentParentRequest;
use App\Http\Requests\UpdateStudentParentRequest;
use App\Http\Resources\StudentParentResource;

class StudentParentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         //$parents = StudentParent::all();//les variables katst3mlha ghir mara wa7da f-function, w hna katjib lina jami3 l-parents mn database
             return StudentParentResource::collection(StudentParent::all());//hadi kat-returni collection dyal StudentParentResource, w kat-transforma jami3 l-parents li jibt mn database l-format li 3tina f-StudentParentResource
    }

    /**
     * Store a newly created resource in storage.
     */
   public function store(StoreStudentParentRequest $request)
{
    $studentParent = StudentParent::create($request->validated());
    return new StudentParentResource($studentParent);
}

    /**
     * Display the specified resource.
     */
    public function show(StudentParent $studentParent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentParentRequest $request, StudentParent $studentParent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StudentParent $studentParent)
    {
        
       
    $studentParent->forceDelete(); // ← bdl delete() b forceDelete()
    return response()->json(['message' => 'Student parent deleted successfully']);
}
    }


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
    $studentParent = StudentParent::create($request->validated ());// CREE F LA DATABASE W KAYST3ML LES DONNEES LI JIBT MN FRONTEND W KAYVALIDIHA B LES REGLES LI 3TINA F StoreStudentParentRequest
   $response= new StudentParentResource($studentParent);////HEDI KATRTB DAKCHI F MODEL W KATSIFTO LJSON (frontend) 
  
    return response()->json([
        'parent' => $response,
        'message' => 'Student parent created successfully'], 201
    ); //hedi kadar bach tarj3 lfronyend ela chakel json 
   
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
        $studentParent->update($request->validated());
        $response= new StudentParentResource($studentParent->fresh());//HADI KATJIB L'ETAT JADID DYAL PARENT BA3D MA UPDATE, W KATSIFTO LJSON (frontend)
        return response()->json([
            'parent' => $response,
            'message' => 'Student parent updated successfully'], 200
        );
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


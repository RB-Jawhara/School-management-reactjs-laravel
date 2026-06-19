<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Api\AuthController;
use App\Models\Admin;
use App\Models\Teacher;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;


use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\StudentParentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// ✅ Public — بلا حماية
Route::post('/user/login', [AuthController::class, 'userLogin']);
Route::post('/admin/login', [AuthController::class, 'adminLogin']);
Route::post('/teacher/login', [AuthController::class, 'teacherLogin']);


// ✅ Protected
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::middleware(['auth:sanctum,admin', 'check.admin'])->group(function () {
    Route::get('/admin', fn(Request $r) => $r->user());
   Route::apiResource('parents', StudentParentController::class, [
    'parameters' => ['parents' => 'studentParent']// hit f controlleur dya studentParent machi parente hiya fi dart equilibre f binthom
]);
});

Route::middleware(['auth:sanctum,teacher', 'check.teacher'])->group(function () {
    Route::get('/teacher', fn(Request $r) => $r->user());
});

Route::middleware(['auth:sanctum,web', 'check.user'])->group(function () {
    Route::get('/user', fn(Request $r) => $r->user());
});
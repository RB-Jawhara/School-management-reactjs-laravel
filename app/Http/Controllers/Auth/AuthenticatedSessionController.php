<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    public function store(LoginRequest $request):jsonResponse
{
    // 1. Authensticate l-user (b l-email w password li shhna f LoginRequest)
    $request->authenticate();
       $guards =array_keys(config('auth.guards'));//hadi hiya page dyl auth.php
       $user=null;
       
    foreach ($guards as $guard) {
        $a=Auth::guard($guard);
            if ($a->check()) {
                $user=$a->user();
                //7na hatlia les donnes dyl user 
            break;
                }
}
$token=$user->createToken('api',['admin'])->plainTextToken;//hna kayn token li ghadi n3tiwh l-user bash ykhdem bih f les requetes dyal API
 
  


    // 3. Rejje3 l-JSON fih l-user w l-token
    return response()->json([
        'user' => $user,
        'token' =>$token = $user->createToken('api',['admin'])->plainTextToken,
        'message' => 'Login Success'
    ]);
    
}

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}


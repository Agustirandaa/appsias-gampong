<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Jobs\SendForgotPasswordEmailJob;
use App\Mail\SendForgotPasswordEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('Auth/Login');
    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    public function authenticate(Request $request)
    {
        $credentials  = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return Inertia::location(route('dashboard'));
        }
        return back()->with('error', 'The provided credentials is invalid.');
    }


    public function forgotPassword()
    {
        $user = User::first();
        try {
            $mailData = [
                'email' => $user->email,
                'token' => $user->remember_token
            ];
            dispatch(new SendForgotPasswordEmailJob($mailData));
        } catch (\Exception $e) {
            dd($e);
        }

        return back()->with('success', 'Kami kirim link reset password ke email anda!');
    }


    public function updatePassword($token)
    {
        $user = User::where('remember_token', $token)->first();
        if ($user) {
            return Inertia::render('Auth/ForgotPassword', []);
        }

        return abort(404, 'User Not Found');
    }


    public function resetPassword(Request $request)
    {
        $rules = [
            'password' => 'required',
        ];

        $validate = $request->validate($rules);
        $hashedPassword  = bcrypt($validate['password']);

        $user = User::first();
        if ($user) {
            $user->password = $hashedPassword;
            $user->save();
            return redirect(route('login'))->with('success', 'Password has been Updated!');
        }
        return response()->json(['message' => 'User not found.'], 400);
    }


    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return Inertia::location(route('login'));
    }
}

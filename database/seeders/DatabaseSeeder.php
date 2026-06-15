<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Admin;
use App\Models\Teacher;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;



class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create 10 users with factory
        User::factory(10)->create();

        // Create specific user
       User::factory()->create([
    'name' => 'Riblaoui',
    'email' => 'admin1@example.com',
    'password' => Hash::make('P@ssw0rd2026!'),
    'student_parent_id' => 1, 
    'blood_type' => 'O+',     
    ]);
   \App\Models\Admin::create([
        'firstname' => 'Admin',
        'lastname' => 'Riblaoui',
        'email' => 'superadmin@super.com',
        'password' =>Hash::make('123456789'),
        'gender' => 'male',
        'blood_type' => 'O+',
    ]);
    Teacher::factory()->create([
    'firstname' => 'Teacher',
    'lastname' => 'Teacher',
    'email' => 'teacher@teacher.com',
    'password' => Hash::make('123456789'),
   
    ]);
    

$this->call(StudentParentSeeder::class);
}
}
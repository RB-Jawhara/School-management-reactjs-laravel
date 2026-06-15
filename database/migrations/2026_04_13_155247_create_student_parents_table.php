<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_parents', function (Blueprint $table) {
            $table->id();
            $table->string('firstname', 55);
            $table->string('lastname', 55);
            $table->dateTime('date_of_birth');
            $table->dateTime('last_login_date')->nullable();
            $table->enum('gender', ['male', 'female']);
            $table->enum('blood_type', ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);
            $table->string('address', 255);
            $table->string('email', 255)->unique();
            $table->string('phone_number', 20);
            $table->string('password')->nullable();
            $table->SoftDeletes ();  
            $table->timestamp('email_verified_at')->nullable();
            
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_parents');
    }
};

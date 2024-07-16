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
        Schema::create('residents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('family_id')->constrained(table: 'families', column: 'id')->onDelete('cascade');
            $table->bigInteger('nik')->unique();
            $table->string('name', 50);
            $table->string('birthdate', 10);
            $table->string('gender', 10);
            $table->string('notelp', 13);
            $table->string('status', 10);
            $table->string('place_of_birth', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('residents');
    }
};

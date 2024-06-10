<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'fullname' => 'Suci Rahmi Lestari',
            'username' => 'sucirahmi',
            'email' => 'sucirahmilestari@gmail.com',
            'password' => bcrypt('ayang'),
            'remember_token' => 'rG15wPeu8Duy6i3FmIWpDb1Qp8HJp7HmmpROQDPJCTZaa3uZPelAzloZBn4n',
        ]);
    }
}

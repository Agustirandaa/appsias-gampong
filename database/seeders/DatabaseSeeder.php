<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Postings;
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
        User::create([
            'fullname' => 'M. Yoga Agustiranda',
            'username' => 'agustiranda',
            'email' => 'sucirahmilestari@gmail.com',
            'password' => bcrypt('ayang'),
            'remember_token' => 'rG15wPeu8Duy6i3FmIWpDb1Qp8HJp7HmmpROQDPJCTZaa3uZPelAzloZBn4n',
        ]);

        Category::create([
            'name' => 'Web Programming',
        ]);
        Category::create([
            'name' => 'Desain Grafis',
        ]);
        Category::create([
            'name' => 'Video Maker',
        ]);
        Category::create([
            'name' => 'Pendidikan',
        ]);
        Category::create([
            'name' => 'Gotong Royong',
        ]);
        Category::create([
            'name' => 'Umum',
        ]);
    }
}

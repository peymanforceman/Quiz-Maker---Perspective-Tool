<?php

use Illuminate\Database\Seeder;

class oAuthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oauth_clients')->insert([
            [
                'name' => 'Laravel Personal Access Client',
                'secret' => '0IkmAr5Yzr0yaOTpEPKMw1VNb3M8ZRrWTy3sTbZz',
                'redirect' => 'http://localhost',
                'personal_access_client' => 1,
                'password_client' => 0,
                'revoked' => 0,
            ],
            [
                'name' => 'Laravel Password Grant Client',
                'secret' => 'vGp5J52UPAAPeqoF8lq9hZ8sChDCn2w3MO0OIOs6',
                'redirect' => 'http://localhost',
                'personal_access_client' => 0,
                'password_client' => 1,
                'revoked' => 0,
            ]
        ]);
    }
}

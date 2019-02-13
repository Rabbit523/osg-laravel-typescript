<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

abstract class UserRole{
    const PersonalTrainer = 'PersonalTrainer';
    const ProgramDesigner = 'ProgramDesigner';
    const StrengthAthlete = 'StrengthAthlete';
}

class UserService 
{
    private $roles = [UserRole::PersonalTrainer, UserRole::ProgramDesigner, UserRole::StrengthAthlete];

    public function getAll()
    {
        return User::all();
    }

    public function register(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'phone' => $data['phone'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        $user->role = $this->getRole($data['role']);
        $user->api_token = str_random(60);
        $user->save();
        return $user;
    }

    private function getRole($id){
        return $this->roles[intval($id)];
    }

}

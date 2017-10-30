<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $table = 'users';
    protected $fillable = [
        'id',
        'fullname',
        'mobileno',
        'email',
        'profilename',
        'password',
        'created_by',
        'updated_by',
    ];
}

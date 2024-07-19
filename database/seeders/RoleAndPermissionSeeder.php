<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'dashboard']);
        Permission::create(['name' => 'user.management']);
        Permission::create(['name' => 'role.permission.management']);
        Permission::create(['name' => 'menu.management']);
        Permission::create(['name' => 'master_table.management']);

        //user
        Permission::create(['name' => 'user.index']);
        Permission::create(['name' => 'user.create']);
        Permission::create(['name' => 'user.edit']);
        Permission::create(['name' => 'user.destroy']);
        Permission::create(['name' => 'user.import']);
        Permission::create(['name' => 'user.export']);

        //role
        Permission::create(['name' => 'role.index']);
        Permission::create(['name' => 'role.create']);
        Permission::create(['name' => 'role.edit']);
        Permission::create(['name' => 'role.destroy']);
        Permission::create(['name' => 'role.import']);
        Permission::create(['name' => 'role.export']);

        //permission
        Permission::create(['name' => 'permission.index']);
        Permission::create(['name' => 'permission.create']);
        Permission::create(['name' => 'permission.edit']);
        Permission::create(['name' => 'permission.destroy']);
        Permission::create(['name' => 'permission.import']);
        Permission::create(['name' => 'permission.export']);

        //assignpermission
        Permission::create(['name' => 'assign.index']);
        Permission::create(['name' => 'assign.create']);
        Permission::create(['name' => 'assign.edit']);
        Permission::create(['name' => 'assign.destroy']);

        //assingusertorole
        Permission::create(['name' => 'assign.user.index']);
        Permission::create(['name' => 'assign.user.create']);
        Permission::create(['name' => 'assign.user.edit']);

        //menu group
        Permission::create(['name' => 'menu-group.index']);
        Permission::create(['name' => 'menu-group.create']);
        Permission::create(['name' => 'menu-group.edit']);
        Permission::create(['name' => 'menu-group.destroy']);

        //menu item
        Permission::create(['name' => 'menu-item.index']);
        Permission::create(['name' => 'menu-item.create']);
        Permission::create(['name' => 'menu-item.edit']);
        Permission::create(['name' => 'menu-item.destroy']);

        //kabupaten
        Permission::create(['name' => 'kabupaten.index']);
        Permission::create(['name' => 'kabupaten.create']);
        Permission::create(['name' => 'kabupaten.edit']);
        Permission::create(['name' => 'kabupaten.destroy']);

        //kecamatan
        Permission::create(['name' => 'kecamatan.index']);
        Permission::create(['name' => 'kecamatan.create']);
        Permission::create(['name' => 'kecamatan.edit']);
        Permission::create(['name' => 'kecamatan.destroy']);

        //kelurahan
        Permission::create(['name' => 'kelurahan.index']);
        Permission::create(['name' => 'kelurahan.create']);
        Permission::create(['name' => 'kelurahan.edit']);
        Permission::create(['name' => 'kelurahan.destroy']);

        //jenis_usaha
        Permission::create(['name' => 'jenis-usaha.index']);
        Permission::create(['name' => 'jenis-usaha.create']);
        Permission::create(['name' => 'jenis-usaha.edit']);
        Permission::create(['name' => 'jenis-usaha.destroy']);

        //jenis_legalitas
        Permission::create(['name' => 'jenis-legalitas.index']);
        Permission::create(['name' => 'jenis-legalitas.create']);
        Permission::create(['name' => 'jenis-legalitas.edit']);
        Permission::create(['name' => 'jenis-legalitas.destroy']);

        //kegiatan_usaha
        Permission::create(['name' => 'kegiatan-usaha.index']);
        Permission::create(['name' => 'kegiatan-usaha.create']);
        Permission::create(['name' => 'kegiatan-usaha.edit']);
        Permission::create(['name' => 'kegiatan-usaha.destroy']);


        // create roles
        $roleUser = Role::create(['name' => 'user']);
        $roleUser->givePermissionTo([
            'dashboard',
            'user.management',
            'user.index',
        ]);

        // create Super Admin
        $role = Role::create(['name' => 'super-admin']);
        $role->givePermissionTo(Permission::all());

        //assign user id 1 ke super admin
        $user = User::find(1);
        $user->assignRole('super-admin');
        $user = User::find(2);
        $user->assignRole('user');
    }
}

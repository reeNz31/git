<?php

namespace Database\Seeders;

use App\Models\MenuItem;
use Illuminate\Database\Seeder;

class MenuItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // MenuItem::factory()->count(10)->create();
        MenuItem::insert(
            [
                [
                    'name' => 'Dashboard',
                    'route' => 'dashboard',
                    'permission_name' => 'dashboard',
                    'menu_group_id' => 1,
                ],
                [
                    'name' => 'User List',
                    'route' => 'user-management/user',
                    'permission_name' => 'user.index',
                    'menu_group_id' => 2,
                ],
                [
                    'name' => 'Role List',
                    'route' => 'role-and-permission/role',
                    'permission_name' => 'role.index',
                    'menu_group_id' => 3,
                ],
                [
                    'name' => 'Permission List',
                    'route' => 'role-and-permission/permission',
                    'permission_name' => 'permission.index',
                    'menu_group_id' => 3,
                ],
                [
                    'name' => 'Permission To Role',
                    'route' => 'role-and-permission/assign',
                    'permission_name' => 'assign.index',
                    'menu_group_id' => 3,
                ],
                [
                    'name' => 'User To Role',
                    'route' => 'role-and-permission/assign-user',
                    'permission_name' => 'assign.user.index',
                    'menu_group_id' => 3,
                ],
                [
                    'name' => 'Menu Group',
                    'route' => 'menu-management/menu-group',
                    'permission_name' => 'menu-group.index',
                    'menu_group_id' => 4,
                ],
                [
                    'name' => 'Menu Item',
                    'route' => 'menu-management/menu-item',
                    'permission_name' => 'menu-item.index',
                    'menu_group_id' => 4,
                ],
                [
                    'name' => 'Kabupaten',
                    'route' => 'master-table-management/kabupaten',
                    'permission_name' => 'kabupaten.index',
                    'menu_group_id' => 5,
                ],
                [
                    'name' => 'Kecamatan',
                    'route' => 'master-table-management/kecamatan',
                    'permission_name' => 'kecamatan.index',
                    'menu_group_id' => 5,
                ],
                [
                    'name' => 'Kelurahan',
                    'route' => 'master-table-management/kelurahan',
                    'permission_name' => 'kelurahan.index',
                    'menu_group_id' => 5,
                ],
                [
                    'name' => 'Jenis Usaha',
                    'route' => 'master-table-management/jenis-usaha',
                    'permission_name' => 'jenis-usaha.index',
                    'menu_group_id' => 5,
                ],
                [
                    'name' => 'Jenis Legalitas',
                    'route' => 'master-table-management/jenis-legalitas',
                    'permission_name' => 'jenis-legalitas.index',
                    'menu_group_id' => 5,
                ],
                [
                    'name' => 'Kegiatan Usaha',
                    'route' => 'master-table-management/kegiatan-usaha',
                    'permission_name' => 'kegiatan-usaha.index',
                    'menu_group_id' => 5,
                ],
            ]
        );
    }
}

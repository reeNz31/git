<?php

use App\Http\Controllers\DemoController;
use App\Http\Controllers\JenisUsahaController;
use App\Http\Controllers\JenisLegalitasController;
use App\Http\Controllers\KabupatenController;
use App\Http\Controllers\KecamatanController;
use App\Http\Controllers\KegiatanUsahaController;
use App\Http\Controllers\KelurahanController;
use App\Http\Controllers\Menu\MenuGroupController;
use App\Http\Controllers\Menu\MenuItemController;
use App\Http\Controllers\RoleAndPermission\AssignPermissionController;
use App\Http\Controllers\RoleAndPermission\AssignUserToRoleController;
use App\Http\Controllers\RoleAndPermission\ExportPermissionController;
use App\Http\Controllers\RoleAndPermission\ExportRoleController;
use App\Http\Controllers\RoleAndPermission\ImportPermissionController;
use App\Http\Controllers\RoleAndPermission\ImportRoleController;
use App\Http\Controllers\RoleAndPermission\PermissionController;
use App\Http\Controllers\RoleAndPermission\RoleController;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\UserController;
use App\Models\Category;
use App\Models\JenisUsaha;
use App\Models\Kabupaten;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth/login');
});

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/profile', function () {
        return view('profile.index');
    })->name('profile.edit');

    Route::get('/dashboard', function () {
        return view('home', ['users' => User::get(),]);
    });
    //user list

    Route::prefix('user-management')->group(function () {
        Route::resource('user', UserController::class);
        Route::post('import', [UserController::class, 'import'])->name('user.import');
        Route::get('export', [UserController::class, 'export'])->name('user.export');
        Route::get('demo', DemoController::class)->name('user.demo');
    });

    Route::prefix('menu-management')->group(function () {
        Route::resource('menu-group', MenuGroupController::class);
        Route::resource('menu-item', MenuItemController::class);
    });
    Route::group(['prefix' => 'role-and-permission'], function () {
        //role
        Route::resource('role', RoleController::class);
        Route::get('role/export', ExportRoleController::class)->name('role.export');
        Route::post('role/import', ImportRoleController::class)->name('role.import');

        //permission
        Route::resource('permission', PermissionController::class);
        Route::get('permission/export', ExportPermissionController::class)->name('permission.export');
        Route::post('permission/import', ImportPermissionController::class)->name('permission.import');

        //assign permission
        Route::get('assign', [AssignPermissionController::class, 'index'])->name('assign.index');
        Route::get('assign/create', [AssignPermissionController::class, 'create'])->name('assign.create');
        Route::get('assign/{role}/edit', [AssignPermissionController::class, 'edit'])->name('assign.edit');
        Route::put('assign/{role}', [AssignPermissionController::class, 'update'])->name('assign.update');
        Route::post('assign', [AssignPermissionController::class, 'store'])->name('assign.store');

        //assign user to role
        Route::get('assign-user', [AssignUserToRoleController::class, 'index'])->name('assign.user.index');
        Route::get('assign-user/create', [AssignUserToRoleController::class, 'create'])->name('assign.user.create');
        Route::post('assign-user', [AssignUserToRoleController::class, 'store'])->name('assign.user.store');
        Route::get('assing-user/{user}/edit', [AssignUserToRoleController::class, 'edit'])->name('assign.user.edit');
        Route::put('assign-user/{user}', [AssignUserToRoleController::class, 'update'])->name('assign.user.update');
    });
    Route::prefix('master-table-management')->group(function () {
        // kabupaten
        Route::post('kabupaten/import', [KabupatenController::class, 'import'])->name('kabupaten.import');
        Route::get('kabupaten/export', [KabupatenController::class, 'export'])->name('kabupaten.export');
        Route::resource('kabupaten', KabupatenController::class);

        // kecamatan
        Route::post('kecamatan/import', [KecamatanController::class, 'import'])->name('kecamatan.import');
        Route::get('kecamatan/export', [KecamatanController::class, 'export'])->name('kecamatan.export');
        Route::resource('kecamatan', KecamatanController::class);

        // Kelurahan
        Route::post('kelurahan/import', [KelurahanController::class, 'import'])->name('kelurahan.import');
        Route::get('kelurahan/export', [KelurahanController::class, 'export'])->name('kelurahan.export');
        Route::resource('kelurahan', KelurahanController::class);

        // master-jenis-usaha
        Route::post('jenis-usaha/import', [JenisUsahaController::class, 'import'])->name('jenis.usaha.import');
        Route::get('jenis-usaha/export', [JenisUsahaController::class, 'export'])->name('jenis.usaha.export');
        Route::resource('jenis-usaha', JenisUsahaController::class);

        // master-jenis-legalitas
        Route::post('jenis-legalitas/import', [JenisLegalitasController::class, 'import'])->name('jenis.legalitas.import');
        Route::get('jenis-legalitas/export', [JenisLegalitasController::class, 'export'])->name('jenis.legalitas.export');
        Route::resource('jenis-legalitas', JenisLegalitasController::class);

        // kegiatan usaha
        Route::post('kegiatan-usaha/import', [KegiatanUsahaController::class, 'import'])->name('kegiatan.usaha.import');
        Route::get('kegiatan-usaha/export', [KegiatanUsahaController::class, 'export'])->name('kegiatan.usaha.export');
        Route::resource('kegiatan-usaha', KegiatanUsahaController::class);
    });
});

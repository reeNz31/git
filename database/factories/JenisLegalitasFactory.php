<?php

namespace Database\Factories;

use App\Models\JenisLegalitas;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JenisLegalitas>
 */
class JenisLegalitasFactory extends Factory
{
    protected $model = JenisLegalitas::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            //

            // 'name' => $this->faker->name(),
        ];
    }
}

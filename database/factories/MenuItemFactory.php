<?php

namespace Database\Factories;

use App\Models\MenuItem;
use Illuminate\Database\Eloquent\Factories\Factory;

class MenuItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MenuItem::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */ 
    public function definition()
    {
        return [
            //
            'name' => $this->faker->sentence(2),
            'url' => $this->faker->url,
            'menu_group_id' => $this->faker->numberBetween(1, 5),
        ];
    }
}

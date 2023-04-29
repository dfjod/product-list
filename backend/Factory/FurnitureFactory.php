<?php

namespace Factory;

use Product\Furniture;

class FurnitureFactory implements ProductFactoryInterface {
    public function createProductClass($data)
    {
        return new Furniture($data);
    }
}
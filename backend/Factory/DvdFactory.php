<?php

namespace Factory;

use Product\Dvd;

class DvdFactory implements ProductFactoryInterface {
    public function createProductClass($data)
    {
        return new Dvd($data);
    }
}
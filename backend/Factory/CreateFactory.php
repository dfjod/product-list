<?php

namespace Factory;

class CreateFactory {
    public static function getFactory($type)
    {
        $className = ucfirst(strtolower($type)) . "Factory";
        return new $className();
    }
}
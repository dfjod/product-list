<?php

namespace Factory;

class CreateFactory {
    public static function getFactory($type)
    {
        $className = "Factory\\" . ucfirst(strtolower($type)) . "Factory";
        return new $className();
    }
}
<?php

const BASE_PATH = __DIR__ . '/../';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Type');

require BASE_PATH . "Core/functions.php";

spl_autoload_register(function ($class){
    $class = str_replace("\\", DIRECTORY_SEPARATOR, $class); 
    d($class);
    require base_path("{$class}.php");
});

require base_path("bootstrap.php");

$router = new Core\Router();
$routes = require base_path("routes.php");
$router->setUri();
$router->setMethod();
$something = $router->route();
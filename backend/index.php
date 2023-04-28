<?php
// header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Type');

require "functions.php";
require "Database.php";
require "Router.php";
$config = require "config.php";
$router = new Router();
$routes = require "routes.php";
$router->setUri();
$router->setMethod();
$something = $router->route();
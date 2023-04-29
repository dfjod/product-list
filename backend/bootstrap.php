<?php

use Core\App;
use Core\Container;
use Core\Database;

$container = new Container();

$container->bind(Database::class, function () {
    $config = require base_path('config.php');

    $db = new Database($config, "root", "SU1MVSY84NOPGO9W1D9E");
    return $db;
});

App::setContainer($container);
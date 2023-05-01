<?php

use Core\App;
use Core\Container;
use Core\Database;

$container = new Container();

$container->bind(Database::class, function () {
    $config = require base_path('config.php');
    extract($config); // database, user, passwd

    $db = new Database($database, $user, $passwd);
    return $db;
});

App::setContainer($container);
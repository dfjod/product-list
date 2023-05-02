<?php

use Core\App;
use Core\Database;
use Product\ProductManager;

$db = App::resolve(Database::class);

$manager = new ProductManager();

echo json_encode($manager->createProductsList($db));
<?php

use Core\App;
use Product\ProductManager;

$db = App::resolve(Core\Database::class);

$manager = new ProductManager();

$response = $manager->massDeleteProducts($db);

echo json_encode($response);
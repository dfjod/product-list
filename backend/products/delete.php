<?php

require "classes.php";
$config = require "config.php";

$db = new Database($config, "root", "SU1MVSY84NOPGO9W1D9E");

$productIds = json_decode(file_get_contents("php://input"), true);

foreach($productIds as $productId) {
    Product::deleteProduct($productId, $db);
}

$response = [
    'status' => 'success',
    'message' => 'Data received successfully',
    'data' => $data,
];

echo json_encode($response);
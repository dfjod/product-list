<?php

use Core\App;
use Product\Product;

$db = App::resolve(Core\Database::class);

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
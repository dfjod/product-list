<?php
require "classes.php";
$config = require "config.php";

$db = new Database($config, "root", "SU1MVSY84NOPGO9W1D9E");

$data = json_decode(file_get_contents("php://input"), true);

$productFactory = Factory::getFactory($data['type']);
$product = $productFactory->createProductClass($data);
$product->createProduct($db);

$response = [
    'status' => 'success',
    'message' => 'Data received successfully',
    'data' => $data,
];

echo json_encode($response);

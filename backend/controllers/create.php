<?php
use Core\App;
use Factory\CreateFactory;

$db = App::resolve(Core\Database::class);

$data = json_decode(file_get_contents("php://input"), true);

$productFactory = CreateFactory::getFactory($data['type']);

$product = $productFactory->createProductClass($data);

$response = $product->createProduct($db);

echo json_encode($response);

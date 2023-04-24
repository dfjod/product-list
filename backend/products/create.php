<?php

$products_query = "INSERT INTO products (sku, name, price, category_id) VALUES (':sku', ':name', ':price', '(SELECT category_id FROM categories WHERE LOWER(category_name) = LOWER(':category')');";
$get_last_product_id = "SET @last_product_id = LAST_INSERT_ID();";
$special_values_query = "INSERT INTO special_values (product_id, attribute_id, value) VALUES (@last_product_id, 'SET @attribute_id = (SELECT attribute_id FROM special_attributes WHERE attribute_name = ':attribute');', 'Special Value');";

$data = json_decode(file_get_contents("php://input"), true);

$response = [
    'status' => 'success',
    'message' => 'Data received successfully',
    'data' => $data,
];

echo json_encode($response);

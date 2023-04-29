<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

$products_query = "SELECT p.product_id, p.sku, p.name, p.price, c.category_name FROM products p JOIN categories c ON p.category_id = c.category_id;";
$special_values_query = "SELECT sv.product_id, sa.attribute_label, sv.value FROM special_values sv JOIN special_attributes sa ON sv.attribute_id = sa.attribute_id;";

$products = $db->query($products_query)->fetchAll();
$specialValues = $db->query($special_values_query)->fetchAll();

function createProductsList($products, $specialValues) {
    $productsList = [];
    foreach($products as $product) {
        $productsList[$product['product_id']] = [
            'sku' => $product['sku'],
            'name' => $product['name'],
            'price' => $product['price'],
            'category' => $product['category_name'],
        ];
        foreach($specialValues as $specialValue) {
            if($product['product_id'] === $specialValue['product_id']) {
                $productsList[$product['product_id']] = array_merge($productsList[$product['product_id']], [
                    $specialValue['attribute_label'] => $specialValue['value'],
                ]);
            }
        }
    }
    return $productsList;
}

$list = createProductsList($products, $specialValues);

echo json_encode($list);
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

require "functions.php";
require "Database.php";

$config = require "config.php";

$db = new Database($config, "root", "SU1MVSY84NOPGO9W1D9E");

$products = $db->query("
    SELECT 
        p.product_id,
        p.sku,
        p.name,
        p.price,
        c.category_name,
        GROUP_CONCAT(CONCAT(sa.attribute_name, ':', sv.value) SEPARATOR ';') AS special_values
    FROM products p
    JOIN categories c ON p.category_id = c.category_id
    LEFT JOIN special_values sv ON p.product_id = sv.product_id
    LEFT JOIN special_attributes sa ON sv.attribute_id = sa.attribute_id
    GROUP BY p.product_id, p.sku, p.name, p.price, c.category_name;
")->fetchAll();

echo json_encode($products);
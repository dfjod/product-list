<?php

$router->get('/', 'products/show.php');
$router->delete('/', 'products/delete.php');
$router->post('/add-product', 'products/create.php');
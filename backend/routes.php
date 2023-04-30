<?php

$router->get('/', base_path('controllers/index.php'));
$router->delete('/', base_path('controllers/delete.php'));
$router->post('/add-product', base_path('controllers/create.php'));
$router->options('/add-product', base_path('controllers/options.php'));
$router->options('/', base_path('controllers/options.php'));
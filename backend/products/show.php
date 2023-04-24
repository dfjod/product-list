<?php
echo "Show php";

$data = $db->query("SELECT * FROM `products` ")->fetchAll();

echo $data;
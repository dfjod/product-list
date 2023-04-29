<?php

namespace Product;

abstract class Product {
    protected $id;
    protected $sku;
    protected $name;
    protected $price;
    const SQL_DELETE = "DELETE FROM products WHERE product_id = :id;";
    private $sql_create_product = "INSERT INTO products (sku, name, price, category_id) VALUES (:sku, :name, :price, :categoryId);";

    public function __construct($data)
    {
        $this->sku = $data['sku'];
        $this->name = $data['name'];
        $this->price = $data['price'];
    }

    public function getId()
    {
        return $this->id;
    }

    protected function create($db, $categoryId)
    {
        $db->query($this->sql_create_product, [
            'sku' => $this->sku,
            'name' => $this->name,
            'price' => $this->price,
            'categoryId' => $categoryId,
        ]);
        $this->id = $db->lastInsertId();
    }

    public static function deleteProduct($productId, $database)
    {
        $database->query(Product::SQL_DELETE, [
            'id' => $productId,
        ]);
    }
}
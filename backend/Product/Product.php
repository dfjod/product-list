<?php

namespace Product;

abstract class Product {
    protected $id;
    protected $sku;
    protected $name;
    protected $price;
    const SQL_DELETE = "DELETE FROM products WHERE product_id = :id;";
    private $sql_create = "INSERT INTO products (sku, name, price, category_id) VALUES (:sku, :name, :price, :categoryId);";
    private $sql_sku = "SELECT COUNT(*) FROM products WHERE sku=:sku;";

    public function __construct($data)
    {
        $this->sku = $data['sku'];
        $this->name = $data['name'];
        $this->price = $data['price'];
    }

    public function validateSku($db)
    {
        $count = $db->query($this->sql_sku, [
            'sku' => $this->sku,
        ]);
        return $count === 0;
    }

    protected function create($db, $categoryId)
    {
        if(! $this->validateSku($db))
        {
            return [
                'success' => false,
                'message' => 'The SKU already exists!'
            ];
        }

        $db->query($this->sql_create, [
            'sku' => $this->sku,
            'name' => $this->name,
            'price' => $this->price,
            'categoryId' => $categoryId,
        ]);

        $this->id = $db->lastInsertId();
    }
}
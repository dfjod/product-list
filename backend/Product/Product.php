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
    private $sql_attributes = "INSERT INTO special_values (product_id, attribute_id, value) VALUES (:id, :attributeId, :value);";

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
        ])->fetch()['COUNT(*)'];

        return $count == 0;
    }

    protected function create($db, $categoryId)
    {
        $skuValid = $this->validateSku($db);

        if(!$skuValid)
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

        return [
            'success' => true,
        ];
    }

    protected function createAttributes($attributes, $db)
    {
        foreach($attributes as $attribute) {
            $db->query($this->sql_attributes, [
                'id' => $this->id,
                'attributeId' => $attribute['attributeId'],
                'value' => $attribute['attributeValue'],
            ]);
        }
    }
}
<?php

namespace Product;

class Book extends Product {
    protected $categoryId = 3;
    protected $sql_add_attributes = 1;
    protected $attributes = [
        'weight' => [
            'attributeId' => 2,
            'attributeValue' => null,
            'attributeMeasurement' => "KG",
        ]
    ];

    public function __construct($data)
    {
        parent::__construct($data);
        $this->attributes['weight']['attributeValue'] = $data['weight'];
    }

    public function createProduct($db)
    {
        $db->beginTransaction();

        $success = parent::create($db, $this->categoryId);

        if(! $success['success']) {
            echo json_encode($success);
            die;
        }
        
        $this->createAttributes($this->attributes, $db);

        $db->commit();

        return [
            'success' => true,
            'message' => "Product stored!"
        ];
    }
}
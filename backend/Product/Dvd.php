<?php

namespace Product;

class Dvd extends Product {
    protected $categoryId = 1;
    protected $attributes = [
        'size' => [
            'attributeId' => 1,
            'attributeValue' => null,
            'attributeMeasurement' => 'MB',
        ],
    ];

    public function __construct($data)
    {
        parent::__construct($data);
        $this->attributes['size']['attributeValue'] = $data['size'];
    }

    public function getAttributeValue()
    {
        return $this->attributes['size']['attributeValue'];
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
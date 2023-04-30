<?php

namespace Product;

class Furniture extends Product {
    protected $categoryId = 2;
    protected $attributes = [
        'height' => [
            'attributeId' => 3,
            'attributeValue' => null,
        ],
        'length' => [
            'attributeId' => 5,
            'attributeValue' => null,
        ],
        'width' => [
            'attributeId' => 4,
            'attributeValue' => null,
        ],
    ];

    public function __construct($data)
    {
        parent::__construct($data);
        $this->attributes['height']['attributeValue'] = $data['height'];
        $this->attributes['length']['attributeValue'] = $data['length'];
        $this->attributes['width']['attributeValue'] = $data['width'];
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
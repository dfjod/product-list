<?php

namespace Product;

class Book extends Product {
    protected $CATEGORY_ID = 3;
    protected $sql_add_attributes = 1;
    protected $attributes = [
        'weight' => [
            'attributeId' => 2,
            'attributeValue' => null,
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
        parent::create($db, $this->CATEGORY_ID);
        foreach($this->attributes as $attribute) {
            $db->query("INSERT INTO special_values (product_id, attribute_id, value) VALUES (:id, :attributeId, :value);", [
                'id' => $this->id,
                'attributeId' => $attribute['attributeId'],
                'value' => $attribute['attributeValue'],
            ]);
        }
        $db->commit();
    }
}
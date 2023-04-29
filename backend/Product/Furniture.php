<?php

namespace Product;

class Furniture extends Product {
    protected $CATEGORY_ID = 2;
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
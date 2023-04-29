<?php

namespace Product;

class Dvd extends Product {
    protected $CATEGORY_ID = 1;
    protected $attributes = [
        'size' => [
            'attributeId' => 1,
            'attributeValue' => null,
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
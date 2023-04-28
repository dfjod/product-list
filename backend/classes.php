<?php

// Factories

interface ProductFactory {
    public function createProductClass($data);
}

class BookFactory implements ProductFactory {
    public function createProductClass($data)
    {
        return new Book($data);
    }
}

class DvdFactory implements ProductFactory {
    public function createProductClass($data)
    {
        return new Dvd($data);
    }
}

class FurnitureFactory implements ProductFactory {
    public function createProductClass($data)
    {
        return new Furniture($data);
    }
}

class Factory {
    public static function getFactory($type)
    {
        $className = ucfirst(strtolower($type)) . "Factory";
        return new $className();
    }
}

// Classes

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
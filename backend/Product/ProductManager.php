<?php

namespace Product;

class ProductManager
{
    private $products_query = "SELECT p.product_id, p.sku, p.name, p.price, c.category_name FROM products p JOIN categories c ON p.category_id = c.category_id;";
    private $special_values_query = "SELECT sv.product_id, sa.attribute_label, sa.attribute_measurement, sv.value FROM special_values sv JOIN special_attributes sa ON sv.attribute_id = sa.attribute_id;"; 

    protected function getProducts($db)
    {
        return $db->query($this->products_query)->fetchAll();
    }

    protected function getSpecialValues($db)
    {
        return $db->query($this->special_values_query)->fetchAll();
    }

    protected function getIds()
    {
        return json_decode(file_get_contents("php://input"), true);
    }

    public function createProductsList($db)
    {
        $productsList = [];
        $products = $this->getProducts($db);
        $specialValues = $this->getSpecialValues($db);
        foreach($products as $product) {
            $productsList[$product['product_id']] = [
                'sku' => $product['sku'],
                'name' => $product['name'],
                'price' => $product['price'],
                'category' => $product['category_name'],
            ];
            foreach($specialValues as $specialValue) {
                if($product['product_id'] === $specialValue['product_id']) {
                    $productsList[$product['product_id']] = array_merge($productsList[$product['product_id']], [
                        $specialValue['attribute_label'] => $specialValue['value'],
                        'measurement' => $specialValue['attribute_measurement'],
                    ]);
                }
            }
        }
        return $productsList;
    }

    protected function deleteProduct($productId, $database)
    {
        $database->query(Product::SQL_DELETE, [
            'id' => $productId,
        ]);
    }

    public function massDeleteProducts($db)
    {
        $productIds = $this->getIds();
        foreach($productIds as $productId) {
            $this->deleteProduct($productId, $db);
        }
        return [
            'success' => true,
            'message' => 'Products are deleted successfully!'
        ];
    }
}
<?php

namespace Form;

class Form
{
    protected $sql_attributes = "SELECT c.category_name, sa.attribute_label, sa.attribute_measurement, sa.attribute_type, sa.attribute_description FROM special_attributes sa JOIN categories c ON sa.category_id = c.category_id;";
    protected $sql_categories = "SELECT category_name FROM categories";
    protected $inputFields = [];

    public function getInputFields($db)
    {
        $categories = $db->query($this->sql_categories)->fetchAll();
        $attributes = $db->query($this->sql_attributes)->fetchAll();

        foreach($categories as $category) {
            $this->inputFields[$category['category_name']] = [];

            foreach($attributes as $key => $attribute) {
                if($category['category_name']==$attribute['category_name']) {
                    $this->inputFields[$category['category_name']] = array_merge($this->inputFields[$category['category_name']], [$attribute['attribute_label']=>[
                        'label' => $attribute['attribute_label'],
                        'measurement' => $attribute['attribute_measurement'],
                        'description' => $attribute['attribute_description'],
                        'type' => $attribute['attribute_type'],
                    ]]);
                    
                    unset($attributes[$key]);
                }
            }
        }

        return $this->inputFields;
    }

    public function sendInputFields()
    {
        echo json_encode($this->inputFields);
    }
}
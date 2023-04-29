<?php

namespace Factory;

use Product\Book;

class BookFactory implements ProductFactoryInterface {
    public function createProductClass($data)
    {
        return new Book($data);
    }
}
<?php

function dd($value)
{
    echo '<pre>';
    var_dump($value);
    die();
}

function d($value)
{
    echo '<pre>';
    var_dump($value);
}

function base_path($path)
{
    return BASE_PATH . $path;
}
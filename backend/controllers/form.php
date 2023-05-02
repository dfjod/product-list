<?php

use Form\Form;
use Core\App;
use Core\Database;

$db = App::resolve(Database::class);
$form = new Form();
$form->getInputFields($db);
$form->sendInputFields();
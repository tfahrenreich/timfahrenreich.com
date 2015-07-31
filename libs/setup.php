<?php
/**
 * Created by PhpStorm.
 * User: tfahr_000
 * Date: 3/29/14
 * Time: 11:23 PM
 */
$path = $_SERVER['DOCUMENT_ROOT'];

require_once('Smarty-3.1.17/libs/Smarty.class.php');
require_once('Smarty.TF.class.php');
$smarty = New customSmarty();
$smarty->setTemplateDir($path.'/templates')
    ->setCompileDir($path.'/templates/templates_c')
    ->setCacheDir($path.'/templates/cache')
    ->force_compile = true;

$smarty->caching = 0;

<?php
/**
 * Created by PhpStorm.
 * User: tfahr_000
 * Date: 3/29/14
 * Time: 11:23 PM
 */

require_once('Smarty-3.1.17/libs/Smarty.class.php');
require_once('Smarty.TF.class.php');
$smarty = New customSmarty();
$smarty->setTemplateDir('../')
    ->setCompileDir('../templates_c')
    ->setCacheDir('../cache')
    ->force_compile = true;

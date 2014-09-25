<?php
include_once('libs/setup.php');

$page = array(
    "title" => "Tim Fahrenreich | Dev",
    "type" => "home",
    'content' => $smarty->fetch($path.'/templates/home.tpl'),
    "js" => null,
    "css" => array("/includes/css/home.less")
);

$smarty->run($page);
<?php
include_once('libs/setup.php');

$page = array(
    'content' => $smarty->fetch($path.'/templates/home.tpl')
);

$smarty->run($page);
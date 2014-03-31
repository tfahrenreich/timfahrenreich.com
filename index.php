<?php
include_once('libs/setup.php');

$page = array(
    'content' => $smarty->fetch('home.tpl')
);

$smarty->run($page, false);
<?php
require_once('../libs/setup.php');

$dir = '.';
$experiments = scandir($dir);
foreach ($experiments as $key => $value){
    if ($value == '.' || $value == '..' || $value == 'index.php'|| $value == 'img' || !is_dir('./'.$value)){
        unset($experiments[$key]);
    }
};
$smarty->assign('experiments' , $experiments);

$page = array(
    'content' => $smarty->fetch($path.'/templates/experiments/index.tpl')
);

$smarty->run($page);


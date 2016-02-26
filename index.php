<?php
include_once('libs/setup.php');

//Get Projects/Experiments
$workJson = file_get_contents("http://".$_SERVER['HTTP_HOST']."/projects/project.json");
$work = json_decode($workJson, true);
$smarty->assign("work", $work);
$smarty->assign("hidden", true);

$page = array(
    "title" => "Tim Fahrenreich | Dev",
    "type" => "home",
    'content' => $smarty->fetch($path.'/templates/index/home.tpl'),
    "js" => null,
    "css" => array("/includes/css/home.less")
);

$smarty->run($page);
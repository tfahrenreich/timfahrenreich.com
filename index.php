<?php
include_once('libs/setup.php');

//todo: remove this - added so i can push without 'publishing'
$lock = $_GET["p"];
if($lock !=="tF2015x"){
    die();
}

//Get Projects/Experiments
$workJson = file_get_contents("http://".$_SERVER['HTTP_HOST']."/projects/project.json");
$work = json_decode($workJson, true);
$smarty->assign("work", $work);

$page = array(
    "title" => "Tim Fahrenreich | Dev",
    "type" => "home",
    'content' => $smarty->fetch($path.'/templates/index/home.tpl'),
    "js" => null,
    "css" => array("/includes/css/home.less")
);

$smarty->run($page);
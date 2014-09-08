<?php
require_once('../libs/setup.php');

if (isset($_GET['post'])){
    $post = $_GET['post'];
    $html = 'posts/'.$post;
}else{
    $html = $path.'/templates/blog/index.tpl';
    $dir = 'posts';
    $posts = scandir($dir);
	foreach ($posts as $key => $value){
		if ($value == '.' || $value == '..' || $value == 'index.php'|| $value == 'img'){
			unset($posts[$key]);
		}
	};
    $smarty->assign('posts' , $posts);
}
$page = array(
    "title" => "blog home",
    "type" => "blog",
    "content" => $smarty->fetch($html),
    "js" => null,
    "css" => null
);
$smarty->run($page);


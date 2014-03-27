<?php

$dir = 'posts';
$posts = scandir($dir);

if ($_GET['post']){
		$post = $_GET['post'];
		echo($post);
}else{
	foreach ($posts as $key => $value) {
		if ($value == '.' || $value == '..' || $value == 'index.php') {
			unset($posts[$key]);
		}else{
			print('<a href="/blog/?post='.$value.'">'.$key.'</a><br>');		
		}
	};
}

?>
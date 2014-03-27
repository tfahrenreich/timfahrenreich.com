<?php

$from = "de--repente.tumblr.com";
$unto = "timfahrenreich.com/tumble";

$dir = 'posts';
$html = scandir($dir, 1);

foreach ($html as $key => $value) {
	if ($value = '.') {
		echo "ak";
	}else{
		print($value.'<br>');		
	}
};

?>
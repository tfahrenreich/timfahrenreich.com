<?php
class customSmarty extends Smarty{
    function run($page, $v = 1){
        $globalTemplate = array(
            1 => 'website.tpl',  // DEFAULT
        );
        $page404 = '404.shtml';
        if ($v <= 1){
            if ($page['content'] == true){
                $this->assign('page', $page);
                $this->display($globalTemplate[$v]);
            }else{
                $this->display($page404);
            }
        }elseif($v === 0){
            echo($page['content']);
        }else{
            echo "whoops";
        }
    }
}

<?php
class customSmarty extends Smarty{
    function run($page, $mtl = null){
        //global template
        //$globalTemplate = file_get_contents('../website.tpl');
        $globalTemplate = 'website.tpl';
        $page404 = '../404.shtml';
        if ($mtl === true|$mtl === null){
            if ($page['content'] == true){
                $this->assign('page', $page);
                $this->display($globalTemplate);
            }else{
                $this->display($page404);
            }
        }elseif($mtl===false){
            //$this->display($page['content']);
            echo($page['content']);
        }else{
            echo "whoops";
        }
    }
}

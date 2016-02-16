<?php
class customSmarty extends Smarty{
    function run($page){
        $globalTemplate =  'website.tpl';
        $page404 = '404.shtml';

        if ($page['content'] == true){
            $this->assign('page', $page);
            $this->display($globalTemplate);
        }else{
            $this->display($page404);
        }
    }
}

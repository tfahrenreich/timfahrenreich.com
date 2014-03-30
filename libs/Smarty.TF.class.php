<?php
class customSmarty extends Smarty{
    function run($page){
        //global template
        //$globalTemplate = file_get_contents('../website.tpl');
        $globalTemplate = 'website.tpl';

        if ($page['content'] == true){
            $this->assign('page', $page);
            $this->display($globalTemplate);
        }else{
            $this->display('../404.shtml');
        }

    }
}

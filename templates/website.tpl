<!DOCTYPE html>
<!--
,...       ,,                                                    ,,          ,,
mm    .d' ""     `7MM                                                    db        `7MM
MM    dM`          MM                                                                MM
mmMMmm mMMmm,6"Yb.   MMpMMMb. `7Mb,od8 .gP"Ya `7MMpMMMb. `7Mb,od8 .gP"Ya `7MM  ,p6"bo  MMpMMMb.
MM    MM 8)   MM   MM    MM   MM' "',M'   Yb  MM    MM   MM' "',M'   Yb  MM 6M'  OO  MM    MM
MM    MM  ,pm9MM   MM    MM   MM    8M""""""  MM    MM   MM    8M""""""  MM 8M       MM    MM
MM    MM 8M   MM   MM    MM   MM    YM.    ,  MM    MM   MM    YM.    ,  MM YM.    , MM    MM
`Mbm.JMML`Moo9^Yo.JMML  JMML.JMML.   `Mbmmd'.JMML  JMML.JMML.   `Mbmmd'.JMML.YMbmd'.JMML  JMML.
===============================================================================================
================================just pull at https://github.com/tfahrenreich/timfahrenreich.com
===============================================================================================
-->

<html class="{$page.type|default:''}">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="/includes/css/styles.less">
    <script src="/includes/js/vendor/jquery-1.11.1.min.js"></script>
    <title>{$page.title|default:'Tim Fahrenreich'}</title>
    {if $page.css|default:false}
        {foreach $page.css as $css}
            <link rel="stylesheet" type="text/css" href="{$css}">
        {/foreach}
    {/if}
    {if $page.js|default:false}
        {foreach $page.js as $js}
            <script src="{$js}"></script>
        {/foreach}
    {/if}
</head>
<body>
    {$page.content|default:''}
    {include file='partials/third-party-scripts.tpl'}
    <script src="/includes/js/scripts.js"></script>
</body>
</html>
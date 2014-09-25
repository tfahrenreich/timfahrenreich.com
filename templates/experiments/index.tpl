<h1>experiment index</h1>
{if $experiments|default:false}
    {foreach $experiments as $experiment}
        <a href="{$experiment}">{$experiment}</a>
    {/foreach}
{else}
    <p>no repos here right now</p>
{/if}
<h1>post index</h1>
{if $posts|default:false}
    {foreach $posts as $post}
        <a href="?post={$post}">{$post}</a>
    {/foreach}
{/if}

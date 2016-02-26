<section id="home-slide">
    {include file='index/home-1.tpl'}
</section>

{if !$hidden|default: false}
    <section data-resize id="about">
        {include file='index/home-about.tpl'}
    </section>
    <section data-resize id="third">
        {include file='index/home-port.tpl'}
    </section>
    <section data-resize id="contact">
        {include file='index/home-contact.tpl'}
    </section>
{/if}

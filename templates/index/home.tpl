<section id="home-slide">
    <h1>
        <span class="letter-container">Tim Fahrenreich</span>
        <small><span class="letter-container">Front End Developer + Designer</span></small>
        <p>I am a place holder text thats holds text in place of text. Please hold!</p>
    </h1>
</section>

<section data-resize id="about">
    ss
</section>
<section data-resize id="third">
    <div id="project-viewer">

    </div>
    <h2>Past project</h2>
    <ul class="project-list">
        {foreach $work[0].projects as $proj}
            <li>
                <div class="inner">
                    {include file='partials/project.tpl'}
                </div>
            </li>
        {/foreach}
    </ul>
</section>

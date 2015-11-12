<section id="home-slide">
    <h1>
        <span class="letter-container">Tim Fahrenreich</span>
        <small><span class="letter-container">Front End Developer + Designer</span></small>
        <p>I am a place holder text thats holds text in place of text. Please hold!</p>
    </h1>
</section>
<section data-resize id="about">
    <div class="container">
        <h2 class="section-header">About</h2>
    </div>
</section>
<section data-resize id="third">
    <div id="project-viewer">
        <div class="back">< back to projects</div>
        <div id="project-viewer-inner"></div>
    </div>
    <div class="panel-display">
        <div class="container">
            <h2 class="section-header">Projects</h2>
        </div>
        <ul class="project-list">
            {foreach $work[0].projects as $proj}
                {include file='partials/project.tpl'}
            {/foreach}
        </ul>
    </div>
</section>
<section data-resize id="contact">
    <div class="container">
        <h2 class="section-header">Contact</h2>
    </div>
</section>

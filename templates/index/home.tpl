<section id="home-slide">
    <h1>
        <span class="letter-container">Tim Fahrenreich</span>
        <small><span class="letter-container">Front End Developer + Designer</span></small>
    </h1>
</section>
<section data-resize id="about">
    <div class="container">
        <h2 class="section-header">About</h2>
        <p>I’m a Front-End Developer who lives and breathes HTML/CSS and Javascript. I create beautiful, simple and effective designs for web and mobile applications from soup to nuts.
            I work alongside developers, copywriters, and product owners to create elegant user experiences; I should thrive on feedback, critique and iteration.

            I'm strongly focused on modularity and maintainability and I pay great attention to details.

            I have over 6 years of experience looking to create challenging and innovative web products.


            My design background, along with my experience as a developer allows me to take care of a project from concept and design, through to execution and delivery.
        </p>
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

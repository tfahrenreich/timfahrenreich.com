<span class="debris"></span>
<div id="project-viewer">
    <div class="container">
        <div id="project-viewer-inner"></div>
        <div class="bottom">
            <a class="back button">
                <span>back to projects</span>
            </a>
        </div>
    </div>
</div>
<div class="panel-display">
    <div class="container">
        <h2 class="section-header">Projects</h2>
        <ul class="project-list">
            {foreach $work[0].projects as $proj}
                {include file='partials/project.tpl'}
            {/foreach}
        </ul>
    </div>
</div>

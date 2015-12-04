<span class="debris"></span>
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

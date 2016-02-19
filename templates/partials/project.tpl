<li class="{$proj.size|default:""}">
    <a class="inner" data-href="{$proj.templateUrl}" onclick="projectDisplay(event,'{$proj.templateUrl}', '{$proj.color}');">
        <div class="info">
            <div class="background"></div>
            <i style="background-position: center {$proj.bgpos}"></i>
            <div class="desc">
                <h4>{$proj.name}</h4>
                <p>{$proj.description|default:''}</p>
            </div>
        </div>
        <img src="/includes/i/cover_{$proj.templateUrl}.jpg">
    </a>
</li>


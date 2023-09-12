function load_theme()
{
    let theme = getCookie("theme");
    if(theme==undefined){theme="light";}
    document.body.classList.remove(document.body.classList[0]);
    document.body.classList.add(theme);
}

function toggle_theme()
{
    let themes = ["light", "dark"];
    let old_theme = document.body.classList[0];
    let new_theme = themes[0];
    if(themes[0]==old_theme){new_theme = themes[1];}
    setCookie("theme",new_theme);
    load_theme();
}

load_theme();
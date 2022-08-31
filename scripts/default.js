function toggle_visibility_id(id) 
{
    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

document.getElementById("loading-screen").innerHTML = '<img src="/images/svg/loading_logo2.svg" style="height: 25em;"><img id="loading-img" src="/images/svg/loading_logo1.svg" style="height: 25em;">';
document.getElementById("side-panel").innerHTML = '<a href="/" style="width: 100%; margin: 0; padding: 0; text-align: center;"> <img src="/images/svg/logo.svg"> </a> <ul> <li><a href="/pages/news/">Новости</a></li> <li><a href="/pages/gallery/">Галерея</a></li> <li><a href="/pages/projects/">Проекты</a></li> <li><a href="/pages/others/" id="current-page">Прочее</a></li> <li><a href="/pages/about/">Об авторе</a></li> <li> <a href="https://t.me/MisterMasterOfficial" style="display: flex; flex-direction: column;" target="_blank"> <img src="/images/svg/telegram_logo.svg" width="50%" style="margin-left: auto; margin-right: auto;"> Telegram </a> </li> </ul>';
document.getElementById("top-panel").innerHTML = '<div id="top-panel-top"> <a href="/"> <img src="/images/svg/logo.svg" height="100%"> </a> <button type="button" style="padding: auto;" onclick="toggle_visibility_id("top-panel-dropdown");"> <img src="/images/svg/menu-burger.svg" height="80"> </button> </div> <div id="top-panel-dropdown"> <ul> <li><a href="/pages/news/">Новости</a></li> <li><a href="/pages/gallery/">Галерея</a></li> <li><a href="/pages/projects/">Проекты</a></li> <li><a href="/pages/others/" id="current-page">Прочее</a></li> <li><a href="/pages/about/">Об авторе</a></li> <li> <a href="https://t.me/MisterMasterOfficial" style="display: inline-flex; justify-content: center; align-items: center;" target="_blank"> <img src="/images/svg/telegram_logo.svg" width="10%"> Telegram </a> </li> </ul> </div>';

function onReady(callback)
{
    var intervalId = window.setInterval(function()
    {
        if (document.getElementsByTagName('body')[0] !== undefined)
        {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}

function setVisible(selector, visible)
{
    document.querySelector(selector).style.display = visible ? 'block' :'none';
}

onReady(function()
{
    setVisible('#loading-screen', false);
});
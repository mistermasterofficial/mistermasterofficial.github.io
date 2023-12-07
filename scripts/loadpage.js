document.getElementsByTagName("head")[0].innerHTML = document.getElementsByTagName("head")[0].innerHTML + `
<meta name="viewport" content="width=device-width, user-scalable=no">
<meta name="theme-color" content="#5790C1">
<meta name="description" content="Проекты, галерея и шестиугольники.">
<meta name="keywords" content="Мистер Мастер, Mister Master, Mr Master">
<link href="/styles/background.css" rel="stylesheet">
<link rel="icon" href="/images/favicon.ico"/>
<meta http-equiv="content-language" content="ru">
`;
document.getElementsByTagName("nav")[0].innerHTML = `
<button onclick="toggle_theme();" title="Переключить тему">
    <img src="/images/svg/toggle_theme.svg" height="100%">
</button>
<a href="/" title="На главную">
    <img src="/images/svg/logo.svg" height="100%">
</a>
<a href="#top" title="Вернуться к началу">
    <img src="/images/svg/vector-to-top.svg" height="100%">
</a>
`;
document.getElementsByTagName("footer")[0].innerHTML = `
<h2>
<a href="https://t.me/MisterMasterOfficial">Telegram</a>
</h2>
<h2>
<a href="https://mistermastergames.itch.io/">itch.io</a>
</h2>
<h2>
<a href="https://www.behance.net/misteriomaster">Behance</a>
</h2>
<h2>
<a href="https://ru.pinterest.com/misteriomaster00/">Pinterest</a>
</h2>
<h2>
Fonts: Caviar Dreams.<br>© Mister Master ${new Date().getFullYear()}
</h2>
`;
document.getElementsByTagName("body")[0].innerHTML = `
<div id="top"></div>
` + document.getElementsByTagName("body")[0].innerHTML;

setTimeout(()=>document.getElementById("loading-screen").style.display = "none", 1500);
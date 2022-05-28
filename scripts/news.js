function setVisible(selector, visible)
{
    document.querySelector(selector).style.display = visible ? 'block' :'none';
}

function hide_all_news()
{
    setVisible('#start-site', false);
}
function setVisible(selector, visible)
{
    document.querySelector(selector).style.display = visible ? 'block' :'none';
}

function hide_all_news(selectors)
{
    for (let i = 0; i < selectors.length; i++)
    {
        setVisible(selectors[i], false);
    }
}

function visibleOnly(selectors, selector)
{
    hide_all_news(selectors); setVisible(selector, true);
}
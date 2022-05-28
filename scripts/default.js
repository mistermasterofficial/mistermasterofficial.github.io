function toggle_visibility_id(id) 
{
    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}



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
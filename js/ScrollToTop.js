var html, body, scrollTopButton;

window.onload = function()
{
    html = document.documentElement;
    body = document.body;
    scrollTopButton = document.getElementById("scrolltop");
};

window.onscroll = controlScrollTopButton;

function controlScrollTopButton()
{
    //Lay chieu cao cua trinh duyet 
    var windowInnerHeight = window.innerHeight;

    if(body.scrollTop >  windowInnerHeight || html.scrollTop > windowInnerHeight)
    {
        scrollTopButton.classList.add("show");
    }
    else
    {
        scrollTopButton.classList.remove("show");
    }
}
/**===> Cuon chuot xuong hien nut scroll top*/


function scrollToTop(totalTime, easingPower)
{
    var timeInterval = 1;//in ms
    var scrollTop = Math.round(body.scrollTop || html.scrollTop);

    var timeLeft = totalTime;
    var scrollByPixel = setInterval(function()
    {
        var percentSpent = (totalTime - timeLeft) / totalTime;
        if(timeLeft >= 0)
        {
            var newScrollTop = scrollTop * (1-easeInOut(percentSpent, easingPower));
            body.scrollTop = newScrollTop;
            html.scrollTop = newScrollTop;
            timeLeft--;
        }
        else
        {
            clearInterval(scrollByPixel);
        }
    }, timeInterval);
}

function easeInOut(t, power)
{
    if(t < 0.5)
    {
        return 0.5 * Math.pow(2*t,power);
    }
    else
    {
        return 0.5 * (2 - Math.pow(2 * (1-t),power));
    }
}    
function scrollAppear()
{
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    // console.log(introPosition);
    var screenPosition = window.innerHeight / 2;
    console.log(screenPosition);
    if(introPosition < screenPosition)
    {
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear);
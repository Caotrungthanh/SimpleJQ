console.log("HEEEEEE");

$(document).ready(function()
{
    $('.submit').click(function(event)
    {
        //Var() lấy giá trị hoặc thay đổi thành phần
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()

        var statusElm = $('.status')
        statusElm.empty() 

        //Email thỏa mãn ít nhất 5 ký tự và phải bao gồm @ và .
        if(email.length > 5 && email.includes('@') && email.includes('.'))
        {
            statusElm.append('<div>Email is valid</div>')
        }
        else
        {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2)
        {
            statusElm.append('<div>Subject is valid</div>')
        }
        else
        {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }

        if(message.length >= 10)
        {
            statusElm.append('<div>Message is valid</div>')
        }
        else
        {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }
    })
})







//show contact
$(document).ready(function()
{
    $('.toggle').click(function()
    {
        $('.form').toggleClass('active');
    })
})
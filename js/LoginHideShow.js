var pwd = document.getElementById('pwd');
var eye = document.getElementById('eye');

eye.addEventListener('click',togglePass)

function togglePass()
{
    eye.classList.toggle('active');

    (pwd.type == 'password') ? pwd.type = 'text' : pwd.type = 'password';
}

function checkStuff()
{
    var email = document.forml.email;
    var password = document.forml.password;
    var msg = document.getElementById('msg');

    if(email.value == "")
    {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter your email";
        email.focus();
        return false;
    }
    else
    {
        msg.innerHTML = "";
    }

    if(password.value == "")
    {
        msg.innerHTML = "Please enter your password";
        password.focus();
        return false;
    }
    else
    {
        msg.innerHTML = "";
    }

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(email.value))
    {
        msg.innerHTML = "Email was miss '@' or '.com'";
        email.focus();
        return false;
    }
    else
    {
        msg.innerHTML = "";
    }
}
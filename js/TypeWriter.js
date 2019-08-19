var i = 0;
var text = "i'm Cao Trung Thanh";
var speed = 100;

function TypeWriter()
{
    if(i < text.length)
    {
        document.getElementById('demo').innerHTML += text.charAt(i);
        i++;
        setTimeout(TypeWriter,speed);
    }
}

var b =parseInt(getFontSize());
const paragraph = document.querySelector(".paragraph");
const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
var currentBTNMode = getCurrentBTNMode();

var currentColor = getColor();
if (currentBTNMode != "#fff")
{
    body.style.color = currentColor;
}
const colorPicker = new iro.ColorPicker("#color-picker",{
    width:180,color: currentColor
});
colorPicker.on('color:change',function(color){
    body.style.color = color.hexString;
    localStorage.setItem('color', color.hexString);
});


paragraph.style.fontSize = b +"px";
if ( currentBTNMode != 1){
    toggle.classList.add("active");
    body.style.backgroundColor = "white";
}



function copy(){
    var copyText = paragraph.innerText;
    navigator.clipboard.writeText(copyText);
}

function zoomIn(){
    b = b + 5;
    $("p").css("fontSize", b);
    setFontSize(b);
}

function zoomOut(){
    b = b - 5;
    $("p").css("fontSize", b);
    setFontSize(b);
}


function setFontSize(b)
{
    localStorage.setItem('fontSize',b);
}
function getFontSize()
{
    
    if (localStorage.getItem('fontSize') === null)
    {
    
        return 15;
    }
    else if (localStorage.getItem('fontSize') < 0)
    {
        return 0;
    }
    else{
        return localStorage.getItem('fontSize');
    }
}

function DNMode(){
    toggle.classList.toggle("active");
    if (toggle.classList.contains("active")){
        body.style.backgroundColor = "white";
        currentBTNMode = -1;
        localStorage.setItem("cur",currentBTNMode);
    }else{
        body.style.backgroundColor = "#"+(82).toString(16)+(79).toString(16)+(79).toString(16);
        currentBTNMode = 1
        localStorage.setItem("cur",currentBTNMode);
    }
}

function getCurrentBTNMode()
{
    
    if (localStorage.getItem('cur') === null)
    {
        return 1;
    }
    else
    {
        return localStorage.getItem('cur');
    }
}

function getColor(){
    if (localStorage.getItem('color') === null)
    {
        return '#fff';
    }
    else
    {
        return localStorage.getItem('color');
    }
}
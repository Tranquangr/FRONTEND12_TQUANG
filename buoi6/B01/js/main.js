const x = document.getElementsByClassName("box");
var max = 0;
for(let i=0; i <x.length;i++)
{
   let y = x[i].offsetHeight;
    max = (y>=max) ? y : max;
    console.log(max);
}
for(let i=0; i <x.length;i++)
{
   x[i].style.height = max + "px";
}


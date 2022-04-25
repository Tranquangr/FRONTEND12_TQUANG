const box = document.querySelectorAll(".box");
for (let i = 0 ; i <= box.length;i++)
{
   box[i].addEventListener("click",function(){
      console.log(box[i].innerHTML);
   })
}


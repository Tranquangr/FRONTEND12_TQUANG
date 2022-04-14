
function Tamgiac(){
    let x = document.getElementById("fname").value;
    let result ="";
    if (x > 5)
    {
        document.getElementById("area-result").innerHTML = "Xin nhập số bé hơn để cho nó đẹp ( ^ _ ^ )";
    
    }else if (x < 2){
        document.getElementById("area-result").innerHTML = "Xin nhập số lớn hơn để cho nó đẹp và không dc nhỏ hơn không nhé anh bạn !!!";
    }
    else{
        for (let y = 0; y <= x;y++)
        {
            for (let k = y ; k <= x ; k++)
            {
                if (k == x )
                {
                 result += k + "<br>";
                }
                else
                {
                 result+=(k + "-");
                }
            }
        }
        document.getElementById("area-result").innerHTML = result;
    }
   
}
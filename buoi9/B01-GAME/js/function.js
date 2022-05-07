$(document).ready(function(){
    $("[data-toggle='tooltip']").tooltip(); // Initialize Tooltip

   
});

//Lấy dữ liệu người dùng chọn mức độ show ra số lượng các ô tương ứng
function numberCells(obj)
{
    num = -1;
    for (let i = 0 ; i<numberSelected.length;i++) {
        numberSelected[i].innerHTML= "";
    }
    boxRecommend.innerHTML="";
    areaHandle.innerHTML="";
    let value = obj.value;
    if(value == 1)
    {
        randomNumber = Math.round(Math.random() * 24)
        console.log(randomNumber);
        for (let i = 0 ; i< 24; i++)
        {
            let box = createBox();
            let valueE = document.createAttribute("value");
            valueE.value = i ;
            box.setAttributeNode(valueE); 
            box.innerHTML = i;
            areaHandle.appendChild(box);
        }
    }else if (value == 2)
    {
        randomNumber = Math.round(Math.random() * 30)
        console.log(randomNumber);
        for (let i = 0 ; i< 30; i++)
        {
            let box = createBox();
            let valueE = document.createAttribute("value");
            valueE.value = i ;
            box.setAttributeNode(valueE); 
            box.innerHTML = i;
            areaHandle.appendChild(box);
        }
    }else
    {
        randomNumber = Math.round(Math.random() * 36)
        console.log(randomNumber);
        for (let i = 0 ; i< 36; i++)
        {
            let box = createBox();
            let valueE = document.createAttribute("value");
            valueE.value = i ;
            box.setAttributeNode(valueE); 
            box.innerHTML = i;
            areaHandle.appendChild(box);
        }
    }
    boxHandle = areaHandle.querySelectorAll(".box");

    //add event listeners cho các box vừa tạo để lấy value.
    for(let i = 0 ; i <boxHandle.length ;i++)
    {
        boxHandle[i].addEventListener("click",function() {
            num+=1;
            if (num<2)
            {
                if (boxHandle[i].getAttribute('value') == randomNumber) {
                    boxHandle[i].style.backgroundColor = "green";
                    boxHandle[i].style.color = "white";
                    numberSelected[num].innerHTML = randomNumber;
                    choice = confirm("Bạn đã chiến thắng, Chơi lại?")
                    location.reload();
                }
                else
                {
                    boxHandle[i].style.backgroundColor = "red";
                    boxHandle[i].style.color = "white";
                    numberSelected[num].innerHTML = boxHandle[i].getAttribute('value');
                    let rec = createRec();
                    let text = "";
                    if (boxHandle[i].getAttribute('value') < randomNumber)
                    {
                        text = " Số của bạn nhỏ hơn số bí mật";
                    }
                    else
                    {
                        text = " Số của bạn lớn hơn số bí mật"
                    }
                    
                    boxRecommend.appendChild(rec);
                    document.querySelectorAll(".boxRecommend .card-body p")[num].innerText =(num+1) + ". Lần " + (num+1) + ": " + boxHandle[i].getAttribute('value') + text ;
                    
                }
            }else
            {
                choice = confirm("Bạn đã thua, Chơi lại?")
                location.reload();
            }
           
        })
    }



}


//Hàm tạo box
function createBox(){
    let box = document.createElement("div");
    box.classList.add("box");
    box.classList.add("me-2");
    box.classList.add("my-2");
    return box;
}

function createRec(){
    let box = document.createElement("div");
    let title  = document.createElement("h3")
    title.innerText = "SAI RỒI"
    let desc = document.createElement("p");
    box.appendChild(title);
    box.appendChild(desc);
    return box;
}

$(document).ready(function(){
    $("[data-toggle='tooltip']").tooltip(); // Initialize Tooltip

   
});

//Lấy dữ liệu người dùng chọn mức độ show ra số lượng các ô tương ứng
function numberCells(obj)
{
    $("#funcHelp").show();
    num = -1;
    for (let i = 0 ; i<numberSelected.length;i++) {
        numberSelected[i].innerHTML= "";
    }
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
                    let rec = createRec();
                    let text = "Bạn đã chọn chính xác";
                    boxRecommend.appendChild(rec);
                    $("h3").last().text("ĐÚNG RỒI");
                    $("p").last().text(text);
                    let result = createResult();
                    result.innerHTML = "Số bí mật là:" + randomNumber;
                    setTimeout(function () {
                        nameRank = prompt("Bạn muốn lưu danh sử sách thì điền tiên nhé !!!");
                    
                        if (value == 1)
                        {
                                scoreRank = 100 - num*10;
                        }else if (value == 2)
                        {
                                scoreRank = 200 - num*10;
                        }else{
                                scoreRank = 300- num*10;
                        }
                        
                        var obj = {
                            name : nameRank,
                            score : scoreRank,
                        }
                    },50)
                    boxRecommend.appendChild(result);
                    list.push(obj);
                    render(list);
                    save_json(list);
                    setTimeout(function(){
                        choice = confirm("Bạn đã chiến thắng, Chơi lại?")
                        location.reload();
                    },100);
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
            }
            if(num==2)
            {
                if (boxHandle[i].getAttribute('value') == randomNumber) {
                    boxHandle[i].style.backgroundColor = "green";
                    boxHandle[i].style.color = "white";
                    let rec = createRec();
                    let text = "Bạn đã chọn chính xác";
                    boxRecommend.appendChild(rec);
                    $("h3").last().text("ĐÚNG RỒI");
                    $("p").last().text(text);
                    let result = createResult();
                    result.innerHTML = "Số bí mật là:" + randomNumber;
                    boxRecommend.appendChild(result);
                    setTimeout(function(){
                        nameRank = prompt("Bạn muốn lưu danh sử sách thì điền tiên nhé !!!");
                        if (value == 1)
                        {
                                scoreRank = 100 - num*10;
                        }else if (value == 2)
                        {
                                scoreRank = 200 - num*10;
                        }else{
                                scoreRank = 300- num*10;
                        }
                        var obj = {
                            name : nameRank,
                            score : scoreRank,
                        }
                    },50)
                    list.push(obj);
                    render(list);
                    save_json(list);
                    setTimeout(function(){
                        choice = confirm("Bạn đã chiến thắng, Chơi lại?")
                        location.reload();
                    },100);}
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

                        let result = createResult();
                        result.innerHTML = "Số bí mật là:" + randomNumber;
                        boxRecommend.appendChild(result);
                        setTimeout(function(){
                            choice = confirm("Bạn đã thua, Chơi lại?")
                            location.reload();
                        },500)
                        
                    }
            }
            boxNumberSelected.style.display ="flex";    
           
        })
    }



}

function help1(){
    if (select_level.value ==1)
    {
        const box =document.querySelectorAll(".box");
        let i = box.length;
        while (i>6)
        {
            let randomBox = Math.round(Math.random() * 24);
            console.log(box[randomBox].getAttribute("value"));
            if (box[randomBox].getAttribute("value") != randomNumber && randomBox > 2)
            {
                box[randomBox].style.display = "none";
                i--;
            }
        }
    }else if (select_level.value ==2)
    {
        const box =document.querySelectorAll(".box");
        let i = box.length;
        while (i>6)
        {
            let randomBox = Math.round(Math.random() * 30);
            console.log(box[randomBox].getAttribute("value"));
            if (box[randomBox].getAttribute("value") != randomNumber && randomBox > 2)
            {
                box[randomBox].style.display = "none";
                i--;
            }
        }
    }
    else{
        const box =document.querySelectorAll(".box");
        let i = box.length;
        while (i>6)
        {
            let randomBox = Math.round(Math.random() * 36);
            console.log(box[randomBox].getAttribute("value"));
            if (box[randomBox].getAttribute("value") != randomNumber && randomBox > 2)
            {
                box[randomBox].style.display = "none";
                i--;
            }
        }
    }
}

function help2(){
    let randomBox = Math.round(Math.random() * 24);
    alert("gOOgle mách bẢO bạn lÀ: " + "---->  " +randomBox +"   <-----");
}

function help3(){
    b = b + 5;
    console.log(b);
    $(".box").css("fontSize", b);
    
}

//Hàm tạo box
function createBox(){
    let box = document.createElement("div");
    box.classList.add("box");
    box.classList.add("me-2");
    box.classList.add("my-2");
    box.classList.add("animate__animated");
    box.classList.add("animate__tada");
    box.classList.add("animate__slow");
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

function createResult(){
    let box = document.createElement("div");
    return box;
}

function showRanK(){
    document.querySelector(".modal_rank").style.display = "flex";
}
function hideRank(){
    document.querySelector(".modal_rank").style.display = "none";
}

function render(list){
    var html= "";
    for(var i = 0 ; i< list.length; i++){
        html+='<tr>';
        html+='<td>'+ list[i].name +'</td>';
        html+='<td>'+ list[i].score +'</td>';
        html+='</tr>';
    }
    result.innerHTML=html
}

function getJSON(){
    if (localStorage.getItem("list") === null) {
        localStorage.setItem('list',[]);
      }
    else
    {
        list = JSON.parse(localStorage.getItem('list'));
        list.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
        console.log(list);
        render(list);
    }
}

function save_json(list){
    var jsonString = JSON.stringify(list);
    localStorage.setItem('list',jsonString);
}
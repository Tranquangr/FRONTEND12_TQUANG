//Khai báo mảng chứa phần các phần tử trong To do list
var list =[];
var list_search=[];
//Vùng để in to do List
const body = document.getElementById('result')

//mới khởi động kiểm tra dữ liệu từ local storage có dữ liệu gì ko để in ra
if (localStorage.getItem("list") === null) {
    localStorage.setItem('list',[]);
  }
else
{
    list = JSON.parse(localStorage.getItem('list'));
    renderView(list);
}

//Sự kiện button add phần tử vào mảng và cho hiện ra list trên màn hình

var btn_add = document.getElementById("btn_add");
btn_add.addEventListener("click", function(){
    addList();
})


//Sự kiện nhập dữ liệu bằng enter
var inputData =document.getElementById("input-data");
inputData.addEventListener("keydown",function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        addList();
    }
})




//Viết 1 function addList
function addList()
{
    const task_name = document.getElementById('input-data').value;
    const level_name = document.querySelector('.level').value;
    var obj={
        task: task_name,
        level: level_name
    }
    if (current == -1)
    {
        list.push(obj)
    }else{
        list[current] = obj;
        current = -1;
        btn_add.innerHTML = "ADD"
    }
    renderView(list);
    save_json(list)
}

//View lại các phần tử hiện tại có trong mảng
function renderView(list)
{
    var html= "";
    for(var i = 0 ; i< list.length; i++){
        html+='<tr>';
        html+='<td>'+ (i+1) +'</td>';
        html+='<td>'+ list[i].task +'</td>';
        if (list[i].level==='Medium')
        {
            html+='<td>'+ '<button type="button" class="btn_medium btn_design">Medium</button>' +'</td>';
        }
        else if (list[i].level==='Small')
        {
            html+='<td>'+ '<button type="button" class="btn_small btn_design">Small</button>' +'</td>';
        }
        else{
            html+='<td>'+ '<button type="button" class="btn_high btn_design">High</button>' +'</td>';
        }
        html+='<td>'+ '<button type="button" class="btn btn-warning" onclick="edit_item('+ i +')">Edit</button> <button type="button" class="btn btn-danger" onclick="delete_item('+ i +')">Delete</button>' +'</td>'
    }
    body.innerHTML=html
}

//function delete phần tử trong mảng
function delete_item(index){
    list.splice(index,1);
    renderView(list);
    save_json(list);
}

//function edit phần tử trong mảng
var current = -1;
function edit_item(index){
    current = index;
    var x = list[index];
    document.getElementById("input-data").value = x.task;
    document.querySelector('.level').value = x.level;
    btn_add.innerHTML = "EDIT"
}

//function search data

function search_data(){
    let valueSearchInput= document.getElementById("input-search").value;
    let listSearch = list.filter(value => {
            return value.task.toUpperCase().includes(valueSearchInput.toUpperCase())
    })
    renderView(listSearch);
}

function save_json(list){
    var jsonString = JSON.stringify(list);
    localStorage.setItem('list',jsonString);
}
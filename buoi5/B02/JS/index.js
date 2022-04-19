//FUNTION LÀM SILDER
window.addEventListener("load", function(){

    //  Header Slide 
    const slider = document.querySelector(".slide");
    const sliderMain = document.querySelector(".carousel_inner");
    const sliderItems = document.querySelectorAll(".item_header");
    const dotItems= document.querySelectorAll(".carousel_indicator_item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    const lineUp = document.getElementsByClassName("lineUp");
    let index = 0;
    // khu vực tạo nhấp vào dotItem slide chạy
    // Gán mặc định ở vị trí đầu tiên
    lineUp[index].classList.add("line_indicator");
    dotItems[index].style.opacity = "1";
    let a= document.querySelector(".line_indicator");
    a.style.transform = `translateX(0%)`;

    [...dotItems].forEach(item => item.addEventListener("click", function(e){
        for (let i = 0 ; i < lineUp.length ;i++)
        {
            lineUp[i].classList.remove("line_indicator");
            dotItems[i].style.opacity = "0.6";
        }
        const slideIndex= parseInt(e.target.dataset.index);
        index = slideIndex;
        lineUp[index].classList.add("line_indicator");
        dotItems[index].style.opacity = "1";
        let b = document.querySelector(".line_indicator");
        b.style.transform = `translateX(0%)`;
        sliderMain.style.transform = `translateX(-${sliderItemWidth * index}px)`
    }))


    // Khu vực chạy tự động dotItem tự chuyển đổi
    setInterval(myF, 5000);
    function myF() {
        for (let i = 0 ; i < lineUp.length ;i++)
        {
            lineUp[i].classList.remove("line_indicator");
            dotItems[i].style.opacity = "0.6";
        }
        console.log(slidesLength)
        if (index >= slidesLength-1)
        {
            index = 0;
        }
        else
        {
            index+=1;
        }
        lineUp[index].classList.add("line_indicator");
        dotItems[index].style.opacity = "1";
        let c = document.querySelector(".line_indicator");
        c.style.transform = `translateX(0%)`;
        sliderMain.style.transform = `translateX(-${sliderItemWidth * index}px)`;

    }
    // End Header Slide


    // Hover effect porfolio
    const box = document.querySelector(".item11")
    const amen = document.querySelector(".hover_effect_porfolio1")
    const boxh = box.offsetHeight;
    const boxw = box.offsetWidth;
    box.addEventListener("mouseenter",update)
    function update(e)
    {
        console.log("đây là tọa độ vào:")
        console.log(e.offsetX, e.offsetY)
        //Vào dưới
        if (Math.abs(e.offsetY - boxh)<50)
        {
            amen.style.top = "100%";
            amen.style.left = "0"
            amen.style.zIndex = "10";
            amen.style.display = "block";
            setTimeout(() => {
                amen.style.top="0";
            }, 100);
        }
        // Vào trái
        if (e.offsetX < 50)
        {
            amen.style.left = "-100%";
            amen.style.top = "0";
            amen.style.zIndex = "10";
            amen.style.display = "block";
            setTimeout(() => {
                amen.style.left="0";
            }, 100);
        }
        //Vào phải
        if (Math.abs(e.offsetX - boxw)<50)
        {
            amen.style.left= "100%"
            amen.style.top = "0";
            amen.style.zIndex = "10";
            amen.style.display = "block";
            setTimeout(() => {
                amen.style.left="0";
            }, 100);
        }
        //Vào trên
        if (e.offsetY<50)
        {
            amen.style.top = "-100%";
            amen.style.left= "0";
            amen.style.zIndex = "10";
            amen.style.display = "block";
            setTimeout(() => {
                amen.style.top="0";
            }, 100);
        }
        
        
    }
    box.addEventListener("mouseleave",update1)
    function update1(e)
    {
        console.log("đây là tọa độ ra:")
        console.log(e.offsetX, e.offsetY)
        // Thoát trên
        if (e.offsetY < 0 ){
            amen.style.top = "-100%";
            setTimeout(() => {
                amen.style.display = "none";
                amen.style.zIndex = "-1";
            }, 250);
        }
        
        // Thoát phải
        if (Math.abs(e.offsetX-boxw)<50)
        {
            amen.style.left = "100%";
            setTimeout(() => {
                amen.style.display = "none";
                amen.style.zIndex = "-1";
            }, 250);
        }
        // Thoát trái
        if (e.offsetX < 50)
        {
            amen.style.left = "-100%";
            setTimeout(() => {
                amen.style.display = "none";
                amen.style.zIndex = "-1";
            }, 250);
        }
        //Thoát dưới
        if (Math.abs(e.offsetY-boxh)<50)
        {
            amen.style.top = "100%"
            setTimeout(() => {
                amen.style.display = "none";
                amen.style.zIndex = "-1";
            }, 250);
        }
    }

// ẩn hiện map
const map = document.querySelector(".map_heading");
const content_map = document.querySelector(".content_map");
let flag_map=0;
map.addEventListener("click",function(){
    if (flag_map == 0)
    {
        
        content_map.style.display="block";
        document.getElementById("button_map").innerHTML = "CLOSE MAP";
        flag_map=Math.random();
    }
    else
    {
        document.getElementById("button_map").innerHTML = "OPEN MAP"
        flag_map = 0;
        content_map.style.display="none";
    }
})
}
)

//Scroll vượt qua phần home sẽ chuyển đổi nav thành fixed
const scrollnav = document.getElementById("mogo_navbar");
const header = document.getElementById("Home").offsetHeight;
window.addEventListener("scroll",function(){
    if (window.pageYOffset >= header/2)
    {
        scrollnav.style.transform = `translateY(-100%)`
    }
    else{
        scrollnav.style.transform = `translateY(0%)`
    }
    if (window.pageYOffset >= header)
    {
        scrollnav.style.position = "fixed";
        scrollnav.style.top = "0";
        scrollnav.style.left = "0";
        scrollnav.style.right = "0";
        scrollnav.style.background = "rgba(241,114,114,0.96)";
        scrollnav.style.zIndex = "100";
        scrollnav.style.transform = `translateY(0%)`
    }
    else
    {
        scrollnav.style.position = "relative";
        scrollnav.style.background = "none";
    }
})

// Ẩn hiện body panel what we do
const dotPanels = document.querySelectorAll(".panel_title");
const panel_body = document.querySelectorAll(".panel_body");
let actived_index = 0 ;
let flag = 0 ;
[...dotPanels].forEach(item => item.addEventListener("click", function(f){
    const index_panel = parseInt(f.target.dataset.index);
    if (index_panel == actived_index)
    {
        panel_body[index_panel].classList.remove("open");
        flag+=1;
        if ((flag > 0) && (flag %2 == 0))
        {
            panel_body[index_panel].classList.add("open");
            flag = 0;
        }
    }
    else{
        panel_body[actived_index].classList.remove("open");
        panel_body[index_panel].classList.add("open");
        flag = 0;
    }
    actived_index = index_panel;
}
))

//SLIDER ELUAVATE
const slider1=document.querySelector(".eluavate");
const sliderMain1=document.querySelector(".eluavate_slides");
const sliderItems1 =document.querySelectorAll(".eluavate_item")
const nextBtn = document.querySelector(".arrow-right");
const prevBtn = document.querySelector(".arrow-left");
const sliderItemWidth1 = sliderItems1[0].offsetWidth;
let positionX = 0;
nextBtn.addEventListener("click",function(){
    handleChangeSlide(1)
})
prevBtn.addEventListener("click",function(){
    handleChangeSlide(-1)
})
function handleChangeSlide (direction)
{
    if (direction == 1)
    {
        if (-(positionX/sliderItemWidth1) >= (sliderItems1.length-1))
        {
            
            positionX = 0 ;
        }
        else{
            positionX -= sliderItemWidth1;
            
        }
        sliderMain1.style = `transform : translateX(${positionX}px)`

        
    }
    else if (direction == -1)
    {
            if (positionX == 0)
            {
                positionX = - sliderItemWidth1*(sliderItems1.length -1);
                
            }
            else{
                positionX += sliderItemWidth1;
            }
            sliderMain1.style = `transform : translateX(${positionX}px)`
        
    }
}

//SLIDER ELUAVATE2
const slider2=document.querySelector(".eluavate1");
const sliderMain2=document.querySelector(".eluavate_slides1");
const sliderItems2 =document.querySelectorAll(".eluavate_item1")
const nextBtn1 = document.querySelector(".arrow-right1");
const prevBtn1 = document.querySelector(".arrow-left1");
const sliderItemWidth2 = sliderItems2[0].offsetWidth;
let positionX1 = 0;
nextBtn1.addEventListener("click",function(){
    handleChangeSlide1(1)
})
prevBtn1.addEventListener("click",function(){
    handleChangeSlide1(-1)
})
function handleChangeSlide1 (direction)
{
    if (direction == 1)
    {
        if (-(positionX1/sliderItemWidth2) >= (sliderItems2.length-1))
        {
            
            positionX1 = 0 ;
        }
        else{
            positionX1 -= sliderItemWidth2;
            
        }
        sliderMain2.style = `transform : translateX(${positionX1}px)`

        
    }
    else if (direction == -1)
    {
            if (positionX1 == 0)
            {
                positionX1 = - sliderItemWidth2*(sliderItems2.length -1);
                
            }
            else{
                positionX1 += sliderItemWidth2;
            }
            sliderMain2.style = `transform : translateX(${positionX1}px)`
        
    }
}

//CONTENT MAP
const map = document.querySelector(".map_heading");
const content_map = document.querySelector(".content_map");
let flag_map=0;
map.addEventListener("click",function(){
    if (flag_map == 0)
    {
        content_map.style.display="block";
    }
    if (flag_map == 1)
    {
        document.getElementById("button_map").innerHTML = "OPEN MAP"
        flag_map = 0;
        content_map.style.display="none";
    }
})



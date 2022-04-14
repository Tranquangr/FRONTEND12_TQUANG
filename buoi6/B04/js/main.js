const element = document.getElementsByTagName("img");

for (let i = 0 ; i < element.length ; i++) {
        element[i].addEventListener("error", MYF);
}

function MYF(){
    this.src = "./img/tải xuống.png"
}
/* 
    - ý tưởng của bài này là lấy nội dung của thẻ , sau đó cắt nội dung của thẻ thành mảng ngăn cách bởi dấu cách.
    - Tiếp tục duyệt mảng tìm tới giá trị cần tìm để gắn span vào (span đã dc css sẵn)
    - Cuối cùng gắn mảng lại thành 1 chuỗi và đẩy lại thẻ.
    *Lưu ý : đối với dữ liệu của thẻ các từ sát vào nhau thì sử lý mảng theo kiểu khác. Này gặp vấn đề thì giải quyết sau
*/

let data = document.getElementById("myP").innerHTML;
let substringData = data.split(" ");

for (let i = 0 ; i < substringData.length ; i++)
{
    if ( substringData[i] == "CON")
    {
        substringData[i] = "<span>" + substringData[i] +  "</span>"
    }
}
data = substringData.join(" ");
console.log(data);
document.getElementById("myP").innerHTML = data;
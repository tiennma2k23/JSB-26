// Cơ bản:
alert("Bài 1");
console.log("Bài 1");
let num_people=Number(prompt("Số lượng người tham gia bữa tiệc:"));
let num_pizza=Number(prompt("Số lượng pizza có trong bữa tiệc:"));
console.log("Số pizza mỗi người được ăn là :",(num_pizza*8)/num_people);

alert("Bài 2");
console.log("Bài 2");
let nhiet_do=Number(prompt("Nhiệt độ ngoài trời bây giờ là: "));
if (nhiet_do<-12 || nhiet_do>40) 
{
    console.log("Với nhiệt độ là:",nhiet_do,"thì không sống đươc.");
}
else if (nhiet_do>=12 && nhiet_do<=0) 
{
    console.log("Với nhiệt độ là:",nhiet_do,"thì siêu lạnh.");
}
else if (nhiet_do>0 && nhiet_do<=15)
{
    console.log("Với nhiệt độ là:",nhiet_do,"thì lạnh.");
}
else if (nhiet_do>15 && nhiet_do<=25)
{
    console.log("Với nhiệt độ là:",nhiet_do,"thì mát.");
}
else if (nhiet_do>25 && nhiet_do<=40)
{
    console.log("Với nhiệt độ là:",nhiet_do,"thì nóng.");
}

alert("Bài 3");
console.log("Bài 3");
for (var i=1;i<=10;i++)
{
    let name=prompt("Tên của người thứ "+String(i)+" là:");
    console.log("Người thứ",i,"có tên là:",name);
}

alert("Bài 4+5");
console.log("Bài 4+5");
let num_book=Number(prompt("Số sách cần thêm vào: "));
let cnt=0;
let a=[];
while (num_book)
{
    cnt++;
    let name_book=prompt("Quyển sách thứ "+String(cnt)+" có tên là:");
    a.push(name_book);
    num_book--;
}
console.log("Các quyển sách được thêm vào lần lượt là: ","\n");
for (let st of a) console.log(st ,"\n");

//Nâng cao
alert("Phần nâng cao");
let product=["Quần bò","Áo sơ mi","Mũ len"];
while (true)
{
    let question=prompt("Bạn muốn làm gì ? ( Nếu không muốn làm gì thì nhập 0)");
    if (question=="0") 
    {
        console.log("Các sản phẩm có trong giỏ hàng là: ");
        console.log(...product);
        break;
    } 
    else if (question=="C")
    {
        let name_product=prompt("Tên sản phẩm bạn muốn thêm: ")
        product.push(name_product);
    }
    else if (question=="R")
    {
        console.log("Các sản phẩm có trong giỏ hàng là: ");
        console.log(...product);
    }
    else if (question=="U")
    {
        let pos=Number(prompt("Sản phẩm bạn cần thay thế ở vị trí: "));
        let replace_product=(prompt("Bạn cần thay thế sản phẩm "+String(product[pos-1])+"bằng sản phẩm:"));
        product[pos-1]=replace_product;
    }
    else 
    {
        console.log("Các sản phẩm có trong giỏ hàng là: ");
        console.log(...product);
        let pos=Number(prompt("Sản phẩm bạn cần xóa ở vị trí: "));
        delete(product[pos-1]);
    }
}
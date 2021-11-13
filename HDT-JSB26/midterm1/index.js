alert("Cau 1");
let person=Number(prompt("The number of people"));
let pizza=Number(prompt("The number of pizza"));
console.log(pizza*8/person);

alert("Cau 2");
let temp=Number(prompt("The temperature today ?"));
if (temp<-12 || temp>40) console.log("Can't live");
else if (temp>=-12&&temp<0) console.log("Extra cold");
else if (temp>=0&& temp<15) console.log("Cold");
else if (temp>=15&&temp<25) console.log("Cool");
else console.log("Hot");

alert("Cau 3");
for (let i=0;i<10;i++)
{
    let name=prompt("What is your name ?");
    console.log("Tên của người thứ",i+1,"là:",name);
}

alert("Cau 4");
function Sum(a,b) {
    return a+b;
}
let n1=Number(prompt("Number 1 is: "));
let n2=Number(prompt("Number 2 is: "));
console.log(Sum(n1,n2));

alert("Cau 5");
let Student={
    Name:"David",
    Job:"Coder",
    Address:"America",
    Age:40,
};
console.log(Student);

alert("Cau 6");
let product=["Jeans", "T-shirt", "Short"];
console.log(product);

alert("Cau 7");
while (true)
{
    let question=prompt("Bạn muốn làm gì ? ( Nếu không muốn làm gì thì nhập 0)");
    if (question=="0") 
    {
        console.log("Các sản phẩm có ở cửa hàng là: ");
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
        console.log("Các sản phẩm có ở cửa hàng là: ");
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
        console.log("Các sản phẩm có ở cửa hàng là: ");
        console.log(...product);
        let pos=Number(prompt("Sản phẩm bạn cần xóa ở vị trí: "));
        delete(product[pos-1]);
    }
}
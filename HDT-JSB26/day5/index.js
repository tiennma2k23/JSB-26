// let female=Number(prompt("Female Student: "));
// let male=Number(prompt("Male Student: "));
// let sum=female+male;
// if (sum>100)
// {
//     alert("Quá nhiều học sinh");
// }
// else if (sum>=30)
// {
//     alert("Đủ học sinh");
// }
// else 
// {
//     alert("Ít học sinh");
// }
let employee=["A","B","C","D","E"];
// let num=Number(prompt("Số lượng nhân viên"));
// for (let i=1;i<=num;i++)
// {
//     let name=prompt("Tên công nhân:");
//     employee.push(name);
// }
let cnt=0;
while (true)
{
    let ck;
    if (cnt==0)
    {
        console.log("Danh sách nhân viên còn:")
        for (let i in employee) 
        {
            console.log(employee[i],"\n");
        }
        ck=Number(prompt("Bạn có muốn xóa nhân viên nào không? (Chỉ nhập 0 hoặc 1)"));
    }
    else 
    {
        console.log("Danh sách nhân viên còn:")
        for (let i in employee) 
        {
            console.log(employee[i],"\n");
        }
        ck=Number(prompt("Bạn còn muốn xóa nhân viên nào không? (Chỉ nhập 0 hoặc 1)"));
    }
    if (ck==1)
        {
            let pos=Number(prompt("Thứ tự nhân viện bạn muốn xóa? (Bắt đầu từ 1) "));
            
            delete employee[pos-1];
            
            //employee.splice(pos-1,1);
        }
    else 
    {
        console.log("Sau các lần xóa danh sách nhân viên còn:")
        for (let i in employee) 
        {
            console.log(employee[i],"\n");
        }
        break;
    }
    cnt++;
}
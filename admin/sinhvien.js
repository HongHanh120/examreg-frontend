function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
let danhsachsinhvien = [{
    mssv: "17020633",
    student_name: "Nguyen Van A",
    datebirth:"1/1/1999",
    student_mail:"abcd@gmail.com"
},{
    mssv: "17020633",
    student_name: "Nguyen Van A",
    datebirth:"1/1/1999",
    student_mail:"abcd@gmail.com"
}];
let studentTable = $('#studentTable')[0];
for(let i=0; i<danhsachsinhvien.length; i++){
    let row = studentTable.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1);
    let cell3 = row.insertCell(-1);
    let cell4 = row.insertCell(-1);
    let cell5 = row.insertCell(-1);
    let cell6 = row.insertCell(-1);
    cell1.innerHTML = i+1;
    cell2.innerHTML = danhsachsinhvien[i].mssv;
    cell3.innerHTML = danhsachsinhvien[i].student_name;
    cell4.innerHTML = danhsachsinhvien[i].datebirth;
    cell5.innerHTML = danhsachsinhvien[i].student_mail;
    cell6.innerHTML = "<i class=\"far fa-edit\"></i>,<i class=\"fas fa-trash-alt\"></i>" ;

}


function clickme() {
    console.log("No click")
}





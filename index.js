// let user=[
//     {
//         'name':"Kuldeep",
//         'email':"kuldeep@gmail.com",
//         'phone':"638698098"
//     },
//     {
//         'name':"Harry",
//         'email':"harry@gmail.com",
//         'phone':"98456898"
//     },
//     {
//         'name':"Kiran",
//         'email':"kiran@gmail.com",
//         'phone':"68698098"
//     }
// ]
// localStorage.setItem("name",JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem("name")));
// let arr=[10,20,30,40,50];
// arr.splice(2,1);
// console.log(arr);


let form=document.querySelector("form")
let main=document.querySelector(".main");
// console.log(form);
form.addEventListener("submit",(event)=>{
    // console.log(event);
    let name=event.target.uname.value;
    let email=event.target.email.value;
    let phone=event.target.phone.value;
    // console.log(name,email,phone);
    let checkStatus=0;

    let userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];
    for(let v of userData){
        if(v.email==email || v.phone==phone){
            checkStatus=1;
            break;
        }
    }
    if(checkStatus==1){
        alert("Email or phone already Exist...")
    }
userData.push({
    'name':name,
    'email':email,
    'phone':phone
})
// console.log(userData);
localStorage.setItem("userDetails",JSON.stringify(userData))
event.target.reset();
displayData();

event.preventDefault();
})


let displayData=()=>{
    let userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];
    // console.log(userData);
    let finalData='';
    userData.forEach((element,i)=>{
        console.log(element.name);
        finalData +=`<div class="items">
        <span onClick='removeData(${i})'>&times</span>
        <h3>Name:</h3>
        <div>${element.name}</div>
        <h3>Email: </h3>
        <div>${element.email}</div>
        <h3>Phone</h3>
        <div>${element.phone}</div>
    </div>`
    })
    // console.log(finalData);
    main.innerHTML=finalData;
}
let removeData=(index)=>{
  let userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.splice(index,1);
  localStorage.setItem("userDetails",JSON.stringify(userData))
  displayData();
}
displayData();
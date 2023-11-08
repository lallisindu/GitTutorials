function test(){
    var uid=document.getElementById("userName").value;
    var emailid=document.getElementById("email").value;
    var pw=document.getElementById("passWord").value;
    
    /*var user=localStorage.setItem("uid", uid);
    var pass=localStorage.setItem("pw", pw);
    var em=localStorage.setItem("emailid",emailid);*/

/*let myObj={
    name:"lalli",
    adress:"chittoor"
}
const myObj_serialized=JSON.stringify(myObj);
console.log(myObj_serialized)
localStorage.setItem("myObj",myObj_serialized);

let myobj_deserialized=JSON.parse(localStorage.getItem("myObj"));
console.log(myobj_deserialized);*/
/*var user={
    userName : uid,
    email : emailid,
    passWord : pw

};
var json=JSON.stringify(user);
localStorage.setItem("userName",json);
*/
let obj={
    uid,
    emailid,
    pw
}
localStorage.setItem(obj.emailid, JSON.stringify(obj));
showUserOnscreen(obj);
function showUserOnscreen(obj){
    var parentEle=document.getElementById("listOfitems");
    var childEle=document.createElement('li');
    childEle.textContent=obj.uid+"-"+obj.emailid+"-"+obj.pw;
    const deletButton=document.createElement('input')
    deletButton.type="button";
    deletButton.value="Delete"
    deletButton.onclick=()=>{
        localStorage.removeItem(obj.emailid)
        parentEle.removeChild(childEle)
    }
    const etButton=document.createElement('input')
    etButton.type="button";
    etButton.value="Edit"
    etButton.onclick=()=>{
        //localStorage.removeItem(obj.emailid)
        //parentEle.removeChild(childEle)
        document.getElementById("userName").value=obj.uid
        document.getElementById("email").value=obj.emailid
        document.getElementById("passWord").value=obj.pw

    }
    childEle.appendChild(etButton)
    childEle.appendChild(deletButton)
    parentEle.appendChild(childEle)
    //parentEle.innerHTML=parentEle + `<li> ${obj.uid}-${obj.emailid}-${obj.pw}</li>`;
}
}

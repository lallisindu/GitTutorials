function saveToNetwork(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    
    const obj = {
       name,
       email,
       phone,  
    }
    axios.post("https://crudcrud.com/api/f71c6adb44234ab49dc4130c20152c56/Data", obj)
    .then((response)=>{
        showUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err)=>{
        document.body.innerHTML = document.body.innerHTML +"<h4> something went wrong</h4>";
        console.log(err)
    })
   
    //localStorage.setItem('obj',JSON.stringify(obj))
    //showUserOnScreen(obj)
}
window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("https://crudcrud.com/api/f71c6adb44234ab49dc4130c20152c56/Data")
    .then((response)=>{
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
        }
    })
    .catch((error)=>{
        console.log(error)
    })
})
function showUserOnScreen(obj){
    const parentELem = document.getElementById('listOfitems')
    const childElem = document.createElement('li')
    childElem.textContent= obj.name+' - '+obj.email+' - '+obj.phone;
    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value= 'Delete';
    deleteButton.onclick =() => {
        axios.delete(`https://crudcrud.com/api/f71c6adb44234ab49dc4130c20152c56/Data/${obj._id}`)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
        parentELem.removeChild(childElem);
    }
    const editButton = document.createElement('input');
    editButton.type='button';
    editButton.value ='Edit';
    editButton.onclick =() => {
        localStorage.removeItem(obj.email);
        parentELem.removeChild(childElem);
        document.getElementById('usernameInputTag').value=obj.name;
        document.getElementById('emailInputTag').value=obj.email;
        document.getElementById('phoneNumberInputTag').value=obj.phone;
    }
    childElem.appendChild(deleteButton)
    childElem.appendChild(editButton)
    parentELem.appendChild(childElem)
    editButton.onclick =() => {     
          axios.put(`https://crudcrud.com/api/f71c6adb44234ab49dc4130c20152c56/Data/${obj._id}`)
        .then((response)=>{
            console.log(response.data)
            showUserOnScreen(response.data);    
        })
        .catch((error)=>{
            console.log(error);
        })
        document.getElementById("name").value= obj.name;
        document.getElementById("email").value= obj.email;
        document.getElementById("phone").value= obj.phone;

        parentELem.removeChild(childElem);  
    };

    childElem.appendChild(editButton);
    childElem.appendChild(deleteButton);
    parentELem.appendChild(childElem);
}

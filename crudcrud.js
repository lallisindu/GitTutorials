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
    axios.post("https://crudcrud.com/api/9ede535b57d441c2bb98707fdecf27cd/data", obj)
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
    axios.get("https://crudcrud.com/api/9ede535b57d441c2bb98707fdecf27cd/data")
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
        localStorage.removeItem(obj.email)
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
}
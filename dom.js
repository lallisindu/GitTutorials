//console.dir(document);
//console.dir(document.domain);
//var headTitle=document.getElementById("main-header" );
//headTitle.style.borderBottom="solid 2px #000";
//var additem=document.getElementsByClassName("title");
//additem.style.fontweight="bold";
//additem.style.fontcolor="Green";
//var items=document.getElementsByClassName("list-group-item");
//items[2].style.bockgroundcolor="Green";
//items.style.additem.style.fontweight="bold";
//var li5=document.getElementsByClassName("list-group-item");
//console.log("li5");
//var li=document.getElementsByTagName("li");
//console.log(li);
/*var items=document.getElementsByClassName("list-group-item");
items[1].style.bockgroundcolor="Green";
var seconditem=document.querySelector(".list-group-item:nth-child(2)");
seconditem.style.color="Green";
var odd=document.querySelectorAll("li:nth-child(ood)");
for (var i=0; i<odd.length;i++){
    odd[i].style.bagroundcolor="Green"
}*/
/*var itemlist=document.querySelector("#items");
console.log(itemlist.parentNode);
console.log(itemlist.parentElement);
console.log(itemlist.children);
console.log(itemlist.children[1]);
console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);
console.log(itemlist.lastChild );
console.log(itemlist.lastElementChild);
console.log(itemlist.nextElementSibling);
console.log(itemlist.nextSibling);
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);*/
/*var newDiv=document.createElement("div");
newDiv.className="hello";
newDiv.id="hello1";
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode("HEllo");
newDiv.appendChild(newDivText);
console.log(newDiv );
var container=document.querySelector("header .container");
var h1=document.querySelector('header h1');
console.log(newDiv)
container.insertBefore(newDiv, h1)

var newNode=document.createElement("list-group-item");
var Text1=document.createTextNode("HEllo")
newNode.appendChild(Text1);
var list=document.getElementById("items");
list.insertBefore(newNode,list.children[0]);*/
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter=document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup',filterItems);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('item1').value;
  
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem1));
  

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn=document.createElement('button')


  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className="btn btn-sm float-right editBtn";


  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn)

  // Append li to list
  itemList.appendChild(li);

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
    
  });
  
  Array.from(items).forEach(function(item1){
    var itemName1 = item1.childNodes[1].textContent;
    
    if(itemName1.toLowerCase().indexOf(text) != -1){
      item1.style.display = 'block';
    } else {
      item1.style.display = 'none';
    }
    
  });
}
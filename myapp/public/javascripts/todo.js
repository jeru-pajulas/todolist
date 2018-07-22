let button = document.getElementById('todolist');
button.addEventListener('click', buttonClick);

function buttonClick(){
    //console.log("Button Clicked");
    //console.log(document.getElementById('todoitem').value);
    let ulist = document.createElement('ul');
    let list = document.createElement('li');
    let node = document.createTextNode(document.getElementById('todoitem').value);
    ulist.appendChild(list);
    list.appendChild(node)
    let element = document.getElementById('div1');
    element.appendChild(ulist);
}
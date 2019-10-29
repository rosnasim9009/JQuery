function showDiv()
{
  var i=document.getElementById('desc');
  i.style.display='block';
}

function addItem(){
    var ul = document.getElementById('myList');
    var c=document.getElementById('count');
    var candidate = document.getElementById('des');
    var li = document.createElement('li');
    li.setAttribute('class','hot');
    li.appendChild(document.createTextNode(des.value));
    ul.appendChild(li);
    var n=ul.children.length;
    c.value=n;
}

function add()
{
  if(event.key==='Enter')
  {
    var ul = document.getElementById('myList');
    var candidate = document.getElementById('des');
    var li = document.createElement('li');
    li.setAttribute('id',candidate.value);
    li.setAttribute('onclick','remove(this.id)')
    li.appendChild(document.createTextNode(des.value));
    ul.appendChild(li);
    candidate.value="";
  }
}

function remove(ids) {
  var list = document.getElementById('myList');
  var li=document.getElementById(ids);
  list.removeChild(li );
}

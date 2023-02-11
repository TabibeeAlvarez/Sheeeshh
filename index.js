document.getElementById('yesButton').addEventListener("click", function(){
    alert("Sheesh");
})

var b = document.getElementById('no')
b.addEventListener('click', change);

function change(){
    var i = Math.floor(Math.random()*300)+1;
    var j = Math.floor(Math.random()*500)+1;
    b.style.left = i+"px"
    b.style.top = j+"px"
}
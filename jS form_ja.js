//form validation

var sub = document.getElementById("sd");
sub.onclick=function validate(){

    var n= document.getElementById("fn");
    var m= document.getElementById("pw");

    if(n.value==''|| m.value==''){
        alert("Field can't be empty");

    }
    else{}
    if(m.value.length<3 || m.value>15){
        alert("Password is not valid");
    }

    var str=n.value.slice(0,1);
    if(str=='_' || str=='$'){
        alert("Name is not valid!")
    }
}
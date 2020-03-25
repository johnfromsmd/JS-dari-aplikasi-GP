// f1
function sc(){
        document.cookie = "username=John victory";
    }

// f2
function gc(){
        if(document.cookie.length!=0){
            alert(document.cookie);
        } else {
            alert("Cookie not avaible");
        }
    }

// f3
function sc2(){
        document.cookie = "username=John Defeat";
    }


// f4
function gc2(){
    if(document.cookie.length!=0){
        var array = document.cookie.split("=");
        alert("Name=" + array[0] + " " + "Value=" + array[1]);
    } else {
        alert("Cookie not avaible");
    }
}

// f5
function display(){
        var value = document.getElementById("color").value;
        if(value != "Select Color"){
            document.bgColor = value;
            document.cookie = "color=" + value;
        }
    }
    window.onload = function(){
        if(document.cookie.length !=0){
            var array = document.cookie.split("=");
            document.getElementById("color").value = array[1];
            document.bgColor = array[1];
        }
    }
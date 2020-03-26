// f1
function sc(){
        document.cookie = "username=John victory;expires=Sun, 20 Aug 2030 12:00:00 UTC";
    }

// f2
function gc(){
        if(document.cookie.length!=0){
            var aray = document.cookie.split("=");
            alert("Name= " + array[0] + " " + "Value= " + array[1]);
        } else {
            alert("Cookie Not avaible");
        }
    }

// f3
function sc2(){
        document.cookie = "username=John Defeat;max-age=" + (60* 60 * 24 *365) +",";
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
function date3(){
    window.onload = function(){
        getTime();
    }
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers < 10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML=h+":"+m+":"+s;
    setTimeout(() => {
        
    }, timeout);
}   
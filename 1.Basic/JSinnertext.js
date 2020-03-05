function validate(){
        var msg;
        if(document.form1.userPass.value.length>5){
            msg="Good";
        } else {
            msg="Ugly";
        }
        document.getElementById('mylocation').innerText=msg;
    }

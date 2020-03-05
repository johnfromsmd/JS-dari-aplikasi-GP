function validateform(){
        var name = document.form1.name.value;
        var password = document.form1.password.value;

        if(nama==null || nama==""){
            alert("Nama tidak boleh kosong");
            return false;
        } else if(password.length<6){
            alert("Password harus 6 karaker");
            return false
        }
    }

function matchpass(){
    var password1 = document.form1.password1.value;
    var password2 = document.form1.password2.value;

    if(password1 == password2){
        return true;
    } else {
        alert("Password Tidak Sama");
        return false;
    }
}

function validate(){
    var number = document.myform1.number.value;
    if(isNaN(number)){
        document.getElementById("numloc").innerHTML="Masukkan Number saja";
        return false;
    } else {
        return true;
    }
}


function validate2(){
    var nama = document.myform2.nama.value;
    var password = document.myform2.password.value;
    var status = false;

    if(name.length<1){
        document.getElementById("namaloc").innerHTML="<img src='5.png'/>Masukkan Nama:";
        status = false;
    } else {
        document.getElementById("namaloc").innerHTML="<img src='5.png'/>";
        status = true;
    }
    if(password.length<6){
        document.getElementById("passwordloc").innerHTML="<img src='5.png'/>Password harus lebih dari 6 karakter";
        status = false;
    } else {
        document.getElementById("passwordloc").innerHTML="<img src='5.png'/>";
        return status;
    }
    }

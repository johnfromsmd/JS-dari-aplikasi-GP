function comentform(){
        var flag=true;
        var data = "<form action='Comment'>Masukkan Nama: <input type='text' name='nama'/><br>Masukkan Email: <br><input type='email' name='email'/><br/><textarea rows='5' cols='70'></textarea><br><input type='submit' value='Tambah Komentar'/></form>";
        
        if(flag){
        document.getElementById('mylocation').innerHTML=data;
        flag = false;
        } else {
        document.getElementById('mylocation').innerHTML="";
        }
    }

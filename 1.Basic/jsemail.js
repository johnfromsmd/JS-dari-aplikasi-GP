function validateemail(){
     var x = document.form1.email.value;
     var at = x.indexOf("@");
     var dot = x.lastIndexOf(".");
     if(at<1 || dot<at+2 || dot+2>=x.length){
          alert("Please enter a valid email address \n at:" +at+"\n dot:" +dot);
          return false;          
     }
}
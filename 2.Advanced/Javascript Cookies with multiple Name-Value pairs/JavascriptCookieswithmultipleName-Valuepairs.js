// f1
function setCookie(){
    // Declaring 3 key-value pairs
    var info = "Name=" +document.getElementById("name").value+";Email=" + document.getElementById("email").value+";Course=" + document.getElementById("course").value;
    // Providing all 3 key-value pairs to a single cookie
    document.cookie=info;
}

// f2

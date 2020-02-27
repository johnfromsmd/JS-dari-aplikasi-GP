var grade = 'B';
var result;
function switchca(){
    switch(grade){
    case 'A':
        result += "A grade";
    break;
    case 'B':
        result += "B grade";
    break;
    case 'C':
        result += "C grade";
    break;
    default: 
    result += "Not Grade"
    }
    document.write(grade + "<br>" + "Hasil Grade += " + result);
}
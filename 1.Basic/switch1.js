var grade = 'B';
var result;
function switchc(){
    switch(grade){
    case 'A':
        result = "A grade";
    break;
    case 'B':
        result = "B grade";
    break;
    case 'C':
        result = "C grade";
    break;
    case 'D':
        result = "D grade";
    break;
    case 'E':
        result = "E grade";
    break;
    default: 
    result = "Not Grade"
    }
    document.write(grade + "<br>" + "Hasil Grade = " + result);
}
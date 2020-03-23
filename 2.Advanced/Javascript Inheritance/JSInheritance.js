// f1
function ibo(){
    class Moment extends Date {
        constructor(){
            super();
        }
    }
    var m = new Moment();
    document.writeln("Current date:");
    document.writeln(m.getDate() + "-" +(m.getMonth()+1) + "-" + m.getFullYear());
}

// f2
function ibo2(){
    class Moment extends Date {
        constructor(year){
            super(year);
        }
    }
    var m = new Moment("January 1, 1945 20:22:10");
    document.writeln("Year value:");
    document.writeln(m.getFullYear());
}
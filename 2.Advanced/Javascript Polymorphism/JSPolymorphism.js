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

//f3
function cc(){
    class Bike{
        constructor(){
            this.company="Honda";
        }
    }
    class Vechile extends Bike{
        constructor(name, price){
            super();
            this.name=name;
            this.price=price;
        }
    }
    var v = new Vechile("Ora Beat Oraaaaa", "9000000");
    document.writeln(v.company+ " "+v.name+ " " + v.price);
}

// f4
function apba(){
    // constructor function
    function Bike(company){
        this.company = company;
    }

    Bike.prototype.getCompany = function(){
        return this.company;
    }

    // Another constructor function
    function Vechile (name, price){
        this.name = name;
        this.price = price;
    }
    var bike = new Bike("Honda");
    Vechile.prototype=bike;
    //Now Bike treats as a parent of Vechile.
    var vechile = new Vechile("Shine", 700000000);
    document.writeln(vechile.getCompany()+ " " + vechile.name + " " +vechile.price);
}


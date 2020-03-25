// f1
function a(){
    // buat sebuah constructor function
    function Vechile(){
        this.vechileName = vechileName;
        throw new Error("Kamu tidak membuat sebuah Instance dari Abstract class");
    }

    Vechile.prototype.display = function(){
        return this.vechileName;
    }

    var vechile = new Vechile();
}

// f2
function a2(){
    // creating a constructor function
    function Vechile(){
        this.vechileName = "vechileName";
        throw new Error("Kamu tidak membuat sebuah Instance dari Abstract class");
    }
    Vechile.prototype.display = function(){
        return "Vechile is: " + this.vechileName;
    }

    // creating a constructor function
    function Bike(vechileName){
        this.vechileName = vechileName;
    }

    // creating object without using the function constructor
    Bike.prototype = Object.create(Vechile.prototype);
    var bike = new Bike("Honda");
    document.writeln(bike.display());
}

// f3
function a3(){
    // Creaating constructor function
    function Vechile(){
        this.vechileName = vechileName;
        throw new Error("Kamu tidak membuat sebuah Instance dari Abstract class");
    }
    // Creating constructor function
    function Bike(vechileName){
        this.vechileName = vechileName;
    }
    Bike.prototype = Object.create(Vechile.prototype);
    var bike = new Bike("Honda");
    document.writeln(bike instanceof Vechile);
    document.writeln(bike instanceof Bike);
}
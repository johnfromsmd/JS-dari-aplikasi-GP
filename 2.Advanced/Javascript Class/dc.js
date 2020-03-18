function dc(){
    
    // Declarasi class
    class Employee{

        // Inisial object
        constructor(id, name){
            this.id=id;
            this.name=name;
        }

        // Deklarasi method
        detail(){
            document.writeln(this.id+" "+ this.name+"<br>");
        }
    }

        // Kirim data object untuk variabel
        var e1 = new Employee(101, "John");
        var e2 = new Employee(102, "Rohn");

        // call method
        e1.detail();
        e2.detail();
}

function dc2(){

    // Declarasi class
    class Employee{

        // Inisial object
        constructor(id, name){
            this.id=id;
            this.name=name;
        }

        // Deklarasi method
        detail(){
            document.writeln(this.id+" "+ this.name+"<br>");
        }
    }

        // Kirim data object untuk variabel
        var e1 = new Employee(101, "John");
        var e2 = new Employee(102, "Rohn");

        // call method
        e1.detail();
        e2.detail();

        // Re-declaring Class
        var emp = class{
            // Iniisial Object
            constructor(id, name){
                this.id = id;
                this.name = name;
            }
            detail()
            {
                document.writeln(this.id+" "+this.name+"<br>");
            }
        }

        // kirim data object ke variable
        var e1 = new emp(103, "New John");
        var e2 = new emp(104, "New Rohn");
        e1.detail(); // panggil method
        e2.detail();
}

function uc(){
    // Deklarasi Class
    var emp = class{
        // inisial object
        constructor(id, name){
            this.id = id;
            this.name = name;
        }
    };
    document.writeln(emp.name);
}


function nc(){
    var emp = class Employee{
        constructor(id, name){
            this.id = id;
            this.name = name;
        }
    };
    document.writeln(emp.name);
}
// f1
function cm(){
    class Employee{
        constructor(){
            this.id = 1;
            this.name = "John";
        }
    }
    var emp = new Employee();
    document.writeln(emp.id+ " " +emp.name);
}

//f2
function cmsk(){
    class CompanyName{
        constructor(){
            this.company="Amazon";
        }
    }

    class Employee extends CompanyName{
        constructor(id, name){
            super();
            this.id = id;
            this.name = name;
        }
    }

    var emp = new Employee(1, "Johny");
    document.writeln(emp.id + " " + emp.name + " " + emp.company);
}
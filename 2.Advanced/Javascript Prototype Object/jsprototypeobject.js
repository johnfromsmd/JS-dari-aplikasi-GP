function op2(){
    function Employee(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Employee.prototype.company = "Google";

    var employee1 = new Employee("John", "John");
    var employee2 = new Employee("Don", "don");
    document.writeln(employee1.firstName + " " + employee1.lastName + " " + employee1.company + "<br>");
    document.writeln(employee2.firstName + " " + employee2.lastName + " " + employee2.company);
}
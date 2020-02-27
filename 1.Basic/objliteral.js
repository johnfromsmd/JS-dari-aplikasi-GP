function objliteral(){
    employee={
        id : 102,
        name : "John",
        salary : 2000 + "$"
    }
    document.write("Data John" + "<br>")
    document.write(employee.id + " " + employee.name + " " + employee.salary);
}
function objinstance(){
    var employee = new Object();
    employee.id = 103;
    employee.name = "Johny";
    employee.salary = 2000 + "$";
    document.write("Data Johny" + "<br>")
    document.write(employee.id + " " + employee.name + " " + employee.salary);
}
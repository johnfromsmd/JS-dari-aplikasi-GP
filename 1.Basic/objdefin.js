function objdefin(){
    function emp(id, name, salary){
        this.id=id;
        this.name=name;
        this.salary=salary;

        this.changeSalary=changeSalary;
        function changeSalary(otherSalary){
            this.salary=otherSalary;
        }
    }
    e = new emp(105, "John Y", 3000 + "$");
    document.write(e.id + " " + e.name + " " +e.salary);
    e.changeSalary(999 + "$");
    document.write("<br>" + e.id + " " + e.name + " " +e.salary);
}
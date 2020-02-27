function objconstructor(){
    function emp(id, name, salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    e = new emp(104, "John D", 3000 + "$");

    document.write(e.id + " " + e.name + " " +e.salary);
}
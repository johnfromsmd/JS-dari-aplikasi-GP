function op() {
    function Employee(namaDepan, namaBelakang) {
        this.namaDepan = namaDepan;
        this.namaBelakang = namaBelakang;
    }
    Employee.prototype.namalengkap = function () {
        return this.namaDepan + " " + this.namaBelakang;
    };
    var emp1 = new Employee("John", "Haa");
    var emp2 = new Employee("Dohn", "ny");
    document.writeln(emp1.namalengkap() + "<br>");
    document.writeln(emp2.namalengkap());
}

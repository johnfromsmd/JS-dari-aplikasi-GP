function ob(){
    emp = {
        id : 1, 
        nama : "John",
        gaji : 20000
    }
    document.write(emp.id + " " + emp.nama + " " + emp.gaji);
}

function io(){
    var emp = new Object();
    emp.id = 2;
    emp.nama = "John doe";
    emp.gaji = 2000;
    document.write(emp.id + " " + emp.nama + " " + emp.gaji);
}

function oc(){
    function emp(id, nama, gaji){
        this.id = id;
        this.nama = nama;
        this.gaji = gaji;
    }
    e = new emp (3, "John Victory", 1000);
    document.write(e.id+ " " + e.nama + " " + e.gaji);
}

function mjso(){
    function emp(id, nama, gaji){
        this.id = id;
        this.nama = nama;
        this.gaji = gaji;

        this.changeGaji = changeGaji;

        function changeGaji(otherGaji){
            this.gaji = otherGaji;
        }
    }
    e = new emp(4, "John Defeat", 100);
    document.write(e.id + " " + e.nama + " " + e.gaji);
    e.changeGaji(10);
    document.write("<br>" + e.id + " " + e.nama + " " + e.gaji);
}
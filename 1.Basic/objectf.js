function objectf(){
    var add = new Function("num1", "num2", "return num1+num2");
    document.write("a = 2 dan b = 5 | 2+5" + "<br>");
    document.writeln(add(2,5 + "<br>"));
    var addd = new Function("num1", "num2", "return Math.pow(num1,num2)");
    document.write("a = 2 dan b = 5 | Math.pow" + "<br>");
    document.writeln(addd(2,5));
}
// f1
function sm1(){
    class Test {
        static display(){
            return "static method is invoked"
        }
    }
    document.writeln(Test.display());
}

//f2
function sm2(){
   class Test2{
        static display1(){
             return "static method is invoked"
        }
        static display2(){
             return "static method is invoked again"
        }
    }
    document.writeln(Test2.display1()+ '<br>');
    document.writeln(Test2.display2());
}

//f3
function sm3(){
    class Test3 {
        static display(){
            return "Static method is invoked"
        }
        static display(){
            return "Static method is invoked again"
        }
    }
    document.writeln(Test3.display());
}

//f4
function sm4(){
class Test4 {
    constructor(){
        document.writeln(Test4.display()+ "<br>");
        document.writeln(this.constructor.display());
    }
    static display(){
        return "Static method is invoked"
    }
}
var t = new Test4();
}

// f5
function sm5(){
class Test5 {
    static display(){
        return "Static Method is Invoked"
    }

    show(){
        document.writeln(Test5.display()+ "<br>");
    }
}
var t = new Test5();
t.show();
}
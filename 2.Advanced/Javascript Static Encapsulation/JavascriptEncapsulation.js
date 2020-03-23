// f1
function jse(){
    class Student{
        constructor(){
            var name;
            var marks;
        }

        getName(){
            return this.name;
        }
        setName(name){
            this.name = name;
        }

        getMarks(){
            return this.marks;
        }
        setMarks(marks){
            this.marks=marks;
        }
    }

    var stude = new Student();
    stude.setName("John");
    stude.setMarks(60);
    document.writeln(stude.getName() + " " + stude.getMarks());
}

// f2
function jsev(){
    class Student {
        constructor(){
            var name;
            var marks;
        }

        getName(){
            return this.name;
        }
        setName(name){
            this.name = name;
        }

        getMarks(){
            return this.marks;
        }
        setMarks(marks){
            if(marks<0||marks>100){
                alert("Invalid Marks");
            } else {
                this.marks = marks;
            }
        }
    }
    var stud = new Student();
    stud.setName("John");
    stud.setMarks(1030);
    // alert() invokes
    document.writeln(stud.getName()+ " " +stud.getMarks());
}

// f3
function pba(){
    function Student(name, marks){
        var s_name = name;
        var s_marks = marks;
        Object.defineProperty(this, "name",{
            get:function(){
                return s_name;
            },
            set:function(s_name){
                this.s_name=s_name;
            }
        });

        Object.defineProperty(this, "marks",{
            get:function(){
                return s_marks;
            },
            set:function(s_marks){
                this.s_marks=s_marks;
            }
        });

    }
    var stud = new Student("John", 80);
    document.writeln(stud.name + " " + stud.marks);
}
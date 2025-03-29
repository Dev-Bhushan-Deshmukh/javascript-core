
const student = {
  name: 10,
  printName: function () {
    console.log(this);
  },
};
const student2 = {
  name: 20,
};



const google={
    empName:'bhushan',
    salary:()=>{
        console.log(this)
    }
}


const citi={
    empName:'bhushan',
    salary:function(){
        const b=()=>{
        console.log(this)
    };b()
}
}
// student.printName();
// student.printName.call(student2);

google.salary();
citi.salary();

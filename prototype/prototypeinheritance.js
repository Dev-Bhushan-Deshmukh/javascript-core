let obj1={
    name:'bhushan',
    lastname:'deshmukh',
    fullName:function(){
        console.log(`${this.name}-${this.lastname}`)
    }

}
let obj2={
    name:"bvd"
}
obj2.__proto__=obj1;
console.log(obj2.lastname)
obj2.fullName()

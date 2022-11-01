//Runtime input in Array
const chd=require("readline-sync")
var emp=new Array()
var i,n 
console.log("Decide Array Size:---")
n=chd.questionInt()


console.log("Now Enter Array elements")
for(i=0;i<n;i++)
{
    emp[i]=chd.questionInt()
}
console.log("Elements Are:---")

for(i=0;i<emp.length;i++)
{
    console.log(emp[i])
}


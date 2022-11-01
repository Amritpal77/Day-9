var emp=[]
// In this example we skip 1st index value
emp[0]=23
emp[2]=12
emp[3]=34
console.log("Total Elements are",emp.length)
var i 
console.log("Elements are:---")
for(i=0;i<emp.length;i++)
{
    console.log(emp[i])
}
//It will not skip undefined value of array. 
for(i=0;i<emp.length;i++)
{
    if(emp[i]==null){
        console.log("no value")
    }
    else{
        console.log(emp[i])
    }
}
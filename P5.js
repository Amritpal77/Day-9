var emp=[]
// In this example we skip 1st index value
emp[0]=23
emp[2]=12
emp[3]=34
console.log("Total Elements are",emp.length)
emp.forEach(test)
function test(value, index) // first parameter indicates value, 2nd is index
{
    console.log("emp["+index+"]=",value)
}
// It will skip the undefined value of array
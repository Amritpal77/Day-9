var emp=[12,23,4,565]
emp[1]=111
console.log(emp)
emp.push(199)
console.log(emp)
emp.shift() // Will delete element from the begining of the array
console.log(emp)
emp.unshift(100) // Insertion at the begining
console.log(emp)
console.log(emp.sort(function(a, b){return a-b}))
emp.pop()
console.log(emp)
delete emp[3]
console.log(emp)
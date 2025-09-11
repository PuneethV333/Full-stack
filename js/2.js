// *print
document.write("hellow")
console.log("hellow")
document.write("<br>")
// *if-else
a = 20;b= 50
a>b?document.write(a):document.write(b)
a>b?console.log(a):console.log(b)
document.write("<br>")


// *functions

// ?FAF
const add1 = (a, b) => {
  return a + b;
};
// ?NORMAL FUNCTION
function add2(a, b) {
  return a + b;
}
// ?UNNAMED FUNCTION
const add3 = function (a, b) {
  return a + b;
};

document.write(add1(2, 2));
document.write("<br>")


document.write(add2(0, 0));
document.write("<br>")

document.write(add3(2, 2));
document.write("<br>")


// ?Array

var fruits = ["apple",2,"mongo"]
document.write(fruits)
document.write("<br>")



// *push -> add element to array
fruits.push("graps")
document.write(fruits)
document.write("<br>")


// *pop -> remove element from the last index
document.write(fruits.pop("apple"))
document.write("<br>")
document.write(fruits)


// *sort -> sorts 
fruits.sort()
document.write("<br>")
document.write(fruits)


// *shift -> remove first elemnt
document.write(fruits.shift())
document.write("<br>")
document.write(fruits)

// *unshift -> add at first
fruits.unshift(2)
document.write(fruits)
document.write("<br>")


// *concat
var newFruits = [1,2,3]
arr = newFruits.concat(fruits)
document.write(arr)
document.write("<br>")


// *slice
var sli = fruits.slice(2)
document.write(sli)
document.write("<br>")

// ?Object

var emp = {
    naam : "puneeth",
    clg : "pes",
    disp_fun : function(){
        document.write(emp.naam + "" +emp.clg)//? this.naam
    }
}

emp.disp_fun()
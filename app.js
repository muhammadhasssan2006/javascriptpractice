// alert("Hello world")
// var name ="Hassan";
// console.log(name)
// var num1="2";
// var num2="3";
// var num3="4";
// var num4="5";
// console.log(num1+num2--)
// console.log(num2)
// console.log(num4*num2)
// console.log(num3/num4)
// console.log(num3-num1)
// var name1="Hi";
// var name2=" there iam ";
// var name3="Hassan. ";
// console.log(name1+name2+name3)
// var lame="I want to";
// var lame1=" say that this is";
// var lame2="mine first js assignment.";
// var lame3="I am feeling well.";
// console.log(lame+lame1)
// console.log(lame2)
// console.log(lame3)
// var hame="Inshallah, ";
// var has1="i will complete whole js ";
// var has2="very soon. ";
// console.log(hame)
// console.log(has1+has2)


// var name = "hassan"
// var lastName = "  suleman"

// console.log("Thank you",name ,lastName)\


// var num = "2"
// var num2 = "2"

// console.log(+"6" +  +"2");


// var spec = prompt(name + lastName)

// console.log(spec)


//if conditions-----------


// var name = "hassan "
// var lastName = "suleman"

// var student1 = "with card";
// var student2 = "no card";

// var num1 = 2
// var num2 = 4

// var sum = 6

// if (student1 === "with card" ) {
//     alert(name+"Allowed")
// }
// if(student2 === "no card"){

//     alert(name+"Not Allowed")

// }
// if (num1 + num2 === sum) {
//     alert("Correct")
// }





//  var a = 2
//  var b = 3
//  var x = 3
//  var y = 3


//  if (a + b !== x - y) {
//  alert("pass")
//  }


// var a = "9"
// var b = 9

// if (a == b) {
//     alert("True")
// }


//  var x = "3";
//  var y = "5";
//  var z = "15";
//  if( x + y !== 0){
//     alert("right")
//  }


// let age ="20";
// if(age>18){
//     console.log("you can play game")
// }
// else if(age==2){
//     console.log("age is 2")
// }
// else if (age==4){
//     console.log("age is 4")
// }
// else{
//     console.log("you can not play game")
// }


// Logical operator----------- 

// && AND operator
// || OR operator

//Nested condition---------------

// var age = "12"
// var salary = "20"
// var salary2 = "20"
// var salary3 = "25"


// if (age && salary == "zeera") {
//     console.log("you are Perfect")
// }
// else { console.log("you are not retaired") }

// if (salary || salary2 == salary) {
//     console.log("you are Perfect")
// }
// else { console.log("you are not retaired") }


// if ( salary == salary2){
//     if(age > 10){
//         console.log("we are Here")
//     }else{
//         console.log("we are in nested else")
//     }
// }
// else {
//     console.log("we are in else")
// }



// ARRAY-----------

// var Names = [" hasssan", " irfan", " usman", " ahmed"]

// alert("welcome to" + Names[0])//


// var nums = ["10", "15", "20", "25", "30", "15", "40", "45", "50"]
// if (nums[1] || nums[5] == "15") {
//     console.log("allowed")

// }



// var nums = ["10", "15", "20", "25", "30", "15", "40", "45", "50"]

// "" string
// 4 number 
// true false null  boolean

// nums.pop()
// nums.push("irfan","hassan")

// nums.shift()

// nums.unshift("hassan","usman")

// nums.splice(1,0,"hasan")

// var a = nums.slice(2, 4)


// console.log(nums)

// var b = ["2","4","6","8","10","12"]
// var c =["3","5","7","9","11"]

// b.pop()  -----remove last index of array
// b.shift()  -----remove first index of array
// b.push("13", "14" ,"15")  ------  add index in the end of array
// b.unshift("0")  ------add indexe in the start of array 
// b.splice(3,1,"3") ------use to add or remove index anywhere
// var c = b.slice(2,5)   //-------it provide new array 
// b.splice( 2,5,"hassan")
//  var c = b.slice(3,6)

// concat---for joining two arrys
// d=b.concat(c); 
// console.log(d)



// nested condition

// var a = 4 , b = 7 , c = 6 
// if(a<b)
// {
// if(b<c){
//     console.log("hi")
// }
//        else if(a>b){
//         console.log("by")
//     }
//     else {
//         console.log("hello")
//     }
// }
// else{
//     console.log ("bye")
// }




//loop

// var names = ["hasssan", "irfan", "usman", "ahmed","tahir"]

// var pass_std = ["irfan","hasssan","usman","ahmed"]



// // var new_arr = []

// for (var i = 0; i < names.length; i++) {
//     if (pass_std[1] === names[i]) {
//         alert("you are passed")
//     }
//     console.log(names[i])
// }

// var students = ["Hassan","Irfan","Usman","Ahmed","Zia","tahir","faizan","rafay",
// "haseeb","mioz","akhtar","ishaq","mansoor","luqman","hammad","tanzeel","huzaifa",
// "hasnain","kashi","hamza","shahzad"]

// var passed_students = ["Hassan","Irfan","Zia","rafay","tahir"]

// for (var i = 0; i < students.length; i++) {

// if (passed_students.includes(students[i])) {
// Add the passing student to the passingStudents array
// passingStudents.push(students[i]);
// Show an alert for the passing student
// alert(students[i] + " passed!");

// console.log("Passing students:", passingStudents);

// if(passed_students [1] === students[i]){
//     alert("you are passed")
// }
// else{
// alert("you are failed")
// }
// console.log(students[i])
// }


// var students = ["Hassan", "Irfan", "Usman", "Ahmed", "Zia", "tahir", "faizan", "rafay",
//     "haseeb", "mioz", "akhtar", "ishaq", "mansoor", "luqman", "hammad", "tanzeel", "huzaifa",
//     "hasnain", "kashi", "hamza", "shahzad"];


// var passed_students = ["Hassan", "Irfan", "Zia", "rafay", "tahir"];

// var passing_students = []

// for (i = 0 ;1 < students.length; i++){
//     if(passed_students.includes(students[i])){
//         passing_students.push(passing_students)
//         alert(students[i] + "passed!")
//     }

//     console.log(students[i]);
// }



// for (i = 0; i < students.length; i++){
//     if(passed_students .includes (students[i])){
//         passing_students.push(students[i])

//         // alert(students[i] + " passed")

//     }
//     console.log(passing_students)
// }
// for (i = 0; i  < students.length; i++){
//     if(passed_students .includes (students[i])){
//         passing_students.push(students.pop())
//     }
//     console.log(passing_students)
// }
// for (i = 0; i < students.length; i++){
//     if(passed_students .includes (students[i])){
//         passed_students.push(students.unshift())
//     }
//     console.log(passing_students)
// }


// var students = ["Hassan", "Irfan", "Usman", "Ahmed", "Zia", "tahir", "faizan", "rafay",
//     "haseeb", "mioz", "akhtar", "ishaq", "mansoor", "luqman", "hammad", "tanzeel", "huzaifa",
//     "hasnain", "kashi", "hamza", "shahzad"];


// var passed_students = ["Hassan", "Irfan", "Zia", "rafay", "tahir"];

// var passing_students = []

// var firstNames = ["Hassan", "Irfan", "Zia", "rafay", "tahir"];

// var lastNames = ["suleman", "Baig", "rehman", "ejaz", "aslam"];

// var fullName = []

// for (i = 0; i < firstNames.length; i++) {

//     for (a = 0; a < lastNames.length; a++) {
//         fullName.push(firstNames[i] + lastNames[a])
//     }

// }
// console.log(fullName)






// var firstname = ["Hassan","irfan","tahir","usman"]
// var lastName = ["suleman","Baig","aslam","suleman"]

// fullname =[]
// for ( i = 0; i < firstname.length; i++){

//     for(a = 0; a < lastName.length; a++){
//         fullname.push(firstname[i] + lastName[a])
//     }

// }
// console.log(fullname)



// var evennum = ["2","4","6","8","10"]
// var oddnum = ["1","3","5","7","9"]
// var totalnum =[]

// for (i = 0; i < evennum.length; i++){
//     for (j = 0; j < oddnum.length; j++){
//         totalnum.push(evennum[i] + oddnum[j])
//     }
// }

// console.log(totalnum)


// var digits = [1,2,3,4]
// var digits2 = [5,6,7,8]

// var finaldigits =[]

// for (i = 0;i < digits.length;i++){
//     for (j = 0;j < digits.length;j++){
//         finaldigits.push(digits[i] + digits2[j])
//     }
// }

// console.log(finaldigits)




// var digits = [1,2,3,4]
// var digits2 = [5,6,7,8]

// var finaldigits =[]

// for (i = 0;i < digits.length;i++){
//     for (j = 0;j < digits.length;j++){
//         finaldigits.push(digits[i] - digits2[j])
//     }
// }

// console.log(finaldigits)


// var digits = [1,2,3,4]
// var digits2 = [5,6,7,8]

// var finaldigits =[]

// for (i = 0;i < digits.length;i++){
//     for (j = 0;j < digits.length;j++){
//         finaldigits.push(digits[i] * digits2[j])
//     }
// }

// console.log(finaldigits)



// var digits = [1,2,3,4]
// var digits2 = [5,6,7,8]

// var finaldigits =[]

// for (i = 0;i < digits.length;i++){
//     for (j = 0;j < digits.length;j++){
//         finaldigits.push(digits[i] / digits2[j])
//     }
// }

// console.log(finaldigits)




// var students = ["hassan","akhtar","zain","tanzeel","mansoor"]
// var house = [" Alam"," Jinnah"]
// var students_group = []


// for (i = 0 ; i < students.length ; i++){
//     for (j = 0 ; j < house.length ; j++){
//         students_group.push(students[i] + house[j])
//     }
// }

// console.log(students_group)







//changing case ______________________


// var a = ["haSSan","Irfan","Usman"]

// for (i = 0; i < a.length; i++){
//    var  b = a[i].toUpperCase()
//    console.log(b)
// }

// var a = "Hassan hassan is studying in 11 hassan hassan"

// for(i=0;i< a.length; i++){
//     console.log(a[i])
// }


// var b = a.indexOf("stud")
// var c = a.lastIndexOf("hassan")
// console.log(c)
// 
// var d = a.slice(17,25)
// console.log(d)

// console.log(b,c,d)

// console.log(b)

// var b = a.toLocaleUpperCase()

// console.log(b)


// var a = "Hassan is a good boy";

// var b = a.replace("good","bad")

// var b = a.charAt(7)

// console.log(b);


// var a = 1.99;

// var b = Math.ceil(a)
//  var b = Math.round(a)
// var b = Math.floor(a)
// console.log(b)




// generating random number........

// var x =Math.random()

// var x = Math.floor(Math.random() *10)

// var x = Math.floor(Math.random() * (10 - 3 )  ) + 3 ;  

// console.log(x)



//changing type.........



// var type = 2
// console.log(typeof type)

// var type = "hello"
// console.log(typeof type)

// var type = false
// console.log(typeof type)

// var type = 6 + null
// console.log(type)
// console.log(typeof type)

// var type = "yes"+5
// console.log(type)
// console.log(typeof type)

// var type = 5 - true
// console.log(type)
// console.log(typeof type)

// var type = 58
// console.log(typeof type)


// var newtype = String(type)
// console.log(typeof newtype)

// var type = "hello"
// console.log(typeof type)


// var newtype = Number(type)
// console.log(typeof newtype)



// var type = 0
// console.log(typeof type)


// var newtype = Boolean(type)
// console.log(newtype)
// console.log(typeof newtype)


// var type = "34"
// console.log(typeof type)


// var newtype = Boolean(type)
// console.log(newtype)
// console.log(typeof newtype)



// var type = 34
// console.log(typeof type)


// var newtype = Boolean(type)
// console.log(newtype)
// console.log(typeof newtype)


// var type = 34 + "hassan"
// console.log(typeof type)

// var newtype = String(type)
// console.log(newtype)
// console.log(typeof newtype)



// var type = 1 + true
// console.log(typeof type)

// var newtype = Number(type)
// console.log(newtype)
// console.log(typeof newtype)


//Generating Random number practice.......

// var x = Math.floor(Math.random() * (10 - 5)) + 5

// console.log(x)

// var y = Math.floor(Math.random() * (7 - 1)) +1
// console.log(y)


//Controlling the length of decimals........

// var num = 3.14156
// var num2 = num.toFixed(2)

// console.log(num2)


// var num = 3.14156
// var num2 = num.toPrecision(2)

// console.log(num2)



//Getting the current date and time...........

// var X = new Date(2023 , 4 , 20 , 2 , 23 , 30 ,10)

// console.log(X.getFullYear())
// console.log(X.getMonth())
// console.log(X.getDay())
// console.log(X.getHours())
// console.log(X.getMinutes())
// console.log(X.getSeconds())
// console.log(X.getMilliseconds())



// var x = new Date(2022 , 7 , 10 , 5 , 15 , 13 , 11)

// console.log(x.getFullYear())
// console.log(x.getDate())
// console.log(x.getDay())
// console.log(x.getHours())
// console.log(x.getMinutes())
// console.log(x.getSeconds())
// console.log(x.getMilliseconds())

// var x = new Date(2019 , 1 , 10 , 2 , 15 , 50 , 90)

// x.setDate(x.getDate() + 20)

// console.log(x)


// var y = new Date( 2021 , 7 , 1 , 5 , 40 , 20 , 45)

// y.setFullYear(y.getFullYear() + 2)

// console.log(y)



// var a = new Date(2018 , 5 , 15 , 34 , 59 , 10 , 12)

// var b = new Date(2018 , 5 , 15 , 34 , 59 , 10 , 12)

// b.setDate(a.getDate() + 20)

// console.log(a)
// console.log(b)


// var x = new Date()
// var y = x.getDate()
// var z = x.getDay()
// var a = x.getFullYear()
// var b = x.getHours()


// console.log(y,z,a,b)



// var a = "45"
// var b = 5

// var c = Number(a ) + b 

// console.log(c)





//Function---------------


// function first() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();

//     alert("time: " + theHr + ":" + theMin);
// }

// var a = ["test","time","test","test"]

// for(i = 0 ; i < a.length ; i++){
//     if("time" == a[i]){
//         first()
//      }
// }



// 36
// Functions:
// Passing them data-------------


// function name(firstName, lastName) {

//     var name = firstName + " " + lastName;

//     console.log(name)

// }

// // var b = "hassan"


// name("hassan", "suleman")


// var day = "sat"


// switch (day) {
//     case "sun":
//         alert("chutti hai!")
//         break;
//     case "sat":
//         alert("chutti hai sat ko!")
//         break;
//     case "fri":
//         alert("maza ni aa raha!")
//         break;

//     default:
//         alert("Allah hafiz!")
//         break;
// }

// var i = 0;


// while (i <= 3) {
//     console.log(i);
// i++
// }

// do {
//     console.log(i);
//     i++
// } while (i <= 8);



// Mouse event ___________________

function fun() {
    alert("event activated")
}



// field ___________________

var x = document.getElementById("field")

x.addEventListener('focus', focusfun)
x.addEventListener('blur', blurefun)

function focusfun() {
    x.style.backgroundColor = "red"
}

function blurefun() {
    x.style.backgroundColor = "white"

}

var password = document.getElementById("password")
var btn = document.getElementById("submit")




// function change(feild) {
//     var email = document.getElementById(feild).value
//     var password = document.getElementById(feild).value

//     console.log(email,password);
// }
// function sub(feild) {
//     var email = document.getElementById(feild).value
//     var para = document.getElementById("para")
//     para.innerHTML = email
//     console.log("======", email)
// }

// function get_value(email_id, password_id) {
//     var email = document.getElementById(email_id).value
//     var password = document.getElementById(password_id).value

//     console.log(email, password);

// }
// function get_value(email) {



//     var email_val = document.getElementById(email).value

//     console.log(email_val) // email_id
//     // var password = document.getElementById(password_id).value

//     // if(email == "hassan"){
//     //     console.log("Hy hassan")
//     // }

//     // console.log(email, password);

// }


// function para(send) {

// }




// function arg(a) {


//     var email_val = document.getElementById(a)

//     email_val.style.display = "block"


// }
// function off(b) {


//     var email_val = document.getElementById(b)

//     // email_val.style.display = "none"
//     email_val.style.width = "600px"
//     email_val.style.height = "600px"



// }


function showless(button1){
    var show_less = document.getElementById(button1)
    show_less.style.display = "none"

}


function showmore(button2){
    var show_more = document.getElementById(button2)
    show_more.style.display = "block"

}

function zoomin(button2){
    var zoomin = document.getElementById(button2)
    zoomin.style.fontSize = "23px"

}


function zoomout(button3){
    var zoomout = document.getElementById(button3)
    zoomout.style.fontSize = "15px"

}

function img(image){
    var img = document.getElementById(image)
    img.style.display = "none"
}


function img2(image){
    var img = document.getElementById(image)
    img.style.display = "block"
}

// function pica(){
//     var pica = document.getElementById()

//     pica.style.background = "url('nv.jpg')"
// }






// // function quiz(){

// var questions = [{
//     question: "What is 2*5?",
//     choices: [2, 5, 10, 15, 20],
//     correctAnswer: 2
//   }, {
//     question: "What is 3*6?",
//     choices: [3, 6, 9, 12, 18],
//     correctAnswer: 4
//   }, {
//     question: "What is 8*9?",
//     choices: [72, 99, 108, 134, 156],
//     correctAnswer: 0
//   }, {
//     question: "What is 1*7?",
//     choices: [4, 5, 6, 7, 8],
//     correctAnswer: 3
//   }, {
//     question: "What is 8*8?",
//     choices: [20, 30, 40, 50, 64],
//     correctAnswer: 4
//   }];

// //}

  
//   function start(){
// var ques1= questions[0].question;

// var collection = document.getElementsByTagName("label");

// var option = questions[0].choices;



// for(var i =0;i<option.length;i++){
//     if(questions[0].question)
//     collection[0].innerHTML=option;
// }
// // var a = document.getElementById("quiz").innerHTML=ques1;
// // var radio=document.getElementById("option1").innerHTML=option;
// // console.log(ques1)
//   }
//   //var count ;
// // function check(){
// //   for(var  count=0;count<5;count++){
// //     console.log(count)
// //         document.getElementById("check").innerHTML=count;
// //     }
   
  
// //}
// function change()
// {
//   var a = '';

// for(var i=1; i<5; i++){
// a += i.toString();
// }

// document.getElementById("check").innerHTML=a;
//     }

function start(){
 var remstartbtn= document.getElementById("start");
 var questions= document.getElementsByClassName("question");
 questions [0].style.display="block";
remstartbtn.style.display="none";
}
function next( num1,num2){
 
  var previous= document.getElementById("prev");
 var questions= document.getElementsByClassName("question");
 questions [num1].style.display="none";
 questions [num2].style.display="block";
previous.style.display="block";
 

}
function back(num1,num2){
  var previous= document.getElementById("prev");
 var questions= document.getElementsByClassName("question");
 questions [num1].style.display="block";
 questions [num2].style.display="none";
 
 
}
/*These are my global variables.  The res variables will store the result of the calculations.  the ans variables will store the data coming in from the user.  These must be compared to generate the users score and feedback.  Every question correctly answered by the will see the score variable being incremented by 1.
*/
var res1=0, res2=0, res3=0, ans1=0, ans2=0, ans3=0, score=0;
/*Standard $ function to return an element by its id*/
$ = function(id){
	return document.getElementById(id);
};

/* ResetTextFields Function
	Standard function to reset fields and nodes with the id's in quotes.  Make sure to check the HTML to ensure that they match
*/
ResetTextFields = function(){
	score = 0;
	res1=0;
	res2=0;
	res3=0;
	ans1=0;
	ans2=0;
	ans3=0;
	$("ans1").value = "";
	$("ans2").value = "";
	$("ans3").value = "";
	$("theImage").src = "images/goodluck.png";
	$("resultPara").innerHTML = "Enter your results and click Score to get your result";
	$("Feedback1").innerHTML = "";
	$("Feedback2").innerHTML = "";
	$("Feedback3").innerHTML = "";
}

/* GenerateQuestion Function
	When this function is called the fields within the HTML are reset.
	Then random questions and their corresponding answers are generated.
	The Questions are constructed and the DOM is updated.  Their answers are
	stored in the global variables so that they can be checked later in another function.  This is repeated for three types of questions, the first is a multiplication, the second is a additiona and the third is a subtraction
*/
GenerateQuestion = function(){
	ResetTextFields();
	var a = Math.floor(Math.random() * 10) + 1
	var b = Math.floor(Math.random() * 10) + 1 
	var c = Math.floor(Math.random() * 15) + 1
	var d = Math.floor(Math.random() * 15) + 1
	var e = Math.floor(Math.random() * 100) + 1
	var f = Math.floor(Math.random() * 100) + 1
	$("input1").innerHTML = a+" x "+b+" = ";
	$("input2").innerHTML = c+" + "+d+" = ";
	$("input3").innerHTML = e+" - "+f+" = ";
	res1 = a*b;
	res2 = c+d;
	res3 = e-f;
	console.log("Result 1: "+res1+"\tResult 2: "+res2+"\tResult 3: "+res3);
}

/* calculate Function
	This calculate() function gets the users andwers and stores them in 
	ans# variables.  Then using if and else statements we check to see if the 
	answers correspond to the ones generated in the GenerateQuestion() function. If the answers are correct then their score is updated and feedback is given for each question.  Note that the span tag is used to color code correct and incorrect answers.  At the very end they are given an overall score and a precentage
*/
calculate = function(){
	score = 0;
	if(isNaN(ans1)||isNaN(ans2) || isNaN(ans3))
		alert("Please enter a numerical value");
else{
		ans1 = parseInt($("ans1").value);
		ans2 = parseInt($("ans2").value);
		ans3 = parseInt($("ans3").value);
	}

	if(ans1==res1){
		score=score+1;
		$("Feedback1").innerHTML= "<span style='color:green'>Correct</span>"
	}
	else{
		$("Feedback1").innerHTML = "<span style='color:red'>Incorrect</span>"
	}
	if(ans2==res2){
		score=score+1;
		$("Feedback2").innerHTML = "<span style='color:green'>Correct</span>"
	}
	else{
		$("Feedback2").innerHTML = "<span style='color:red'>Incorrect</span>"
	}
	if(ans3==res3){
		score=score+1;
		$("Feedback3").innerHTML = "<span style='color:green'>Correct</span>"
	}
	else{
		$("Feedback3").innerHTML = "<span style='color:red'>Incorrect</span>"
	}

	if(score == 3){
		$("theImage").src = "images/excellent.PNG";
		$("resultPara").innerHTML = "You got "+score+" right. That's "+((score/3)*100).toFixed(2)+"%";
	}
	else if(score == 2){
		$("theImage").src = "images/good.PNG";
		$("resultPara").innerHTML = "You got "+score+" right. That's "+((score/3)*100).toFixed(2)+"%";
	}
	else if(score == 1){
		$("theImage").src = "images/fail.PNG";
		$("resultPara").innerHTML = "You got "+score+" right. That's "+((score/3)*100).toFixed(2)+"%";
	}
	else if(score == 0){
		$("theImage").src = "images/fail.PNG";
		$("resultPara").innerHTML = "You got "+score+" right. That's "+((score/3)*100).toFixed(2)+"%";
	}
};

/*window.onload Function 
	When the page is loaded call the GenerateQuestion() function to generate new questions which are then displayed on the DOM.  Then wait until the buttons are clicked. If the Calculate Score button is clicked call the calculate function. if the Test Me Again button is clicked then call the GenerateQuestion function.
*/
window.onload = function(){
	GenerateQuestion();
	$("calc").onclick = function(){calculate();}
	$("reset").onclick = function(){GenerateQuestion();}
};
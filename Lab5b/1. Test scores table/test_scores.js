const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const $ = (selector) => document.querySelector(selector);

const addScore = function () {
	// get user entries
	const name = $("#name").value;
    const score  = parseInt( $("#score").value );
    
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
    	alert("You must enter a name and a valid score");
    }
	else {
		names[names.length] = name;
		scores[scores.length] = score;
	}
    
};

const displayResults = () =>{
	let total=0;
	let highScore=0;
	let highName="";
	let resStr = "<h2>Result</h2>";
	for (let i = 0; i<scores.length; i++){
		total += scores[i];
		if(highScore<scores[i]){
			highScore=scores[i];
			highName=names[i];
		};
	}
	const avgScore = total/scores.length;
	resStr += "<p>Average score = "+avgScore+"</p>"
	resStr += "<p>\nHigh score = "+highName+" with a highscore of "+highScore+"</p>";
	$("#results").innerHTML = resStr;
};

const displayScores = () =>{
	let scoreStr="<h2>Scores</h2>"
	+"<th>Name</th><th>Score</th>";
	for (let i =0; i<scores.length;i++){
		scoreStr += "<tr><td>"+names[i]+"</td>"+"<td>"+scores[i]+"</td></tr>";
	}
	$("#scores_table").innerHTML = scoreStr;
}

window.addEventListener("load", () => {
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});



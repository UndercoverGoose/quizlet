let t=[];
d=[];
for(let x=0;x<Quizlet.matchModeData.terms.length;x++){
	t.push(Quizlet.matchModeData.terms[x].word);
	d.push(Quizlet.matchModeData.terms[x].definition);
}
let c = false;
let i = 0;
let a = [];
let r = ["red", "orange", "yellow", "green", "blue", "purple", "white", "grey", "black", "brown", "pink"];
let cr = "red";

for (let x = 0; x < 12; x++) {
	a.push(document.getElementsByClassName('FormattedText notranslate TermText MatchModeQuestionGridTile-text')[x].childNodes[0].childNodes[0].textContent);
}
for (let x = 0; x < document.getElementsByClassName('MatchModeQuestionGridTile-image').length; x++) {
		document.getElementsByClassName('MatchModeQuestionGridTile-image')[x].style.display = "none";
}

while (!c) {
	if(t.indexOf(a[i]) > -1) {
		a.indexOf(d[t.indexOf(a[i])]);
		try {
			document.getElementsByClassName('MatchModeQuestionGridTile-content')[a.indexOf(d[t.indexOf(a[i])])].style.background = cr;
			document.getElementsByClassName('MatchModeQuestionGridTile-content')[i].style.background = cr;
		}catch(error){}
		a[a.indexOf(d[t.indexOf(a[i])])] = null;
		a[i] = null;
		cr = r[r.indexOf(cr) + 1];
	}else if (d.indexOf(a[i]) > -1) {
		a.indexOf(t[d.indexOf(a[i])]);
		try {
			document.getElementsByClassName('MatchModeQuestionGridTile-content')[a.indexOf(t[d.indexOf(a[i])])].style.background = cr;
			document.getElementsByClassName('MatchModeQuestionGridTile-content')[i].style.background = cr;
		}catch(err){}
		a[a.indexOf(d[t.indexOf(a[i])])] = null;
		a[i] = null;
		cr = r[r.indexOf(cr) + 1];
	}
	if (i < 12) {
		i++;
	}else {
		c = true;
	}
}

module.exports = (response) => {
	var s = ""
	var feel = response.result.parameters.Feeling; //feeling stated by user
	var feelings ={'sad': ['sad','depressed','despair','down','gloomy','melancholy','sorrow','sorrowful','grief','hurting', 'crying'],
	'angry': ['angry','frustrated','annoyed','hostile','angry','furious','irritable','irritated','fuming','displeased','rage','raging','wrath','sulky'],
	'scared':['scared','panic','fearful','terrified','nervous','distressed','afraid','panicky','panicked','shaken','petrified','anxious','anxiety'],
	'suicidal':['suicidal','kill my self','kms','suicide','destructive','very depressed','super depressed','so depressed']}
	var suggestions = {'sad': ['want to see cute animal pictures', 'read a book','go on social media','watch a movie/tv show','play video games','try messaging a good friend', 'take a nap', 'try to find a quiet/isolated place','write a journal', 'have long-term suggestions'],
	'angry':['take deep breaths','stay positive','find someone to rant to', 'find funny things that will make you laugh'],
	'scared':['breath slowly/deeply','stop over thinking','think positively, like a friendly memory','take a walk', 'find someone to talk to', 'calm music/nature sounds','do relaxing muscle exercises'],
	'suicidal':['call 1-800-273-8255 if you have thoughts about death or self-harm', 'talk to a trusted professional doctor or counselor']}

	for (var key in feelings){
		console.log("Feel: "+ feel);
		console.log("Array: " + feelings[key]);
		if (feelings[key].indexOf(feel) > -1 ){ //checks if feeling in specific array
			s="Try to " + listing(suggestions[key]) + "?"
		}
	}

	return s;
}

function listing(list){
	s = ''
	for (var i = 0; i < list.length-1; i++){ s += list[i] + ', ' }
	return s+'or '+list[list.length-1]
}

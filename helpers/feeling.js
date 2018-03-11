module.exports = (response) => {
	const feelings ={'sad': ['sad','depressed','despair','down','gloomy','melancholy','sorrow','sorrowful','grief','hurting', 'crying'],
	'angry': ['angry','frustrated','annoyed','hostile','angry','furious','irritable','irritated','fuming','displeased','rage','raging','wrath','sulky'],
	'scared':['scared','panic','fearful','terrified','nervous','distressed','afraid','panicky','panicked','shaken','petrified','anxious','anxiety'],
	'suicidal':['suicidal','kill my self','kms','suicide','destructive','very depressed','super depressed','so depressed']}
	const suggestions = {'sad': {'short-term':['want to see cute animal pictures', 'read a book','go on social media','watch a movie/tv show','play video games','try messaging a good friend', 'take a nap', 'try to find a quiet/isolated place','write a journal'], 'long-term':['have long-term suggestions']},
	'angry':{'short-term':['take deep breaths','stay positive','find someone to rant to', 'find funny things that will make you laugh']},
	'scared':{'short-term':['stop over thinking','think positively, like a friendly memory','take a walk', 'find someone to talk to', 'calm music/nature sounds'], 'physically active':['do breathing exercises, do relaxing muscle exercises'], 'long-term':['have a long-term solution']},
	'suicidal':{'short-term':['call 1-800-273-8255 if you have thoughts about death or self-harm', 'talk to a trusted professional doctor or counselor']}}

	var s = "";
	var feel = response.result.parameters.Feeling; //feeling stated by user
	for (var key in feelings){
		if (feelings[key].indexOf(feel) > -1 ){ //checks if feeling in specific array
			//s="Try to " + listing(suggestions[key]) + "?"
			if(key != 'suicidal')
			{
				s= "Would you like a " + listing(suggestions[key]);
			}
			else {
				s = "ADD STUFF";
			}
		}
	}

	return s;
}

function listing(dict){
	var s = '';
	var length = Object.keys(dict).length;
	if(length == 1)
		s = Object.keys(dict)[0];
	else if(length == 2)
		s = Object.keys(dict)[0] + ' a ' + Object.keys(dict)[1];
	else
	{
		for(key in dict)
		{
			if(Object.keys(dict)[length-1] == key) //last key
				s += ', or a ';
			else if(Object.keys(dict)[0] != key) //not the first key
				s += ', a ';
			s+= key;

		}
	}


	s += ' solution? Please remember that I am here to help you.'
	return s;
}

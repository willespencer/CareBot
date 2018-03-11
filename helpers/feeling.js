module.exports = (response) => {
	const feelings ={'sad': ['sad','depressed','despair','down','gloomy','melancholy','sorrow','sorrowful','grief','hurting', 'crying', 'tired', 'exhausted', 'sleepy'],
	'angry': ['angry','frustrated','annoyed','hostile','furious','irritable','irritated','fuming','displeased','rage','raging','wrath','sulky'],
	'scared':['scared','panic','fearful','terrified','nervous','distressed','afraid','panicky','panicked','shaken','petrified','anxious','anxiety'],
	'suicidal':['suicidal','kill my self','kms','suicide','destructive','very depressed','super depressed','so depressed']}
	const suggestions = {'sad': {'short-term':['See cute animal pictures', 'read a book','go on social media','watch a movie/tv show','play video games','message a good friend', 'take a nap', 'find a quiet/isolated place','write a journal'], 'long-term':['Set goals', 'keep a healthy diet', 'have a regular exercise routine', 'sleep more', 'have some (but not too many!) responsibilities on your plate']},
	'angry':{'short-term':['Take deep breaths','stay positive','find someone to rant to', 'find funny things that will make you laugh'], 'long-term':['Talk to a therapist or professional', 'take anger management courses']},
	'scared':{'short-term':['Stop over-thinking','think of a positive memory','take a walk', 'find someone to talk to', 'calm music/nature sounds'], 'physically active':['Complete breathing exercises', 'do relaxing muscle exercises'], 'long-term':['Avoid or limit caffeine', 'get active', 'add more omega-3 fats to your diet', 'get enough sleep', 'talk to a therapist']},
	'suicidal':{'short-term':['call 1-800-273-8255" if you have thoughts about death or self-harm', 'talk to a trusted professional doctor or counselor']}}

	var s = "";
	var feel = response.result.parameters.Feeling; //feeling stated by user
	for (var key in feelings){
		if (feelings[key].indexOf(feel) > -1 ){ //checks if feeling in specific array
			if(key != 'suicidal')
			{
				s= "Would you like a " + listing(suggestions[key]);
			}
			else {
				s = "Call 1-800-273-8255";
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
		s = Object.keys(dict)[0] + ' or a ' + Object.keys(dict)[1];
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

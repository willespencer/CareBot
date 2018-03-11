module.exports = (response) => {
	const feelings ={'sad': ['sad','depressed','despair','down','gloomy','melancholy','sorrow','sorrowful','grief','hurting', 'crying'],
	'angry': ['angry','frustrated','annoyed','hostile','angry','furious','irritable','irritated','fuming','displeased','rage','raging','wrath','sulky'],
	'scared':['scared','panic','fearful','terrified','nervous','distressed','afraid','panicky','panicked','shaken','petrified','anxious','anxiety'],
	'suicidal':['suicidal','kill my self','kms','suicide','destructive','very depressed','super depressed','so depressed']}
	const suggestions = {'sad': {'short-term':['See cute animal pictures', 'read a book','go on social media','watch a movie/tv show','play video games','message a good friend', 'take a nap', 'find a quiet/isolated place','write a journal'], 'long-term':['Set goals', 'keep a healthy diet', 'have a regular exercise routine', 'sleep more', 'have some (but not too many!) responsibilities on your plate']},
	'angry':{'short-term':['Take deep breaths','stay positive','find someone to rant to', 'find funny things that will make you laugh'], 'long-term':['Talk to a therapist or professional', 'take anger management courses']},
	'scared':{'short-term':['Stop over-thinking','think of a positive memory','take a walk', 'find someone to talk to', 'calm music/nature sounds'], 'physically active':['Complete breathing exercises', 'do relaxing muscle exercises'], 'long-term':['Avoid or limit caffeine', 'get active', 'add more omega-3 fats to your diet', 'get enough sleep', 'talk to a therapist']},
	'suicidal':{'short-term':['call 1-800-273-8255 if you have thoughts about death or self-harm', 'talk to a trusted professional doctor or counselor']}}

	var s = "Out of the following, which would you like to do? ";
	var feel = response.result.parameters.feelingContext; //feeling stated by user
	console.log("Feel", feel)
	var solution = response.result.parameters.Solution // solution stated
	console.log("Solution", solution)
	var solutions = suggestions[feel][solution]
	console.log("Solutions", solutions)
	if(solutions.length == 2)
	{
		s+= solutions[0] + " or " + solutions[1];
	}
	else
	{
		for (var i =0; i < solutions.length-1; i++){
			s+=solutions[i] + ', '
		}
		if(solutions.length > 1)
			s+= 'or ' + solutions[solutions.length-1];
		else {
			s+= solutions[solutions.length-1];
		}
	}
	s+= '?'
	return s;
}

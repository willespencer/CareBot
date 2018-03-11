//code method for.
const feeling = (response) =>{

	var s = ""
	var feel = response.result.parameters.Feeling; //feeling stated by user
	var feelings ={'sad': ['sad','depressed','despair','down','gloomy','melancholy','sorrow','sorrowful','grief','hurting', 'crying'], 
	"angry": ['angry','frustrated','annoyed','hostile','angry','furious','irritable','irritated','fuming','displeased','rage','raging','wrath','sulky']
	'scared':['scared','panic','fearful','terrified','nervous','distressed','afraid','fearful','panicky','panicked','shaken','petrified','anxious','anxiety']
	'suicidal':['suicidal','kill my self','kms','suicide','self-destructive','destructive','very depressed','super depressed','so depressed']
	'general':['awful', 'mess', 'wreck']
	var suggestions = {'sad': ['want to see cute animal pictures', 'read a book','go on social media','watch a movie/tv show','play video games','try messaging a good friend', 'take a nap', 'try to find a quiet/isolated place','write a journal', 'have long-term suggestions']}
	'angry':['take deep breaths','stay positive','find someone to rant to', 'find funny things that will make you laugh']
	'anxiety attack':['breath slowly/deeply','stop over thinking','think positively, like a friendly memory','take a walk', 'find someone to talk to', 'calm music/nature sounds','do relaxing muscle exercises']
	'social anxiety':['focus your attention on other people', 'remember that anxiety isn\'t as visible as you think','really listen to what is being said', 'focus on the present moment','release the pressure to be perfect', 'do breathing exercises','learn long-term solutions' ]
	'suicide':['call 1-800-273-8255 if you have thoughts about death or self-harm']
	for (var key in feelings){
		if (feel in feelings[key] ){
			s="Try to " + listing(feelings[key]) + "?"
		}
	}

	return s;
}
function listing(list){
	s = ''
	for (var i = 0, i < list.length-1, i++){ s += 'i' + ', ' }
	return s+'or'+list[list.length-1]
}

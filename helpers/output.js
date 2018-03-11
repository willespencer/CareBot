module.exports = (response) => {
  // Get content from file
  var s = '';
  var contents = fs.readFileSync("options.json");
  var opt = response.result.parameters.output; //feeling stated by user
  // Define to JSON type
  var json = JSON.parse(contents);

  var categories = [] //list of all categories (to avoid hardcoding)

  for (var key in json) { //loops through all eighth period ids
    if (json.hasOwnProperty(key)) { //makes sure it is an actual key
      if(opt == key)
        s+= json[key];

  s+= "I hope that I was helpful!";

  return s;

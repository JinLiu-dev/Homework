const state = {
  a: "apple",
  b: "banana",
  c: "city",
  d: "dom",
  e: "end",
  f: "forEach",
  g: "gesdrwesf"
};
var initials = document.getElementById("initials");
var words = document.getElementById("words");
Object.entries(state).forEach(element => {
  let option = document.createElement("option");
  option.text = element[0];
  initials.append(option);
  option = document.createElement("option");
  option.text = element[1];
  words.append(option);
});
initials.addEventListener('change', (e)=>{words.selectedIndex = e.target.selectedIndex});
words.addEventListener('change', (e)=>{initials.selectedIndex = e.target.selectedIndex});
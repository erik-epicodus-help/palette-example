// var = pallete{

let string = "string";
let integer = 9;
let array = ["string", 9, []];
let object = {
  property: 'value',

};

// just an example, object literal (not build this with any constructor)
let pallete = {
  colors: ['crimson', 'yellow ochre', 'prussian blue', 'raw umber'],
  mediums: ['beeswax', 'gloss medium'],
  subject: "trees"
}


function Pallete(colors, mediums, subject, price) {
  this.colors = colors; // array of strings
  this.mediums = mediums; // array of strings
  this.subject = subject; // string
  this.price = price; // int
}

// Pallete.prototype.findFirstMedium() {
// this.mediums[0]
// }

Pallete.prototype.printColors = function () {
  console.log(this.colors)
  $("#exmapleid").html("<li>" + this.colors + "</li>") // "<li>['windsor violet', 'hookers green', 'pthalo blue']</li>"
}


let pallete2 = new Pallete(['windsor violet', 'hookers green', 'pthalo blue'], ['water', 'olive oil'], 'post apocalyptic', '10000');
let pallete3 = new Pallete(['windsor violet', 'hookers green', 'pthalo blue'], ['water', 'olive oil'], 'post apocalyptic', '2000');
let pallete4 = new Pallete(['windsor violet', 'hookers green', 'pthalo blue'], ['water', 'olive oil'], 'post apocalyptic', '500');
let pallete5 = new Pallete(['pthalo purple'], ['water', 'olive oil'], 'post apocalyptic', '901');

// will take one argument. array (expects an array), str (string), int (integer)
// parameters (arr) <- var arr = <whatever you have fed this function>
function evaluatePriciness(arr) { // arr = [{}, {}, {}]
  arr.push("test")
  // arr = [{}, {}, {}, "test"]
}

evaluatePriciness([{}, {}, {}])

// pallete2 {
//  colors: ['windsor violet', 'hookers green', 'pthalo blue'],
// mediums: undefined,
// subject: undefined
// }





console.log(pallete.colors[0])

pallete.colors[0] = "some value";





// array.forEach()

// for (let i = 0; i < array.length; i++){

// }


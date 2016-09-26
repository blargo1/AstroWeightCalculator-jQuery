
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];  
planets.reverse();
$.each(planets, function( index, value ){
$("#selectPlanet").append($("<option> </option>").val(value[1]).text(value[0]));

});

$("button").click(function(){
	var result="";
	var myweight = $('#weight').val();
	var myPlanet=$("select option:selected").val();
	var planetName=$("select option:selected").html();
	result=myweight * myPlanet;
	$("#answer").html(result);
	$("#answer").html("If you were on " + planetName + ", you would weight " + result + " lbs!");
});

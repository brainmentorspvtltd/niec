
function setup(){

	// Dynamic Event Binding
	document.getElementById("searchBt").addEventListener("click",doSearch);
	document.getElementById("clearBt").addEventListener("click",clearAll);
}

function doSearch(){
	var searchValue = document.getElementById("searchbox").value;
	var url = "http://freegeoip.net/json/"+searchValue;	
	loadJSON(url,done);
	//alert("U Click on Search "+searchValue);
	// Call the Server
	// Web Service Consume
	
	var output = "Loading Data From Server...";
	document.getElementById("result").innerHTML=output;
	}
function done(data){
	console.log(data);
	var output = "Server Result is Country Name is "+data.country_name+" I.P "+data.ip;
	document.getElementById("result").innerHTML=output;
}
		function clearAll(){
			alert("this is clear all");
		}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////QR GENERATOR SOURCED AND CREATED BY Baroninn Vefhönnun FOUND HERE AT://////////////////////////////////// 
/////////////////////////////////////////////////////////https://codepen.io/baroninn/pen/WmKjjP/////////////////////////////////////////////////////////


var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 200,
	height : 200
});
function makeCode () {		
	var elText = document.getElementById("text");
	
	if (!elText.value) {
		//alert("Input a text");
		elText.focus();
		return;
	}
	
	qrcode.makeCode(elText.value);
}
makeCode();
$("#text").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});
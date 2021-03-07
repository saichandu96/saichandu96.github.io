function Calculate() {
	var temp = document.getElementById("errorMsg");
	temp.style.display = "none";
	var principle = document.getElementById("principleAmt").value;
	var rate = document.getElementById("rateOfInt").value;
	var fromDate = document.getElementById("fromDate").value;
	var toDate = document.getElementById("toDate").value;
	var isfailed = false;
	var errortxt = "";
	if(principle == ""){
		errortxt = "Amount Taken";
		isfailed = true;
	} else if (rate == "") {
		errortxt = "Rate";
		isfailed = true;
	} else if (fromDate == "") {
		isfailed = true;
		errortxt = "fromDate";
	} else if (toDate == "") {
		errortxt = "toDate";
		isfailed = true;
	} else if (rate == "") {
		errortxt = "Rate";
	}
	if (isfailed) {
		var temp = document.getElementById("errorMsg");
		temp.style.display = "";
		document.getElementById("errorTxt").innerText = errortxt;
		return;
 	}
 	var dateDiff = calcDate(new Date(toDate),new Date(fromDate));
 	console.log(dateDiff);
}

function calcDate(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    var message = date2.toDateString();
    message += " was "
    message += days + " days " 
    message += months + " months "
    message += years + " years ago \n"

    return message
    }
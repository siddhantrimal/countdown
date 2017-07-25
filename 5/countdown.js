function prntevent(eventnow,eventnext,eventnowtime,eventnexttime){
	document.getElementById("daysuntilmsg").innerHTML = eventnow+" "+eventnowtime;
	document.getElementById("daysuntilmsg2").innerHTML = eventnext+" "+eventnexttime;
}

function selfaware(now){
	var eventtimes = [
						"July 27, 2017",//CN
						"July 30, 2017",//SM
						"August 02, 2017",//DAA
						"August 06, 2017",//AI
						"August 09, 2017",//Egov
						"August 10, 2017",//WiNet
						"August 11, 2017",//IBM / NN
						"August 13, 2017"//Crypto
						];
	var eventwhat = [
						"5th Sem EXAM STARTS: DAY-1 Computer Networks",//4-12/7-27
						"Day-2 Simulation and Modeling",//4-15/7-30
						"Day-3 Design & Analysis of Algorithm",//4-18/8-02
						"Day-4 Artificial Intelligence",//4-22/8-06
						"Day-5 E-governance",//4-25/8-09
						"Day-6 Wireless Networking",//4-26/8-10
						"Day-7 International Biz Mgmt/ Neural Net",//4-27/8-11
						"Day-8 Cryptography",//4-29/8-13
						"End of Theory Exams",//13+
						"Get ready for practicals"
						];

	function exam(x){
		if(document.getElementById("exactExamTime").checked){
			return new Date(eventtimes[x]+" 06:15").getTime();
		}
		return new Date(eventtimes[x]).getTime();
	}

	function knowevents(x){
		var recurseval = x;
		if(exam(x) - now > 0 && x<=eventtimes.length){
			var countDownDate = exam(x); 
		}
		else{
			if(x>eventtimes.length){
				return eventtimes.length;
			}
			x = x + 1;
			recurseval = knowevents(x);	
		}
		return recurseval; //returns the day of the upcoming exam
	}
	var uff = knowevents(0); //returns the current day of exam value
	// console.log(uff);
	if(uff<eventtimes.length){
		countDownDate = exam(uff); //dynamically changes the start point of countdown
		prntevent("UNTIL "+eventwhat[uff],"NEXT EVENT &gt;&gt;"+eventwhat[uff+1],"("+eventtimes[uff]+")","("+eventtimes[uff+1]+")");
	}
	else{
		countDownDate = exam(eventtimes.length-1); //pin last exam day
		prntevent(eventwhat[uff],eventwhat[uff+1],"","");
	}
	
	return countDownDate; //sends countdown to auto update function
}

document.getElementById("exactExamTime").checked = true; //set to EET by default

var x = setInterval(function() {	
  var now = new Date().getTime();
  countDownDate = selfaware(now);
 	//console.log("end is ="+selfaware(now) + " && now is = "+ now);
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //display
  document.getElementById("daysuntil").innerHTML = 
  "<i class=\"fa fa-circle-o-notch fa-pulse fa-1x fa-fw\"></i>"
  +days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.title = days + "d " + hours + "h "  + minutes + "m " + seconds + "s "+"Until Exam";
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("daysuntil").innerHTML = "8th Sem Begins";
    document.title = "8th Sem Begins";
  }

}, 1000);

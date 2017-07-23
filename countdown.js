function prntevent(eventnow,eventnext,eventnowtime,eventnexttime){
	document.getElementById("daysuntilmsg").innerHTML = eventnow+" "+eventnowtime;
	document.getElementById("daysuntilmsg2").innerHTML = eventnext+" "+eventnexttime;
}

function selfaware(now){
	var eventtimes = [
						"July 7, 2017",//ADBMS
						"July 10, 2017",//IT
						"July 13, 2017",//AJP
						"July 17, 2017",//InfoRet
						"July 20, 2017",//DA
						"July 21, 2017",//NSA
						"July 23, 2017",//SPM
						"July 30, 2017",//Final Draft Approval
						"July 31, 2017",//Final Draft Approval
						"August 1, 2017",//Final Draft Error Correction
						"August 2, 2017",//Printing Binding Final Report and, Submission
						"August 2, 2017",//Printing Binding Final Report and, Submission
						"August 4, 2017",//Approval, Presentation, External Pre-Evaluation
						"August 6, 2017",//Defence
						"August 9, 2017",//AJP Practical
						"August 10, 2017",//ADBMS Practical
						"August 11, 2017",//InternetTech Practical
						"August 20, 2017"//8thsem begins
						];
	var eventwhat = [
						"7th Sem EXAM STARTS: DAY-1 ADBMS Exam",//7
						"Day-2 Internet Tech Exam",//10
						"Day-3 Advanced Java Programming Exam",//13
						"Day-4 Information Retreival Exam",//17
						"Day-5 Database Administration Exam",//20
						"Day-6 Network and System Administration Exam",//21
						"Day-7 Software Project Management Exam",//23
						"Supervisor/HOD Final Draft Approval",//Final Draft Approval
						"Supervisor/HOD Final Draft Approval",//Final Draft Approval
						"Correct Errors on Final Draft",//Final Draft Error Correction
						"Print/Bind + Digital Submission",//Printing Binding Final Report and, Submission
						"Print/Bind + Digital Submission",//Printing Binding Final Report and, Submission
						"HOD/Sup Approval, Presentation, Pre-Evaluation",//Approval, Presentation, External Pre-Evaluation
						"Final Project Defense",//Defence
						"AJP Practical",//AJP Practical
						"ADBMS Practical",//ADBMS Practical
						"Internet Tech Practical",//InternetTech Practical
						"8th Sem Begins",//23+
						"get ready for the world"//23+
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

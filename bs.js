let p=0;
let loading=setInterval(function()
{
	p++;

	document.getElementById('loadingBar').style.width=p+"%";

	document.getElementById('percentage').innerText=p+"%";

	if(p>=100)
	{
		clearInterval(loading);
	}
},100);

const birthday=new Date("August 30, 2026 08:30:00").getTime();

setInterval(function() {

	const now=new Date().getTime();

	const difference=birthday-now;

	if(difference <= 0)
	{
		document.getElementById('days').innerText="0";
		document.getElementById('hours').innerText="0";
		document.getElementById('minutes').innerText="0";
		document.getElementById('seconds').innerText="0";
		document.getElementById('sBtn').disabled=false;
		document.getElementById('sBtn').innerHTML="🎁Open Your Surprise❤️";
		return;
	}

	const days=Math.floor(difference/(1000*60*60*24));

	const hours=Math.floor((difference/(1000*60*60))%24);

	const minutes=Math.floor((difference/(1000*60))%60);

	const seconds=Math.floor((difference/1000)%60);


	document.getElementById('days').innerText=days;
	document.getElementById('hours').innerText=hours;
	document.getElementById('minutes').innerText=minutes;
	document.getElementById('seconds').innerText=seconds;
	                                                 
	                                                
},1000);

document.getElementById('sBtn').addEventListener("click",function(){

	document.getElementById('loadingScreen').classList.add("d-none");

	document.getElementById('verification').classList.remove("d-none");

	document.getElementById('sBtn').style.display="none";
});

let otp="";
document.getElementById('verifyDateBtn').addEventListener("click",function(){

	let date=document.getElementById('birthdayDate').value;

	if(date === "")
	{
		document.getElementById('msg').innerHTML="E Bhai Pela Janam Divs Ni Tarikh Nakh Pchi Aagad Vadh Hal Hal...";
		return;
	}

	let parts=date.split("-");

	let year=parts[0];
	let month=parts[1];
	let day=parts[2];


	 otp=day + month + year.substring(2);

	console.log("Generated OTP:",otp);
 	   
	document.getElementById('verification').classList.add("d-none");

	document.getElementById('otpSection').classList.remove("d-none");
});

const boxes= document.querySelectorAll(".otp-box");

 boxes.forEach(function (box,i)=>{
	box.oninput=()=>{
		if(box.value && i<5)
		{
			boxes[i+1].focus();
		}
	};
});

document.getElementById('verifyOtpBtn').onclick=function(){
	let boxes=document.querySelectorAll(".otp-box");

	let eotp="";

	boxes.forEach(function(box){
		eotp+=box.value;
	});

	if(eotp===otp)
	{
		document.getElementById('otpMsg').innerHTML="OTP correct! Surprise Unlocked";
		document.getElementById('surpriseSection').classList.remove("d-none");
		document.getElementById('otpSection').classList.add("d-none");
		document.getElementById('surprise').classList.remove("d-none");
	}
	else
	{
		document.getElementById('otpMsg').innerHTML="Wrong OTP! Try Again";
	}
};



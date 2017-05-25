
			/*------Start all functions----*/ 
			function startAll()
					{ 
						currentTime();
						initDate();
						rotateBanner();
						initForm(); 
					}
					
					/*---This allows all functions to work at the same time---*/
						window.onload=startAll; 
						window.onunload= function(){}; 

				function help ()
					{
						alert("To Get help, go on the 'About' or 'FAQ' page. The Help and Support will be added in June");
					}


		/*---- Time----*/ 
			function currentTime(){

			var now = new Date();

			document.getElementById("TheTime").innerHTML = showTheHours(now.getHours()) + showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();
			setTimeout(currentTime,1000);
		  

		function showTheHours(theHour){
		
			if(set24Hour() || (theHour > 0 && theHour < 13))

				{
					return theHour; 
				} 
				
			if (theHour == 0)
				{
					return 12;
				}
				
					return theHour-12;

			}		

		function showZeroFilled(inValue)
			{
					if(inValue > 9)
					{
						return ":" + inValue;
					}

						return ":0"+ inValue;
				}

				function set24Hour(){
				return (document.getElementById("set24").checked);

		}

			function showAmPm() {


				if(set24Hour()){
				return "";
			}

				if((now.getHours() < 12))
				{
					return "AM";
				}
				
						return "PM";
				}
		}



		/*---- Date----*/ 

		function initDate() {
			var nameOfDay = new Array("Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

			var nameOfMonth = new Array("Jan","Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec" );


			var now = new Date();

			var dtString = nameOfDay[now.getDay()] + ","  + nameOfMonth[now.getMonth()] + " " + now.getDate();

			document.getElementById("dtField").innerHTML = dtString; 

		}


		/*---- Moving Banner----*/ 

			var thisAd = 0;

			function rotateBanner(){

			var adImages = new Array("../Images/banner1.png ","../Images/banner2.png ","../Images/banner3.png");

			thisAd++;
			if (thisAd == adImages.length) {

			thisAd = 0;
			} 

			document.getElementById("adBanner").src = adImages[thisAd];

			setTimeout(rotateBanner,3 * 1000);

		}


		/*-------------Select and Go to Menu--------------*/
		function initForm()
			{
				document.getElementById("ChoosenDivision").selectedIndex = 0; 
				document.getElementById("ChoosenDivision").onchange = jumpPage; 
			}

		function jumpPage(){
				var newLoc = document.getElementById("ChoosenDivision");

				var newPage = newLoc.options[newLoc.selectedIndex].value;

				if (newPage != "")
				{
					window.location = newPage; 

				} 

		}


		 



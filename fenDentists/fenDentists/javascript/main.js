	
	//loads the local storage that has been stored in browsers cache
	function load() { // (Ravulavaru, 2014)
	// Jane Smith Local storage variables
		var storedJSM9am = localStorage.getItem('storageJSM9am');   var storedJSTu9am = localStorage.getItem('storageJSTu9am'); 	var storedJSW9am = localStorage.getItem('storageJSW9am'); 	var storedJSTh9am = localStorage.getItem('storageJSTh9am'); 	var storedJSF9am = localStorage.getItem('storageJSF9am');
		var storedJSM10am = localStorage.getItem('storageJSM10am'); var storedJSTu10am = localStorage.getItem('storageJSTu10am'); 	var storedJSW10am = localStorage.getItem('storageJSW10am'); var storedJSTh10am = localStorage.getItem('storageJSTh10am'); 	var storedJSF10am = localStorage.getItem('storageJSF10am');
		var storedJSM11am = localStorage.getItem('storageJSM11am'); var storedJSTu11am = localStorage.getItem('storageJSTu11am');	var storedJSW11am = localStorage.getItem('storageJSW11am'); var storedJSTh11am = localStorage.getItem('storageJSTh11am'); 	var storedJSF11am = localStorage.getItem('storageJSF11am');
		var storedJSM12pm = localStorage.getItem('storageJSM12pm'); var storedJSTu12pm = localStorage.getItem('storageJSTu12pm'); 	var storedJSW12pm = localStorage.getItem('storageJSW12pm'); var storedJSTh12pm = localStorage.getItem('storageJSTh12pm'); 	var storedJSF12pm = localStorage.getItem('storageJSF12pm');
		var storedJSM1pm = localStorage.getItem('storageJSM1pm');   var storedJSTu1pm = localStorage.getItem('storageJSTu1pm'); 	var storedJSW1pm = localStorage.getItem('storageJSW1pm'); 	var storedJSTh1pm = localStorage.getItem('storageJSTh1pm'); 	var storedJSF1pm= localStorage.getItem('storageJSF1pm');

	
		if(storedJSM9am || storedJSM10am  || storedJSM11am || storedJSM12pm || storedJSM1pm || storedJSTu9am || storedJSTu10am || storedJSTu11am || storedJSTu12pm ||  storedJSTu1pm
		|| storedJSW9am || storedJSW10am || storedJSW11am || storedJSW12pm || storedJSW1pm || storedJSTh9am || storedJSTh10am || storedJSTh11am || storedJSTh12pm || storedJSTh1pm
		|| storedJSF9am || storedJSF10am || storedJSF11am || storedJSF12pm || storedJSF1pm ){
		
			document.getElementById('JSM9am').value = storedJSM9am; 	document.getElementById('JSTu9am').value = storedJSTu9am; 	document.getElementById('JSW9am').value = storedJSW9am;   document.getElementById('JSTh9am').value = storedJSTh9am;   document.getElementById('JSF9am').value = storedJSF9am;
			document.getElementById('JSM10am').value = storedJSM10am; 	document.getElementById('JSTu10am').value = storedJSTu10am; document.getElementById('JSW10am').value = storedJSW10am; document.getElementById('JSTh10am').value = storedJSTh10am; document.getElementById('JSF10am').value = storedJSF10am;
			document.getElementById('JSM11am').value = storedJSM11am; 	document.getElementById('JSTu11am').value = storedJSTu11am; document.getElementById('JSW11am').value = storedJSW11am; document.getElementById('JSTh11am').value = storedJSTh11am; document.getElementById('JSF11am').value = storedJSF11am; 
			document.getElementById('JSM12pm').value = storedJSM12pm; 	document.getElementById('JSTu12pm').value = storedJSTu12pm; document.getElementById('JSW12pm').value = storedJSW12pm; document.getElementById('JSTh12pm').value = storedJSTh12pm; document.getElementById('JSF12pm').value = storedJSF12pm;
			document.getElementById('JSM1pm').value = storedJSM1pm; 	document.getElementById('JSTu1pm').value = storedJSTu1pm; 	document.getElementById('JSW1pm').value = storedJSW1pm;   document.getElementById('JSTh1pm').value = storedJSTh1pm;   document.getElementById('JSF1pm').value = storedJSF1pm;
		}
		// Gary Lane storage variables	
		var storedGLM9am = localStorage.getItem('storageGLM9am');   var storedGLTu9am = localStorage.getItem('storageGLTu9am'); 	var storedGLW9am = localStorage.getItem('storageGLW9am'); 	var storedGLTh9am = localStorage.getItem('storageGLTh9am'); 	var storedGLF9am = localStorage.getItem('storageGLF9am');
		var storedGLM10am = localStorage.getItem('storageGLM10am'); var storedGLTu10am = localStorage.getItem('storageGLTu10am'); 	var storedGLW10am = localStorage.getItem('storageGLW10am'); var storedGLTh10am = localStorage.getItem('storageGLTh10am'); 	var storedGLF10am = localStorage.getItem('storageGLF10am');
		var storedGLM11am = localStorage.getItem('storageGLM11am'); var storedGLTu11am = localStorage.getItem('storageGLTu11am');	var storedGLW11am = localStorage.getItem('storageGLW11am'); var storedGLTh11am = localStorage.getItem('storageGLTh11am'); 	var storedGLF11am = localStorage.getItem('storageGLF11am');
		var storedGLM12pm = localStorage.getItem('storageGLM12pm'); var storedGLTu12pm = localStorage.getItem('storageGLTu12pm'); 	var storedGLW12pm = localStorage.getItem('storageGLW12pm'); var storedGLTh12pm = localStorage.getItem('storageGLTh12pm'); 	var storedGLF12pm = localStorage.getItem('storageGLF12pm');
		var storedGLM1pm = localStorage.getItem('storageGLM1pm');   var storedGLTu1pm = localStorage.getItem('storageGLTu1pm'); 	var storedGLW1pm = localStorage.getItem('storageGLW1pm'); 	var storedGLTh1pm = localStorage.getItem('storageGLTh1pm'); 	var storedGLF1pm= localStorage.getItem('storageGLF1pm');

	
		if(storedGLM9am || storedGLM10am  || storedGLM11am || storedGLM12pm || storedGLM1pm || storedGLTu9am || storedGLTu10am || storedGLTu11am || storedGLTu12pm ||  storedGLTu1pm
		|| storedGLW9am || storedGLW10am || storedGLW11am || storedGLW12pm || storedGLW1pm || storedGLTh9am || storedGLTh10am || storedGLTh11am || storedGLTh12pm || storedGLTh1pm
		|| storedGLF9am || storedGLF10am || storedGLF11am || storedGLF12pm || storedGLF1pm ){
		
			document.getElementById('GLM9am').value = storedGLM9am; 	document.getElementById('GLTu9am').value = storedGLTu9am; 	document.getElementById('GLW9am').value = storedGLW9am;   document.getElementById('GLTh9am').value = storedGLTh9am;   document.getElementById('GLF9am').value = storedGLF9am;
			document.getElementById('GLM10am').value = storedGLM10am; 	document.getElementById('GLTu10am').value = storedGLTu10am; document.getElementById('GLW10am').value = storedGLW10am; document.getElementById('GLTh10am').value = storedGLTh10am; document.getElementById('GLF10am').value = storedGLF10am;
			document.getElementById('GLM11am').value = storedGLM11am; 	document.getElementById('GLTu11am').value = storedGLTu11am; document.getElementById('GLW11am').value = storedGLW11am; document.getElementById('GLTh11am').value = storedGLTh11am; document.getElementById('GLF11am').value = storedGLF11am; 
			document.getElementById('GLM12pm').value = storedGLM12pm; 	document.getElementById('GLTu12pm').value = storedGLTu12pm; document.getElementById('GLW12pm').value = storedGLW12pm; document.getElementById('GLTh12pm').value = storedGLTh12pm; document.getElementById('GLF12pm').value = storedGLF12pm;
			document.getElementById('GLM1pm').value = storedGLM1pm; 	document.getElementById('GLTu1pm').value = storedGLTu1pm; 	document.getElementById('GLW1pm').value = storedGLW1pm;   document.getElementById('GLTh1pm').value = storedGLTh1pm;   document.getElementById('GLF1pm').value = storedGLF1pm;
		}
		
		// David Norbert storage variables	
		var storedDNM2pm = localStorage.getItem('storageDNM2pm');   var storedDNTu2pm = localStorage.getItem('storageDNTu2pm'); 	var storedDNW2pm = localStorage.getItem('storageDNW2pm'); 	var storedDNTh2pm = localStorage.getItem('storageDNTh2pm'); 	var storedDNF2pm = localStorage.getItem('storageDNF2pm');
		var storedDNM3pm = localStorage.getItem('storageDNM3pm'); var storedDNTu3pm = localStorage.getItem('storageDNTu3pm'); 	var storedDNW3pm = localStorage.getItem('storageDNW3pm'); var storedDNTh3pm = localStorage.getItem('storageDNTh3pm'); 	var storedDNF3pm = localStorage.getItem('storageDNF3pm');
		var storedDNM4pm = localStorage.getItem('storageDNM4pm'); var storedDNTu4pm = localStorage.getItem('storageDNTu4pm');	var storedDNW4pm = localStorage.getItem('storageDNW4pm'); var storedDNTh4pm = localStorage.getItem('storageDNTh4pm'); 	var storedDNF4pm = localStorage.getItem('storageDNF4pm');
		var storedDNM5pm = localStorage.getItem('storageDNM5pm'); var storedDNTu5pm = localStorage.getItem('storageDNTu5pm'); 	var storedDNW5pm = localStorage.getItem('storageDNW5pm'); var storedDNTh5pm = localStorage.getItem('storageDNTh5pm'); 	var storedDNF5pm = localStorage.getItem('storageDNF5pm');
		var storedDNM6pm = localStorage.getItem('storageDNM6pm');   var storedDNTu6pm = localStorage.getItem('storageDNTu6pm'); 	var storedDNW6pm = localStorage.getItem('storageDNW6pm'); 	var storedDNTh6pm = localStorage.getItem('storageDNTh6pm'); 	var storedDNF6pm= localStorage.getItem('storageDNF6pm');

	
		if(storedDNM2pm || storedDNM3pm  || storedDNM4pm || storedDNM5pm || storedDNM6pm || storedDNTu2pm || storedDNTu3pm || storedDNTu4pm || storedDNTu5pm ||  storedDNTu6pm
		|| storedDNW2pm || storedDNW3pm || storedDNW4pm || storedDNW5pm || storedDNW6pm || storedDNTh2pm || storedDNTh3pm || storedDNTh4pm || storedDNTh5pm || storedDNTh6pm
		|| storedDNF2pm || storedDNF3pm || storedDNF4pm || storedDNF5pm || storedDNF6pm ){
		
			document.getElementById('DNM2pm').value = storedDNM2pm; 	document.getElementById('DNTu2pm').value = storedDNTu2pm; 	document.getElementById('DNW2pm').value = storedDNW2pm;   document.getElementById('DNTh2pm').value = storedDNTh2pm;   document.getElementById('DNF2pm').value = storedDNF2pm;
			document.getElementById('DNM3pm').value = storedDNM3pm; 	document.getElementById('DNTu3pm').value = storedDNTu3pm; document.getElementById('DNW3pm').value = storedDNW3pm; document.getElementById('DNTh3pm').value = storedDNTh3pm; document.getElementById('DNF3pm').value = storedDNF3pm;
			document.getElementById('DNM4pm').value = storedDNM4pm; 	document.getElementById('DNTu4pm').value = storedDNTu4pm; document.getElementById('DNW4pm').value = storedDNW4pm; document.getElementById('DNTh4pm').value = storedDNTh4pm; document.getElementById('DNF4pm').value = storedDNF4pm; 
			document.getElementById('DNM5pm').value = storedDNM5pm; 	document.getElementById('DNTu5pm').value = storedDNTu5pm; document.getElementById('DNW5pm').value = storedDNW5pm; document.getElementById('DNTh5pm').value = storedDNTh5pm; document.getElementById('DNF5pm').value = storedDNF5pm;
			document.getElementById('DNM6pm').value = storedDNM6pm; 	document.getElementById('DNTu6pm').value = storedDNTu6pm; 	document.getElementById('DNW6pm').value = storedDNW6pm;   document.getElementById('DNTh6pm').value = storedDNTh6pm;   document.getElementById('DNF6pm').value = storedDNF6pm;
		}
		
		// Sally Gold storage variables	
		var storedSGM2pm = localStorage.getItem('storageSGM2pm');   var storedSGTu2pm = localStorage.getItem('storageSGTu2pm'); 	var storedSGW2pm = localStorage.getItem('storageSGW2pm'); 	var storedSGTh2pm = localStorage.getItem('storageSGTh2pm'); 	var storedSGF2pm = localStorage.getItem('storageSGF2pm');
		var storedSGM3pm = localStorage.getItem('storageSGM3pm'); var storedSGTu3pm = localStorage.getItem('storageSGTu3pm'); 	var storedSGW3pm = localStorage.getItem('storageSGW3pm'); var storedSGTh3pm = localStorage.getItem('storageSGTh3pm'); 	var storedSGF3pm = localStorage.getItem('storageSGF3pm');
		var storedSGM4pm = localStorage.getItem('storageSGM4pm'); var storedSGTu4pm = localStorage.getItem('storageSGTu4pm');	var storedSGW4pm = localStorage.getItem('storageSGW4pm'); var storedSGTh4pm = localStorage.getItem('storageSGTh4pm'); 	var storedSGF4pm = localStorage.getItem('storageSGF4pm');
		var storedSGM5pm = localStorage.getItem('storageSGM5pm'); var storedSGTu5pm = localStorage.getItem('storageSGTu5pm'); 	var storedSGW5pm = localStorage.getItem('storageSGW5pm'); var storedSGTh5pm = localStorage.getItem('storageSGTh5pm'); 	var storedSGF5pm = localStorage.getItem('storageSGF5pm');
		var storedSGM6pm = localStorage.getItem('storageSGM6pm');   var storedSGTu6pm = localStorage.getItem('storageSGTu6pm'); 	var storedSGW6pm = localStorage.getItem('storageSGW6pm'); 	var storedSGTh6pm = localStorage.getItem('storageSGTh6pm'); 	var storedSGF6pm= localStorage.getItem('storageSGF6pm');

	
		if(storedSGM2pm || storedSGM3pm  || storedSGM4pm || storedSGM5pm || storedSGM6pm || storedSGTu2pm || storedSGTu3pm || storedSGTu4pm || storedSGTu5pm ||  storedSGTu6pm
		|| storedSGW2pm || storedSGW3pm || storedSGW4pm || storedSGW5pm || storedSGW6pm || storedSGTh2pm || storedSGTh3pm || storedSGTh4pm || storedSGTh5pm || storedSGTh6pm
		|| storedSGF2pm || storedSGF3pm || storedSGF4pm || storedSGF5pm || storedSGF6pm ){
		
			document.getElementById('SGM2pm').value = storedSGM2pm; 	document.getElementById('SGTu2pm').value = storedSGTu2pm; 	document.getElementById('SGW2pm').value = storedSGW2pm;   document.getElementById('SGTh2pm').value = storedSGTh2pm;   document.getElementById('SGF2pm').value = storedSGF2pm;
			document.getElementById('SGM3pm').value = storedSGM3pm; 	document.getElementById('SGTu3pm').value = storedSGTu3pm; document.getElementById('SGW3pm').value = storedSGW3pm; document.getElementById('SGTh3pm').value = storedSGTh3pm; document.getElementById('SGF3pm').value = storedSGF3pm;
			document.getElementById('SGM4pm').value = storedSGM4pm; 	document.getElementById('SGTu4pm').value = storedSGTu4pm; document.getElementById('SGW4pm').value = storedSGW4pm; document.getElementById('SGTh4pm').value = storedSGTh4pm; document.getElementById('SGF4pm').value = storedSGF4pm; 
			document.getElementById('SGM5pm').value = storedSGM5pm; 	document.getElementById('SGTu5pm').value = storedSGTu5pm; document.getElementById('SGW5pm').value = storedSGW5pm; document.getElementById('SGTh5pm').value = storedSGTh5pm; document.getElementById('SGF5pm').value = storedSGF5pm;
			document.getElementById('SGM6pm').value = storedSGM6pm; 	document.getElementById('SGTu6pm').value = storedSGTu6pm; 	document.getElementById('SGW6pm').value = storedSGW6pm;   document.getElementById('SGTh6pm').value = storedSGTh6pm;   document.getElementById('SGF6pm').value = storedSGF6pm;
		}
		
		
	}

function booking() { //Start of Booking	 //(w3schools,2014)
		 var bookingName = document.getElementById('fullName').value; //(w3schools,2014)
		 var bookingDentist = document.getElementById('dentistName').value;
		 var bookingTime = document.getElementById('time').value;
		 var bookingDay = document.getElementById('day').value;
// check Dentist first
	if(bookingDentist == "Jane Smith" ){ //(w3schools,2014)
	
// BOOK APPOINTMENT
			// JANE SMITH 9AM MONDAY
			if(bookingTime == "9am" && bookingDay == "Monday"){ 
			var checkJSM9am = document.getElementById('JSM9am').value;
				if ( checkJSM9am == ""){
					document.getElementById("JSM9am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSM9am').value;
					localStorage.setItem('storageJSM9am', fieldValue);	// ( Ravulavaru, 2014)
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 9am on Monday");
			}
				 else if (checkJSM9am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
				// JANE SMITH 10AM MONDAY
  else if(bookingTime == "10am" && bookingDay == "Monday"){
					// the value is free and booked
			var checkJSM10am = document.getElementById('JSM10am').value;
				if ( checkJSM10am == ""){
					document.getElementById("JSM10am").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('JSM10am').value;
					localStorage.setItem('storageJSM10am', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 10am on Monday");
			}
				 else if (checkJSM10am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// JANE SMITH 11AM MONDAY
	else if(bookingTime == "11am" && bookingDay == "Monday"){
			// the value is free and booked
			var checkJSM11am = document.getElementById('JSM11am').value;
				if ( checkJSM11am == ""){
					document.getElementById("JSM11am").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('JSM11am').value;
					localStorage.setItem('storageJSM11am', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 11am on Monday");
			}
				 else if (checkJSM11am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// JANE SMITH 12PM MONDAY
	else if(bookingTime == "12pm" && bookingDay == "Monday"){
			// the value is free and booked
			var checkJSM12pm = document.getElementById('JSM12pm').value;
				if ( checkJSM12pm == ""){
					document.getElementById("JSM12pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('JSM12pm').value;
					localStorage.setItem('storageJSM12pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 12pm on Monday");
			}
				 else if (checkJSM12pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// JANE SMITH 1PM MONDAY
	else if(bookingTime == "1pm" && bookingDay == "Monday"){
			// the value is free and booked
			var checkJSM1pm = document.getElementById('JSM1pm').value;
				if ( checkJSM1pm == ""){
					document.getElementById("JSM1pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('JSM1pm').value;
					localStorage.setItem('storageJSM1pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 1pm on Monday");
			}
				 else if (checkJSM1pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			
			// JANE SMITH 9AM TUESDAY
		else if(bookingTime == "9am" && bookingDay == "Tuesday"){
			var checkJSTu9am = document.getElementById('JSTu9am').value;
				if ( checkJSTu9am == ""){
					document.getElementById("JSTu9am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSTu9am').value;
					localStorage.setItem('storageJSTu9am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 9am on Tuesday");
			}
				 else if (checkJSTu9am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// JANE SMITH 10AM TUESDAY
		else if(bookingTime == "10am" && bookingDay == "Tuesday"){
			var checkJSTu10am = document.getElementById('JSTu10am').value;
				if ( checkJSTu10am == ""){
					document.getElementById("JSTu10am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSTu10am').value;
					localStorage.setItem('storageJSTu10am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 10am on Tuesday");
			}
				 else if (checkJSTu10am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// JANE SMITH 11AM TUESDAY
			else if(bookingTime == "11am" && bookingDay == "Tuesday"){
			var checkJSTu11am = document.getElementById('JSTu11am').value;
				if ( checkJSTu11am == ""){
					document.getElementById("JSTu11am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSTu11am').value;
					localStorage.setItem('storageJSTu11am', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 11am on Tuesday");
			}
				 else if (checkJSTu11am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// JANE SMITH 12PM TUESDAY
			else if(bookingTime == "12pm" && bookingDay == "Tuesday"){
			var checkJSTu12pm = document.getElementById('JSTu12pm').value;
				if ( checkJSTu12pm == ""){
					document.getElementById("JSTu12pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSTu12pm').value;
					localStorage.setItem('storageJSTu12pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 12pm on Tuesday");
			}
				 else if (checkJSTu12pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// JANE SMITH 1PM TUESDAY
			else if(bookingTime == "1pm" && bookingDay == "Tuesday"){
			var checkJSTu1pm = document.getElementById('JSTu1pm').value;
				if ( checkJSTu1pm == ""){
					document.getElementById("JSTu1pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSTu1pm').value;
					localStorage.setItem('storageJSTu1pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 1pm on Tuesday");
			}
				 else if (checkJSTu1pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
			
				// JANE SMITH 9AM WEDNESDAY
		else if(bookingTime == "9am" && bookingDay == "Wednesday"){
			var checkJSW9am = document.getElementById('JSW9am').value;
				if ( checkJSW9am == ""){
					document.getElementById("JSW9am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSW9am').value;
					localStorage.setItem('storageJSW9am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 9am on Wednesday");
			}
				 else if (checkJSW9am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// JANE SMITH 10AM WEDNESDAY
		else if(bookingTime == "10am" && bookingDay == "Wednesday"){
			var checkJSW10am = document.getElementById('JSW10am').value;
				if ( checkJSW10am == ""){
					document.getElementById("JSW10am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSW10am').value;
					localStorage.setItem('storageJSW10am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 10am on Wednesday");
			}
				 else if (checkJSW10am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// JANE SMITH 11AM WEDNESDAY
			else if(bookingTime == "11am" && bookingDay == "Wednesday"){
			var checkJSW11am = document.getElementById('JSW11am').value;
				if ( checkJSW11am == ""){
					document.getElementById("JSW11am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSW11am').value;
					localStorage.setItem('storageJSW11am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 11am on Wednesday");
			}
				 else if (checkJSW11am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// JANE SMITH 12PM WEDNESDAY
			else if(bookingTime == "12pm" && bookingDay == "Wednesday"){
			var checkJSW12pm = document.getElementById('JSW12pm').value;
				if ( checkJSW12pm == ""){
					document.getElementById("JSW12pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSW12pm').value;
					localStorage.setItem('storageJSW12pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 12pm on Wednesday");
			}
				 else if (checkJSW12pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// JANE SMITH 1PM WEDNESDAY
			else if(bookingTime == "1pm" && bookingDay == "Wednesday"){
			var checkJSW1pm = document.getElementById('JSW1pm').value;
				if ( checkJSW1pm == ""){
					document.getElementById("JSW1pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSW1pm').value;
					localStorage.setItem('storageJSW1pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 1pm on Wednesday");
			}
				 else if (checkJSW1pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
			
				// JANE SMITH 9AM THURSDAY
		else if(bookingTime == "9am" && bookingDay == "Thursday"){
			var checkJSTh9am = document.getElementById('JSTh9am').value;
				if ( checkJSTh9am == ""){
					document.getElementById("JSTh9am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSTh9am').value;
					localStorage.setItem('storageJSTh9am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 9am on Thursday");
			}
				 else if (checkJSTh9am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// JANE SMITH 10AM THURSDAY
		else if(bookingTime == "10am" && bookingDay == "Thursday"){
			var checkJSTh10am = document.getElementById('JSTh10am').value;
				if ( checkJSTh10am == ""){
					document.getElementById("JSTh10am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSTh10am').value;
					localStorage.setItem('storageJSTh10am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 10am on Thursday");
			}
				 else if (checkJSTh10am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// JANE SMITH 11AM THURSDAY
			else if(bookingTime == "11am" && bookingDay == "Thursday"){
			var checkJSTh11am = document.getElementById('JSTh11am').value;
				if ( checkJSTh11am == ""){
					document.getElementById("JSTh11am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSTh11am').value;
					localStorage.setItem('storageJSTh11am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 11am on Thursday");
			}
				 else if (checkJSTh11am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// JANE SMITH 12PM THURSDAY
			else if(bookingTime == "12pm" && bookingDay == "Thursday"){
			var checkJSTh12pm = document.getElementById('JSTh12pm').value;
				if ( checkJSTh12pm == ""){
					document.getElementById("JSTh12pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSTh12pm').value;
					localStorage.setItem('storageJSTh12pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 12pm on Thursday");
			}
				 else if (checkJSTh12pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// JANE SMITH 1PM THURSDAY
			else if(bookingTime == "1pm" && bookingDay == "Thursday"){
			var checkJSTh1pm = document.getElementById('JSTh1pm').value;
				if ( checkJSTh1pm == ""){
					document.getElementById("JSTh1pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSTh1pm').value;
					localStorage.setItem('storageJSTh1pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 1pm on Thursday");
			}
				 else if (checkJSTh1pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	

					// JANE SMITH 9AM FRIDAY
		else if(bookingTime == "9am" && bookingDay == "Friday"){
			var checkJSF9am = document.getElementById('JSF9am').value;
				if ( checkJSF9am == ""){
					document.getElementById("JSF9am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSF9am').value;
					localStorage.setItem('storageJSF9am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 9am on Friday");
			}
				 else if (checkJSF9am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// JANE SMITH 10AM FRIDAY
		else if(bookingTime == "10am" && bookingDay == "Friday"){
			var checkJSF10am = document.getElementById('JSF10am').value;
				if ( checkJSF10am == ""){
					document.getElementById("JSF10am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSF10am').value;
					localStorage.setItem('storageJSF10am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 10am on Friday");
			}
				 else if (checkJSF10am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// JANE SMITH 11AM FRIDAY
			else if(bookingTime == "11am" && bookingDay == "Friday"){
			var checkJSF11am = document.getElementById('JSF11am').value;
				if ( checkJSF11am == ""){
					document.getElementById("JSF11am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSF11am').value;
					localStorage.setItem('storageJSF11am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 11am on Friday");
			}
				 else if (checkJSF11am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// JANE SMITH 12PM FRIDAY
			else if(bookingTime == "12pm" && bookingDay == "Friday"){
			var checkJSF12pm = document.getElementById('JSF12pm').value;
				if ( checkJSF12pm == ""){
					document.getElementById("JSF12pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSF12pm').value;
					localStorage.setItem('storageJSF12pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 12pm on Friday");
			}
				 else if (checkJSF12pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// JANE SMITH 1PM FRIDAY
			else if(bookingTime == "1pm" && bookingDay == "Friday"){
			var checkJSF1pm = document.getElementById('JSF1pm').value;
				if ( checkJSF1pm == ""){
					document.getElementById("JSF1pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('JSF1pm').value;
					localStorage.setItem('storageJSF1pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Jane Smith \n At 1pm on Friday");
			}
				 else if (checkJSF1pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	




} // End of Jane Smith Check

	 else if (bookingDentist == "Gary Lane"){
	 
	 // BOOK APPOINTMENT
			// GARY LANE 9AM MONDAY
			if(bookingTime == "9am" && bookingDay == "Monday"){
			var checkGLM9am = document.getElementById('GLM9am').value;
				if ( checkGLM9am == ""){
					document.getElementById("GLM9am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLM9am').value;
					localStorage.setItem('storageGLM9am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 9am on Monday");
			}
				 else if (checkGLM9am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
				// GARY LANE 10AM MONDAY
  else if(bookingTime == "10am" && bookingDay == "Monday"){
					// the value is free and booked
			var checkGLM10am = document.getElementById('GLM10am').value;
				if ( checkGLM10am == ""){
					document.getElementById("GLM10am").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('GLM10am').value;
					localStorage.setItem('storageGLM10am', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 10am on Monday");
			}
				 else if (checkGLM10am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// GARY LANE 11AM MONDAY
	else if(bookingTime == "11am" && bookingDay == "Monday"){
			// the value is free and booked
			var checkGLM11am = document.getElementById('GLM11am').value;
				if ( checkGLM11am == ""){
					document.getElementById("GLM11am").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('GLM11am').value;
					localStorage.setItem('storageGLM11am', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 11am on Monday");
			}
				 else if (checkGLM11am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// GARY LANE 12PM MONDAY
	else if(bookingTime == "12pm" && bookingDay == "Monday"){
			// the value is free and booked
			var checkGLM12pm = document.getElementById('GLM12pm').value;
				if ( checkGLM12pm == ""){
					document.getElementById("GLM12pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('GLM12pm').value;
					localStorage.setItem('storageGLM12pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 12pm on Monday");
			}
				 else if (checkGLM12pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// GARY LANE 1PM MONDAY
	else if(bookingTime == "1pm" && bookingDay == "Monday"){
			// the value is free and booked
			var checkGLM1pm = document.getElementById('GLM1pm').value;
				if ( checkGLM1pm == ""){
					document.getElementById("GLM1pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('GLM1pm').value;
					localStorage.setItem('storageGLM1pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 1pm on Monday");
			}
				 else if (checkGLM1pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			
			// GARY LANE 9AM TUESDAY
		else if(bookingTime == "9am" && bookingDay == "Tuesday"){
			var checkGLTu9am = document.getElementById('GLTu9am').value;
				if ( checkGLTu9am == ""){
					document.getElementById("GLTu9am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLTu9am').value;
					localStorage.setItem('storageGLTu9am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 9am on Tuesday");
			}
				 else if (checkGLTu9am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// GARY LANE 10AM TUESDAY
		else if(bookingTime == "10am" && bookingDay == "Tuesday"){
			var checkGLTu10am = document.getElementById('GLTu10am').value;
				if ( checkGLTu10am == ""){
					document.getElementById("GLTu10am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLTu10am').value;
					localStorage.setItem('storageGLTu10am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 10am on Tuesday");
			}
				 else if (checkGLTu10am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// GARY LANE 11AM TUESDAY
			else if(bookingTime == "11am" && bookingDay == "Tuesday"){
			var checkGLTu11am = document.getElementById('GLTu11am').value;
				if ( checkGLTu11am == ""){
					document.getElementById("GLTu11am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLTu11am').value;
					localStorage.setItem('storageGLTu11am', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 11am on Tuesday");
			}
				 else if (checkGLTu11am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// GARY LANE 12PM TUESDAY
			else if(bookingTime == "12pm" && bookingDay == "Tuesday"){
			var checkGLTu12pm = document.getElementById('GLTu12pm').value;
				if ( checkGLTu12pm == ""){
					document.getElementById("GLTu12pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLTu12pm').value;
					localStorage.setItem('storageGLTu12pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 12pm on Tuesday");
			}
				 else if (checkGLTu12pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// GARY LANE 1PM TUESDAY
			else if(bookingTime == "1pm" && bookingDay == "Tuesday"){
			var checkGLTu1pm = document.getElementById('GLTu1pm').value;
				if ( checkGLTu1pm == ""){
					document.getElementById("GLTu1pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLTu1pm').value;
					localStorage.setItem('storageGLTu1pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 1pm on Tuesday");
			}
				 else if (checkGLTu1pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
			
				// GARY LANE 9AM WEDNESDAY
		else if(bookingTime == "9am" && bookingDay == "Wednesday"){
			var checkGLW9am = document.getElementById('GLW9am').value;
				if ( checkGLW9am == ""){
					document.getElementById("GLW9am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLW9am').value;
					localStorage.setItem('storageGLW9am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 9am on Wednesday");
			}
				 else if (checkGLW9am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// GARY LANE 10AM WEDNESDAY
		else if(bookingTime == "10am" && bookingDay == "Wednesday"){
			var checkGLW10am = document.getElementById('GLW10am').value;
				if ( checkGLW10am == ""){
					document.getElementById("GLW10am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLW10am').value;
					localStorage.setItem('storageGLW10am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 10am on Wednesday");
			}
				 else if (checkGLW10am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// GARY LANE 11AM WEDNESDAY
			else if(bookingTime == "11am" && bookingDay == "Wednesday"){
			var checkGLW11am = document.getElementById('GLW11am').value;
				if ( checkGLW11am == ""){
					document.getElementById("GLW11am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLW11am').value;
					localStorage.setItem('storageGLW11am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 11am on Wednesday");
			}
				 else if (checkGLW11am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// GARY LANE 12PM WEDNESDAY
			else if(bookingTime == "12pm" && bookingDay == "Wednesday"){
			var checkGLW12pm = document.getElementById('GLW12pm').value;
				if ( checkGLW12pm == ""){
					document.getElementById("GLW12pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLW12pm').value;
					localStorage.setItem('storageGLW12pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 12pm on Wednesday");
			}
				 else if (checkGLW12pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// GARY LANE 1PM WEDNESDAY
			else if(bookingTime == "1pm" && bookingDay == "Wednesday"){
			var checkGLW1pm = document.getElementById('GLW1pm').value;
				if ( checkGLW1pm == ""){
					document.getElementById("GLW1pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLW1pm').value;
					localStorage.setItem('storageGLW1pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 1pm on Wednesday");
			}
				 else if (checkGLW1pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
			
				// GARY LANE 9AM THURSDAY
		else if(bookingTime == "9am" && bookingDay == "Thursday"){
			var checkGLTh9am = document.getElementById('GLTh9am').value;
				if ( checkGLTh9am == ""){
					document.getElementById("GLTh9am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLTh9am').value;
					localStorage.setItem('storageGLTh9am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 9am on Thursday");
			}
				 else if (checkGLTh9am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// GARY LANE 10AM THURSDAY
		else if(bookingTime == "10am" && bookingDay == "Thursday"){
			var checkGLTh10am = document.getElementById('GLTh10am').value;
				if ( checkGLTh10am == ""){
					document.getElementById("GLTh10am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLTh10am').value;
					localStorage.setItem('storageGLTh10am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 10am on Thursday");
			}
				 else if (checkGLTh10am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// GARY LANE 11AM THURSDAY
			else if(bookingTime == "11am" && bookingDay == "Thursday"){
			var checkGLTh11am = document.getElementById('GLTh11am').value;
				if ( checkGLTh11am == ""){
					document.getElementById("GLTh11am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLTh11am').value;
					localStorage.setItem('storageGLTh11am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 11am on Thursday");
			}
				 else if (checkGLTh11am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// GARY LANE 12PM THURSDAY
			else if(bookingTime == "12pm" && bookingDay == "Thursday"){
			var checkGLTh12pm = document.getElementById('GLTh12pm').value;
				if ( checkGLTh12pm == ""){
					document.getElementById("GLTh12pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLTh12pm').value;
					localStorage.setItem('storageGLTh12pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 12pm on Thursday");
			}
				 else if (checkGLTh12pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// GARY LANE 1PM THURSDAY
			else if(bookingTime == "1pm" && bookingDay == "Thursday"){
			var checkGLTh1pm = document.getElementById('GLTh1pm').value;
				if ( checkGLTh1pm == ""){
					document.getElementById("GLTh1pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLTh1pm').value;
					localStorage.setItem('storageGLTh1pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 1pm on Thursday");
			}
				 else if (checkGLTh1pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	

					// GARY LANE 9AM FRIDAY
		else if(bookingTime == "9am" && bookingDay == "Friday"){
			var checkGLF9am = document.getElementById('GLF9am').value;
				if ( checkGLF9am == ""){
					document.getElementById("GLF9am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLF9am').value;
					localStorage.setItem('storageGLF9am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 9am on Friday");
			}
				 else if (checkGLF9am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// GARY LANE 10AM FRIDAY
		else if(bookingTime == "10am" && bookingDay == "Friday"){
			var checkGLF10am = document.getElementById('GLF10am').value;
				if ( checkGLF10am == ""){
					document.getElementById("GLF10am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLF10am').value;
					localStorage.setItem('storageGLF10am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 10am on Friday");
			}
				 else if (checkGLF10am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// GARY LANE 11AM FRIDAY
			else if(bookingTime == "11am" && bookingDay == "Friday"){
			var checkGLF11am = document.getElementById('GLF11am').value;
				if ( checkGLF11am == ""){
					document.getElementById("GLF11am").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLF11am').value;
					localStorage.setItem('storageGLF11am', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 11am on Friday");
			}
				 else if (checkGLF11am == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// GARY LANE 12PM FRIDAY
			else if(bookingTime == "12pm" && bookingDay == "Friday"){
			var checkGLF12pm = document.getElementById('GLF12pm').value;
				if ( checkGLF12pm == ""){
					document.getElementById("GLF12pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLF12pm').value;
					localStorage.setItem('storageGLF12pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 12pm on Friday");
			}
				 else if (checkGLF12pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				//  GARY LANE 1PM FRIDAY
			else if(bookingTime == "1pm" && bookingDay == "Friday"){
			var checkGLF1pm = document.getElementById('GLF1pm').value;
				if ( checkGLF1pm == ""){
					document.getElementById("GLF1pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('GLF1pm').value;
					localStorage.setItem('storageGLF1pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Gary Lane \n At 1pm on Friday");
			}
				 else if (checkGLF1pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	

	 }
 
	 else if (bookingDentist == "David Norbert"){
	 
	 // BOOK APPOINTMENT
			// DAVID NORBERT 2PM MONDAY
			if(bookingTime == "2pm" && bookingDay == "Monday"){
			var checkDNM2pm = document.getElementById('DNM2pm').value;
				if ( checkDNM2pm == ""){
					document.getElementById("DNM2pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNM2pm').value;
					localStorage.setItem('storageDNM2pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 2pm on Monday");
			}
				 else if (checkDNM2pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
				// DAVID NORBERT 3PM MONDAY
  else if(bookingTime == "3pm" && bookingDay == "Monday"){
					// the value is free and booked
			var checkDNM3pm = document.getElementById('DNM3pm').value;
				if ( checkDNM3pm == ""){
					document.getElementById("DNM3pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('DNM3pm').value;
					localStorage.setItem('storageDNM3pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 3pm on Monday");
			}
				 else if (checkDNM3pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// DAVID NORBERT 4PM MONDAY
	else if(bookingTime == "4pm" && bookingDay == "Monday"){
			// the value is free and booked
			var checkDNM4pm = document.getElementById('DNM4pm').value;
				if ( checkDNM4pm == ""){
					document.getElementById("DNM4pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('DNM4pm').value;
					localStorage.setItem('storageDNM4pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 4pm on Monday");
			}
				 else if (checkDNM4pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// DAVID NORBERT 5PM MONDAY
	else if(bookingTime == "5pm" && bookingDay == "Monday"){
			// the value is free and booked
			var checkDNM5pm = document.getElementById('DNM5pm').value;
				if ( checkDNM5pm == ""){
					document.getElementById("DNM5pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('DNM5pm').value;
					localStorage.setItem('storageDNM5pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 5pm on Monday");
			}
				 else if (checkDNM5pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// DAVID NORBERT 6PM MONDAY
	else if(bookingTime == "6pm" && bookingDay == "Monday"){
			// the value is free and booked
			var checkDNM6pm = document.getElementById('DNM6pm').value;
				if ( checkDNM6pm == ""){
					document.getElementById("DNM6pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('DNM6pm').value;
					localStorage.setItem('storageDNM6pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 6pm on Monday");
			}
				 else if (checkDNM6pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			
			// DAVID NORBERT 2PM TUESDAY
		else if(bookingTime == "2pm" && bookingDay == "Tuesday"){
			var checkDNTu2pm = document.getElementById('DNTu2pm').value;
				if ( checkDNTu2pm == ""){
					document.getElementById("DNTu2pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNTu2pm').value;
					localStorage.setItem('storageDNTu2pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 2pm on Tuesday");
			}
				 else if (checkDNTu2pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// DAVID NORBERT 3PM TUESDAY
		else if(bookingTime == "3pm" && bookingDay == "Tuesday"){
			var checkDNTu3pm = document.getElementById('DNTu3pm').value;
				if ( checkDNTu3pm == ""){
					document.getElementById("DNTu3pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNTu3pm').value;
					localStorage.setItem('storageDNTu3pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 3pm on Tuesday");
			}
				 else if (checkDNTu3pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// DAVID NORBERT 4PM TUESDAY
			else if(bookingTime == "4pm" && bookingDay == "Tuesday"){
			var checkDNTu4pm = document.getElementById('DNTu4pm').value;
				if ( checkDNTu4pm == ""){
					document.getElementById("DNTu4pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNTu4pm').value;
					localStorage.setItem('storageDNTu4pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 4pm on Tuesday");
			}
				 else if (checkDNTu4pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// DAVID NORBERT 5PM TUESDAY
			else if(bookingTime == "5pm" && bookingDay == "Tuesday"){
			var checkDNTu5pm = document.getElementById('DNTu5pm').value;
				if ( checkDNTu5pm == ""){
					document.getElementById("DNTu5pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNTu5pm').value;
					localStorage.setItem('storageDNTu5pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 5pm on Tuesday");
			}
				 else if (checkDNTu5pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// DAVID NORBERT 6PM TUESDAY
			else if(bookingTime == "6pm" && bookingDay == "Tuesday"){
			var checkDNTu6pm = document.getElementById('DNTu6pm').value;
				if ( checkDNTu6pm == ""){
					document.getElementById("DNTu6pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNTu6pm').value;
					localStorage.setItem('storageDNTu6pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 6pm on Tuesday");
			}
				 else if (checkDNTu6pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
			
				// DAVID NORBERT 2PM WEDNESDAY
		else if(bookingTime == "2pm" && bookingDay == "Wednesday"){
			var checkDNW2pm = document.getElementById('DNW2pm').value;
				if ( checkDNW2pm == ""){
					document.getElementById("DNW2pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNW2pm').value;
					localStorage.setItem('storageDNW2pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 2pm on Wednesday");
			}
				 else if (checkDNW2pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// DAVID NORBERT 3PM WEDNESDAY
		else if(bookingTime == "3pm" && bookingDay == "Wednesday"){
			var checkDNW3pm = document.getElementById('DNW3pm').value;
				if ( checkDNW3pm == ""){
					document.getElementById("DNW3pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNW3pm').value;
					localStorage.setItem('storageDNW3pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 3pm on Wednesday");
			}
				 else if (checkDNW3pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// DAVID NORBERT 4PM WEDNESDAY
			else if(bookingTime == "4pm" && bookingDay == "Wednesday"){
			var checkDNW4pm = document.getElementById('DNW4pm').value;
				if ( checkDNW4pm == ""){
					document.getElementById("DNW4pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNW4pm').value;
					localStorage.setItem('storageDNW4pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 4pm on Wednesday");
			}
				 else if (checkDNW4pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// DAVID NORBERT 5PM WEDNESDAY
			else if(bookingTime == "5pm" && bookingDay == "Wednesday"){
			var checkDNW5pm = document.getElementById('DNW5pm').value;
				if ( checkDNW5pm == ""){
					document.getElementById("DNW5pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNW5pm').value;
					localStorage.setItem('storageDNW5pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 5pm on Wednesday");
			}
				 else if (checkDNW5pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// DAVID NORBERT 6PM WEDNESDAY
			else if(bookingTime == "6pm" && bookingDay == "Wednesday"){
			var checkDNW6pm = document.getElementById('DNW6pm').value;
				if ( checkDNW6pm == ""){
					document.getElementById("DNW6pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNW6pm').value;
					localStorage.setItem('storageDNW6pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 6pm on Wednesday");
			}
				 else if (checkDNW6pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
			
				// DAVID NORBERT 2PM THURSDAY
		else if(bookingTime == "2pm" && bookingDay == "Thursday"){
			var checkDNTh2pm = document.getElementById('DNTh2pm').value;
				if ( checkDNTh2pm == ""){
					document.getElementById("DNTh2pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNTh2pm').value;
					localStorage.setItem('storageDNTh2pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 2pm on Thursday");
			}
				 else if (checkDNTh2pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// DAVID NORBERT 3PM THURSDAY
		else if(bookingTime == "3pm" && bookingDay == "Thursday"){
			var checkDNTh3pm = document.getElementById('DNTh3pm').value;
				if ( checkDNTh3pm == ""){
					document.getElementById("DNTh3pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNTh3pm').value;
					localStorage.setItem('storageDNTh3pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 3pm on Thursday");
			}
				 else if (checkDNTh3pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// DAVID NORBERT 4PM THURSDAY
			else if(bookingTime == "4pm" && bookingDay == "Thursday"){
			var checkDNTh4pm = document.getElementById('DNTh4pm').value;
				if ( checkDNTh4pm == ""){
					document.getElementById("DNTh4pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNTh4pm').value;
					localStorage.setItem('storageDNTh4pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 4pm on Thursday");
			}
				 else if (checkDNTh4pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// DAVID NORBERT 5PM THURSDAY
			else if(bookingTime == "5pm" && bookingDay == "Thursday"){
			var checkDNTh5pm = document.getElementById('DNTh5pm').value;
				if ( checkDNTh5pm == ""){
					document.getElementById("DNTh5pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNTh5pm').value;
					localStorage.setItem('storageDNTh5pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 5pm on Thursday");
			}
				 else if (checkDNTh5pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// DAVID NORBERT 6PM THURSDAY
			else if(bookingTime == "6pm" && bookingDay == "Thursday"){
			var checkDNTh6pm = document.getElementById('DNTh6pm').value;
				if ( checkDNTh6pm == ""){
					document.getElementById("DNTh6pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNTh6pm').value;
					localStorage.setItem('storageDNTh6pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 6pm on Thursday");
			}
				 else if (checkDNTh6pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	

					// DAVID NORBERT 2PM FRIDAY
		else if(bookingTime == "2pm" && bookingDay == "Friday"){
			var checkDNF2pm = document.getElementById('DNF2pm').value;
				if ( checkDNF2pm == ""){
					document.getElementById("DNF2pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNF2pm').value;
					localStorage.setItem('storageDNF2pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 2pm on Friday");
			}
				 else if (checkDNF2pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// DAVID NORBERT 3PM FRIDAY
		else if(bookingTime == "3pm" && bookingDay == "Friday"){
			var checkDNF3pm = document.getElementById('DNF3pm').value;
				if ( checkDNF3pm == ""){
					document.getElementById("DNF3pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNF3pm').value;
					localStorage.setItem('storageDNF3pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 3pm on Friday");
			}
				 else if (checkDNF3pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// DAVID NORBERT 4PM FRIDAY
			else if(bookingTime == "4pm" && bookingDay == "Friday"){
			var checkDNF4pm = document.getElementById('DNF4pm').value;
				if ( checkDNF4pm == ""){
					document.getElementById("DNF4pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNF4pm').value;
					localStorage.setItem('storageDNF4pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 4pm on Friday");
			}
				 else if (checkDNF4pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// DAVID NORBERT 5PM FRIDAY
			else if(bookingTime == "5pm" && bookingDay == "Friday"){
			var checkDNF5pm = document.getElementById('DNF5pm').value;
				if ( checkDNF5pm == ""){
					document.getElementById("DNF5pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNF5pm').value;
					localStorage.setItem('storageDNF5pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 5pm on Friday");
			}
				 else if (checkDNF5pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				//  DAVID NORBERT 6PM FRIDAY
			else if(bookingTime == "6pm" && bookingDay == "Friday"){
			var checkDNF6pm = document.getElementById('DNF6pm').value;
				if ( checkDNF6pm == ""){
					document.getElementById("DNF6pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('DNF6pm').value;
					localStorage.setItem('storageDNF6pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see David Norbert \n At 6pm on Friday");
			}
				 else if (checkDNF6pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	

	 }
	else if (bookingDentist == "Sally Gold"){
	
	 // BOOK APPOINTMENT
			// SALLY GOLD 2PM MONDAY
			if(bookingTime == "2pm" && bookingDay == "Monday"){
			var checkSGM2pm = document.getElementById('SGM2pm').value;
				if ( checkSGM2pm == ""){
					document.getElementById("SGM2pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGM2pm').value;
					localStorage.setItem('storageSGM2pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 2pm on Monday");
			}
				 else if (checkSGM2pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
				// SALLY GOLD 3PM MONDAY
  else if(bookingTime == "3pm" && bookingDay == "Monday"){
					// the value is free and booked
			var checkSGM3pm = document.getElementById('SGM3pm').value;
				if ( checkSGM3pm == ""){
					document.getElementById("SGM3pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('SGM3pm').value;
					localStorage.setItem('storageSGM3pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 3pm on Monday");
			}
				 else if (checkSGM3pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// SALLY GOLD 4PM MONDAY
	else if(bookingTime == "4pm" && bookingDay == "Monday"){
			// the value is free and booked
			var checkSGM4pm = document.getElementById('SGM4pm').value;
				if ( checkSGM4pm == ""){
					document.getElementById("SGM4pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('SGM4pm').value;
					localStorage.setItem('storageSGM4pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 4pm on Monday");
			}
				 else if (checkSGM4pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// SALLY GOLD 5PM MONDAY
	else if(bookingTime == "5pm" && bookingDay == "Monday"){
			// the value is free and booked
			var checkSGM5pm = document.getElementById('SGM5pm').value;
				if ( checkSGM5pm == ""){
					document.getElementById("SGM5pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('SGM5pm').value;
					localStorage.setItem('storageSGM5pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 5pm on Monday");
			}
				 else if (checkSGM5pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			// SALLY GOLD 6PM MONDAY
	else if(bookingTime == "6pm" && bookingDay == "Monday"){
			// the value is free and booked
			var checkSGM6pm = document.getElementById('SGM6pm').value;
				if ( checkSGM6pm == ""){
					document.getElementById("SGM6pm").value = "Bkd";	
					// save the info in local storage 
					var fieldValue = document.getElementById('SGM6pm').value;
					localStorage.setItem('storageSGM6pm', fieldValue);
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 6pm on Monday");
			}
				 else if (checkSGM6pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}
			
			// SALLY GOLD 2PM TUESDAY
		else if(bookingTime == "2pm" && bookingDay == "Tuesday"){
			var checkSGTu2pm = document.getElementById('SGTu2pm').value;
				if ( checkSGTu2pm == ""){
					document.getElementById("SGTu2pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGTu2pm').value;
					localStorage.setItem('storageSGTu2pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 2pm on Tuesday");
			}
				 else if (checkSGTu2pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// SALLY GOLD 3PM TUESDAY
		else if(bookingTime == "3pm" && bookingDay == "Tuesday"){
			var checkSGTu3pm = document.getElementById('SGTu3pm').value;
				if ( checkSGTu3pm == ""){
					document.getElementById("SGTu3pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGTu3pm').value;
					localStorage.setItem('storageSGTu3pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 3pm on Tuesday");
			}
				 else if (checkSGTu3pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// SALLY GOLD 4PM TUESDAY
			else if(bookingTime == "4pm" && bookingDay == "Tuesday"){
			var checkSGTu4pm = document.getElementById('SGTu4pm').value;
				if ( checkSGTu4pm == ""){
					document.getElementById("SGTu4pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGTu4pm').value;
					localStorage.setItem('storageSGTu4pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 4pm on Tuesday");
			}
				 else if (checkSGTu4pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// SALLY GOLD 5PM TUESDAY
			else if(bookingTime == "5pm" && bookingDay == "Tuesday"){
			var checkSGTu5pm = document.getElementById('SGTu5pm').value;
				if ( checkSGTu5pm == ""){
					document.getElementById("SGTu5pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGTu5pm').value;
					localStorage.setItem('storageSGTu5pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 5pm on Tuesday");
			}
				 else if (checkSGTu5pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// SALLY GOLD 6PM TUESDAY
			else if(bookingTime == "6pm" && bookingDay == "Tuesday"){
			var checkSGTu6pm = document.getElementById('SGTu6pm').value;
				if ( checkSGTu6pm == ""){
					document.getElementById("SGTu6pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGTu6pm').value;
					localStorage.setItem('storageSGTu6pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 6pm on Tuesday");
			}
				 else if (checkSGTu6pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
			
				// SALLY GOLD 2PM WEDNESDAY
		else if(bookingTime == "2pm" && bookingDay == "Wednesday"){
			var checkSGW2pm = document.getElementById('SGW2pm').value;
				if ( checkSGW2pm == ""){
					document.getElementById("SGW2pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGW2pm').value;
					localStorage.setItem('storageSGW2pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 2pm on Wednesday");
			}
				 else if (checkSGW2pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// SALLY GOLD 3PM WEDNESDAY
		else if(bookingTime == "3pm" && bookingDay == "Wednesday"){
			var checkSGW3pm = document.getElementById('SGW3pm').value;
				if ( checkSGW3pm == ""){
					document.getElementById("SGW3pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGW3pm').value;
					localStorage.setItem('storageSGW3pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 3pm on Wednesday");
			}
				 else if (checkSGW3pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// SALLY GOLD 4PM WEDNESDAY
			else if(bookingTime == "4pm" && bookingDay == "Wednesday"){
			var checkSGW4pm = document.getElementById('SGW4pm').value;
				if ( checkSGW4pm == ""){
					document.getElementById("SGW4pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGW4pm').value;
					localStorage.setItem('storageSGW4pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 4pm on Wednesday");
			}
				 else if (checkSGW4pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// SALLY GOLD 5PM WEDNESDAY
			else if(bookingTime == "5pm" && bookingDay == "Wednesday"){
			var checkSGW5pm = document.getElementById('SGW5pm').value;
				if ( checkSGW5pm == ""){
					document.getElementById("SGW5pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGW5pm').value;
					localStorage.setItem('storageSGW5pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 5pm on Wednesday");
			}
				 else if (checkSGW5pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// SALLY GOLD 6PM WEDNESDAY
			else if(bookingTime == "6pm" && bookingDay == "Wednesday"){
			var checkSGW6pm = document.getElementById('SGW6pm').value;
				if ( checkSGW6pm == ""){
					document.getElementById("SGW6pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGW6pm').value;
					localStorage.setItem('storageSGW6pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 6pm on Wednesday");
			}
				 else if (checkSGW6pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
			
				// SALLY GOLD 2PM THURSDAY
		else if(bookingTime == "2pm" && bookingDay == "Thursday"){
			var checkSGTh2pm = document.getElementById('SGTh2pm').value;
				if ( checkSGTh2pm == ""){
					document.getElementById("SGTh2pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGTh2pm').value;
					localStorage.setItem('storageSGTh2pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 2pm on Thursday");
			}
				 else if (checkSGTh2pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// SALLY GOLD 3PM THURSDAY
		else if(bookingTime == "3pm" && bookingDay == "Thursday"){
			var checkSGTh3pm = document.getElementById('SGTh3pm').value;
				if ( checkSGTh3pm == ""){
					document.getElementById("SGTh3pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGTh3pm').value;
					localStorage.setItem('storageSGTh3pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 3pm on Thursday");
			}
				 else if (checkSGTh3pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// SALLY GOLD 4PM THURSDAY
			else if(bookingTime == "4pm" && bookingDay == "Thursday"){
			var checkSGTh4pm = document.getElementById('SGTh4pm').value;
				if ( checkSGTh4pm == ""){
					document.getElementById("SGTh4pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGTh4pm').value;
					localStorage.setItem('storageSGTh4pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 4pm on Thursday");
			}
				 else if (checkSGTh4pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// SALLY GOLD 5PM THURSDAY
			else if(bookingTime == "5pm" && bookingDay == "Thursday"){
			var checkSGTh5pm = document.getElementById('SGTh5pm').value;
				if ( checkSGTh5pm == ""){
					document.getElementById("SGTh5pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGTh5pm').value;
					localStorage.setItem('storageSGTh5pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 5pm on Thursday");
			}
				 else if (checkSGTh5pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// SALLY GOLD 6PM THURSDAY
			else if(bookingTime == "6pm" && bookingDay == "Thursday"){
			var checkSGTh6pm = document.getElementById('SGTh6pm').value;
				if ( checkSGTh6pm == ""){
					document.getElementById("SGTh6pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGTh6pm').value;
					localStorage.setItem('storageSGTh6pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 6pm on Thursday");
			}
				 else if (checkSGTh6pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	

					// SALLY GOLD 2PM FRIDAY
		else if(bookingTime == "2pm" && bookingDay == "Friday"){
			var checkSGF2pm = document.getElementById('SGF2pm').value;
				if ( checkSGF2pm == ""){
					document.getElementById("SGF2pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGF2pm').value;
					localStorage.setItem('storageSGF2pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 2pm on Friday");
			}
				 else if (checkSGF2pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// SALLY GOLD 3PM FRIDAY
		else if(bookingTime == "3pm" && bookingDay == "Friday"){
			var checkSGF3pm = document.getElementById('SGF3pm').value;
				if ( checkSGF3pm == ""){
					document.getElementById("SGF3pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGF3pm').value;
					localStorage.setItem('storageSGF3pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 3pm on Friday");
			}
				 else if (checkSGF3pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	
				// SALLY GOLD 4PM FRIDAY
			else if(bookingTime == "4pm" && bookingDay == "Friday"){
			var checkSGF4pm = document.getElementById('SGF4pm').value;
				if ( checkSGF4pm == ""){
					document.getElementById("SGF4pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGF4pm').value;
					localStorage.setItem('storageSGF4pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 4pm on Friday");
			}
				 else if (checkSGF4pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				// SALLY GOLD 5PM FRIDAY
			else if(bookingTime == "5pm" && bookingDay == "Friday"){
			var checkSGF5pm = document.getElementById('SGF5pm').value;
				if ( checkSGF5pm == ""){
					document.getElementById("SGF5pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGF5pm').value;
					localStorage.setItem('storageSGF5pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 5pm on Friday");
			}
				 else if (checkSGF5pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}

				//  SALLY GOLD 6PM FRIDAY
			else if(bookingTime == "6pm" && bookingDay == "Friday"){
			var checkSGF6pm = document.getElementById('SGF6pm').value;
				if ( checkSGF6pm == ""){
					document.getElementById("SGF6pm").value = "Bkd";
					// save the info in local storage 
					var fieldValue = document.getElementById('SGF6pm').value;
					localStorage.setItem('storageSGF6pm', fieldValue);	
					alert("Dear " + bookingName +  " \n You have been booked to see Sally Gold \n At 6pm on Friday");
			}
				 else if (checkSGF6pm == "Bkd") {
					alert("Sorry that appointment slot is taken, \n please choose another time");
				}
			}	

	}

} //end of booking function 


	function selectStaffElement(){

	var timetableChoice = document.getElementById("timetableChoice");
	var selectedElement = timetableChoice.options[timetableChoice.selectedIndex].value;
		//display staff information
		
		if(selectedElement == "staffInfoOption"){
			document.getElementById('staffInfo').style.display = 'block' , document.getElementById('janeSmithTimetable').style.display = 'none' ,  document.getElementById('garyLaneTimetable').style.display = 'none' , document.getElementById('davidNorbertTimetable').style.display = 'none' , document.getElementById('sallyGoldTimetable').style.display = 'none'; // (w3schools,2014)
		}
			//display Jane Smith's Timetable
		else if(selectedElement == "janeSmithOption"){ 
			document.getElementById('staffInfo').style.display = 'none' , document.getElementById('janeSmithTimetable').style.display = 'block' ,  document.getElementById('garyLaneTimetable').style.display = 'none' , document.getElementById('davidNorbertTimetable').style.display = 'none' , document.getElementById('sallyGoldTimetable').style.display = 'none'; 			
		}
			//display Gary Lane's Timetable
		else if(selectedElement == "garyLaneOption"){	
			document.getElementById('staffInfo').style.display = 'none' , document.getElementById('janeSmithTimetable').style.display = 'none' ,  document.getElementById('garyLaneTimetable').style.display = 'block' , document.getElementById('davidNorbertTimetable').style.display = 'none' , document.getElementById('sallyGoldTimetable').style.display = 'none';	
		}
			//display David Norbert's Timetable
		else if(selectedElement == "davidNorbertOption"){
		
			document.getElementById('staffInfo').style.display = 'none' , document.getElementById('janeSmithTimetable').style.display = 'none' ,  document.getElementById('garyLaneTimetable').style.display = 'none' , document.getElementById('davidNorbertTimetable').style.display = 'block' , document.getElementById('sallyGoldTimetable').style.display = 'none';
		}
			//display Sally Gold's Timetable
		else if(selectedElement == "sallyGoldOption"){	
			document.getElementById('staffInfo').style.display = 'none' , document.getElementById('janeSmithTimetable').style.display = 'none' ,  document.getElementById('garyLaneTimetable').style.display = 'none' , document.getElementById('davidNorbertTimetable').style.display = 'none' , document.getElementById('sallyGoldTimetable').style.display = 'block'; 
		}
		

	}

	
	//FOOTER BUTTONS
	
	function about(){
	
	alert(" FenDentists Mobile Application \n Software: Version 2.0 \n Date:21/12/2014 \n Author:Ben Walker \n Web Design: Ben Walker");
	
	}
	
	function help(){
	
	alert("Application Admin: Ben Walker \n Contact Number: 01921 2312543 \n To get Staff appointment timetables click on Staff Information \n then you should being able to down down on their timetable" );
	
	}
	
	function staffInfo(){

	document.getElementById('staffInfoContent').style.display = 'block' ,document.getElementById('staffInfoBtn').style.display = 'none' , document.getElementById('appointmentFormContent').style.display = 'none' ,document.getElementById('bookingFormBtn').style.display = 'inline';
	
	}
	
	function bookForm(){
	document.getElementById('appointmentFormContent').style.display = 'block' , document.getElementById('bookingFormBtn').style.display = 'none' , document.getElementById('staffInfoContent').style.display = 'none' , document.getElementById('staffInfoBtn').style.display = 'inline' ;
	}
		


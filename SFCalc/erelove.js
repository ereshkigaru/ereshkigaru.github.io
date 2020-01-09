function erelove(){
	
	var Plus_Jin = 0;
	var Plus_Wii = 0;
	var Prob_Jin = 100;
	var Prob_Wii = 100;
	var Museum; //index
	var AP; //value
	var Obj, n, i, j, w, t;
	var appleT, appleJ, appleW;
	var Data = [[39.3,10.8],[27.5,6.9],[24.6,6.2],[20.2,5.1],[15.1,5.1],[9.4,4.4],[16,6.8],[10.2,3.1]];//[drop, bundle]
	var Master = [0,20,21,22,23,24,25,26,27,28,31,32,33,34,35,38,39,40,41,42,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,126,127,127,128,128,129,129,130,130,131,131,132,132,133,133,134,134,135,135,136,136,136,136,137,137,137,137,138,138,138,138,139,139,139,139,140,140,140,140];
	
	for(i=1; i<=6; i++) { //Servant
		Obj = document.getElementById('S'+i);
		n = parseInt(Obj.options[Obj.selectedIndex].value);
		switch(n){
			case 3:
				Plus_Jin += 1;
				break;
			case 4:
				Plus_Wii += 1;
				break;
			default:
				Plus_Jin += 1;
				Plus_Wii += 1;
		}
	}
	
	for(i=1; i<=6; i++) { //Craft Essence
		Obj = document.getElementById('CE'+i);
		n = parseInt(Obj.options[Obj.selectedIndex].value);
		switch(n){
			case 0:
				Plus_Jin += 3;
				Plus_Wii += 3;
				break;
			case 1:
				Plus_Jin += 2;
				Plus_Wii += 2;
				break;
			case 2:
				Prob_Jin += 200;
				break;
			case 3:
				Prob_Jin += 100;
				break;
			case 4:
				Prob_Wii += 200;
				break;
			case 5:
				Prob_Wii += 100;
				break;
		}
	}
	
	Obj = document.getElementById('MU');
	Museum = parseInt(Obj.options[Obj.selectedIndex].value); 
	
	Obj = document.getElementById('LV');
	AP = Master[parseInt(Obj.value)];
	
	j = Data[Museum][0]*(Prob_Jin/(Prob_Jin+Prob_Wii)) + Plus_Jin*Data[Museum][1]*(Prob_Jin/(Prob_Jin+Prob_Wii));
	w = Data[Museum][0]*(Prob_Wii/(Prob_Jin+Prob_Wii)) + Plus_Wii*Data[Museum][1]*(Prob_Wii/(Prob_Jin+Prob_Wii));
	t = j + w;
	
	appleJ = (24000/(AP*j)).toFixed(4); //(40*(600/j))/AP
	appleW = (24000/(AP*w)).toFixed(4);
	appleT = (24000/(AP*t)).toFixed(4);
	
	document.getElementById("Plus_Jin").innerHTML = '+'+Plus_Jin;
	document.getElementById("Plus_Wii").innerHTML = '+'+Plus_Wii;
	document.getElementById("Prob_Jin").innerHTML = Prob_Jin+'%';
	document.getElementById("Prob_Wii").innerHTML = Prob_Wii+'%';
	document.getElementById("AT").innerHTML = appleT+'개';
	document.getElementById("AJ").innerHTML = appleJ+'개';
	document.getElementById("AW").innerHTML = appleW+'개';
	
	alert('Message from 에레쟝애껴욧:\nCalculation Complete.');
}
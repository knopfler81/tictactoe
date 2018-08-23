var checkbox = document.getElementById("checkbox")
var player = "x" 
var computer = "o"
var Kases = Array.from(document.getElementsByClassName("case"));
var kase_1 = document.getElementById("1")
var kase_2 = document.getElementById("2")
var kase_3 = document.getElementById("3")
var kase_4 = document.getElementById("4")
var kase_5 = document.getElementById("5")
var kase_6 = document.getElementById("6")
var kase_7 = document.getElementById("7")
var kase_8 = document.getElementById("8")
var kase_9 = document.getElementById("9")


checkbox.addEventListener('click', changeLetter)

function changeLetter(){
	if(checkbox.checked === false){
		player = "o"
		computer = "x"
	}
}

Kases.forEach(function(kase){
	kase.addEventListener('click', play)

	function play(){
		playerTurn();
	}

	function playerTurn(){
		if(kase.innerHTML.trim() === ""){
			kase.innerHTML = player	
		win();
		}
	}

	function computerTurn(){
		win();
		if(kase.innerHTML.trim() === ""){
			kase.innerHTML = computer	
		}
	}
	function win(){
		if((kase_1.innerHTML && kase_2.innerHTML && kase_3.innerHTML) === player){
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_2.style.backgroundColor = "pink"
				kase_3.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_2.style.backgroundColor = "#fff"
				kase_3.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_2.style.backgroundColor = "pink"
				kase_3.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_2.style.backgroundColor = "#fff"
				kase_3.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_2.style.backgroundColor = "pink"
				kase_3.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);

		}
		else if((kase_4.innerHTML && kase_5.innerHTML && kase_6.innerHTML) === player){
			setTimeout(function(){
				kase_4.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_4.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_4.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_4.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_4.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_7.innerHTML && kase_8.innerHTML && kase_9.innerHTML) === player){
			setTimeout(function(){
				kase_7.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_7.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_7.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_7.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_7.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);

		}
		else if((kase_1.innerHTML && kase_4.innerHTML && kase_7.innerHTML) === player){
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_4.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_4.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_4.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_4.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_4.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_2.innerHTML && kase_5.innerHTML && kase_8.innerHTML) === player){
			setTimeout(function(){
				kase_2.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_2.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_2.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_2.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_2.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_3.innerHTML && kase_6.innerHTML && kase_9.innerHTML) === player){
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_1.innerHTML && kase_5.innerHTML && kase_9.innerHTML) === player){
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_3.innerHTML && kase_5.innerHTML && kase_7.innerHTML) === player){
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_1.innerHTML && kase_2.innerHTML && kase_3.innerHTML) === computer){
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_2.style.backgroundColor = "blue"
				kase_3.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_2.style.backgroundColor = "#fff"
				kase_3.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_2.style.backgroundColor = "blue"
				kase_3.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_2.style.backgroundColor = "#fff"
				kase_3.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_2.style.backgroundColor = "blue"
				kase_3.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);

		}
		else if((kase_4.innerHTML && kase_5.innerHTML && kase_6.innerHTML) === computer){
			setTimeout(function(){
				kase_4.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_4.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_4.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_4.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_4.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_7.innerHTML && kase_8.innerHTML && kase_9.innerHTML) === computer){
			setTimeout(function(){
				kase_7.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_7.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_7.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_7.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_7.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);

		}
		else if((kase_1.innerHTML && kase_4.innerHTML && kase_7.innerHTML) === computer){
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_4.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_4.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_4.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_4.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_4.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_2.innerHTML && kase_5.innerHTML && kase_8.innerHTML) === computer){
			setTimeout(function(){
				kase_2.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_2.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_2.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_2.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_2.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_3.innerHTML && kase_6.innerHTML && kase_9.innerHTML) === computer){
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_1.innerHTML && kase_5.innerHTML && kase_9.innerHTML) === computer){
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
		else if((kase_3.innerHTML && kase_5.innerHTML && kase_7.innerHTML) === computer){
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 2500);
		}
	}
})


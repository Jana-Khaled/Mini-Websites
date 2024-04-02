let count=0

const value= document.querySelector("#value")

const but= document.querySelectorAll(".btn")


but.forEach(function (btn) {

	btn.addEventListener("click", function(e){

		const text= e.currentTarget.classList

		if(text.contains("increase")){

			count ++
		}

		else if(text.contains("decrease")){

			count --
		}

		else{

			count=0
		}

		value.textContent= count

	})
})

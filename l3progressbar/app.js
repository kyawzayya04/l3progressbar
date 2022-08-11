let getprogressbar = document.querySelector(".progress-bar")
let getprogress = document.querySelector(".progress")
let getdownloadbtn = document.querySelector(".download-btn")
let geturl = "https://linkedin.com"

getdownloadbtn.addEventListener("click",function(){

	let setwidth = 0
	let setinv = setInterval(progressincrease,50)

	function progressincrease(){

		if(setwidth >= 100){
			clearInterval(setinv)
			setwidth = 0;
			getprogressbar.style.width = 0
			window.location.href = geturl
		}else{
			setwidth++
			getprogressbar.style.width = `${setwidth}%`
			getprogressbar.setAttribute("data-increase",`${setwidth}%`)
		}
	}

})
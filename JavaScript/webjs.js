function addgiohang() {
	alert("Thêm vào giỏ hàng thành công");
}

function payment() {
	alert("Thanh toán thành công");
}

// banner
var slides = document.querySelectorAll('.changeSlide img');
var length = document.getElementsByClassName("slide")[0].clientWidth;
var changeSlide = document.getElementsByClassName("changeSlide")[0];
var img = changeSlide.getElementsByTagName("img");
var dots = document.querySelectorAll('.dot');
var max = length * img.length;
var currentSlide = 0;
max = max - length;
var change = 0;
function next(){
	// đổi slide 
	if(change < max) change = change + length;
	else
		change =0;
	changeSlide.style.marginLeft='-' + change + 'px';

	// đổi nút hiển thị slide
	if (currentSlide == slides.length - 1) {
    currentSlide = 0;
  	} else {
    currentSlide++;
  	}
	document.querySelector('.dot.current').classList.remove('current');
	dots[currentSlide].classList.add('current');
}
function back(){
	if(change == 0)
		change = max;
	else 
		change = change - length;
	changeSlide.style.marginLeft='-' + change +'px';
	
	if (currentSlide == 0) {
    currentSlide = slide.length - 1;
  	} else {
    currentSlide--;
  	}
	document.querySelector('.dot.current').classList.remove('current');
	dots[currentSlide].classList.add('current');
}
setInterval(function(){
	next();
}, 3000);

//Tìm kiém
function timkiem(){
	var input=document.getElementById("search");
	var filter = input.value.toUpperCase();
	var goiy=document.getElementById("goiy");
	var li = goiy.getElementsByTagName("li");
	document.getElementById("goiy").style.display="block";
	for(var i=0;i<li.length;i++){
		var a = li[i].getElementsByTagName("a")[0];
		var txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
	}
	if(filter==""){
		document.getElementById("goiy").style.display="none";
	}
}

//Xóa giỏ hàng
function deleteRow(el) {
    // while there are parents, keep going until reach TR 
    while (el.parentNode && el.tagName.toLowerCase() != 'tr') {
        el = el.parentNode;
    }

    // If el has a parentNode it must be a TR, so delete it
    // Don't delte if only 3 rows left in table
    if (el.parentNode && el.parentNode.rows.length > 0) {
        el.parentNode.removeChild(el);
    }
}

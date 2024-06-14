const btnDecreament = document.getElementById('dec');
const btnReset = document.querySelector('#reset');
const btnIncreament = document.getElementById('inc');
let textNumber = document.getElementById('number');
let iterate = 0;
// console.log(textNumber);
btnDecreament.addEventListener('click', function() {
  iterate = textNumber.innerHTML -= 1;
  
  console.log(textNumber.textContent);
  textNumber.innerHTML = iterate;

  if (iterate < 0) {
    textNumber.style.color = "red";
  } else if (iterate > 0) {
    textNumber.style.color = "green";
  } else {
    textNumber.style.color = "black";
  }
});

btnReset.addEventListener('click', function() {
  iterate = 0
  textNumber.innerHTML = iterate;
  textNumber.style.color = "black";
});

btnIncreament.addEventListener('click', function() {
  // let num = textNumber.innerHTML;
  // let num2 = textNumber.innerHTML;
  // num -= 1;
  // num2 += 1;
  // console.log('-num: '+num);
  // console.log('+num: '+num2); 
  
  // console.log('textnumber: '+textNumber.innerHTML);
  // textNumber.innerHTML = textNumber.innerHTML;
  iterate += 1;
  console.log(iterate);
  textNumber.textContent = iterate;
  
  if (iterate > 0) {
    textNumber.style.color = "green";
  } else if (iterate < 0) {
    textNumber.style.color = "red";
  } else {
    textNumber.style.color = "black";
  }
});
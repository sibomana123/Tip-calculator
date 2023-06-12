const calcBtn= document.querySelector('.calculate')
const error= document.querySelector('.error');
const tip = document.querySelector(".tip");
const totalTip = document.querySelector(".total");

  


const hidenError =()=>{
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
}


const calculateFunct=()=>{
  let bill = document.querySelector("input").value;
  let rateService = document.querySelector(".rate").value;

if(bill === "" || rateService === ""){
    error.style.display = "flex";
    hidenError();
}else if (isNaN(bill)){
  error.innerHTML='please enter a number'
  hidenError();
}else {
  let tipAmount= bill * rateService
  tipAmount= Math.round(tipAmount)
  let totalBill= +bill + tipAmount
  totalBill = Math.ceil(totalBill);


  tip.innerHTML= `Tip Amount : $${tipAmount}`
  totalTip.innerHTML = `Total bill: $${totalBill}`;
}

 
}

calcBtn.addEventListener('click', calculateFunct)
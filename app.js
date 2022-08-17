const resault = document.getElementById("resaultInput")
var secoundValue = null
function getButtonValue(value) {
  if (value === "=") {
    secoundValue = form.answer.value = eval(form.answer.value)
    resault.value = secoundValue
  } else if (secoundValue !== null) {
   secoundValue=null
  } else {
    resault.value += value
  }
}

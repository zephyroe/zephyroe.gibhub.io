// IMPORTANT MESSAGE FOR WEBSITE USER
// IMPORTANT MESSAGE FOR WEBSITE USER
// IMPORTANT MESSAGE FOR WEBSITE USER

// THIS SOURCE CODE ONLY APPLIES TO THE HOME PAGE OF THE WEBSITE
// TO VIEW THE SOURCE CODE FROM A DIFFERENT PAGE, NAVIGATE TO THAT
// PAGE AND SELECT AND SELECT THE DESIRED FILE FROM 'VIEW SOURCE CODE'

console.log("hello")
let continueBtn1 = document.getElementById('cBtn1');
let continueBtn2 = document.getElementById('cBtn2');
let continueBtn3 = document.getElementById('cBtn3');
let continueBtn4 = document.getElementById('cBtn4');
let continueBtn5 = document.getElementById('cBtn5');
let continueBtn6 = document.getElementById('cBtn6');
let openingText = document.getElementById('text')
console.log(openingText)

let continueTxt = document.getElementById('continueText')
let mainMenu = document.getElementById("menuOptions")
let homeBtn = document.getElementById("homeButton")
let sourceBtn = document.getElementById('sourceButton')
let sourceBtnMobile = document.getElementById('sourceButtonMobile')

continueBtn1.addEventListener('click', presentMenu);

function presentMenu(){
  continueBtn1.classList.add("openingAnimation1")
  continueBtn2.classList.add("openingAnimation2")
  continueBtn3.classList.add("openingAnimation3")
  continueBtn4.classList.add("openingAnimation4")
  continueBtn5.classList.add("openingAnimation5")
  continueBtn6.classList.add("openingAnimation6")
  openingText.classList.add("textFadeAnimation")

  continueTxt.classList.add("noDisplayAnimation")
  mainMenu.classList.add("menuAnimation")
  homeBtn.classList.add("homeBtnAnimation")
  sourceBtn.classList.add("sourceBtnAnimation")
  sourceBtnMobile.classList.add("sourceBtnAnimation")
}

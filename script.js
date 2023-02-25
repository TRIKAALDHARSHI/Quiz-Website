console.log("Welcome to HTML-Learner")
quest = document.getElementsByClassName("quest")
con2_landup = document.getElementsByClassName("con2-landup")
start = document.getElementById("btn-start")
next = document.getElementById("next")
back = document.getElementById("back")
option = document.getElementById("option")
a1 = document.getElementById('0_1')
a2 = document.getElementById('1_3')
a3 = document.getElementById('2_1')
a4 = document.getElementById('3_2')
a5 = document.getElementById('4_1')
count = 0
let marks = 0
start.addEventListener('click', () => {
  con2_landup[0].style.display = "none"
  document.getElementsByClassName("con2-con")[0].style.display = "flex"
  quest[0].style.display = "flex"
  document.getElementsByClassName('btn-con2')[0].style.display = "block"
})

next.addEventListener('click', () => {
  count += 1
  if (count > quest.length - 1) {
    count = quest.length - 1
  }
  fun(count)
})

back.addEventListener('click', () => {
  count -= 1
  if (count < 1) {
    count = 0
  }
  fun(count)
})

function fun(count) {
  for (let i = 0; i < quest.length; i++) {
    quest[i].style.display = "none"
  }
  quest[count].style.display = "flex"
}
console.log(quest)

function value() {
  marks += 20
  if (marks >= 100) {
    marks = 100
  }
  if (marks < 40) {
    document.getElementsByClassName("pass")[0].style.color = "red"
    document.getElementsByClassName("pass")[0].innerHTML = "<h2> Oops! you failed the test </h2><p>Try again later</p>"
    document.getElementsByClassName("mark-display")[0].innerHTML = "<h3> You Scored : " + marks
  }
  else {
    document.getElementsByClassName("pass")[0].style.color = "green"
    document.getElementsByClassName("pass")[0].innerHTML = "<h2>Congratulations ! </h2><p>You Passed the test</p>"
    document.getElementsByClassName("mark-display")[0].innerHTML = "<h3> You Scored : " + marks
  }
}


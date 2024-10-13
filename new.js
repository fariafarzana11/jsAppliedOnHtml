const newValue = document.getElementById('player-container')
//console.log(newValue.getAttribute("class"))

//console.log(newValue.classList.add("newClass"))

//newValue.classList.remove("player-container")
//console.log(newValue)

// const title = document.getElementById("shanto")
// title.setAttribute('title',"This is Shanto")
// console.log(title.innerText)

// const title = document.getElementById('cricket-team')
// title.innerHTML = "<h2>Hi this is from js</h2>"
// console.log(title.innerHTML)


// const title = document.getElementById('cricket-team')
// title.innerHTML = `
// <ul>
//     <li>this is from js</li>
//     <li>this is second from js</li>
//     <li>this is third from js</li>
// </ul>
// `
// console.log(title.innerHTML)


// const newVariable = document.getElementById("shanto")
// newVariable.classList.add('first-list')

// const dynamicStyle = document.getElementById("team")
// //console.log(dynamicStyle)

// dynamicStyle.style.color = "red";
// dynamicStyle.style.margin = "50px"
// dynamicStyle.style.padding = "40px";
// dynamicStyle.style.backgroundColor = "lime";
// dynamicStyle.style.border = "20px solid yellow" 

//console.log(document.styleSheets)


// const paragraph = document.createElement('p')
// paragraph.innerText = "Hello from js"
// console.log(paragraph)

// const sections = document.getElementById('player-container')
// sections.appendChild(paragraph)

const section = document.createElement('section')
section.setAttribute('id','new-section')
const h2 = document.createElement('h2')
h2.innerText = "This is second heading"

const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = "first list"
const li2 = document.createElement('li')
li2.innerText = "second list"

ul.appendChild(li1)
ul.appendChild(li2)
section.appendChild(h2)
section.appendChild(ul)

const body = document.getElementById('container')
body.appendChild(section)


const newSection = document.getElementById("new-section")
//console.log(newSection.firstChild)

newSection.firstChild.style.color = "green"
newSection.firstChild.style.backgroundColor = "black"
newSection.firstChild.style.margin= "40px"
newSection.firstChild.style.padding = "50px"
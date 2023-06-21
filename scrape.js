const content = document.querySelector(".yle__article__content")
const contentElems = Array.from(content.querySelectorAll("h2, p"))

let s = "";
contentElems.forEach(c => {
  if (c.tagName === 'H2') s += '\n';
  s += c.innerText;
  s += '\n';
});

const quizheader = document.querySelector(".yo-primary-header")
s += '\n' + quizheader.innerText + '\n';


const quizElems = Array.from(document.querySelectorAll(".yo-fragment__text"));
quizElems.forEach(c => {
  s += `- ${c.innerText}\n`
});

console.log(s);
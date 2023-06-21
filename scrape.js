function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}


const content = document.querySelector(".yle__article__content")
const contentElems = Array.from(content.querySelectorAll("h2.yle__article__heading, p.yle__article__paragraph"))

let s = "";
contentElems.forEach(c => {
  if (c.tagName === 'H2' && s) s += '\n';
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
fallbackCopyTextToClipboard(s);

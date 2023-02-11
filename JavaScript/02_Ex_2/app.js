const task1EL = document.querySelectorAll('.sample_clas');

function getTag(elements) {
    elements = task1EL
  let tagTable = [];
  for (let i = 0; i < elements.length; i++) {
    tagTable[i] = elements[i].tagName;
  }
  return tagTable;
}

//2
const task2EL = document.getElementById('sample_id')
    function getClass(element) {
    let classList = []
        for(let i = 0; i < element.classList.length; i++) {
            classList.push(element.classList[i])
        }
        return classList
    }

//3
const task3EL = document.querySelectorAll('.sample_class_2 li');
function getInnerText(elements) {
    elements = task3EL
  let innerList = [];
  for (let i = 0; i < elements.length; i++) {
    innerList[i] = elements[i].innerText;
  }
  return innerList
}



//4
const task4EL = document.querySelectorAll('a');
function getAddress(elements) {
    elements = task4EL
  let addresses = [];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].hasAttribute('href')){
      addresses[i] = elements[i].getAttribute('href')
    }
  }
}

//5
const task5EL = document.querySelector('.sample_class_3').children;

function getTagElement(elements) {
    elements = task5EL
  let tags = [];
  for (let i = 0; i < elements.length; i++) {
    tags[i] = elements[i].tagName;
  }
  return tags;
}

getAddress()
getClass()
getTag()
getInnerText()
getTagElement()
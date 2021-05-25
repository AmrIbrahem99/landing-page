

//building dynamic nav bar
    //select all  sections
const section = document.querySelectorAll("[data-nav]");
let i = 1;
//select the navbar
const elem = document.getElementById("navbar__list");

for(i; i <= section.length; i++){
    //looping on element to assign each nav bar item
  const child = document.createElement('li')
    //adding li element to ul elements of the nav bar
    const inner = child.innerHTML = " <a id = 'li"+i+"' href = '#section"+i+"' data-li = 'section"+i+"'>section"+i+"</a>";
    elem.append(child);
}
//

    //selecting all li elements
const items = elem.getElementsByTagName("li");
for (let j = 0; j < items.length; j++) {
    //adding class section to each element of li in navbar
    items[j].setAttribute("class", "section"+ ++j);
    j--
}
//

//this function select all a element of li and add on click listener which assign the active color to each li element clicked
const a = document.querySelectorAll(".nav li a");
    let l = 0, length = a.length;
    for (; l < length; l++) {
    a[l].onclick = function () {
        const b = document.querySelector(".nav li.active");
        if (b) b.classList.remove("active");
        this.parentNode.classList.add('active');
    };
}

//methode of hovering on sections to active li item
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});

//select all li in the nav bar and prevent default action
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        //select the specific section by get the attribute in the href of <a> in nav which will be the same as the section
        //then adding scroll option
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

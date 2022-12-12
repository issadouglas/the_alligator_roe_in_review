/*use for loop to repeat*/


var faq = document.getElementsByClassName("faq-question");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function ()
{
this.classList.toggle("none");
var answer = this.nextElementSibling;
if (answer.style.display === "block")
{
answer.style.display = "none";
} else {
answer.style.display = "block";
}
    });
}

a.href = "https://sweetcode.io/how-to-build-an-faq-page-with-html-and-javascript/"; 

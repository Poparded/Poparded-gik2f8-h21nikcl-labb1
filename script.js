"use strict";

let bookList = [];

window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener("keyup", (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();

      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector(".book-list");

  const root = document.getElementById("root");
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 &&
  searchField.value &&
  root.insertAdjacentHTML("beforeend", BookList(bookList));
  
  
  const bookListHover = document.querySelectorAll(".book-list__item"); //Selects all items that have class .book-list__item

  bookListHover.forEach((item) => {console.log(item.innerHTML); // For every item in list booklisterover add a eventlistener
  var innerHTML;
  innerHTML= item.innerHTML;
  item.addEventListener("mouseover",() => fetchAndRenderBook(innerHTML));
  item.addEventListener("mouseout", removeBookdetails);
 });

}


async function getOne(id) {
  const result = await fetch(url + "/" + id).then((result) => result.json());

  return result;
}

async function fetchAndRenderBook(innerHTML, item) {

for (let i = 1; i <= bookList.length; i++) {
  const book = await getOne(i);
if (innerHTML.toLowerCase().indexOf(book.author.toLowerCase()) >= 0){
  let html;
    html= BookBox(book);
    const existingElementBookDetails = document.querySelector(".book_box");
    existingElementBookDetails && root.removeChild(existingElementBookDetails);
    root.insertAdjacentHTML("beforeend", html);
    
 
    }
}

 

}
function removeBookdetails()
{
const existingElementBookDetails = document.querySelector(".book_box");

try {root.removeChild(existingElementBookDetails);}
 catch {}

}  



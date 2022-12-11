function BookBox (book){
let html
  if (book.coverImage == ""){
    html = `<div class="book_box flex  ">
    <ul id ="book_detail" class = " bg-green-400 h-50 w-52 box-border border-4 border-green-500 box-content h-70 w-52 p-4 mb-2 mx-2 last:mb-0 p-3 text-slate-800    cursor-pointer">
    <li> ${book.title} </li>
    <li>Författare : ${book.author} </li>
     <li>Utgivningsår: ${book.releaseDate} </li>
     <li>Sidor: ${book.pages} </li>
  
     </ul>
    </div>`;
  
  }
  else {
    
   html = `<div  class="book_box flex  ">
  <ul id ="book_detail" class = "bg-green-400 h-70 box-border h-50 w-52 border-4 border-green-500 box-content p-4 mb-2 mx-2 last:mb-0 p-3 text-slate-800    cursor-pointer">
  <li> ${book.title} </li>
  <li>Författare: ${book.author} </li>
   <li>Utgivningsår:  ${book.releaseDate} </li>
   <li>Sidor:${book.pages} </li>
   <img class=" h-30 " src=${book.coverImage} alt="Cover image" width="200" height="400">
  
   </ul>
  </div>`;
  

  }
  return html;}
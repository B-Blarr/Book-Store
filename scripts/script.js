
const refArticle = document.getElementById("book-article");
let nameRef = "";
let currentIndex = 0;

function renderBook() {
   
renderArticle()




// renderName();
// render name in die headline-area
// render table mit author, publishedYear und genre in content-area
// render price in contend area
// render liked button und likes in content area
// render comments in comment-area


}
function renderArticle() {
    
    for (let i = 0; i < books.length; i++) {
    refArticle.innerHTML += getHtmlTemplate(i); 
    }
    renderName();
}


function getHtmlTemplate(i) {
    currentIndex = i;
    return `<!--  headline-area-->
          <header class="book-headline"></header>
          <!--  book img-->
          <aside><img src="./assets/icons/favicon.png" alt="book" /></aside>
          <!--  content-area-->
          <section>
            <div id="price-tag"></div>
            <table>
              <tr>
                <td>Autor</td>
                <td id="author"></td>
              </tr>
              <tr>
                <td>Erscheinungsjahr</td>
                <td id="published-year"></td>
              </tr>
              <tr>
                <td>Genre</td>
                <td id="genre"></td>
              </tr>
            </table>
            <span id="likes-counter"></span>
            <button id="like-button"></button>
          </section>
          <!--  comments-area-->
          <section>
            <h3>Kommentare:</h3>
            <section id="comments">
              <div id="comments-name"></div>
              <div id="comments-text"></div>
            </section>
            <div>
              <!--  Inputbereich-->
              <input id="comments-input" type="text" />
              <button id="comments-button"></button>
            </div>
          </section>`;
}
  

function renderName() {
     nameRef = document.getElementsByClassName("book-headline");
    for (let i = 0; i < books.length; i++) {
       nameRef[i].innerHTML += renderNameTemplate(i);
    }

}
function renderNameTemplate(i) {
    return `<h2>${books[i].name}</h2>`; 
}




// for (let i = 0; i < library.sections.fiction.length; i++) {
//     bookList = library.sections.fiction[i].book.title;
//     console.log(bookList);
    

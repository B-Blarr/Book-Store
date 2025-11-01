
const refArticle = document.getElementById("book-article");
let currentIndex = 0;

function renderBook() {
   
renderArticle()
renderName();
renderAuthor();
publishedYear();



// render table mit author, publishedYear und genre in content-area

// render price in contend area
// render liked button und likes in content area
// render comments in comment-area


}
function renderArticle() {
    
    for (let i = 0; i < books.length; i++) {
    refArticle.innerHTML += getHtmlTemplate(i); 
    }  
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
                <td class="author"></td>
              </tr>
              <tr>
                <td>Erscheinungsjahr</td>
                <td class="published-year"></td>
              </tr>
              <tr>
                <td>Genre</td>
                <td class="genre"></td>
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
    let nameRef = document.getElementsByClassName("book-headline");
    for (let i = 0; i < books.length; i++) {
       nameRef[i].innerHTML += renderNameTemplate(i);
    }

}
function renderNameTemplate(i) {
    return `<h2>${books[i].name}</h2>`; 
}

function renderTable(){
renderAuthor();
publishedYear();
genre();
}

function renderAuthor() {
   let authorRef = document.getElementsByClassName("author");
    for (let i = 0; i < books.length; i++) {
       authorRef[i].innerHTML += renderAuthorTemplate(i);
    }
}

function renderAuthorTemplate(i) {
    return `: ${books[i].author}`; 
}


function publishedYear() {
  let publishedYearRef = document.getElementsByClassName("published-year");
    for (let i = 0; i < books.length; i++) {
       publishedYearRef[i].innerHTML += renderPublishedYearTemplate(i);
    }
}

function renderPublishedYearTemplate(i) {
    return `: ${books[i].publishedYear}`; 
}







function genre() {
    
}
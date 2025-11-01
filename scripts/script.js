const refArticle = document.getElementById("book-article");
let currentIndex = 0;

function renderBook() {
  renderArticle();
  renderName();
  renderTable();
  priceTag();
likeCounter()
renderLikeButton();
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
            <div class="price-button-area">
                <div class="price-tag"></div>
                <div class="like-area">
                    <span class="likes-counter"></span>
                    <button onclick=addLike(${i}) class="like-button"></button>
                </div>
            </div>
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

function renderTable() {
  renderAuthor();
  publishedYear();
  bookGenre();
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

function bookGenre() {
  let genreRef = document.getElementsByClassName("genre");
  for (let i = 0; i < books.length; i++) {
    genreRef[i].innerHTML += bookGenreTemplate(i);
  }
}

function bookGenreTemplate(i) {
  return `: ${books[i].genre}`;
}

// ToDo Beim Preis Punkt durch Komma ersetzen
function priceTag() {
  let priceTagRef = document.getElementsByClassName("price-tag");
  for (let i = 0; i < books.length; i++) {
    priceTagRef[i].innerHTML += priceTagTemplate(i);
  }
}

function priceTagTemplate(i) {
  return `: ${books[i].price} €`;
}

function likeCounter() {
    let likeRef = document.getElementsByClassName("likes-counter");
  for (let i = 0; i < books.length; i++) {
    likeRef[i].innerHTML += likeCounterTemplate(i);
  }
}

function likeCounterTemplate(i) {
  return `${books[i].likes}`;
}

function renderLikeButton() {
    let likeButtonRef = document.getElementsByClassName("like-button");
  for (let i = 0; i < books.length; i++) {
    likeButtonRef[i].innerHTML += likeButtonTemplate(i);
  }
}

function likeButtonTemplate(i) {
    if (books[i].liked == true){
   return '<img src="./assets/icons/heart.png" alt="heart_icon">';
} else
{
    return '<img src="./assets/icons/heart2.png" alt="heart_icon">';
}
}



function addLike(j) {
    let addLikeRef = document.getElementsByClassName("like-button");
    addLikeRef[j].innerHTML = changeLikeTemplate(j);

    let likeCounterRef = document.getElementsByClassName("likes-counter");
    likeCounterRef[j] = changeLikeCounterTemplate(j);
}

function changeLikeTemplate(i) {
    if (books[i].liked == true){
        books[i].liked = false;
   return '<img src="./assets/icons/heart2.png" alt="heart2_icon">';
} else if  (books[i].liked == false)
{ 
    books[i].liked = true;
    return '<img src="./assets/icons/heart.png" alt="heart_icon">';
}
}

function changeLikeCounterTemplate(i) {
    if (books[i].liked == true){
     return books[i].likes = i + 1;
   
} else if  (books[i].liked == false)
{ 
   return books[i].likes = i - 1;
    
}
}
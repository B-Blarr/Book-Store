const refArticle = document.getElementById("book-article");
let currentIndex = 0;

function renderBook() {
  renderArticle();
  renderName();
  renderTable();
  priceTag();
  likeCounter();
  renderLikeButton();
  renderCommentsName();
  renderCommentsComment();

  
  // add username with input field
  // add comments with input field
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
            <section="comments">
              <div class="comments-name"></div>
              <div class="comments-text"></div>
            </section>
            <div>
              <!--  Inputbereich-->
              <input class="username-input" type="text" placeholder="Dein Name:"/>
              <input class="comments-input" type="text" placeholder="Schreibe einen Kommentar:"/>
              <button onclick=renderNewComment() class="comments-button"></button>
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

function renderCommentsName() {
  let commentsNameRef = document.getElementsByClassName("comments-name");
  for (let i = 0; i < books.length; i++) {
    commentsNameRef[i].innerHTML += commentsNameTemplate(i);
  }
}

function commentsNameTemplate(i) {
    let newCommentName = [];
 if (books[i].comments[0] != undefined && books[i].comments[0].name != undefined) {
    for (let j = 0; j < books[i].comments.length; j++) {
    newCommentName += `<li>[${books[i].comments[j].name}]</li>`;
    }
return newCommentName;
 }else

  return `${""}`;
}

function renderCommentsComment() {
    let commentsCommentRef = document.getElementsByClassName("comments-text");
  for (let i = 0; i < books.length; i++) {
    commentsCommentRef[i].innerHTML += commentsCommentTemplate(i);
  }
}

function commentsCommentTemplate(i) {
    let newComment = [];
  if (books[i].comments[0] != undefined && books[i].comments[0].name != undefined) {
for (let j = 0; j < books[i].comments.length; j++) {
    newComment += `<li>${books[i].comments[j].comment}</li>`;
                    // books[i].comments[j].comment
}           
    return newComment;
 }else

  return `${""}`;
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
  if (books[i].liked == true) {
    return '<img src="./assets/icons/heart.png" alt="heart_icon">';
  } else {
    return '<img src="./assets/icons/heart2.png" alt="heart_icon">';
  }
}

function addLike(j) {
  let addLikeRef = document.getElementsByClassName("like-button");
  addLikeRef[j].innerHTML = changeLikeTemplate(j);

  let actualLikesRef = document.getElementsByClassName("likes-counter");
  let addedLikes = actualLikesRef[j].innerHTML;
  if (books[j].liked == true) {
    addedLikes++;
    actualLikesRef[j].innerHTML = addedLikes;
  } else if(books[j].liked == false) {
    addedLikes--;
    actualLikesRef[j].innerHTML = addedLikes;
  }
}

function changeLikeTemplate(i) {
  if (books[i].liked == true) {
    books[i].liked = false;
    return '<img src="./assets/icons/heart2.png" alt="heart2_icon">';
  } else if (books[i].liked == false) {
    books[i].liked = true;
    return '<img src="./assets/icons/heart.png" alt="heart_icon">';
  }
}

function renderNewComment() {
    
    // Inputs aus Namensfeld und Kommentarfeld auslesen
    // Inputs in Kommentarspalte als Username und Kommentar einfügen 
}


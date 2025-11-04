const refArticle = document.getElementById("book-article");
let currentIndex = 0;

function renderBook() {
  renderArticle();
  renderName();
  renderTable();
  priceTag();
  likeCounter();
  renderLikeButton();
  renderComments();
}
function renderArticle() {
  for (let i = 0; i < books.length; i++) {
    refArticle.innerHTML += getHtmlTemplate(i);
  }
}

function getHtmlTemplate(i) {
  currentIndex = i;
  return `<section class="book-area">
          <header class="book-headline"></header>
          <div class="dividing-line"></div>
          <aside><img src="./assets/icons/favicon.png" alt="book" /></aside>
          <div class="dividing-line"></div>
          <section class="content">
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
          <div class="dividing-line"></div>
          <section class="comments-area">
            <h3>Kommentare:</h3>
            <section class="comments"> 
            <table class="comments-table-${i}"> 
            </table>
            </section>
            <div class="dividing-line-comments"></div>
            <div class="input-area">
              <div class="input-fields">
            <form class="comment-name-form">
              <label for="username-input">
                <input type="text" maxlength="20" name="name" class="username-input" type="text" required placeholder="Dein Name:"/>
              </label>  
            </form>
            <form class="comment-name-form">
              <label for="comments-input">
                <input type="message" maxlength="200" class="comments-input" type="text" required placeholder="Dein Kommentar:"/>
              </label>  
            </form>
              </div>
              <button onclick=renderNewComment(${i}) class="comments-button"><img src="./assets/icons/submit-button.png" alt="Submit_Button"></button>
            </div>
            </section>
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

function priceTag() {
  let priceTagRef = document.getElementsByClassName("price-tag");
  for (let i = 0; i < books.length; i++) {
    priceTagRef[i].innerHTML += priceTagTemplate(i).replaceAll(".", ",");
  }
}

function priceTagTemplate(i) {
  let newPrice = books[i].price.toFixed("2");
  return `${newPrice} €`;
}

function renderComments() {
  for (let i = 0; i < books.length; i++) {
    let tableRef = document.querySelector(`.comments-table-${i}`);
    if (tableRef) {
      tableRef.innerHTML = "";

      for (let j = 0; j < books[i].comments.length; j++) {
        tableRef.innerHTML += commentRowTemplate(i, j);
      }
    }
  }
}

function commentRowTemplate(bookIndex, commentIndex) {
  const commentData = books[bookIndex].comments[commentIndex];
  const tableContent = `<strong>[${commentData.name}]</strong> :<br><p class="table-comment"> ${commentData.comment}</p>`;

  return `<tr class="comment-row">
            <td class="comment-entry">${tableContent}</td>
            </tr>`;
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
  } else if (books[j].liked == false) {
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

function renderNewComment(i) {
  let newCommentsName = document.getElementsByClassName("username-input");
  let newCommentsComment = document.getElementsByClassName("comments-input");
  let updatedCommentName = newCommentsName[i].value;
  let updatedCommentsComment = newCommentsComment[i].value;
  if (updatedCommentsComment === "" || updatedCommentName === "") {
    return;
  }
  books[i].comments.push({
    name: updatedCommentName,
    comment: updatedCommentsComment,
  });
  newCommentsName[i].value = "";
  newCommentsComment[i].value = "";

  renderComments();
}

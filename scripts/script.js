const REF_ARTICLE = document.getElementById("book-article");

function renderBook() {
  renderArticle();
  renderName();
  renderTable();
  renderPriceTag();
  renderLikeCounter();
  renderLikeButton();
  renderComments();
}

function renderArticle() {
  for (let i = 0; i < books.length; i++) {
    REF_ARTICLE.innerHTML += getHtmlTemplate(i);
  }
}

function renderName() {
  let nameRef = document.getElementsByClassName("book-headline");
  for (let i = 0; i < books.length; i++) {
    nameRef[i].innerHTML += renderNameTemplate(i);
  }
}

function renderTable() {
  renderAuthor();
  renderPublishedYear();
  renderBookGenre();
}

function renderAuthor() {
  let authorRef = document.getElementsByClassName("author");
  for (let i = 0; i < books.length; i++) {
    authorRef[i].innerHTML += renderAuthorTemplate(i);
  }
}

function renderPublishedYear() {
  let publishedYearRef = document.getElementsByClassName("published-year");
  for (let i = 0; i < books.length; i++) {
    publishedYearRef[i].innerHTML += renderPublishedYearTemplate(i);
  }
}

function renderBookGenre() {
  let genreRef = document.getElementsByClassName("genre");
  for (let i = 0; i < books.length; i++) {
    genreRef[i].innerHTML += bookGenreTemplate(i);
  }
}

function renderPriceTag() {
  let priceTagRef = document.getElementsByClassName("price-tag");
  for (let i = 0; i < books.length; i++) {
    priceTagRef[i].innerHTML += priceTagTemplate(i).replaceAll(".", ",");
  }
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

function renderLikeCounter() {
  let likeRef = document.getElementsByClassName("likes-counter");
  for (let i = 0; i < books.length; i++) {
    likeRef[i].innerHTML += likeCounterTemplate(i);
  }
}

function renderLikeButton() {
  let likeButtonRef = document.getElementsByClassName("like-button");
  for (let i = 0; i < books.length; i++) {
    likeButtonRef[i].innerHTML += likeButtonTemplate(i);
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

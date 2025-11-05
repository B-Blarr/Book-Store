function getHtmlTemplate(i) {
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
              <label for="username-${i}">
                <input type="text" maxlength="20" name="name" class="username-input" id="username-${i}" name="username-${i}" type="text" required placeholder="Dein Name:"/>
              </label>  
            </form>
            <form class="comment-name-form">
              <label for="comment-${i}">
                <input type="message" maxlength="200" class="comments-input" id="comment-${i}" name="comment-${i}" type="text" required placeholder="Dein Kommentar:"/>
              </label>  
            </form>
              </div>
              <button onclick=saveComment(${i}) class="comments-button"><img src="./assets/icons/submit-button.png" alt="Submit_Button"></button>
            </div>
            </section>
          </section>`;
}

function NameTemplate(i) {
  return `<h2>${books[i].name}</h2>`;
}

function AuthorTemplate(i) {
  return `: ${books[i].author}`;
}

function PublishedYearTemplate(i) {
  return `: ${books[i].publishedYear}`;
}

function bookGenreTemplate(i) {
  return `: ${books[i].genre}`;
}

function priceTagTemplate(i) {
  let newPrice = books[i].price.toFixed("2");
  return `${newPrice} €`;
}

function likeCounterTemplate(i) {
  return `${books[i].likes}`;
}

function likeButtonTemplate(i) {
  if (books[i].liked == true) {
    return '<img src="./assets/icons/heart.png" alt="heart_icon">';
  } else {
    return '<img src="./assets/icons/heart2.png" alt="heart_icon">';
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

function commentRowTemplate(bookIndex, commentIndex) {
  let commentData = books[bookIndex].comments[commentIndex];
  let tableContent = `<strong>[${commentData.name}]</strong> :<br><p class="table-comment"> ${commentData.comment}</p>`;

  return `<tr class="comment-row">
            <td class="comment-entry">${tableContent}</td>
            </tr>`;
}

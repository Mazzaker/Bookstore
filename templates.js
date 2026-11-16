function bookTemplate(book, index) {
    return `
        <div class="bookCard" id="bookCard${index}">
            <h2>${book.name}</h2>
            <div class="bookImage">
                <img src="./assets/icons/buchicon.png" alt="buchicon">
            </div>
            ${bookInfoTemplate(book, index)}
            ${bookCommentsTemplate(book, index)}
        </div>
    `;
}

function bookInfoTemplate(book, index) {
    return `
        <div class="bookInfo">
            <div class="priceLikes">
                <span>${book.price.toFixed(2).replace(".", ",")} €</span>
                ${likeTemplate(book, index)}
            </div>
            <p>Autor: ${book.author}</p>
            <p>Erscheinungsjahr: ${book.publishedYear}</p>
            <p>Genre: ${book.genre}</p>
        </div>
    `;
}

function likeTemplate(book, index) {
    return `
        <div class="likeButton">
            <p>${book.likes}</p>
            <button onclick="toggleLike(${index})">
                <img src="assets/icons/${book.liked ? 'liked.png' : 'unliked.png'}" alt="Like">
            </button>
        </div>
    `;
}

function bookCommentsTemplate(book, index) {
    return `
        <div class="comments">
            <h3>Kommentare:</h3>
            ${commentsTemplate(book.comments)}
        </div>
        <div class="commentInput">
            <input id="commentInput${index}" type="text" placeholder="Schreibe deinen Kommentar...">
            <button onclick="addComment(${index})">Senden</button>
        </div>
    `;
}

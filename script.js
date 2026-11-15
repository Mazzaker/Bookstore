const bookContentRef = document.getElementById("bookContent");


function renderContent() {
    let html = "";

    for (let i = 0; i < books.length; i++) {
        html += bookTemplate(books[i]);
    }

    bookContentRef.innerHTML = html;
}

function bookTemplate(book) {
    return `
        <div class="bookCard">

            <h2>${book.name}</h2>

            <div class="bookImage">
                📕
            </div>

            <div class="bookInfo">

                <div class="priceLikes">
                    <span>${book.price.toFixed(2).replace(".", ",")} €</span>
                    <span>${book.likes} ❤️</span>
                </div>

                <p>Autor: ${book.author}</p>
                <p>Erscheinungsjahr: ${book.publishedYear}</p>
                <p>Genre: ${book.genre}</p>

            </div>

            <div class="comments">
                <h3>Kommentare:</h3>
                ${commentsTemplate(book.comments)}
            </div>

            <input type="text" placeholder="Schreibe deinen Kommentar ...">

        </div>
    `;
}

function commentsTemplate(comments) {
    let html = "";

    for (let i = 0; i < comments.length; i++) {
        html += `
            <div class="comment">
                <span>[${comments[i].name}]</span>
                <span>${comments[i].comment}</span>
            </div>
        `;
    }

    return html;
}

function init(){
    renderContent()
}

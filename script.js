const bookContentRef = document.getElementById("bookContent");

function init(){
    renderContent()
}

function renderContent() {
    let html = "";

    for (let i = 0; i < books.length; i++) {
        html += bookTemplate(books[i], i);
    }

    bookContentRef.innerHTML = html;
}

function bookTemplate(book, index) {
    return `
        <div class="bookCard">

            <h2>${book.name}</h2>

            <div class="bookImage">
                📕
            </div>

            <div class="bookInfo">

                <div class="priceLikes">
                    <span>${book.price.toFixed(2).replace(".", ",")} €</span>
                    <div class="likeButton">
                        <p>${book.likes}</p>
                        <button onclick="toggleLike(${index})">
                            <img src="assets/icons/${book.liked ? 'liked.png' : 'unliked.png'}" alt="Like">
                        </button>
                    </div>
                </div>

                <p>Autor: ${book.author}</p>
                <p>Erscheinungsjahr: ${book.publishedYear}</p>
                <p>Genre: ${book.genre}</p>

            </div>

            <div class="comments">
                <h3>Kommentare:</h3>
                ${commentsTemplate(book.comments)}
            </div>
            <div class="commentInput">
                <input id="commentInput${index}" type="text" placeholder="Schreibe deinen Kommentar...">
                <button onclick="addComment(${index})">Senden</button>
            </div>
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

function addComment(index) {
    const commentInput = document.getElementById(`commentInput${index}`).value;

    books[index].comments.unshift({
            "name" : "Du", 
            "comment": commentInput
        });
    
    renderContent()
}


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

function renderBook(index){
    const bookRef = document.getElementById(`bookCard${index}`);

    bookRef.innerHTML = bookTemplate(books[index], index);
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
    
    renderBook(index);
}

function toggleLike(index) {
    books[index].liked = !books[index].liked;

    if (books[index].liked) {
        books[index].likes++;
    } 
    else {
        books[index].likes--;
    }

    renderBook(index);
}


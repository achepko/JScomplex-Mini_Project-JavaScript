let buttonPrevious = document.querySelector('.buttonPrevious');
buttonPrevious.removeAttribute('disabled');
buttonPrevious.addEventListener('click', function (ev) {
    window.history.back()
})

let url = new URL(location.href);
let post = url.searchParams.get('post');

fetch('https://jsonplaceholder.typicode.com/posts/' + post)
    .then(value => value.json())
    .then(post => {
        let title = document.createElement('h1');
        title.innerHTML = 'Post Info'
        let postInfo = document.querySelector('.postInfo');
        postInfo.appendChild(title);
        for (const postDetail in post) {
            let postParam = document.createElement('div');
            postParam.classList.add('postParam')
            postParam.innerHTML = `${postDetail} : ${post[postDetail]}`;
            postInfo.appendChild(postParam);
        }
    });

fetch('https://jsonplaceholder.typicode.com/posts/' + post + '/comments')
    .then(value => value.json())
    .then(comments => console.log(comments));

fetch('https://jsonplaceholder.typicode.com/posts/' + post + '/comments')
    .then(value => value.json())
    .then(comments => {
        let titleComments = document.createElement('h1');
        let postComments = document.querySelector('.postComments');
        titleComments.innerHTML = 'Comments'
        postComments.appendChild(titleComments);
        for (let i = 0; i < comments.length; i++) {

            let comment = document.createElement('div');
            comment.classList.add('comment');
            let commentInfo = document.createElement('div');
            commentInfo.classList.add('commentInfo')
            let img = document.createElement('img');
            img.src = "/images/avatar2.png";
            let commentId = document.createElement('div');
            let commentName = document.createElement('div');
            let commentEmail = document.createElement('div');
            let commentBody = document.createElement('div');
            commentId.innerHTML = `id: ${comments[i].id}`
            commentName.innerHTML = `Name: ${comments[i].name}`
            commentEmail.innerHTML = `Email: ${comments[i].email}`
            commentBody.innerHTML = `comment: ${comments[i].body}`
            commentInfo.append(commentId, commentName, commentEmail, commentBody);
            comment.append(img,commentInfo)
            postComments.appendChild(comment);
        }
    })
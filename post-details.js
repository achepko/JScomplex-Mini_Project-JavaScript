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
    .then(comments => {
        let titleComments = document.createElement('h1');
        let postComments = document.querySelector('.postComments');
        titleComments.innerHTML = 'Comments'
        postComments.appendChild(titleComments);
        let allComments = document.createElement('div');
        allComments.classList.add('allComments')
        for (let i = 0; i < comments.length; i++) {

            let comment = document.createElement('div');
            comment.classList.add('comment');
            let commentInfo = document.createElement('div');
            let commentInfo2 = document.createElement('div');
            commentInfo.classList.add('commentInfo')
            commentInfo2.classList.add('commentInfo2')
            let img = document.createElement('img');
            img.src = "./images/avatarComment.png";
            let commentId = document.createElement('div');
            let commentName = document.createElement('div');
            let commentEmail = document.createElement('div');
            let commentBody = document.createElement('div');
            commentId.innerHTML = `id : ${comments[i].id} <br>`
            commentName.innerHTML = `Name : ${comments[i].name} <br>`
            commentEmail.innerHTML = `Email : ${comments[i].email} <br>`
            commentBody.innerHTML = `comment : ${comments[i].body} <br>`
            commentInfo.append(img, commentId, commentName);
            commentInfo2.append(commentEmail, commentBody);
            comment.append(commentInfo, commentInfo2)
            postComments.appendChild(allComments);
            allComments.appendChild(comment);

        }
              sds();

        function sds() {
            let addForm = document.querySelector('#form');
            let allComments = document.querySelector('.allComments');
            addForm.addEventListener('submit', function (e) {
                e.preventDefault()
                let newComment = document.createElement('div');
                newComment.classList.add('oldComment');

                let commentInfo = document.createElement('div');
                let commentInfo2 = document.createElement('div');
                commentInfo.classList.add('commentInfo')
                commentInfo2.classList.add('commentInfo2')
                let newCommentId = document.createElement('div');
                let newCommentName = document.createElement('div');
                let newCommentEmail = document.createElement('div');
                let newCommentBody = document.createElement('div');
                let img = document.createElement('img');
                img.src = "./images/avatarComment.png";
                newCommentId.innerHTML = `id : ${this.id.value}`;
                newCommentName.innerHTML = `Name : ${this.name.value}`;
                newCommentEmail.innerHTML = `Email : ${this.email.value}`;
                newCommentBody.innerHTML = `Comment : ${this.comment.value}`;

                commentInfo.append(img, newCommentId, newCommentName);
                commentInfo2.append(newCommentEmail, newCommentBody);

                newComment.append(commentInfo,commentInfo2)
                allComments.appendChild(newComment)

                let commentsArray = JSON.parse(localStorage.getItem('new-comments')) || []
                let s = {
                    id: addForm.id.value,
                    name: addForm.name.value,
                    email: addForm.email.value,
                    comment: addForm.comment.value
                };
                commentsArray.push(s)
                localStorage.setItem('new-comments', JSON.stringify(commentsArray))

                addForm.id.value = ''
                addForm.name.value = ''
                addForm.email.value = ''
                addForm.comment.value = ''


            })
                let commentsArray = localStorage.getItem('new-comments');

            if (commentsArray) {
                let commentsArr = JSON.parse(commentsArray);
                console.log(commentsArr);

                for (const element of commentsArr) {
                    let newComment = document.createElement('div');
                    newComment.classList.add('newComment');

                    let commentInfo = document.createElement('div');
                    let commentInfo2 = document.createElement('div');
                    commentInfo.classList.add('commentInfo')
                    commentInfo2.classList.add('commentInfo2')
                        let img = document.createElement('img');


                        img.src = "./images/avatarComment.png";
                        let allComments = document.querySelector('.allComments');

                        let newCommentId = document.createElement('div');
                        let newCommentName = document.createElement('div');
                        let newCommentEmail = document.createElement('div');
                        let newCommentBody = document.createElement('div');

                        newCommentId.innerHTML = `id : ${element.id}`;
                        newCommentName.innerHTML = `Name: ${element.name}`;
                        newCommentEmail.innerHTML = `Email : ${element.email}`;
                        newCommentBody.innerHTML = `Comment : ${element.comment}`;

                        commentInfo.append(img, newCommentId, newCommentName);
                        commentInfo2.append(newCommentEmail, newCommentBody);

                        newComment.append(commentInfo,commentInfo2)
                        allComments.appendChild(newComment)


                }
            }
        }
    })




// let addForm = document.querySelector('#form');
// let allComments = document.querySelector('.allComments');
// addForm.addEventListener('submit', function (ev) {
//     ev.preventDefault()
//     let newComment = document.createElement('div');
//     let newCommentId = document.createElement('div');
//     let newCommentName = document.createElement('div');
//     let newCommentEmail = document.createElement('div');
//     let newCommentBody = document.createElement('div');
//
//     newCommentId.innerHTML = `${this.id.value}`;
//     newCommentName.innerHTML = `${this.name.value}`;
//     newCommentEmail.innerHTML = `${this.email.value}`;
//     newCommentBody.innerHTML = `${this.comment.value}`;
//
//     newComment.append(newCommentId, newCommentName, newCommentEmail, newCommentBody)
//     allComments.appendChild(newComment)
//
//
//     let commentsArray = JSON.parse(localStorage.getItem('new-comments')) || []
//     let s = {
//         id: addForm.id.value,
//         name: addForm.name.value,
//         email: addForm.email.value,
//         comment: addForm.comment.value
//     };
//     commentsArray.push(s)
//     localStorage.setItem('new-comments', JSON.stringify(commentsArray))
//
//     addForm.id.value = ''
//     addForm.name.value = ''
//     addForm.email.value = ''
//     addForm.comment.value = ''
// })

// setTimeout(function() {
//     let addForm = document.querySelector('#form');
//     let allComments = document.querySelector('.allComments');
//     addForm.addEventListener('submit',function (ev) {
//         ev.preventDefault()
//         let newComment = document.createElement('div');
//         let newCommentId = document.createElement('div');
//         let newCommentName = document.createElement('div');
//         let newCommentEmail = document.createElement('div');
//         let newCommentBody = document.createElement('div');
//
//         newCommentId.innerHTML = `${this.id.value}`;
//         newCommentName.innerHTML = `${this.name.value}`;
//         newCommentEmail.innerHTML = `${this.email.value}`;
//         newCommentBody.innerHTML = `${this.comment.value}`;
//
//         newComment.append(newCommentId,newCommentName,newCommentEmail,newCommentBody)
//         allComments.appendChild(newComment)
//
//
//         let commentsArray = JSON.parse(localStorage.getItem('new-comments')) || []
//         let s = {id:addForm.id.value,name:addForm.name.value,email: addForm.email.value, comment:addForm.comment.value};
//         commentsArray.push(s)
//         localStorage.setItem('new-comments',JSON.stringify(commentsArray))
//
//         addForm.id.value = ''
//         addForm.name.value = ''
//         addForm.email.value = ''
//         addForm.comment.value = ''
//
//     })
// },1000)

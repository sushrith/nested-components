let commentContainer = document.getElementById('comment-container')

function createInputBox(){

    let div = document.createElement('div');
    div.setAttribute('class',"comment-details");

    div.innerHTML += 
    `<input type="text" placeholder="add text here" class="input">
    <button class="btn submit">Submit</button>`

    return div;
}

function addReply(text){
    
    let div = document.createElement('div');
    
    div.setAttribute('class',"all-comment");

    div.innerHTML += 
    `<div class="card">
            <span class="text">${text}</span>
            <span class="reply" id="reply">Add Reply</span>
            <span class="delete" id="delete">Delete</span>
        </div>`
    return div;
}


commentContainer.addEventListener('click',(e)=>{
    let replyClicked = e.target.classList.contains('reply');
    let submitClicked = e.target.classList.contains('submit');
    let deleteClicked = e.target.classList.contains('delete');

    let closestCard = e.target.closest(".all-comment");
    console.log(closestCard)
    
    if(deleteClicked){
        closestCard.remove();
    }

    if(replyClicked){
        //add input box
        closestCard.appendChild(createInputBox());
    }

    if(submitClicked){
        //reply card
        const commentDetails = e.target.closest(".comment-details");
        // console.log(e.target.closest(".comment-details"));
        if(commentDetails.children[0].value){
            closestCard.appendChild(addReply(commentDetails.children[0].value));
            commentDetails.remove();
        }
    }

})
const counter = document.getElementById("counter");

let intervalID = setInterval(function () {
    counter.innerText = parseInt(counter.innerText) + 1;
}, 1000);

   const plusBtn = document.getElementById('plus');

   plusBtn.addEventListener("click", () => {
    plusBtn.innerText = parseInt(plusBtn.innerText) + 1;
   });

   const minusBtn = document.getElementById('minus');

   minusBtn.addEventListener("click", () => {
   minusBtn.innerText = parseInt(minusBtn.innerText) - 1;
   });

   const like = document.querySelector(".likes")

   const heart = document.getElementById("heart")

   like.addEventListener("click", () => {

    const counterValue = counter.innerText;
   
    //To "like" an indicidual number of the counter,
    //you should create a li element for each individual number of the counter. 
    //Check to make sure one hasnt't already been created for the current value of the timer. 
    const likeItem = document.querySelector(`[data-num='${counterValue}']`);
    if(likeItem === null) {
        const newLikeItem = document.createElement('li');
        newLikeItem.setAttribute("data-num", counterValue);
        newLikeItem.innerHTML = `${counterValue} has been liked <span>1</span> time.`
        like.append(newLikeItem);
    }
    else{
        const numberOfLikes = likeItem.querySelector("span");
        numberOfLikes.innerText = parseInt(numberOfLikes.innerText) +1
    }
   })

   

//    const likeItem = document.createElement("li");
//    likeItem.innerText = "(X) has been liked (Y) i(z)"

//    like.appendChild(likeItem);
const pauseBtn = document.getElementById("pause");

const submitBtn = document.getElementById("submit");

pauseBtn.addEventListener("click", () => {
    if(pauseBtn === "pause") {
        pauseBtn.innerText = "resume";

        clearInterval(intervalID);

        plusBtn.disabled = true;
        minusBtn.disabled = true;
        submitBtn.disabled = true;
    }
    else{
        pauseBtn.innerText = "pause";
        
        intervalID = setInterval( () => {
            counter.innerText = parseInt(counter.innerText) +1;
        }, "1000");

        plusBtn.disabled = false;
        minusBtn.disabled = false;
        submitBtn.disabled = false;
    };

    const form = document.getElementById("comment-form");
    const list = document.getElementById("list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })
    const comment = document.createElement("p");
    comment.innerText = document.getElementById("comment-form").value
    list.append(comment);
})
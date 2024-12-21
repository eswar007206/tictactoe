let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-button");
let main = document.querySelector("#main");


let turnO = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetbutton = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
    main.classList.remove("hide");
}

const disableboxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}!!!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    main.classList.add("hide");
}

const checkwinner = () => {
    for (let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
            }
        }
    }
}

newbtn.addEventListener("click",resetbutton);
resetbtn.addEventListener("click",resetbutton);
let vr = 0;   //to change player turn 
let gifs = document.querySelector(".gif")


for (let i = 0; i < 9; i++) {
    const element = document.getElementsByClassName("tiles")[i];
    element.addEventListener("click", function () {


        if (vr % 2 == 0) {
            element.innerHTML = "<span class='x-color'>X</span>";
            checkwin()
            vr += 1;
        }

        else {
            element.innerHTML = "O";
            element.innerHTML = "<span class= 'o-color'>O</span>";
            (checkwin())

            vr += 1;
        }
    })

}

// to reset 
const start = document.querySelector(".btn");
start.addEventListener("click", function () {
    for (let i = 0; i < 9; i++) {
        const tile = document.querySelectorAll(".tiles")[i];
        tile.innerHTML = ""
    }
    gifs.style.opacity = 0;
    document.querySelector(".won").innerHTML = " ";
    vr = 0;
})




// logic
const checkwin = () => {

    let box = document.getElementsByClassName("tiles")
    let win = [
        [0, 3, 6],
        [0, 1, 2],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
    ]
    win.forEach(e => {
        if (box[e[0]].innerHTML == box[e[1]].innerHTML && box[e[1]].innerHTML == box[e[2]].innerHTML && box[e[0]].innerHTML !== "") {
            if ((vr + 1) % 2 == 0) {
                var y = "player2 ";
            } else {
                var y = "player1 ";
            }
            document.querySelector(".won").innerHTML = y + "won!!!";
            gifs.style.opacity = 1;
        }
    }
    )
}

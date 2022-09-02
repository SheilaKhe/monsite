// Affichage dialogue - accueil
let app = document.querySelector('.dialog-question');

let typewriter = new Typewriter(app, {
    //loop: true,
})
.start()
.changeDelay(50)
.typeString('I\'m Sheila, web developper and this is my website !')
.pauseFor(1000)
.changeDelay(100)
.typeString(' But wait...')
.pauseFor(1200)
.changeDelay(5)
.deleteChars(11)
.changeDelay(50)
.typeString('You, what are you doing here ?')
.pauseFor(1500)
.changeDelay(5)
.typeString('<br><span class="dialog-explication">Tap 1. To see my profile, 2. For my education, 3. My work experiences and 4. If you want to learn more about me </span>')


// Récupérer information dialogue
let btnSend = document.getElementById('btn-form');

function sendMsg(params) {
    let msg = document.getElementById('message').value;

    if (msg == 1) {
        window.location.href='profile.html';
    }
    else if (msg == 2) {
        window.location.href='education.html';
    }
    else if (msg == 3) {
        window.location.href='work.html';
    }
    else if (msg == 4) {
        window.location.href='about.html';
    }
    else {

        alert(msg + ' is not in the list, please tap another number');
        location.reload();

    }

}

btnSend.addEventListener('click', function() {
    let msg = document.getElementById('message').value;

    if (msg == 1) {
        window.location.href='profile.html';
    }
    else if (msg == 2) {
        window.location.href='education.html';
    }
    else if (msg == 3) {
        window.location.href='work.html';
    }
    else if (msg == 4) {
        window.location.href='about.html';
    }
    else {

        if(getComputedStyle(userAnswer).display != "none") {
            userAnswer.style.display = "none";
        } else {
            userAnswer.style.display = "block";
        let typewriter = new Typewriter(answer, {

        })
        .start()
        .typeString(msg)
        .pauseFor(200)
        .changeDelay(8)
        .typeString('<br><p style="color:red;font-style:italic;font-size:small;">' + msg + ' is not in the list, please tap another number :) </p>')
        }
    }
       
})
  
 

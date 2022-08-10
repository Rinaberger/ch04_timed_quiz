let highScoresList = document.getElementById("highscoreList")
let storage = JSON.parse(localStorage.getItem('quizHighscores'))
        if (storage === null) {
            storage =[]
        } else {

        //storage.push(userObj)
        localStorage.getItem('quizHighscores', JSON.stringify(storage))
        console.log("success get")
    }



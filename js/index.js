window.onload = function (){
    var limitRedBall = document.getElementById("limitRedBall");
    var numRedBall = document.getElementById("numRedBall");
    var limitBlueBall = document.getElementById("limitBlueBall");
    var numBlueBall = document.getElementById("numBlueBall");

    var getMoney = document.getElementById("getMoney");
    var redBallValue = document.getElementById("redBallValue");
    var blueBallValue = document.getElementById("blueBallValue");


    getMoney.onclick = function (){
        var redBall = randomNum(limitRedBall.value,numRedBall.value);
        var blueBall = randomNum(limitBlueBall.value,numBlueBall.value);
        alert(redBall)
        alert(blueBall)
        redBallValue.innerText=redBall
        blueBallValue.innerText=blueBall
     

    }
}
    function randomNum(maxNum,limit){
        var numArray = [];
        for (var i = 0;i < limit;i++){
            numArray[i] = Math.floor(Math.random()*maxNum);
        }
        return numArray;
    }

var randomNumber1=Math.random()*6+1;
randomNumber1=Math.floor(randomNumber1);

var image1="images/dice"+randomNumber1+".png";

var randomNumber2=Math.random()*6+1;
randomNumber2=Math.floor(randomNumber2);

var image2="images/dice"+randomNumber2+".png";



if(randomNumber1===randomNumber2)
document.querySelector("h1").innerText="Draw";

else if(randomNumber1>randomNumber2)
document.querySelector("h1").innerText="💥Player1 Wins";
else
document.querySelector("h1").innerText="Player2 Wins💥";

document.querySelector("img.img1").setAttribute("src",image1);
document.querySelector("img.img2").setAttribute("src",image2);

const a =`

@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@600&family=Croissant+One&family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@300&display=swap');

:root {
--main-bg-color: #736f6f;
}

*{ 
margin: 0;
padding: 0;
}
body{
  height: 100vh;
  width: 100vw;
}
header{
  background: #fff;
  box-shadow: 0px 2px black;
  position: sticky;
  top: 0;
}
nav{
display: flex;
}
nav div img{

}
nav ul{
  height: 8vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-height: 60px;
  min-height: 20px;
  margin: auto 0;
}
nav ul li{
list-style:none;
 padding:0 1vw;
}
nav ul li a{
  color: black;
font-family: 'Croissant One', cursive;
text-decoration:none;
}
 a:hover{

font-weight: bold;

}
button:hover{
  box-shadow: 2px 2px #575e56;
  }
.search{
display: flex;
align-items: center;
position: absolute;
  right: 0;
  align-self: center;
}
.search input{
  height: 5vh;
  width: 22vw;
  border-radius: 7px;
  margin: 0 1vw 0 8vw;
  max-height: 30px;
  min-height: 15px;
  min-width: 83px;
  max-width: 280px;
}
#searchbutton{
  margin: auto;
}
.searchbody{
  display: flex;
  align-content: center;
  justify-content: center;
  border: 4px solid #242424;
  border-radius: 5px;
  height: 30vh;
  min-height: 62px;
  width: 40vw;
  margin: 20vh auto;
  background: #d2d0d0;
}
.searchbody span{
  margin: auto;
  border: 2px solid #fff;
  border-radius: 5px;
  height: 69%;
  width: 90%;
  display: inline-grid;
  background: white;
}
#textsearch{
  width: 99%;
  margin: auto;
  border: 3px solid #000;
    border-radius: 5px;
  border-right-width: 2px;
  height: 75%;
}
  .logo{
    display: flex;
    align-items: center;
    font-size: xx-large;
  }
  .text-log{
    font-weight: 900;
  letter-spacing: -0.005em;
  }
  .btn {
    color: white;
    background: #abf2af;
    border: 2px solid #1c1e1e;
  border-radius: 7px;
  cursor: pointer;
  font-family: 'Playfair Display', serif;
  height: 85%;
  width: 57%;
  max-width: 73px;
  min-width: 51px;
  min-height: 19px;
  max-height: 75px;
  display: inline-grid;
  justify-self: end;
  margin: auto 1vw;
  }
.btn a{
  margin-bottom: 2%;
  padding: 2px;
  margin: 1%;
  }

a{
    font-family: 'Croissant One', cursive;
text-decoration: none;
color: black;
}

@media  screen and (max-width:1000px){

}

@media  screen and (max-width:400px){
  #textsearch {
    border: 2px solid #000;
  }
  .searchbody {
    width: 71vw;
  }
}
@media  screen and (max-width:250px){
  .logo {
    font-size: x-large;
  }
  nav ul li {
    padding: 0 5vw;
    font-size: small;
  }
}

@media  screen and (max-width:200px){
  .logo {
    font-size: larger;
  }

}

@media  screen and (max-width:150px){
  .logo {
    font-size: smaller;
  }
  nav ul li {
    font-size: x-small;
  }
  #searchbutton{
    font-size: smaller;
  }

}
@media  screen and (max-width:100px){

  body {
    min-width: 100px;
    min-height: 200px;
  }
.searchbody {
  width: 91vw;
  border: 2px solid #242424;
  min-width: 90px;
  min-height: 60px;
}
}
`

module.exports = a;
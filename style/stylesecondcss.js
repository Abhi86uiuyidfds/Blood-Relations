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
  border: 2px solid #000;
  border-right-width: 2px;
}
#searchbutton{
  margin: auto;
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
    height: 5vh;
    width: 10vw;
    max-width: 73px;
    min-width: 41px;
    min-height: 19px;
    max-height: 75px;
    margin-right: 1vw;
  }
  button:hover{
    box-shadow: 2px 2px #575e56;
    }

.resultbody{
  height: auto;
  width: 77vw;
  margin: 10vh auto;
  display: table;
  align-content: center;
  justify-content: flex-start;
}
.resultbody div{
  box-shadow: 2px 2px black;
  margin: 4vh;
}
.resultbody h3{
  font-size: 35px;
  line-height: 1;
  letter-spacing: 0.019em;
  font-weight: 700;
  border-bottom-width: 0px;
  border-bottom-style: solid;
}
.resultbody p{
  font-size: x-large;
}
@media  screen and (max-width:1200px){
  .resultbody h3 {
    font-size: 27px;
  }
  .search
{
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  align-self: center;
  top: 21px;
}

}
@media  screen and (max-width:1000px){
  .resultbody h3 {
    font-size: 24px;
    line-height: 1;
  }
  .resultbody p {
    font-size: medium;
  }

}
@media  screen and (max-width:850px){
  .resultbody h3 {
    font-size: 21px;
    font-weight: 600;
  letter-spacing: -0.029em;
  line-height: 0.9;
  }


}
@media  screen and (max-width:700px){
  .resultbody h3{
    font-size: 19px;
    line-height: 0.9;
  }
}
@media  screen and (max-width:600px){
  .resultbody h3{
    font-size: 16px;
    line-height: 0.8;
  }
}
  @media  screen and (max-width:500px){

    .resultbody h3{
      line-height: 0.8;
  letter-spacing: -0.01em;
  font-weight: 600;
    }
    .logo {
      display: flex;
      align-items: center;
      font-size: x-large;
    }
    nav ul li {
      list-style: none;
      padding: 0 4vw;
      font-size: x-small;
    }
    .search input {
      height: 3vh;
      width: 25vw;
      border-radius: 7px;
      margin: 0 1vw 0 8vw;
    }
    .btn {
      border-radius: 7px;
      cursor: pointer;
      font-family: 'Playfair Display', serif;
      height: 4vh;
      width: 10vw;
    }
    #searchbutton{
      letter-spacing: 0.007em;
      font-weight: 700;
      font-size: 10px;
      margin: auto;
    }
    .search {
     display: flex;
     align-items: center;
     position: absolute;
     right: 0;
     align-self: center;
     top: 12px;
}
  }
  @media  screen and (max-width:400px){
    .logo {
      display: flex;
      align-items: center;
      font-size: larger;
    }
    .search{
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  align-self: center;
  top: 7px;
  }
  header
{
  background: #fff;
  box-shadow: 0px 2px black;
  position: sticky;
  top: 0;
  height: 14vh;
}
}
  @media  screen and (max-width:335px){
    .logo {
      display: flex;
      align-items: center;
      font-size: smaller;
    }
    header
    {
        background: #fff;
        box-shadow: 0px 2px black;
        position: sticky;
        top: 0;
        height: 11vh;
      }
      .search
{
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  align-self: center;
  top: 5px;
}
    }
  @media  screen and (max-width:312px){
    .logo {
      display: flex;
      align-items: center;
      font-size: smaller;
    }
    nav ul {
      height: 7vh;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      max-height: 60px;
      min-height: 20px;
    }
  }

  @media  screen and (max-width:284px){
    header
    {
        background: #fff;
        box-shadow: 0px 2px black;
        position: sticky;
        top: 0;
        height: 15vh;
      }
      nav {
          display: flex;
          flex-direction: column;
        }
     nav ul {
          height: 5vh;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          max-height: 60px;
          min-height: 20px;
        }
        .search
        {
            display: flex;
            align-items: center;
            position: absolute;
            right: 0;
            align-self: center;
            top: 17px;
          }
        .search input {
          height: 3vh;
          width: 58vw;
          border-radius: 7px;
          margin: 0 1vw 0 8vw;
        }
        nav ul li {
          list-style: none;
          padding: 0px 1vw;
          font-size: x-small;
        }
        .resultbody h3 {
          font-size: 12px;
          line-height: 0.9;
          letter-spacing: -0.015em;
        }
        .resultbody p {
          font-size: small;
          
        }
      

  }
  @media  screen and (max-width:220px){

    header{
        background: #fff;
        box-shadow: 0px 2px black;
        position: sticky;
        top: 0;
        height: 15vh;
        min-height: 51px;
      }
  nav {
      display: flex;
      flex-direction: row;
    }
    .search{
        top: 24px;
    }    
    .search input {
      height: 2vh;
      width: 65vw;
      border-radius: 7px;
      margin: 0 1vw 0 8vw;
    }
    .btn {
      border-radius: 7px;
      cursor: pointer;
      font-family: 'Playfair Display', serif;
      height: 3vh;
      width: 10vw;
    }
    .resultbody p {
      font-size: x-small;          
    }

  }
  @media  screen and (max-width:200px){
    header {
      height: 10vh;
      min-width: 140px;
      min-height: 53px;
    }
    nav {
    display: flex;
    flex-direction: inherit;
  }
  .logo {
    display: flex;
    align-items: center;
    font-size: large;
  }
  }
  @media  screen and (max-width:190px){
  .resultbody p {
    font-size: x-small;
  }
  .resultbody h3 {
    font-size: 10px;
    line-height: 0.9;
    letter-spacing: -0.015em;
  }
  .logo {
    display: flex;
    align-items: center;
    font-size: smaller;
  }
  }
  @media  screen and (max-width:160px){
    .logo {
      letter-spacing: -0.104em;
    }
    }
  @media  screen and (max-width:138px){
    header {
      height: 10vh;
      min-width: 140px;
      min-height: 53px;
    }
    nav {
      display: flex;
      flex-direction: inherit;
    }
    .logo {
      display: flex;
      align-items: center;
      font-size: small;
      line-height: 0.9;
      font-weight: 200;
    }
    nav ul li {
      list-style: none;
      padding: 0 17vw;
      font-size: xx-small;
      letter-spacing: 0.028em;
    }
    .search {
      display: flex;
      align-items: center;
      position: absolute;
      left: -6px;
      align-self: center;
      top: 27px;
    }
    .btn {
      margin:0;
    }
    }

  
    a{
      font-family: 'Croissant One', cursive;
  text-decoration: none;
  color: black;
  }
`

module.exports = a;
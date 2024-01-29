const style = require("../style/stylecss");

const a = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Blood Relation - Read on to learn how to solve Blood Relations Questions in the Logical Reasoning section of various Government and Bank exams like a pro" />
  <meta name="keywords" content="Blood Relation , Relations Questions, Blood Relations Questions, Bank exams , Government exams " />
  <meta name="author" content="Abhishek" />
  <style >
  ${style}
  </style>
  <title>Blood Relation</title>
</head>

<body>

<header>
<nav>
  <div class="logo"><a class="text-logo" href="/home">
  Blood Relation
</a></div>
  <ul>
  <li class="nav-item">
  <a  aria-current="page" href="/home">
    Home
  </a>
</li>
  </ul>
</nav>
</header>


<div class="searchbody" id="searchbody">
<span>
<input type="text" placeholder="Search.." id="textsearch">
<button class="btn">
<a id="searchbutton"  onClick="a()">Search</a>
</button>
</span>
</div>

  
 <script>
  const searchinput=document.getElementById("textsearch")
  const button = document.getElementById("searchbutton")

 function a(){
  if(searchinput.value!==""){
    const search = "/"+searchinput.value
    button.setAttribute("href",search)
  }else{
    button.setAttribute("disabled","true")
  }
 
 }


 searchinput.addEventListener("keypress",(e)=>{
  if(e.key==="Enter"){
    e.preventDefault()
    button.click()
  }
 })
 
 </script>
</body>

</html>`;

module.exports = a;

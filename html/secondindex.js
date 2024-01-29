const searchDocument =require("../document/document")
const style=require("../style/stylesecondcss")
const lib = searchDocument.default

const d=(data)=>{
  let arr= data.map((e)=>{
 return `<div><h3>${e["element"]}</h3> <p>${lib[e["element"]]}</p></div><hr>`
 })
 
return `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]}`

}
const a = (data)=>{
 const  tags=()=>{
  const tag =data[0]["element"].split(" ")
  if (tag.length>5) {
    return [tag[0],tag[1],tag[2],tag[3],tag[4],tag[5],tag[6],tag[7],tag[8],tag[9]]
  } else {
    
    return tag 
  }
  } 

  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="${data[0]["element"]} - related Question / Answers" />
  <meta name="keywords" content="${tags()} , Blood Relation ,Blood Relation Question , relation" />
  <meta name="author" content="Abhishek" />
  <style>
  ${style}
  </style>
  <title>Blood Relation - ${data[0]["element"]}</title>
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
  <div class="search"><input type="text" placeholder="Search.." id="textsearch"><button class="btn"><a id="searchbutton"  onClick="a()">Search</a></button></div>
</nav>
</header>

  <div class="resultbody" id="resultbody">
  ${ 
    d(data)
  }
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
    // console.log(e)
    button.click()
  }
 })
 
 </script>

</body>

</html>`};



module.exports = a;

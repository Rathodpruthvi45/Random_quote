const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");
const pruthvi=async()=>{
    var url="https://type.fit/api/quotes";
    const r=await fetch(url);
    console.log(typeof r);
    const all=await r.json();
    const i=Math.floor(Math.random()*all.length);
    const quote=all[i].text;
    const auth=all[i].author;
    if(auth==null)
{
     author = "Anonymous";
}

text.innerHTML=quote;
author.innerHTML="~ "+auth;
tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;

}
pruthvi();
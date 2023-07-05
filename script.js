let count = 0;
document.getElementById("inc").addEventListener("click",()=>{count+=1;document.getElementById("inp").value = count;});
document.getElementById("dec").addEventListener("click",()=>{count-=1;document.getElementById("inp").value = count;});
document.getElementById("reset").addEventListener("click",()=>{count=0;document.getElementById("inp").value = count;});

let a='x'
let b='o'
let count=0;
let obj={
    0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8
}
let z=0;
function jasprit(n)
{
    if(z!=0) {
        alert("Game is over!.\n");
        return;
    }
    if(obj[n]=='x' || obj[n]=='o') {
        alert("Oops! can't change the value!");
    } 
    else
    {
    let x=document.getElementsByClassName("new");
    if(count%2==0)
    {
        x[n].innerHTML=a;
        obj[n]=a;
    }
    else{
        x[n].innerHTML=b;
        obj[n]=b;
    }
    count++;
    let i=0;
    while(i<9)
    {
    if(obj[i]==obj[i+1] && obj[i+1]==obj[i+2])
    {
        if(count%2==0) {alert("O wins");z='o'}
        else {alert("X wins");z='x'}
    }
    i+=3;
    }
    i=0;
    while(i<3)
    {
        if(obj[i]==obj[i+3] && obj[i+3]==obj[i+6])
        {
            if(count%2==0) {alert("o wins");z='o'}
            else {alert("X wins");z='x'}
        }
        i++;
    }
    if(obj[0]==obj[4] && obj[4]==obj[8])
    {
        if(count%2==0) {alert("o wins");z='o'}
        else {alert("X wins");z='x'}
    }
    if(obj[2]==obj[4] && obj[4]==obj[6])
    {
        if(count%2==0) {alert("o wins");z='o';}
        else {alert("X wins");z='x';}
    }
}
if(count==9) {alert("Match Drawn");}
}

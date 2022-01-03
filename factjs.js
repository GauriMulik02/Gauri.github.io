function calculate()
{
    var a=document.getElementById("number").value;
    var i,fact=1;
    for(i=1;i<=a;i++)
    {
        fact=fact*i;
    }
    document.getElementById("result").innerHTML=fact;
}
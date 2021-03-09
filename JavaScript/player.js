//logic to simulate a dummy game
function showOrder(){
    var totalorder=0;//keeping track of the total order
    var randomDemand=Math.floor(Math.random()*100);//genrating random demands
    var accumulatedOrder=document.getElementById('message1').value;
    accumulatedOrder=Number(accumulatedOrder)
    var currentOrder=document.getElementById("totalorder").innerHTML
    currentOrder=Number(currentOrder)
    totalorder=accumulatedOrder+currentOrder //adding the current order with previous orders
    document.getElementById("totalorder").innerHTML=totalorder;
    var demand=document.getElementById("units").innerHTML;
    demand=Number(demand);
    var totaldemand=demand+randomDemand; //adding the current demand with total demand
    var unitsAvailable=totalorder-totaldemand;
    var x=document.getElementById("unitsav").innerHTML;
    x=Number(x);
    document.getElementById("unitsav").innerHTML=unitsAvailable;//updating the contents of the page
    var backlogCost=0;
    var holdingCost=0;
    if (unitsAvailable<0)//looking for a deficit of items
    {
        var blog=Math.abs(unitsAvailable)
        backlogCost=blog*0.5;//backlog cost set to 0.5 for this game
        holdingCost=0;
    }
    else
    {
        holdingCost=1*unitsAvailable //holding cost set to 1
        backlogCost=0;
    }
    document.getElementById("bcost").innerHTML=backlogCost;//updating the contents of the page
    document.getElementById('units').innerHTML=randomDemand;
    document.getElementById("hcost").innerHTML=holdingCost;
}

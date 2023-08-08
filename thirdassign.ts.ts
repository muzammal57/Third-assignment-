//Question no 1
var num1:number=45
console.log("Temperature in Celsius is "+(num1-32)/1.8)
var num3:number=45
console.log("Temperature in Farhrenheit is "+(1.8*num3+32))
//Question no 2
var obtainQuantity:number=23
var totalQuantity:number=50
//Question no 3
console.log("Percentage is "+(obtainQuantity/totalQuantity)*100)
var num2:number=340;
var num4:number=num2%7
var num5:number=((num2-num4)/7)
console.log(num5+" weeks  and "+num4+' days')
//Question no 4
var price:number=50
if(price>=100){
    console.log("Discount is "+(.10*price))
}else{
    console.log("Discount is "+(.05*price))
}
//Question no 5
var age:number=16;
if(age<=12){
    console.log("Child")
}else if(age<=19){
    console.log("Teenager")
}else{
    console.log("Adult")
}
//Question no 6
var temp:number=57;
var sugTemp:number=20;
if(temp<sugTemp){
    console.log("Wear war clothes")

}else{
    console.log("Temperature is normal")
}
//Question no 7
var num6:number=30;
if(num6%3==0 && num6%5==0){
    console.log("Number is Divible by 3 and 5 ")
}
else if(num6%5==0){
    console.log("Number is Divible by 5")
}
else if(num6%3==0){
    console.log("Number is Divible by 3")
}else{
    console.log("number is not divible by anyone")
}
//Question no 8
var year:number=2024
if(year%4==0){
    console.log("This is leap Year")
}else{
    console.log("Not leap year")
}
//Question no 9
var day:number=7;
if(day==1){
    console.log("Monday")
} else if(day==2){
    console.log("Monday")
}
else if(day==3){
    console.log("Tuesday")
}
else if(day==4){
    console.log("Wednesday")
}
else if(day==5){
    console.log("Friday")
}
else if(day==6){
    console.log("Satureday")
}else{
    console.log("Sunday")
}
//Question no 10 if rate of one unit Rs .1
var units:number=56
if(units<=100){
    console.log("Your bill is "+(.05*units+units))
    console.log("Your tax is "+(.05*units))
}else if(units<=200){
    console.log("Your bill is "+(.10*units+units))
    console.log("Your tax is "+(.10*units))
}else if(units<=300){
    console.log("Your bill is "+(.15*units+units))
    console.log("Your tax is "+(.15*units))
}else if(units<=400){
    console.log("Your bill is "+(.20*units+units))
    console.log("Your tax is "+(.20*units))
}else{
    console.log("Your bill is "+(.25*units+units))
    console.log("Your tax is "+(.25*units))
}
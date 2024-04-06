import { Component } from '@angular/core';

@Component({
  selector: 'app-practise-comp',
  templateUrl: './practise-comp.component.html',
  styleUrls: ['./practise-comp.component.css']
})
export class PractiseCompComponent {
//   displayVal =""
// getValue(val:string){
//   console.log(val)
//   this.displayVal=val
// }

// show = false;

// getName(name:string){
//  alert(name)
// }

counter:number = 0;

increment(){
  this.counter++
}

decrement(){
  this.counter--;
}

count:number = 0

getIncDec(value:string){
  if(value=='increment'){
     this.count++
  }

  else{
    this.count--
  }
}

price:number=0
quantity:number=0
totalPrice:number = 0

productPriceChange(event:any){
 console.log("Product Price Change", event.target.value)
 if(event!=null && event.target!=null){
  this.price = event.target.value
  // this.totalPrice = Number(this.price) * Number(this.quantity)
 }


}
productQuantityChange(event:any){
  console.log("Product Price Change", event.target.value)
  if(event!=null && event.target!=null){
   this.quantity = event.target.value
  //  this.totalPrice = Number(this.price) * Number(this.quantity)
  }

 

}
calculate(){
  this.totalPrice = Number(this.price) * Number(this.quantity)
}

productPrice:number=0
productQty:number=0
totalPriceOfProduct:number =0

calculateTotal(){
  this.totalPriceOfProduct = Number(this.productPrice) * Number(this.productQty)
}

joiningDate = new Date()

msg: string = "Hello guys welcome to coding era"

income:number = 945000

firstNumber:number =0
secondNumber:number =0

calculatedValue:number =0

calculator(type:string){
  if(type=='addition'){
    this.calculatedValue = Number((this.firstNumber) + (this.secondNumber))
   }
  if(type=='subtraction'){
    this.calculatedValue = Number((this.firstNumber) - (this.secondNumber))
   }
  if(type=='multiplication'){
    this.calculatedValue = Number((this.firstNumber) * (this.secondNumber))
   }

   if(type=='division'){
    if( this.secondNumber !==0 ){
      this.calculatedValue = Number((this.firstNumber) / (this.secondNumber))
     }
  
     else{
      alert("Entered Wrong input")
     }
   }
}


statesData:any = {
 "Maharashtra":["Mumbai","Pune","Nashik"],
 "Rajasthan":["Jaipur","Jodhpur"],
 "Madhyapradesh":["Indore","Bhopal"]
}

selectedState:string=""
selectedCity:string=""
cities:string[]=[]
states:string[]=Object.keys(this.statesData)

onStateChange(){
  this.cities = this.statesData[this.selectedState]
  this.selectedCity = ''
}

isShow:boolean=false

toggle(){
  this.isShow = !this.isShow
}

showData:boolean=true

employeeList:any = [
  {empName:"John",designation:"Angular Developer",salary:50000},
  {empName:"Sam",designation:"Java Developer",salary:60000},
  {empName:"Mike",designation:"React JS Developer",salary:70000},
  {empName:"David",designation:"Devops Eng",salary:80000},
]

selectedPreference:string ="";

mobileNo:string ="";
emailId:string =""

onPreferenceChange(value:string){
this.selectedPreference = value
}


name:string =""
mob_No:string=""

otpBtn:boolean=false
recievedOtp:string = ""

verifyOtp:string = ""

getOtp(event:any){
this.otpBtn = !this.otpBtn
}

otpVerified(){

}

FirstName:string =""

mobileNumber:string=""

msg1:string = "WELCOME TO CODING ERA"
}
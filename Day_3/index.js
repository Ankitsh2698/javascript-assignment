  
  //                            Question1
  function evenOdd(){
  
    var num = window. prompt("The number entered is : ");
  
       mod = num % 2
    if (mod == 0){
      console.log("Number entered is Even : " + num);
  }
  else{
   console.log("Number entered is Odd: " + num);
  }
  }

  //                           Question 2

function oS(){
    const originalString = window.prompt("Enter OS and its Version(give space in between): ");

   // Split string by whitespace character
   const splitString = originalString.split(" ");

   console.log(`The OS name is ${splitString[0]} and Version is ${splitString[1]}.`);
}

  //                   Using Conditional Statement
function withCon(){

  let marks=prompt("Enter the Marks to check");
        console.log(marks);

        if(marks>=85)
             console.log(`Marks are ${marks} and Grade is A`);
        else if(marks<85 & marks>=75)
            console.log(`Marks are ${marks} and Grade is B`);
        else if(marks<75 & marks>=65)
             console.log(`Marks are ${marks} and Grade is C`);
        else if(marks<65 & marks>=55)
             console.log(`Marks are ${marks} and Grade is D`);
        else if(marks<55 & marks>=45)
              console.log(`Marks are ${marks} and Grade is E`);
        else if(marks<45 & marks<=45)
              console.log(`Marks are ${marks} and Grade is F`);

}

//                            Using Swith Case

function withSwitch(){

        console.log("Using Switch Case : ")
        let marks1= parseInt(prompt("Enter the Marks to check using switch case"));
        console.log(marks1);


        switch (true){
        case marks1<45:
        console.log(`Marks are ${marks1} and Grade is F`);
        break;
        
        case marks1<55:
        console.log(`Marks are ${marks1} and Grade is E`);
        break;

        case marks1<65:
        console.log(`Marks are ${marks1} and Grade is D`);
        break;

        case marks1<75:
        console.log(`Marks are ${marks1} and Grade is C`);
        break;
        
        case marks1<=85:
        console.log(`Marks are ${marks1} and Grade is B`);
        break;

        case marks1<=100:
        console.log(`Marks are ${marks1} and Grade is B`);
        break;


        default:
        console.log("Enter Valid Marks")
}
}

  document.querySelector(".one").addEventListener("click",evenOdd);
  document.querySelector(".two").addEventListener("click",oS);
  document.querySelector(".three").addEventListener("click",withCon);
  document.querySelector(".four").addEventListener("click",withSwitch);

  

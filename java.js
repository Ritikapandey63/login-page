// let n1=prompt("Num 1=");
// let n2=prompt("Num 2=");
// for(let num=n1;num<n2;num++)
// {
//    if(num%2==0)
//      {
//       console.log("Even num=",num);
//      }
//    else if(num%2!==0)
//       {
//          console.log("Odd num=",num);
//       }  
//    }

// let n1=prompt("Enter the 1st time ")
// let gamenum=n1;
// let usernum=prompt("Guess the number ");
// while(usernum!==gamenum)
//    {
//       usernum=prompt("You enter the wrong number.Guess again =");
//    }
// console.log("Congrates,you have entered correct =",n1);   

// let n1=prompt("Enter the full name ");
// let n2=n1.length;
// let fn="@"+n1+n2;
// console.log("Name= ",n1);
// console.log("User name = ",fn);

// function add(x,y)
//     {
//         console.log("Sum = ",x+y);
//     }

// const p=prompt("1st number");
// const q=prompt("2nd number");
// add(p,q);    

// function vowel(str)
// {
//     let count=0;
//     for(let val of str)
//     {
//         if(val==="a"||val==="e"||val==="i"||val==="o"||val==="o"||val==="u")
//           {
//             count++;
//           }     
//     }
//     console.log(count);
// }

// let str=prompt("String")
// vowel(str);

let arr=[2,3,7,6,8,22,4];
let value=arr.reduce((larg,small)=>{
        if (larg>small)
            return larg ;
        else 
            return small;   
})
console.log(value);
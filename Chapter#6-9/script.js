// 1
// var a = prompt("Write a number <br>");

// document.write(`<h3>Result</h3>`);
// document.write(`The value of a is: ${a}<br><br>`);

// document.write(`The value of ++a is: ${++a}<br>`);
// document.write(` Now the value of a is: ${a}<br><br>`);

// document.write(`The value of a++ is: ${a++}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);

// document.write(`The value of --a is: ${--a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);

// document.write(`The value of a-- is: ${a--}<br>`);
// document.write(`Now the value of a is: ${a}<br>`);

// 2

// var a = 2;
// var b = 1;
//  var result =  --a - --b + ++b + b--;

// document.write(`a is ${a} <br>`);
// document.write(`b is ${b} <br>`);
// document.write(`result is ${result}`);

// 3

    // var name = prompt("whats your name?");
    // document.write(`Hello ${name}`);

    // 4
    
    // var num = prompt("Enter a number for display table.", 5 );
    //  var series = 1;
     
    //  document.write(`<h4>Table of ${num}</h4>`);

    //  document.write(`${num} x ${series} = ${num*series}<br>`);
    //  document.write(`${num} x ${++series} = ${num*series}<br>`);
    //  document.write(`${num} x ${++series} = ${num*series}<br>`);
    //  document.write(`${num} x ${++series} = ${num*series}<br>`);
    //  document.write(`${num} x ${++series} = ${num*series}<br>`);
    //  document.write(`${num} x ${++series} = ${num*series}<br>`);
    //  document.write(`${num} x ${++series} = ${num*series}<br>`);
    //  document.write(`${num} x ${++series} = ${num*series}<br>`);
    //  document.write(`${num} x ${++series} = ${num*series}<br>`);
    //  document.write(`${num} x ${++series} = ${num*series}<br>`);

    //  6
    var sub1 = prompt("Enter  1st Subject name:");
    var sub2 = prompt("Enter  2nd Subject name:");
    var sub3 = prompt("Enter  3rd Subject name:");

    const mathMarks = +prompt("Enter Math marks:" );
    const sciMarks = +prompt("Enter Science marks:" );
    const engMarks = +prompt("Enter English marks:" );

    var total = 100*3;
    var obMarks = mathMarks + sciMarks + engMarks;
    var perMath = (mathMarks*100)/100;
    var perSci = (sciMarks*100)/100;
    var perEng = (engMarks*100)/100;

    var percent = (obMarks*100)/total;

    document.write(` <table><tr>  <th> <h4>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></h4></tr>
      <tr><td>${sub1}  </td><td>100 </td><td> ${mathMarks}   </td><td> ${perMath}%</td></tr><br>
      <tr><td> ${sub2} </td><td> 100   </td><td>  ${sciMarks}   </td><td> ${perSci}%</td></tr><br>
      <tr><td>${sub3} </td><td> 100   </td><td>  ${engMarks}   </td><td> ${perEng}%</td></tr><br>
      <tr><td colspan="2"><h5>${total}</td><td>${obMarks}</td><td> ${percent}% </h5></td></tr></table>`);


    

    
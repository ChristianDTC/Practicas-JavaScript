let a = 3, b = 2;

// SUMA +
let z = a + b;
console.log("Resultado de la suma: " + z );

// RESTA -
z = a - b;
console.log("Resultado de la resta: " + z);

// MULTIPLICACION *
z = a * b;
console.log( "Resultado de la multiplicación: " + z);

//DIVISION /
z = a / b;
console.log( "Resultado de la división: " + z);

//MODULO %
z = a % b;//residuo de la división
console.log( "Resultado del modulo (resto): " + z);

// POTENCIA **
z = a ** b;
console.log( "Resultado de la potencia: " + z);

// INCREMENTO
z ++;
z += 1;
z = z + 1;
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;//primero se imcrementa y después se asigna
console.log(a);
console.log(z);
//Post-incremento (el operador ++ despues de la variable)
z = b++;//primero se asigna y después se imcrementa
console.log(b);
console.log(z);

// DECREMENTO
z --;
z -= 1;
z = z - 1;
//Pre-incremento
z = --a;//primero se decrementa y después se asigna
console.log(a);
console.log(z);
//Post-incremento
z = b--;//primero se asigna y después se decrementa
console.log(b);
console.log(z);
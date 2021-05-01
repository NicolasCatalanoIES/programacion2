console.log(" -------- Excepciones --------");

function dividir(a, b) {
    
    if (b == 0) {
        throw new Error("No se puede dividir por 0");
    }
    
    return a / b;
}


console.log(dividir(3, 1));

// const val = dividir(2, 0);
// console.log(val);

try {
    const val = dividir(2, 0);
    console.log(val);
    
} catch (error) {
    console.log("El error fue el sigueiente")
    console.log(error.message);
}


console.log("\n\n++ Finalizamos la aplicación ++")

try {
    let arr = [1,2];
    console.log(arr[4]);
} catch (error) {
    console.log("El error");
}

console.log("\n\n++ Finalizamos la aplicación ++")

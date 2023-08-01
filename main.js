function adivinanza(){

    const nombre = prompt("ingrese un numero al azar entre 1 y 15")
    const numero = Math.random()*15 + 1
    const numeroEntero = Math.ceil(numero)
    
    if(nombre === numeroEntero){
        alert("ADIVIMASTE J3j3")
    }
    else{
        alert("Casi")
    }
    console.log(numeroEntero)

}


adivinanza()  

const bebidas = function(marca,precio,stock){
    this.marca = marca,
    this.precio = precio,
    this.stock = stock 
}
 
    


let bebida1 = new bebidas("Ballantines",6.700,3)
let bebida2 = new bebidas("Johhny Walker Red Label",7.300,6)
let bebida3 = new bebidas("Jack Daniels Honey",11.400,3)

const Productos = [bebida1,bebida2,bebida3]

console.table(Productos)

function buscar(){
    const selec = prompt("Que producto estas buscando?")
    const resultado = Productos.filter((bebid) => bebid.marca.includes(selec))

    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no encontrado")
    }
} 
buscar()

function agregar(){
   const marca = prompt("ingresa el nombre del producto").trim()
   const precio = parseFloat(prompt("ingresa el precio del producto"))
   const stock = parseInt(prompt("ingrese la cantidad"))

   const Product = new bebidas(marca,precio,stock)
   
   if(isNaN(precio) || isNaN(stock) || marca===""){
        alert("No encontrado, por favor ingrese los datos")
   }else{
        
        console.table(Productos.push(Product))

   }
}
agregar()  

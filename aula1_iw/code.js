//se .... if
function se(n){
    if(n <= 10){
        console.log("Vocês é criança")
    }  else if(n > 11 && n < 18){
        console.log ("Você é adolecente")
    } else if (n === 65){
        console.log("Você se aposentou")
    } else if(n == 70 || n == 90)
        console.log("Você é idoso")
    else {
        console.log("Você não atende nenhuma das condições")
    }
}
//se(9)


// --------------------------------------------------------------------------------------------- //


//para .... for
function para(n){
    for(let i=0;i<n;i++){
        if(i == 10){
            console.log("Vocês é criança")
            break
        } else {
            console.log("Você não atende nenhuma das condições")
        }
    }
}
//para(14)


// ------------------------------------------------------------------------------------------- //


//enquanto ... while
function enquanto(n){
    let i=0
    while (i<n){
        i++
        if(i == 10){
            console.log("Vocês é criança")
            break
        } else {
            console.log("Você não atende nenhuma das condições")
        }
    }    
}
//enquanto(11)


// ----------------------------------------------------------------------------------------- //


//faça_enquanto ... do while
function facaenq(){
    let i=0
    do{
        i++
        if(i == 10){
            console.log("Vocês é criança")
            break
        } else {
            console.log("Você não atende nenhuma das condições")
        }
    }while(n==10)
}
//facaenq(10)


// --------------------------------------------------------------------------------------- //


//repetição swhitch case
function caso(n){
    switch(n){
        case 1: console.log("Você escolheu 1")
        break
        case 2: console.log("Você escolheu 2")
        break
        default: console.log("não atende nenhuma das condições")
    }
}
caso(4)
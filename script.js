
let pontos = Number(prompt("Quantos pontos?"));
let anosDeCliente = Number(prompt("Quantos anos de cliente"))
let resultado = "";

if (pontos >= 99) {
    resultado = "Bronze"
}   else if ( pontos < 599){
    resultado = "Prata"
}else if( pontos < 899) {
    resultado = "Ouro"
} else if (anosDeCliente >= 1) {
    resultado ="Diamente"
}  

alert(`A sua classificação é ${resultado}`)





    // for --> para ( quando voce sabe as vezes que contador é )

    for (let contador = 0; contador <= 10; contador++) {
        console.log("gi"+ contador)
    }

    //while --> enquanto (quando voce nao sabe o valor de contador)

     let contagem =0
     while (contagem < 30 ){
         console.log("gi")
         contagem++
     }


    // for atv1
     for (let a = 1; a <= 25; a++) {
        console.log("abc"+ a)
     }


     // contagem regresiva
    for (let i=3;i<=10; i--){
        console.log(i);
    }


    //tabuada 

    const x=1
    for (let c= 0; c<=10;c++){
    console.log(`1 x ${c} = ${x*c}`)
    }

    //verificacao 

    for (let s=0; s<=8;s++){
        if (s % 2 !==0) continue;
        console.log(s);
    }
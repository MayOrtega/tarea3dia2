var num1, num2, num3, num4, examen, promedioNotas, porcentajeExamen;
var aprobar = "😎";
var reprobar = "😌";

function promediarNotas(){
   
    //Capturando los valores desde el formulario
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    num3 = document.getElementById("n3").value;
    num4 = document.getElementById("n4").value;
    examen = document.getElementById("examen").value;

    promedioNotas = (((parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4))/4)*0.6);
    porcentajeExamen = (parseInt(examen)*0.4);
   

    if((num1 < 1 || num1 > 7) || (num2 < 1 || num2 > 7) || (num3 < 1 || num3 > 7)  || (num1 < 1 || num1 > 7) || (examen < 1 || examen > 7)){
        alert('Ingrese sólo notas entre 10 y 70')
    }
    else{
        sumaFinal = promedioNotas + porcentajeExamen;
   
    }
    if(sumaFinal < 4){
        document.getElementById("resultado").innerHTML = "Reprobaste con un " + sumaFinal + " " +reprobar;
       }
       else{
        document.getElementById("resultado").innerHTML = "Aprobaste con un " + sumaFinal + " " +aprobar;
       }




}


class Calculadora{
 operacion;
 primernumero;
 textocalculadora;
 texto_num;
 resultado;
 punto;
constructor(){
this.textocalculadora='0';
this.primernumero='0';
this.texto_num='0';
this.resultado='0';
this.punto=false;
this.operacion=undefined;
operaciontexto.innerText=this.textocalculadora;
}
limpiar(){
this.textocalculadora='0';
this.primernumero='0';
this.texto_num='0';
this.resultado='0';
this.punto=false;
this.operacion=undefined;
operaciontexto.innerText=this.textocalculadora;
}

actualizarTextoCalculadora(texto){
  if(this.textocalculadora=='0'&& texto!='+'&& texto!='-'&& texto!='*'&& texto!='÷'){
    if(texto!='.'){
this.textocalculadora=texto;
this.texto_num=texto;
operaciontexto.innerText=this.textocalculadora;
     }
  else{
    this.punto=true;
this.textocalculadora=this.textocalculadora+texto;
this.texto_num=this.texto_num+texto;
operaciontexto.innerText=this.textocalculadora;
  }
  }
  else{
    if(texto=='.'){this.punto=true;}
this.textocalculadora=this.textocalculadora+texto;
this.texto_num=this.texto_num+texto;
operaciontexto.innerText=this.textocalculadora;

}
}

guardarNumero(){

  this.primernumero=this.texto_num;

}

calcularOperacion(){
switch(this.operacion){
case '+':
 this.resultado=parseFloat(this.primernumero)+parseFloat(this.texto_num)
this.primernumero=this.resultado.toString();
break
case'-':this.resultado=parseFloat(this.primernumero)-parseFloat(this.texto_num)
this.primernumero=this.resultado.toString();
break
case'÷':
console.log(this.primernumero)
console.log(this.texto_num)
this.resultado=parseFloat(this.primernumero)/parseFloat(this.texto_num)
console.log(this.resultado)
this.primernumero=this.resultado.toString();
break
case'*':console.log(this.primernumero)
console.log(parseFloat(this.texto_num))
this.resultado=parseFloat(this.primernumero)*parseFloat(this.texto_num)
console.log(this.resultado)
this.primernumero=this.resultado.toString();
break
default:
break

}

this.texto_num='0';
this.textocalculadora=this.primernumero;
operaciontexto.innerText=this.textocalculadora;

}

}
const botonesnumeros= document.querySelectorAll('[data-number]');
const botonesoperaciones = document.querySelectorAll('[data-operation]');
const botonigual = document.querySelector('[data-equals]');
const botonborrar = document.querySelector('[data-delete]');
const botonlimpiar = document.querySelector('[data-all-clear]');
const operaciontexto=  document.querySelector('[data-current-operand]');
const calculadora= new Calculadora();

botonesnumeros.forEach(button => {
  button.addEventListener('click', () => {
    if(calculadora.punto==false || button.innerText!='.'){
    calculadora.actualizarTextoCalculadora(button.innerText)
    }
  })
})

botonlimpiar.addEventListener('click',()=>{
	calculadora.limpiar();
})

botonesoperaciones.forEach(button => {
  button.addEventListener('click', () => {

    if(calculadora.operacion==undefined){
      calculadora.guardarNumero();
      console.log(calculadora.primernumero);
      calculadora.actualizarTextoCalculadora(button.innerText);
      calculadora.texto_num='0';
      calculadora.operacion=button.innerText;

    }
   else{

    calculadora.calcularOperacion()
    calculadora.actualizarTextoCalculadora(button.innerText);
    calculadora.texto_num='0';
    calculadora.operacion=button.innerText;

   }
   calculadora.punto=false;

  })

})

botonigual.addEventListener('click',()=>{
calculadora.calcularOperacion();
operaciontexto.innerText=calculadora.resultado.toString();
calculadora.operacion=undefined;
calculadora.texto_num=calculadora.primernumero;
})
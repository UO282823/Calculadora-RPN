class CalculadoraRPN{

    constructor(){
        this.pila= new Array();
        this.pantalla="";
    }

    digitos(x){
        this.pantalla+=x.toString();
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }

    enter(){
        var value= Number(this.pantalla);
        if(value.toString()!="NaN"){
            this.pila.push(value);
            this.muestraPila();
        }
        this.pantalla="";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }

   

    muestraPila(){
        let str="";
        for(var i = this.pila.length-1; i>=0;i--){
            str+=(this.pila.length-i)+":\t\t"+this.pila[i]+"\n";
        }

        document.querySelector('textarea[name=\"pila\"]').value = str;
    }

    punto(){
        this.pantalla+=".";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    } 

    mas(){
        if(this.pila.length<2){
            return;
        }
        var op1 = this.pila.pop();
        var op2 = this.pila.pop();
        var result = Number(op2)+Number(op1);
        this.pila.push(result);
        this.muestraPila();
    }

    menos(){
        if(this.pila.length<2){
            return;
        }
        var op1 = this.pila.pop();
        var op2 = this.pila.pop();
        var result = Number(op2)-Number(op1);
        this.pila.push(result);
        this.muestraPila();
    }

    producto(){
        if(this.pila.length<2){
            return;
        }
        var op1 = this.pila.pop();
        var op2 = this.pila.pop();
        var result = Number(op2)*Number(op1);
        this.pila.push(result);
        this.muestraPila();
    }

    division(){
        if(this.pila.length<2){
            return;
        }
        var op1 = this.pila.pop();
        var op2 = this.pila.pop();
        var result = Number(op2)/Number(op1);
        this.pila.push(result);
        this.muestraPila();
    }

    raiz(){
        if(this.pila.length<1){
            return;
        }
        var op = this.pila.pop();
        var result = Math.sqrt(Number(op));
        if(result.toString()=="NaN"){
            return;
        }
        this.pila.push(result);
        this.muestraPila();
        
    }

    borrarUltimoPila(){
        if(this.pila.length<1){
            return;
        }
        this.pila.pop();
        this.muestraPila();
    }

    borrarDigito(){
        if(this.pantalla.toString().length>0){
            this.pantalla=this.pantalla.toString().substring(0,this.pantalla.toString().length-1);
            document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
        }
    }

    borrarPila(){
        while(this.pila.length > 0){
            this.pila.pop();
        }
        this.muestraPila();
    }

    borrarPantalla(){
        this.pantalla="";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    masMenos(){
        if(this.pila.length<1){
            return;
        }
        this.pila[this.pila.length-1]=Number(this.pila[this.pila.length-1])*(-1);
        this.muestraPila();
    }

    sin(){
        if(this.pila.length<1){
            return;
        }
        var op = this.pila.pop();
        var result= Math.sin(Number(op)*(Math.PI/180));
        if(result.toString()=="NaN"){
            return;
        }
        this.pila.push(result);
        this.muestraPila();
    }

    cos(){
        if(this.pila.length<1){
            return;
        }
        var op = this.pila.pop();
        var result= Math.cos(Number(op)*(Math.PI/180));
        if(result.toString()=="NaN"){
            return;
        }
        this.pila.push(result);
        this.muestraPila();
    }

    tan(){
        if(this.pila.length<1){
            return;
        }
        var op = this.pila.pop();
        var result= Math.tan(Number(op)*(Math.PI/180));
        if(result.toString()=="NaN"){
            return;
        }
        this.pila.push(result);
        this.muestraPila();
    }

    asin(){
        if(this.pila.length<1){
            return;
        }
        var op = this.pila.pop();
        var result= (180/Math.PI)*Math.asin(Number(op));
        if(result.toString()=="NaN"){
            return;
        }
        this.pila.push(result);
        this.muestraPila();
    }

    acos(){
        if(this.pila.length<1){
            return;
        }
        var op = this.pila.pop();
        var result= (180/Math.PI)*Math.acos(Number(op));
        if(result.toString()=="NaN"){
            return;
        }
        this.pila.push(result);
        this.muestraPila();
    }

    atan(){
        if(this.pila.length<1){
            return;
        }
        var op = this.pila.pop();
        var result= (180/Math.PI)*Math.atan(Number(op));
        if(result.toString()=="NaN"){
            return;
        }
        this.pila.push(result);
        this.muestraPila();
    }

    pulsaTecla(tecla){
        switch(tecla){
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':  
            case '7':
            case '8':
            case '9':   
            case '0':
                this.digitos(tecla);
                break;
            case 's':
                this.sin();
                break;
            case 'c':
                this.cos();
                break;
            case 't':
                this.tan();
                break;
            case 'S':
                this.asin();
                break;
            case 'C':
                this.acos();
                break;
            case 'T':
                this.atan();
                break;
            case 'c':
                this.borrarPantalla();
                break;
            case 'C':
                this.borrarPila();
                break;
            case 'r':
                this.borrarDigito();
                break;
            case 'R':
                this.borrarUltimoPila();
                break;
            case 'e':
                this.enter();
                break;
            case '.':
                this.punto();
                break;
            case 'm':
                this.masMenos();
                break;
            case '/':
                this.division();
                break;
            case '*':
                this.producto();
                break;
            case '-':
                this.menos();
                break;
            case '+':
                this.mas();
                break;

            }

    }
}

calculadoraRPN = new CalculadoraRPN();

document.addEventListener('keydown',(event)=>calculadoraRPN.pulsaTecla(event.key));

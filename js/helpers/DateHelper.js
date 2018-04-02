class DateHelper {
    
    constructor() {
        
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static dataParaTexto(data) {

        return `${data.getFullYear()}-${this.formataData(data.getMonth()+1)}-${this.formataData(data.getDate())} ${this.formataData(data.getHours())}:${this.formataData(
            data.getMinutes())}:${this.formataData(data.getSeconds())}`;
    }

   static formataData(data){
        if(data.toString().length==1) return "0"+data;
        
        return data;
    }
    
    
}
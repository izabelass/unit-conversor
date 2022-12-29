
import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export class selectionValidators {

    //cross field validator criado para verificar se os valores dos dois selects são iguais, 
    //caso forem, será mostrado uma mensagem de erro, caso sejam diferentes retorna null.
    //esse metodo control.get utiliza como parametro o nome do FormControl que deseja pegar o valor
    //para facilitar, eu criei esse metodo checkEqualValidator com esses dois parametros
    //o valueFrom deve receber o FormControl da esquerda como string, ex: 'convertTempFrom'
    //o valueTo deve receber o FormControl da direita como string, ex: 'convertTempTo'

    static checkEqualValidator(valueFrom: string, valueTo: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
      
            const convertFrom = control.get(valueFrom);
            const convertTo = control.get(valueTo);
       
            return convertFrom && convertTo && convertFrom.value === convertTo.value ? { checkEqual: true } : null;
       
        }
      }
}
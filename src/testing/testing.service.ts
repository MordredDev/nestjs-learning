import { Injectable } from '@nestjs/common';
import { BaseSource } from 'shared/base-source';

export interface IData {
    id: string;
    nombres: string;
    apellidos: string;
}

@Injectable()
export class TestingService extends BaseSource {
    sumNumbers(numberOne: number, numberTwo: number) {
        const result = numberOne + numberTwo;

        return `el resultado es ${result}`;
    }

    calculoEdad(edad: number) {
        if (edad > 0 && edad < 12) return 'sos un palomo';
        else if (edad >= 12 && edad < 18) return 'sos un lince';
        else if (edad >= 18 && edad < 45) return 'sos un viejoven';
        else if (edad >= 45 && edad < 80) return 'estas muerto';
        else return 'sos tarado?';
    }

    async dataFromDb() {
        const result: IData[] = await this.cnn.query('SELECT * FROM TESTING');

        result[0].nombres = 'ninguno';

        return result;
    }
}

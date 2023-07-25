import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseSource } from 'shared/base-source';
import { CreateUsuarioPayload, USUARIOS } from './bd';

@Injectable()
export class TestingOneService extends BaseSource {
  updateUsuario(id: number, payload: CreateUsuarioPayload) {
    try {
      const valToUpdate = USUARIOS.filter((usuario) => usuario.id === id)[0];

      valToUpdate.nombres = payload.nombres;
      valToUpdate.apellidos = payload.apellidos;
      valToUpdate.edad = payload.edad;

      return valToUpdate;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}

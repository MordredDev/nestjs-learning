export let USUARIOS: CreateUsuarioPayload[] = [];

export const updateUsuarios = (usuarios: CreateUsuarioPayload[]) => {
  USUARIOS = [];
  USUARIOS.push(...usuarios);
};

export interface CreateUsuarioPayload {
  id?: number;
  nombres: string;
  apellidos: string;
  edad: number;
}

export enum Authorities {
  ADMIN = '0102',
  AUXILIAR = '4005',
}

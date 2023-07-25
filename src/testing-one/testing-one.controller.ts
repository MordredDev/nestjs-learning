import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { TestingOneService } from './testing-one.service';
import { CreateUsuarioPayload, USUARIOS, updateUsuarios } from './bd';

@Controller('testing-one')
export class TestingOneController {
  constructor(private readonly testingService: TestingOneService) {}

  @Get()
  getUsuarios() {
    return USUARIOS;
  }

  @Post()
  createUsuario(@Body() payload: CreateUsuarioPayload) {
    payload.id = USUARIOS.length + 1;
    USUARIOS.unshift(payload);
    return payload;
  }

  @Put(':id')
  updateUsuario(@Param('id') id: number, @Body() payload: CreateUsuarioPayload) {
    return this.testingService.updateUsuario(id, payload);
  }

  @Delete(':id')
  deleteUsuario(@Param('id') id: number) {
    const usuariosFiltered = USUARIOS.filter((usuario) => usuario.id !== id);

    updateUsuarios(usuariosFiltered);

    return true;
  }
}

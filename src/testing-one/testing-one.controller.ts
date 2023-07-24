import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TestingOneService } from './testing-one.service';

@Controller('testing-one')
export class TestingOneController {
  constructor(private readonly testingService: TestingOneService) { }

  @Get()
  getUsuarios() {
    return USUARIOS;
  }

  @Post()
  createUsuario() {
    return 'hello world';
  }

  @Put()
  updateUsuario() {
    return 'hello world';
  }

  @Delete()
  deleteUsuario() {
    return 'hello world';
  }
}

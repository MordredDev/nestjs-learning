import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TestingService } from './testing.service';


interface IPayload {
  numberOne: number;
  numberTwo: number;
}

@Controller('testing')
export class TestingController {
  constructor(private readonly testingService: TestingService) { }


  @Get('calculo-edad/:edad')
  getHello(@Param('edad') edad: number): string {
    return this.testingService.calculoEdad(+edad);
  }

  @Get('mayday/:numberOne/:numberTwo')
  getMayDay(@Param('numberOne') numberOne: number, @Param('numberTwo') numberTwo: number): string {
    return this.testingService.sumNumbers(+numberOne, +numberTwo); }

  @Get('mayday')
  getMayDay2(
    @Query('numberOne') numberOne: number,
    @Query('numberTwo') numberTwo: number,
  ): string {
    return this.testingService.sumNumbers(+numberOne, +numberTwo);
  }

  @Post('mayday')
  getMayDay3(@Body() payload: IPayload): string {
    const { numberOne, numberTwo } = payload;

    return this.testingService.sumNumbers(numberOne, numberTwo);
  }

  @Get()
  getDataFromDb() {
    return this.testingService.dataFromDb();
  }

  @Get('random')
  getRandomArbitrary(
    @Query('min') minNumber: number,
    @Query('max') maxNumber: number,
  ) {
    const random = Math.random() * (maxNumber - minNumber) + minNumber;
    return Math.round(random);
  }
}

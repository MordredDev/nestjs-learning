import { Module } from '@nestjs/common';
import { TestingOneService } from './testing-one.service';
import { TestingOneController } from './testing-one.controller';

@Module({
  controllers: [TestingOneController],
  providers: [TestingOneService],
})
export class TestingOneModule { }

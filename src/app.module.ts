import { Module, OnModuleInit } from '@nestjs/common';
import { initializeSources } from './app.connections';
import { TestingModule } from './testing/testing.module';
import { TestingOneModule } from './testing-one/testing-one.module';

@Module({
  imports: [TestingModule, TestingOneModule],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    initializeSources();
  }
}

import { DataSource, QueryRunner } from 'typeorm';
import {  Injectable } from '@nestjs/common';
import { switchConn } from 'src/app.connections';

@Injectable()
export class BaseSource {
  protected qr: QueryRunner;
  protected cnn: DataSource;

  constructor() {
    this.cnn = switchConn();
    this.qr = this.cnn.createQueryRunner();
  }

}
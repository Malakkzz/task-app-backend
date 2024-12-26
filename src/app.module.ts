import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './api/task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

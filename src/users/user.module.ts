import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
  ],
})
export class UserModule {}
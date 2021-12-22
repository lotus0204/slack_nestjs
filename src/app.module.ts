import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DmsModule } from './dms/dms.module';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, DmsModule, ChannelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

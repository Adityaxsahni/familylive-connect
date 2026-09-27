import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FamilyModule } from './family/family.module';
import { LocationModule } from './location/location.module';
import { MessageModule } from './messages/messages.module';
import { SosModule } from './sos/sos.module';

@Module({
  imports: [AuthModule, FamilyModule, LocationModule, MessageModule, SosModule],
})
export class AppModule {}

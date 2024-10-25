import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [UserModule, AuthModule, NoteModule],
  providers: [AppService],
})
export class AppModule {}

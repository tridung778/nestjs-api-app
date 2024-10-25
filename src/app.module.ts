import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { NoteModule } from './note/note.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, AuthModule, NoteModule, PrismaModule],
  providers: [AppService],
})
export class AppModule {}

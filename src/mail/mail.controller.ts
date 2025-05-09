import { Controller, Post, Get, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async send(@Body() body: { to: string; subject: string; message: string }) {
    await this.mailService.sendEmail(body.to, body.subject, body.message);
    return { success: true, message: 'Correo enviado correctamente' };
  }

  @Get('register')
  async register(@Body() body: { mail: string }) {
    await this.mailService.registerEmail(body.mail);
    return { success: true, message: 'Correo registrado correctamente' };
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async send(@Body() body: { to: string; subject: string; message: string }) {
    await this.mailService.sendEmail(body.to, body.subject, body.message);
    return { success: true, message: 'Correo enviado correctamente' };
  }
}

import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly prismaService: PrismaService,
  ) {}

  async sendEmail(to: string, subject: string, body: string) {
    return this.mailerService.sendMail({
      to,
      subject,
      text: body,
    });
  }

  async registerEmail(email: string) {
    return await this.prismaService.mails.create({
      data: {
        email: email,
      },
    });
  }
}

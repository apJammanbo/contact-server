import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import { Contact } from '.prisma/client';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

  async get(id: number): Promise<Contact> {
    return this.prisma.contact.findUnique({ where: { id } });
  }

  async create(contactInput: Prisma.ContactCreateInput): Promise<Contact> {
    return await this.prisma.contact.create({
      data: contactInput,
    });
  }

  async delete(id: number): Promise<Contact> {
    return await this.prisma.contact.delete({ where: { id } });
  }

  async update(
    id: number,
    contactInput: Prisma.ContactUpdateInput,
  ): Promise<Contact> {
    return await this.prisma.contact.update({
      where: { id },
      data: contactInput,
    });
  }
}

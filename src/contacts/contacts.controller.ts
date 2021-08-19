import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Prisma } from '@prisma/client';
import { Contact } from '.prisma/client';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  async getAll(): Promise<Contact[]> {
    return this.contactsService.getAll();
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Contact> {
    return this.contactsService.get(Number(id));
  }

  @Post()
  create(@Body() contactInput: Prisma.ContactCreateInput): Promise<Contact> {
    return this.contactsService.create(contactInput);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() contactInput: Prisma.ContactUpdateInput,
  ) {
    return this.contactsService.update(Number(id), contactInput);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    console.log(id);
    return this.contactsService.delete(Number(id));
  }
}

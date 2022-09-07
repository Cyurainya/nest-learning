import { Controller, Get, Post, Body, UseFilters, Bind } from '@nestjs/common';
import { HttpExceptionFilter } from '../../exception/httpException';
import { ForbiddenException } from '../../exception/forbiddenException';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from '../service/cats.service';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Bind(Body())
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    throw new ForbiddenException();
  }
}

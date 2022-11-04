import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { BookmarkService } from './bookmark.service';
import {
  CreateBookmarkDto,
  EditBookmarkDto,
} from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(
    private bookmarkService: BookmarkService,
  ) {}
  @Get()
  getBookmarks(@GetUser('id') userId) {
    return this.bookmarkService.getBookmarks(
      userId.id,
    );
  }

  @Get(':id')
  getBookmarkById(
    @GetUser('id') userId,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarkService.getBookmarkById(
      userId.id,
      bookmarkId,
    );
  }

  @Post()
  createBookmark(
    @GetUser('id') userId,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.bookmarkService.createBookmark(
      userId.id,
      dto,
    );
  }

  @Patch(':id')
  editBookmarkById(
    @GetUser('id') userId,
    @Param('id', ParseIntPipe) bookmarkId: number,
    @Body() dto: EditBookmarkDto,
  ) {
    return this.bookmarkService.editBookmarkById(
      userId.id,
      bookmarkId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteBookmarkById(
    @GetUser('id') userId,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarkService.deleteBookmarkById(
      userId.id,
      bookmarkId,
    );
  }
}

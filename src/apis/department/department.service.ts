import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentService {
  test(): string {
    return 'DocumentService';
  }
}

import { Injectable } from '@nestjs/common';
import { getDescription } from './helpers';

@Injectable()
export class AppService {
  getHtml():string
  {
    return getDescription();
  }
}

import { Injectable } from '@angular/core';
import { TranslateCompiler } from '@ngx-translate/core';

/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
@Injectable()
export class TranslateMessageFormatCompiler extends TranslateCompiler {
  private messageFormat: MessageFormat;

  constructor(messageFormat: any) {
    super();
    this.messageFormat = messageFormat as MessageFormat;
  }

  public compile(value: string, lang: string): string | Function {
    return this.messageFormat.compile(value, lang);
  }

  public compileTranslations(translations: any, lang: string): any {
    return this.messageFormat.compile(translations, lang);
  }
}

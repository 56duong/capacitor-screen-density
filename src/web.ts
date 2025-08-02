import { WebPlugin } from '@capacitor/core';

import type { ScreenDensityPlugin } from './definitions';

export class ScreenDensityWeb extends WebPlugin implements ScreenDensityPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

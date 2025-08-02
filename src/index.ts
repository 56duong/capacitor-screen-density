import { registerPlugin } from '@capacitor/core';

import type { ScreenDensityPlugin } from './definitions';

const ScreenDensity = registerPlugin<ScreenDensityPlugin>('ScreenDensity', {
  web: () => import('./web').then((m) => new m.ScreenDensityWeb()),
});

export * from './definitions';
export { ScreenDensity };

import { registerPlugin } from '@capacitor/core';
import type { ScreenDensityPlugin } from './definitions';

const ScreenDensity = registerPlugin<ScreenDensityPlugin>('ScreenDensity');

export * from './definitions';
export { ScreenDensity };
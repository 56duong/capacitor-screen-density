export interface ScreenDensityPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

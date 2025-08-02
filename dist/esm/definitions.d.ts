export interface ScreenDensityPlugin {
    getDensity(): Promise<{
        density: number;
    }>;
}

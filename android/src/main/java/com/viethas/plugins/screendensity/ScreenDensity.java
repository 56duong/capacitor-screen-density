package com.viethas.screendensity;

import android.content.Context;
import android.util.DisplayMetrics;

public class ScreenDensity {

    public static float getScreenDensity(Context context) {
        DisplayMetrics metrics = context.getResources().getDisplayMetrics();
        return metrics.density;
    }
}
package com.viethas.screendensity;

import android.util.DisplayMetrics;
import android.content.Context;

import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.JSObject;

@CapacitorPlugin(name = "ScreenDensity")
public class ScreenDensityPlugin extends Plugin {

    @PluginMethod
    public void getDensity(PluginCall call) {
        Context context = getContext();
        DisplayMetrics metrics = context.getResources().getDisplayMetrics();
        float density = metrics.density;

        call.resolve(new JSObject().put("density", density));
    }
}
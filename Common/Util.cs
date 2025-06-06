using System;

namespace MU3.Mod;

public class Util {
    private static bool? _isRefresh;
    private static bool? _hasEnPatch;
    public static bool IsRefresh() {
        _isRefresh ??= Type.GetType("MU3.User.UserNewRating") != null;
        return (bool)_isRefresh;
    }

    public static bool HasEnPatch() {
        _hasEnPatch ??= Type.GetType("TranslationEntry") != null;
        return (bool)_hasEnPatch;
    }

    public static string IniPath {
        get {
            return Environment.GetEnvironmentVariable("MU3_MODS_CONFIG_PATH") ?? "mu3.ini";
        }
    }
}
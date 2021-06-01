package de.abiegel.ffops.system.entity;

public class System {
    String version;
    
    String appName;

    public System() {
    }

    public System(String version, String appName) {
        this.appName = appName;
        this.version = version;
    }

    public static System of(String version, String appName) {
        return new System(version, appName);
    } 

    public String getVersion() {
        return this.version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getAppName() {
        return this.appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }
}

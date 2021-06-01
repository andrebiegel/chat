package de.abiegel.ffops.system.entity;


public class SystemInfo {
    
    String version;
    
    String appName;

    public SystemInfo() {
    }

    public SystemInfo(String version, String appName) {
        this.appName = appName;
        this.version = version;
    }

    public static SystemInfo of(String version, String appName) {
        System.out.println(version + appName);
        return new SystemInfo(version, appName);
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

package com.example.dreamsleeve.dataClasses;

public class Activity {
    private int sessID;
    private int realmID;
    private String isSuccessful;

    public Activity(int sessID, int realmID, String isSuccessful) {
        this.sessID = sessID;
        this.realmID = realmID;
        this.isSuccessful = isSuccessful;
    }

    public int getSessID() {
        return sessID;
    }

    public void setSessID(int sessID) {
        this.sessID = sessID;
    }

    public int getRealmID() {
        return realmID;
    }

    public void setRealmID(int realmID) {
        this.realmID = realmID;
    }

    public String getIsSuccessful() {
        return isSuccessful;
    }

    public void setIsSuccessful(String isSuccessful) {
        this.isSuccessful = isSuccessful;
    }
}

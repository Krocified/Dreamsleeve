package com.example.dreamsleeve.dataClasses;

public class Realm {
    private int realmID;
    private String realmName;

    public Realm(int realmID, String realmName) {
        this.realmID = realmID;
        this.realmName = realmName;
    }

    public int getRealmID() {
        return realmID;
    }

    public void setRealmID(int realmID) {
        this.realmID = realmID;
    }

    public String getRealmName() {
        return realmName;
    }

    public void setRealmName(String realmName) {
        this.realmName = realmName;
    }
}

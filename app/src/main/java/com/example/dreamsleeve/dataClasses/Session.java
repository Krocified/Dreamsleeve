package com.example.dreamsleeve.dataClasses;

public class Session {
    private int sessID;
    private String sessDateTime;

    public Session(int sessID, String sessDateTime) {
        this.sessID = sessID;
        this.sessDateTime = sessDateTime;
    }

    public int getSessID() {
        return sessID;
    }

    public void setSessID(int sessID) {
        this.sessID = sessID;
    }

    public String getSessDateTime() {
        return sessDateTime;
    }

    public void setSessDateTime(String sessDateTime) {
        this.sessDateTime = sessDateTime;
    }
}

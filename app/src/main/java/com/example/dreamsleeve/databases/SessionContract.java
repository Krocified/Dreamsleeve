package com.example.dreamsleeve.databases;

import android.provider.BaseColumns;

public final class SessionContract {
    private SessionContract(){}

    public static class SessionBase implements BaseColumns{
        public static final String TABLE_NAME="SessionBase";
        public static final String COLUMN_NAME_ID = "SessId";
        public static final String COLUMN_NAME_TIMESTAMP = "SessDateTime";
    }

    public static class ActivityBase implements BaseColumns{
        public static final String TABLE_NAME="ActivityBase";
        public static final String COLUMN_NAME_ID = "SessId";
        public static final String COLUMN_NAME_REALM_ID = "RealmId";
        public static final String COLUMN_NAME_IS_SUCCESSFUL = "isSuccessful";
    }

    public static class RealmBase implements BaseColumns{
        public static final String TABLE_NAME="RealmBase";
        public static final String COLUMN_NAME_REALM_ID = "RealmId";
        public static final String COLUMN_NAME_REALM_NAME = "RealmName";
    }
}

package com.example.dreamsleeve.databases;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class DreamsleeveDBHelper extends SQLiteOpenHelper {

    private static final String SQL_CREATE_SESSION_ENTRIES =
            "CREATE TABLE "+SessionContract.SessionBase.TABLE_NAME+" ( "+
                    SessionContract.SessionBase._ID+ " INTEGER PRIMARY KEY, "+
                    SessionContract.SessionBase.COLUMN_NAME_ID+" TEXT, "+
                    SessionContract.SessionBase.COLUMN_NAME_TIMESTAMP+" TEXT)";

    private static final String SQL_DELETE_SESSION_ENTRIES =
            "DROP TABLE IF EXISTS "+ SessionContract.SessionBase.TABLE_NAME;

    private static final String SQL_CREATE_ACTIVITY_ENTRIES =
            "CREATE TABLE "+SessionContract.ActivityBase.TABLE_NAME+" ("+
                    SessionContract.ActivityBase._ID+" INTEGER PRIMARY KEY,"+
                    SessionContract.ActivityBase.COLUMN_NAME_ID+" TEXT,"+
                    SessionContract.ActivityBase.COLUMN_NAME_REALM_ID+" TEXT,"+
                    SessionContract.ActivityBase.COLUMN_NAME_IS_SUCCESSFUL+" TEXT)";

    private static final String SQL_DELETE_ACTIVITY_ENTRIES =
            "DROP TABLE IF EXISTS "+ SessionContract.ActivityBase.TABLE_NAME;

    private static final String SQL_CREATE_REALM_ENTRIES =
            "CREATE TABLE "+SessionContract.RealmBase.TABLE_NAME+" ("+
                    SessionContract.RealmBase._ID+" INTEGER PRIMARY KEY, "+
                    SessionContract.RealmBase.COLUMN_NAME_REALM_ID+" TEXT,"+
                    SessionContract.RealmBase.COLUMN_NAME_REALM_NAME+" TEXT)";

    private static final String SQL_DELETE_REALM_ENTRIES =
            "DROP TABLE IF EXISTS "+ SessionContract.RealmBase.TABLE_NAME;

    public static final int DATABASE_VERSION = 1;
    public static final String DATABASE_NAME = "Dreamsleeve.db";

    public DreamsleeveDBHelper(@Nullable Context context, @Nullable String name, @Nullable SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL(SQL_CREATE_REALM_ENTRIES);
        db.execSQL(SQL_CREATE_ACTIVITY_ENTRIES);
        db.execSQL(SQL_CREATE_SESSION_ENTRIES);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL(SQL_DELETE_SESSION_ENTRIES);
        db.execSQL(SQL_DELETE_ACTIVITY_ENTRIES);
        db.execSQL(SQL_DELETE_REALM_ENTRIES);
        onCreate(db);
    }

}

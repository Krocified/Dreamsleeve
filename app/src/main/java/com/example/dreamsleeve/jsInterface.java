package com.example.dreamsleeve;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import android.webkit.JavascriptInterface;

import androidx.appcompat.app.AlertDialog;

import com.google.gson.Gson;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Deque;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class jsInterface {
    private static final String TAG = "Dreamsleeve";
    Deque<JSONObject> sessionData = new LinkedList<JSONObject>();
    private int idCount = 0;
    private Calendar mCalendar;
    private SimpleDateFormat mSimpleDateFormat;
    Context mContext;

    jsInterface(Context c){
        mContext=c;
    }

    //functions
    @JavascriptInterface
    public void testRun(){
        Log.d(TAG, "testRun: Dreamsleeve Interface is running.");
    }

    @JavascriptInterface
    public void buttonClick(String id){
        Log.d(TAG, "buttonClick: Dreamsleeve "+id+" button clicked.");
    }

    @JavascriptInterface
    public void display(String message){
        Log.d(TAG, "display: "+message);
    }

    @JavascriptInterface
    public void showAbout(){
        new AlertDialog.Builder(mContext)
                .setTitle("Dreamsleeve")
                .setMessage("This app is made for educational purposes. Contact Person: severin@dreamsleeve.com")
                .setPositiveButton("OK", null)
                .show();
        Log.d(TAG, "showAbout: ok.");
    }

    @JavascriptInterface
    public void showTourSlides(){
        Intent intent = new Intent(mContext, TourLayout.class);
        mContext.startActivity(intent);
    }

    @JavascriptInterface
    public void testSessionData(String sessionJSON) throws JSONException {
        JSONObject sess = new JSONObject(sessionJSON);
        sessionData.addFirst(sess);
        int id = sess.getInt("id");
        String dateTime = sess.getString("dateTime");
        JSONArray checkStatus = sess.getJSONArray("status");
        Log.d(TAG, "testSess: "+id);
        Log.d(TAG, "testSess: "+dateTime);

        for(int i = 0; i < checkStatus.length(); i++){
            JSONObject realmEntry = checkStatus.getJSONObject(i);
            int realmId = realmEntry.getInt("realmId");
            Log.d(TAG, "testSess: realmId: "+realmId);

            String realmStatus = realmEntry.getString("realmStatus");
            Log.d(TAG, "testSess: realmStatus: "+realmStatus);
        }
        Log.d(TAG, "testSess: =============================================");


    }

    @JavascriptInterface
    public String checkRealmSpecific(){
        String status = new LogicEngine().checkRealmStatus();
        return status;
    }

    @JavascriptInterface
    public String getSessionData(){
        Object[] sessionArray = sessionData.toArray();
        int length = sessionArray.length;
        if(length==0) return "[]";
        String[] sess = new String[length];
        for(int i=0;i<length;i++){
            sess[i] = sessionArray[i].toString();
        }

        String sessJson = Arrays.toString(sess);
        Log.d(TAG, "sessJson: "+sessJson);

        return sessJson;
    }

    @JavascriptInterface
    public int getIdCount(){
        return ++idCount;
    }

    @JavascriptInterface
    public String getDateTime() {
        mCalendar = Calendar.getInstance();
        mSimpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateTime = mSimpleDateFormat.format(mCalendar.getTime());
        return dateTime;
    }


}


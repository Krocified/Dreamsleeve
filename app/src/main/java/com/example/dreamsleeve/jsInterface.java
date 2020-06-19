package com.example.dreamsleeve;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import android.webkit.JavascriptInterface;

import androidx.appcompat.app.AlertDialog;

public class jsInterface {
    private static final String TAG = "Dreamsleeve";
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
}


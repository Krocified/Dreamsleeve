package com.example.dreamsleeve;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.text.Html;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.viewpager.widget.ViewPager;

public class TourLayout extends AppCompatActivity {

    private ViewPager slideViewPager;
    private LinearLayout mDotLayout;
    private SliderAdapter mSliderAdapter;
    private TextView[] dots;
    private Button nextButton;
    private Button backButton;
    private int currPage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.tour_layout);

        final SharedPreferences prefs = getSharedPreferences("prefs", MODE_PRIVATE);

        slideViewPager = findViewById(R.id.viewpager);
        mDotLayout = findViewById(R.id.dotlayout);

        nextButton = findViewById(R.id.nextBtn);
        backButton = findViewById(R.id.backBtn);

        mSliderAdapter = new SliderAdapter(this);
        slideViewPager.setAdapter(mSliderAdapter);

        addDotIndicator(0);
        slideViewPager.addOnPageChangeListener(viewListener);

        nextButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(currPage==dots.length-1){
                    SharedPreferences.Editor editor = prefs.edit();
                    editor.putBoolean("firstStart", false);
                    editor.apply();
                    startActivity(new Intent(TourLayout.this, MainActivity.class));
                    currPage=0;
                    finish();
                }
                slideViewPager.setCurrentItem(currPage+1);
            }
        });
        backButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                slideViewPager.setCurrentItem(currPage-1);
            }
        });

    }

    public void addDotIndicator(int position){
        dots = new TextView[3];
        mDotLayout.removeAllViews();
        for(int i=0;i<dots.length; i++){
            dots[i] = new TextView(this);
            dots[i].setText(Html.fromHtml("&#8226;"));
            dots[i].setTextSize(35);
            dots[i].setTextColor(getResources().getColor(R.color.grayish));

            mDotLayout.addView(dots[i]);
        }

        if(dots.length>0){
            dots[position].setTextColor(getResources().getColor(R.color.white));
        }
    }

    ViewPager.OnPageChangeListener viewListener = new ViewPager.OnPageChangeListener() {
        @Override
        public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

        }

        @Override
        public void onPageSelected(int position) {
            addDotIndicator(position);
            currPage = position;
            if(position==0){
                nextButton.setEnabled(true);
                backButton.setEnabled(false);
                backButton.setVisibility(View.INVISIBLE);
                nextButton.setText("Next");
                backButton.setText("");
            } else if(position==dots.length-1){
                nextButton.setEnabled(true);
                backButton.setEnabled(true);
                backButton.setVisibility(View.VISIBLE);
                nextButton.setText("Finish");
                backButton.setText("Back");
            } else {
                nextButton.setEnabled(true);
                backButton.setEnabled(true);
                backButton.setVisibility(View.VISIBLE);
                nextButton.setText("Next");
                backButton.setText("Back");
            }

        }

        @Override
        public void onPageScrollStateChanged(int state) {

        }
    };

}

package com.example.dreamsleeve;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewpager.widget.PagerAdapter;

public class SliderAdapter extends PagerAdapter {
    Context mContext;
    LayoutInflater mLayoutInflater;

    public SliderAdapter(Context context){
        this.mContext = context;
    }

    public int[] slide_images = {
            R.drawable.bowl,
            R.drawable.laptop,
            R.drawable.sleep
    };

    public String[] slide_head = {
            "EAT",
            "CODE",
            "SLEEP"
    };

    public String[] slide_desc = {
            "Eat 100 times a day, shit 100 times as well.",
            "The pressure will kill yourself",
            "Don't forget to take 100 pills before sleeping to ensure eternal slumber."
    };

    @Override
    public int getCount() {
        return slide_head.length;
    }

    @Override
    public boolean isViewFromObject(@NonNull View view, @NonNull Object object) {
        return view == (ConstraintLayout) object ;
    }

    @Override
    public Object instantiateItem(ViewGroup container, int position){
        mLayoutInflater = (LayoutInflater) mContext.getSystemService(mContext.LAYOUT_INFLATER_SERVICE);
        View view = mLayoutInflater.inflate(R.layout.slide_layout, container, false);

        ImageView slideImageView = (ImageView) view.findViewById(R.id.displayicon);
        TextView slideHeader = (TextView) view.findViewById(R.id.heading);
        TextView slideDesc = (TextView) view.findViewById(R.id.description);

        slideImageView.setImageResource(slide_images[position]);
        slideHeader.setText(slide_head[position]);
        slideDesc.setText(slide_desc[position]);

        container.addView(view);

        return view;
    }

    @Override
    public void destroyItem(ViewGroup container, int position, Object object){
        container.removeView((ConstraintLayout) object);
    }
}

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
            R.drawable.home,
            R.drawable.ar,
            R.drawable.sr,
            R.drawable.hst
    };

    public String[] slide_head = {
            "Main Menu",
            "All Realms",
            "Selective Realms",
            "History"
    };

    public String[] slide_desc = {
            "Go through everything, or just several of the options.",
            "Overall Progress, Results, and checks are visible on the screen. Click on any of the buttons to view the details of a particular check.",
            "Select any realms you want to traverse to. The details and check selector will always be available on the screen.",
            "List of previously run checks."
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

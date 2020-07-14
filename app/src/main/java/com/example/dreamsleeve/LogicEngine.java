package com.example.dreamsleeve;

import java.util.Random;

public class LogicEngine {

    Random mRandom = new Random();

    public String checkRealmStatus(){
        int chance = mRandom.nextInt(100)+1;
        return chance<90? "Successful":"Failed";
    }

}

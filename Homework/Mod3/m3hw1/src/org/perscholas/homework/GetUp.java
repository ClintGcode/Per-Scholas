package org.perscholas.homework;

public class GetUp {


    public static void getUp(boolean squawking, int currentHour) {
        /*
        * Write a method named getUp that has two parameters
        * int currentHour (represents the time of day)
        * boolean squawking (is parrot squawking)
        */
        if(currentHour < 0 || currentHour > 23 ) {
            throw new IllegalArgumentException("number must be between 0 and 23");
        }

        if(squawking) {
            if(currentHour < 6 || currentHour > 22){
                System.out.println("Squawkkkkkkkkk");
                System.out.println("Get up! the parrot is squawking");
            }
        }
    }

    public static void main(String[] args) {
        getUp(true,23);
    }


}

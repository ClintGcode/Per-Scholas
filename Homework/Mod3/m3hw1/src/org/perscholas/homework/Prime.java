package org.perscholas.homework;

/**
 * Print All Prime Nubers from 1 to 20
 *
 * What is a prime number?
 *
 * A prime number is a whole number greater than 1 whose only factors are
 * one and itself
 *
 * For example - 2, 3, 5, 7 ,11, 17, 19 (This is the expected output)
 *
 * These numbers are only divisible by one and itself
 */

public class Prime {

    public static void main(String[] args) {
        /**
         * Run a loop from 1 to 20
         * Start loop from 2 because prime numbers are greater than 1
         * 2 is the only even prime numbers
         *
         */

        int i = 2;
        while (i <= 20) {
            boolean isPrime = true;

            for (int j = 2; j < i; j++) {
                // is number (i) divisible by any number besides itself
                if(i%j == 0) {
                    isPrime = false;
                    break;
                }
            }

            if(isPrime) System.out.println(i);
            i++;
        }

    }
}

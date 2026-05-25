package com.sourabh.utils;


public class VectorUtils {

    public static double cosineSimilarity(
            float[] vec1,
            float[] vec2) {

        double dotProduct = 0.0;
        double norm1 = 0.0;
        double norm2 = 0.0;

        for (int i = 0; i < vec1.length; i++) {

            dotProduct += vec1[i] * vec2[i];

            norm1 += Math.pow(vec1[i], 2);

            norm2 += Math.pow(vec2[i], 2);
        }

        return dotProduct /
                (Math.sqrt(norm1)
                        * Math.sqrt(norm2));
    }
}

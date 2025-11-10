import {
  randomNumberBetween,
  getRandomDateAfter,
  getRandomDateBefore,
} from "@/src/lib/utils.js";
import { randomData } from "@/src/lib/randomData.js";

import { Timestamp } from "firebase/firestore";

export async function generateNeonShopsAndReviews() {
  const neonshopsToAdd = 5;
  const data = [];

  for (let i = 0; i < generateNeonShopsToAdd; i++) {
    const NeonShopsTimestamp = Timestamp.fromDate(getRandomDateBefore());

    const ratingsData = [];

    // Generate a random number of ratings/reviews for this restaurant
    for (let j = 0; j < randomNumberBetween(0, 5); j++) {
      const ratingTimestamp = Timestamp.fromDate(
        getRandomDateAfter(NeonShopsTimestamp.toDate())
      );

      const ratingData = {
        rating:
          randomData.NeonShopsReviews[
            randomNumberBetween(0, randomData.NeonShopsReviews.length - 1)
          ].rating,
        text: randomData.NeonShopsReviews[
          randomNumberBetween(0, randomData.NeonShopsReviews.length - 1)
        ].text,
        userId: `User #${randomNumberBetween()}`,
        timestamp: ratingTimestamp,
      };

      ratingsData.push(ratingData);
    }

    const avgRating = ratingsData.length
      ? ratingsData.reduce(
          (accumulator, currentValue) => accumulator + currentValue.rating,
          0
        ) / ratingsData.length
      : 0;

    const neonshopsData = {
      category:
        randomData.NeonShopsCategories[
          randomNumberBetween(0, randomData.NeonShopsCategories.length - 1)
        ],
      name: randomData.NeonShopsNames[
        randomNumberBetween(0, randomData.NeonShopsNames.length - 1)
      ],
      avgRating,
      city: randomData.NeonShopsCities[
        randomNumberBetween(0, randomData.NeonShopsCities.length - 1)
      ],
      numRatings: ratingsData.length,
      sumRating: ratingsData.reduce(
        (accumulator, currentValue) => accumulator + currentValue.rating,
        0
      ),
      price: randomNumberBetween(1, 4),
      photo: `https://drive.google.com/drive/folders/1DzJ-EbKUxjGw_7si2luMv1stE4PCYSwk?usp=drive_link${randomNumberBetween(
        1,
        22
      )}.png`,
      timestamp: NeonShopsTimestamp,
    };

    data.push({
      neonshopsData,
      ratingsData,
    });
  }
  return data;
}

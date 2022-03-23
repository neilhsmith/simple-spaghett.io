const validJsonLdTestCases = [
  {
    name: "Top level node",
    url: "https://food52.com/recipes/87369-best-cajun-chicken-and-rice-recipe",
    expected: {
      ingredients: [
        "1 tablespoon paprika",
        "2 teaspoons kosher salt",
        "1 teaspoon dried oregano",
        "1 teaspoon dried thyme",
        "1 teaspoon freshly ground black pepper",
        "1 teaspoon garlic powder",
        "1 teaspoon onion powder",
        "1/2 teaspoon cayenne pepper",
        "1/4 teaspoon crushed red pepper flakes",
        "2 teaspoons olive oil",
        "4  skin-on, boneless chicken thighs",
        "1  small onion, finely chopped",
        "1  small green bell pepper, seeded and finely chopped",
        "2  celery stalks, finely chopped",
        " Kosher salt and freshly ground pepper",
        "1 tablespoon unsalted butter",
        "2  garlic cloves, finely chopped",
        "1 3/4 cups low-sodium chicken broth",
        "1 cup long-grain white rice",
        " Parsley leaves and finely chopped scallions, for serving",
      ],
      instructionSections: [
        {
          name: "Cajun Seasoning",
          instructions: [
            {
              text: "In a small bowl, mix the paprika, salt, oregano, thyme, black pepper, garlic powder, onion powder, cayenne, and red pepper flakes. ",
            },
            {
              text: "\u003cstrong\u003eDo Ahead:\u003c/strong\u003e The Cajun seasoning can be made 1 month ahead. Store in an airtight container at room temperature.",
            },
          ],
        },
        {
          name: "Chicken \u0026 Rice",
          instructions: [
            {
              text: "In a small bowl, mix 1 tablespoon of the Cajun seasoning and 1 teaspoon of the oil to form a paste. Pat the chicken dry. In a medium bowl, massage the paste into the chicken with your hands. ",
            },
            {
              text: "In a large deep skillet over medium heat, warm the remaining 1 teaspoon of the oil. Cook the chicken skin side down, turning once, for 5 to 7 minutes total, until browned (the chicken will continue to cook with the rice). Transfer to a plate; set aside.",
            },
            {
              text: "In the same skillet (do not wipe out) over medium heat, combine the onion, bell pepper, and celery; season with salt and pepper. Stir again to combine, add the butter, and cook for 2 to 3 minutes, until softened and translucent. Add the garlic and cook, stirring, for 1 to 2 minutes, until fragrant. Add 1 tablespoon of the Cajun seasoning and continue to cook, stirring, for 2 to 3 minutes, until heated through, fragrant, and well combined.",
            },
            {
              text: "Add the broth and rice. Give the mixture a good stir and bring to a boil. Reduce the heat to medium-low and bring to a simmer. Place the chicken and resting juices on top of the rice, cover, and continue to cook for 15 to 20 minutes, until the chicken is cooked through and the rice is tender.",
            },
            {
              text: "Fluff the rice with a fork. Garnish with the parsley and scallions. ",
            },
          ],
        },
      ],
      name: "Cajun Chicken &amp;amp; Rice",
      categories: ["Dinner"],
      cookTime: "PT0H40M",
      cuisine: ["Cajun/Creole"],
      description:
        "For this delicious, classic Cajun chicken and rice recipe, we love how far a simple spice mix (and some chicken fat) can take a dish.",
      keywords: [
        "Chicken",
        "Celery",
        "Onion",
        "Olive Oil",
        "Chicken Thigh",
        "One-Pot Wonders",
        "Rice",
        "Paprika",
        "Garlic",
        "Bell Pepper",
        "Sauté",
        "Simmer",
      ],
      prepTime: "PT0H10M",
      recipeYield: "Serves 4",
      url: "https://food52.com/recipes/87369-best-cajun-chicken-and-rice-recipe",
    },
    responseJson: {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      mainEntityOfPage:
        "https://food52.com/recipes/87369-best-cajun-chicken-and-rice-recipe",
      name: "Cajun Chicken &amp;amp; Rice",
      image: [
        "https://images.food52.com/3-mxVyNaVVElqk9o6YYnKDWDRUg=/1200x1200/9c6a69e3-9b4a-49d6-93b3-cdad47bfe325--2022-0208_cajun-chicken-and-rice_3x2_ty-mecham.jpg",
        "https://images.food52.com/JL8zmJ_nDitsJb1lvwJ7JPn45BI=/1200x900/9c6a69e3-9b4a-49d6-93b3-cdad47bfe325--2022-0208_cajun-chicken-and-rice_3x2_ty-mecham.jpg",
        "https://images.food52.com/zXvGsM2TFoH9HQgynsqyp-sCUQY=/1200x675/9c6a69e3-9b4a-49d6-93b3-cdad47bfe325--2022-0208_cajun-chicken-and-rice_3x2_ty-mecham.jpg",
      ],
      recipeCategory: "Dinner",
      recipeCuisine: "Cajun/Creole",
      author: {
        "@type": "Person",
        name: "Millie Peartree",
        url: "https://food52.com/users/2431514-millie-peartree",
      },
      dateModified: "2022-02-15 11:13:05 -0500",
      datePublished: "2022-02-15 11:13:05 -0500",
      description:
        "For this delicious, classic Cajun chicken and rice recipe, we love how far a simple spice mix (and some chicken fat) can take a dish.",
      recipeYield: "Serves 4",
      prepTime: "PT0H10M",
      cookTime: "PT0H40M",
      recipeInstructions: [
        {
          "@type": "HowToSection",
          name: "Cajun Seasoning",
          itemListElement: [
            {
              "@type": "HowToStep",
              text: "In a small bowl, mix the paprika, salt, oregano, thyme, black pepper, garlic powder, onion powder, cayenne, and red pepper flakes. ",
            },
            {
              "@type": "HowToStep",
              text: "\u003cstrong\u003eDo Ahead:\u003c/strong\u003e The Cajun seasoning can be made 1 month ahead. Store in an airtight container at room temperature.",
            },
          ],
        },
        {
          "@type": "HowToSection",
          name: "Chicken \u0026 Rice",
          itemListElement: [
            {
              "@type": "HowToStep",
              text: "In a small bowl, mix 1 tablespoon of the Cajun seasoning and 1 teaspoon of the oil to form a paste. Pat the chicken dry. In a medium bowl, massage the paste into the chicken with your hands. ",
            },
            {
              "@type": "HowToStep",
              text: "In a large deep skillet over medium heat, warm the remaining 1 teaspoon of the oil. Cook the chicken skin side down, turning once, for 5 to 7 minutes total, until browned (the chicken will continue to cook with the rice). Transfer to a plate; set aside.",
            },
            {
              "@type": "HowToStep",
              text: "In the same skillet (do not wipe out) over medium heat, combine the onion, bell pepper, and celery; season with salt and pepper. Stir again to combine, add the butter, and cook for 2 to 3 minutes, until softened and translucent. Add the garlic and cook, stirring, for 1 to 2 minutes, until fragrant. Add 1 tablespoon of the Cajun seasoning and continue to cook, stirring, for 2 to 3 minutes, until heated through, fragrant, and well combined.",
            },
            {
              "@type": "HowToStep",
              text: "Add the broth and rice. Give the mixture a good stir and bring to a boil. Reduce the heat to medium-low and bring to a simmer. Place the chicken and resting juices on top of the rice, cover, and continue to cook for 15 to 20 minutes, until the chicken is cooked through and the rice is tender.",
            },
            {
              "@type": "HowToStep",
              text: "Fluff the rice with a fork. Garnish with the parsley and scallions. ",
            },
          ],
        },
      ],
      recipeIngredient: [
        "1 tablespoon paprika",
        "2 teaspoons kosher salt",
        "1 teaspoon dried oregano",
        "1 teaspoon dried thyme",
        "1 teaspoon freshly ground black pepper",
        "1 teaspoon garlic powder",
        "1 teaspoon onion powder",
        "1/2 teaspoon cayenne pepper",
        "1/4 teaspoon crushed red pepper flakes",
        "2 teaspoons olive oil",
        "4  skin-on, boneless chicken thighs",
        "1  small onion, finely chopped",
        "1  small green bell pepper, seeded and finely chopped",
        "2  celery stalks, finely chopped",
        " Kosher salt and freshly ground pepper",
        "1 tablespoon unsalted butter",
        "2  garlic cloves, finely chopped",
        "1 3/4 cups low-sodium chicken broth",
        "1 cup long-grain white rice",
        " Parsley leaves and finely chopped scallions, for serving",
      ],
      commentCount: 2,
      aggregateRating: {
        ratingCount: "3",
        ratingValue: "5.0",
      },
      keywords:
        "Chicken, Celery, Onion, Olive Oil, Chicken Thigh, One-Pot Wonders, Rice, Paprika, Garlic, Bell Pepper, Sauté, Simmer",
    },
  },
  {
    name: "Top level array of nodes",
    url: "https://www.allrecipes.com/recipe/231030/braised-corned-beef-brisket/",
    expected: {
      categories: ["Corned Beef"],
      cookTime: "P0DT6H15M",
      description:
        "You have never had corned beef like this and if you try it, I truly believe you will never go back to the traditionally 'boiled' beef. This recipe was given to my mother-in-law during WWII by her Jewish boarding house owner and it has become a treasured family recipe. Unlike the commonly boiled corned beef, this is a slow braise that is tender, flavorful, and has a caramelized surface when it's done. I serve it with colcannon, steamed cabbage wedges, braised carrots, and parsnips. It is our favorite St. Patrick's/Jewish dinner, but we love it so much that I cook it year around.",
      keywords: undefined,
      ingredients: [
        "1 (5 pound) flat-cut corned beef brisket",
        "1 tablespoon browning sauce (such as Kitchen Bouquet®), or as desired",
        "1 tablespoon vegetable oil",
        "1 onion, sliced",
        "6 cloves garlic, sliced",
        "2 tablespoons water",
      ],
      instructionSections: [
        {
          instructions: [
            { text: "Preheat oven to 275 degrees F (135 degrees C).\n" },
            {
              text: "Discard any flavoring packet from corned beef. Brush brisket with browning sauce on both sides. Heat vegetable oil in a large skillet over medium-high heat and brown brisket on both sides in the hot oil, 5 to 8 minutes per side.\n",
            },
            {
              text: "Place brisket on a rack set in a roasting pan. Scatter onion and garlic slices over brisket and add water to roasting pan. Cover pan tightly with aluminum foil.\n",
            },
            {
              text: "Roast in the preheated oven until meat is tender, about 6 hours.\n",
            },
          ],
        },
      ],
      name: "Braised Corned Beef Brisket",
      nutrition: {
        calories: "455.1 calories",
        carbohydrateContent: "5.4 g",
        cholesterolContent: "162 mg",
        fatContent: "33.7 g",
        fiberContent: "0.7 g",
        proteinContent: "30.6 g",
        saturatedFatContent: "10.9 g",
        sodiumContent: "1877.4 mg",
        sugarContent: "1.7 g",
      },
      prepTime: "P0DT0H15M",
      recipeYield: "6 servings",
      totalTime: "P0DT6H30M",
      url: "https://www.allrecipes.com/recipe/231030/braised-corned-beef-brisket/",
    },
    responseJson: [
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.allrecipes.com/",
              name: "Home",
              image: null,
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.allrecipes.com/recipes/",
              name: "Recipes",
              image: null,
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": "https://www.allrecipes.com/recipes/80/main-dish/",
              name: "Main Dishes",
              image: null,
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@id": "https://www.allrecipes.com/recipes/446/main-dish/beef/",
              name: "Beef",
              image: null,
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@id":
                "https://www.allrecipes.com/recipes/472/main-dish/beef/corned-beef/",
              name: "Corned Beef Recipes",
              image: null,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "Recipe",
        mainEntityOfPage:
          "https://www.allrecipes.com/recipe/231030/braised-corned-beef-brisket/",
        name: "Braised Corned Beef Brisket",
        image: {
          "@type": "ImageObject",
          url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F03%2F10%2F995620.jpg",
          width: 960,
          height: 960,
        },
        datePublished: "2019-06-06T23:52:42.000Z",
        description:
          "You have never had corned beef like this and if you try it, I truly believe you will never go back to the traditionally 'boiled' beef. This recipe was given to my mother-in-law during WWII by her Jewish boarding house owner and it has become a treasured family recipe. Unlike the commonly boiled corned beef, this is a slow braise that is tender, flavorful, and has a caramelized surface when it's done. I serve it with colcannon, steamed cabbage wedges, braised carrots, and parsnips. It is our favorite St. Patrick's/Jewish dinner, but we love it so much that I cook it year around.",
        prepTime: "P0DT0H15M",
        cookTime: "P0DT6H15M",
        totalTime: "P0DT6H30M",
        recipeYield: "6 servings",
        recipeIngredient: [
          "1 (5 pound) flat-cut corned beef brisket",
          "1 tablespoon browning sauce (such as Kitchen Bouquet®), or as desired",
          "1 tablespoon vegetable oil",
          "1 onion, sliced",
          "6 cloves garlic, sliced",
          "2 tablespoons water",
        ],
        recipeInstructions: [
          {
            "@type": "HowToStep",
            text: "Preheat oven to 275 degrees F (135 degrees C).\n",
          },
          {
            "@type": "HowToStep",
            text: "Discard any flavoring packet from corned beef. Brush brisket with browning sauce on both sides. Heat vegetable oil in a large skillet over medium-high heat and brown brisket on both sides in the hot oil, 5 to 8 minutes per side.\n",
          },
          {
            "@type": "HowToStep",
            text: "Place brisket on a rack set in a roasting pan. Scatter onion and garlic slices over brisket and add water to roasting pan. Cover pan tightly with aluminum foil.\n",
          },
          {
            "@type": "HowToStep",
            text: "Roast in the preheated oven until meat is tender, about 6 hours.\n",
          },
        ],
        recipeCategory: ["Corned Beef"],
        recipeCuisine: [],
        author: [
          {
            "@type": "Person",
            name: "mauigirl",
            url: "https://www.allrecipes.comhttps://www.allrecipes.com/cook/mauigirl1",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.822961373390558,
          ratingCount: 872,
          itemReviewed: "Braised Corned Beef Brisket",
          bestRating: "5",
          worstRating: "1",
        },
        nutrition: {
          "@type": "NutritionInformation",
          calories: "455.1 calories",
          carbohydrateContent: "5.4 g",
          cholesterolContent: "162 mg",
          fatContent: "33.7 g",
          fiberContent: "0.7 g",
          proteinContent: "30.6 g",
          saturatedFatContent: "10.9 g",
          servingSize: null,
          sodiumContent: "1877.4 mg",
          sugarContent: "1.7 g",
          transFatContent: null,
          unsaturatedFatContent: null,
        },
        review: [
          {
            "@type": "Review",
            datePublished: "2013-02-08T14:43:02.463Z",
            reviewBody:
              "Out o' Sight brisket recipe, Jules! I copycatted your menu exactly and oh what a treat! Like Baking Nana, I bought my flat cut brisket at Costco, followed your directions to a \"T\" with one tiny addition of more sliced garlic and onion just because onions and garlic are in their own food group at Cathy Myers' house! Flavorful, fork tender - the very best we've ever had! I will NEVER return to yukky boiled meat again! I found myself cutting off  chunks of the leftovers for a protein snack! Couldn't help myself! Randy got his Reuban sammie fix that's for certain! Thanks again for sharing, Julie!",
            reviewRating: {
              "@type": "Rating",
              worstRating: "1",
              bestRating: "5",
              ratingValue: 5,
            },
            author: {
              "@type": "Person",
              name: "Cathy Myers",
              image: null,
              sameAs: null,
            },
          },
          {
            "@type": "Review",
            datePublished: "2013-03-16T20:06:38.327",
            reviewBody:
              "Very delish recipe. I've never made a corned beef with this technique before. And it turned out soo well. I followed threw with braising and then utlizing my crockpot to bake in, only for the simple fact, I needed to bake other things at a higher temp then this recipe in my oven and didn't want to complicate matters. The crockpot worked out very well. The only thing I did slightly different and it wasn't really much. After braising the meat in the pan on the cooktop, I took the water and deglazed the pan and then added that deglazed mixture to the crock pot over the corned beef and followed threw with the rest of the directions. Added a head of cabbage during the last hour and a half, it was very flavorful. My beef was extra tender and was falling apart ;-) Will make again.",
            reviewRating: {
              "@type": "Rating",
              worstRating: "1",
              bestRating: "5",
              ratingValue: 5,
            },
            author: {
              "@type": "Person",
              name: "Melissa Goff",
              image: null,
              sameAs: null,
            },
          },
        ],
        video: {
          "@context": "http://schema.org",
          "@type": "VideoObject",
          name: "Braised Corned Beef Brisket",
          description:
            "Perfect corned beef brisket is super simple to make at home.",
          uploadDate: "2015-07-16T20:33:55.259Z",
          duration: "PT54.254S",
          thumbnailUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F1033249144001%2F6b63d476-3fea-41f0-9746-de91255f0639%2F55448053-8128-4e23-af7d-bed8c236fa7b%2F1280x720%2Fmatch%2Fimage.jpg",
          publisher: {
            "@type": "Organization",
            name: "Allrecipes",
            url: "https://www.allrecipes.com",
            logo: {
              "@type": "ImageObject",
              url: "https://www.allrecipes.com/img/logo.png",
              width: 209,
              height: 60,
            },
            sameAs: [
              "https://www.facebook.com/allrecipes",
              "https://twitter.com/Allrecipes",
              "https://www.pinterest.com/allrecipes/",
              "https://www.instagram.com/allrecipes/",
            ],
          },
          embedUrl:
            "https://players.brightcove.net/1033249144001/default_default/index.html?videoId=4358618001001",
        },
      },
    ],
  },
  {
    name: "Top level object with a graph of nodes",
    url: "https://therecipecritic.com/hawaiian-meatballs/",
    expected: {
      categories: ["Dinner"],
      cuisine: ["American", "hawaiian"],
      cookTime: "PT25M",
      description:
        "Hawaiian meatballs are the PERFECT main course for your dinner! You don&#039;t want to miss out on these! They are drenched in the most delicious sauce and packed with flavor.",
      ingredients: [
        "1  lb ground beef or ground turkey",
        "1/2 cup panko bread crumbs",
        "1/4 cup onion, diced",
        "1  egg",
        "1 tsp garlic powder",
        "1 tsp salt",
        "1 tsp ground ginger",
        "1/2 cup chicken broth or water",
        "20 oz canned pineapple chunks (keep the juice!)",
        "2 tbsp soy sauce",
        "3/4 cup brown sugar",
        "1/2 cup vinegar",
        "1/4 cup cornstarch",
        "1/4 cup cold water",
        "1 tbsp olive oil",
        "2 cups sweet peppers, cut in chunks ((red, orange, yellow- any combination))",
        "green onion, for garnish",
        "rice for serving",
      ],
      instructionSections: [
        {
          name: "Meatballs",
          instructions: [
            {
              text: "Pre-heat oven to broil.  Line a large baking sheet pan with parchment paper.",
            },
            {
              text: "In a large bowl, combine all the meatball ingredients and mix until incorporated.  Form into tablespoon sized meatballs and place them on the the prepared pan.  You should get about 20 meatballs total.",
            },
            {
              text: "Place in the oven on broil for 10 minutes.  After 10 minutes, set the oven to bake at 375°F.  Bake the meatballs for an additional 10 minutes, or until cooked through.",
            },
          ],
        },
        {
          name: "Sauce",
          instructions: [
            {
              text: "While the meatballs are baking, heat a large pot over medium high heat.  Add 1 tablespoon olive oil, and the chopped bell peppers.  Stir to cook and soften the peppers for about 3 minutes.  Remove from the pot and set aside.",
            },
            {
              text: "In the same pot over medium high heat, add the chicken broth and the juice of the canned pineapple, about 1 cup.  Reserve the pineapple chunks for later.",
            },
            {
              text: "Add the soy sauce, vinegar, and brown sugar.  Whisk to combine and simmer for 3 minutes.",
            },
            {
              text: "In a small bowl, combine the water and cornstarch.  Whisk until the cornstarch is dissolved.  Pour into the pot and stir.  Allow the mixture to simmer for 5 minutes while stirring occasionally so the bottom doesn&#39;t burn.  Cook until sauce is thickened.",
            },
            {
              text: "Add the cooked meatballs, cooked peppers, and pineapple chunks.  Stir and warm all the ingredients together for about 3 minutes.",
            },
            {
              text: "Serve with rice and chopped green onions for garnish.",
            },
          ],
        },
      ],
      keywords: ["hawaiian meatballs"],
      name: "Hawaiian Meatballs",
      nutrition: {
        calories: "544 kcal",
        carbohydrateContent: "66 g",
        proteinContent: "20 g",
        fatContent: "22 g",
        saturatedFatContent: "8 g",
        transFatContent: "1 g",
        cholesterolContent: "97 mg",
        sodiumContent: "1086 mg",
        fiberContent: "3 g",
        sugarContent: "52 g",
        unsaturatedFatContent: "11 g",
        servingSize: "1 serving",
      },
      prepTime: "PT15M",
      recipeYield: "5 servings",
      totalTime: "PT40M",
      url: "https://therecipecritic.com/hawaiian-meatballs/#webpage",
    },
    responseJson: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://therecipecritic.com/#organization",
          name: "The Recipe Critic",
          url: "https://therecipecritic.com/",
          sameAs: [
            "https://www.facebook.com/TheRecipeCritic/",
            "https://www.instagram.com/alyssa_therecipecritic/",
            "https://www.pinterest.com/therecipecritic/",
            "https://twitter.com/therecipecritic",
          ],
          logo: {
            "@type": "ImageObject",
            "@id": "https://therecipecritic.com/#logo",
            inLanguage: "en-US",
            url: "https://therecipecritic.com/wp-content/uploads/2017/06/header.png",
            contentUrl:
              "https://therecipecritic.com/wp-content/uploads/2017/06/header.png",
            width: 561,
            height: 400,
            caption: "The Recipe Critic",
          },
          image: { "@id": "https://therecipecritic.com/#logo" },
        },
        {
          "@type": "WebSite",
          "@id": "https://therecipecritic.com/#website",
          url: "https://therecipecritic.com/",
          name: "The Recipe Critic",
          description: "Tried and True Recipes for Families | Food Blog",
          publisher: { "@id": "https://therecipecritic.com/#organization" },
          potentialAction: [
            {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://therecipecritic.com/?s={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          ],
          inLanguage: "en-US",
        },
        {
          "@type": "ImageObject",
          "@id": "https://therecipecritic.com/hawaiian-meatballs/#primaryimage",
          inLanguage: "en-US",
          url: "https://therecipecritic.com/wp-content/uploads/2022/02/hawaiianmeatballs-1.jpg",
          contentUrl:
            "https://therecipecritic.com/wp-content/uploads/2022/02/hawaiianmeatballs-1.jpg",
          width: 901,
          height: 1200,
        },
        {
          "@type": "WebPage",
          "@id": "https://therecipecritic.com/hawaiian-meatballs/#webpage",
          url: "https://therecipecritic.com/hawaiian-meatballs/",
          name: "Hawaiian Meatballs | The Recipe Critic",
          isPartOf: { "@id": "https://therecipecritic.com/#website" },
          primaryImageOfPage: {
            "@id":
              "https://therecipecritic.com/hawaiian-meatballs/#primaryimage",
          },
          datePublished: "2022-03-06T13:00:00+00:00",
          dateModified: "2022-03-04T19:20:03+00:00",
          description:
            "Hawaiian meatballs are the PERFECT main course for your dinner. They are drenched in the most delicious sauce and packed with flavor!",
          breadcrumb: {
            "@id": "https://therecipecritic.com/hawaiian-meatballs/#breadcrumb",
          },
          inLanguage: "en-US",
          potentialAction: [
            {
              "@type": "ReadAction",
              target: ["https://therecipecritic.com/hawaiian-meatballs/"],
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://therecipecritic.com/hawaiian-meatballs/#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://therecipecritic.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Dinner",
              item: "https://therecipecritic.com/dinner-recipes/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Hawaiian Meatballs",
            },
          ],
        },
        {
          "@type": "Article",
          "@id": "https://therecipecritic.com/hawaiian-meatballs/#article",
          isPartOf: {
            "@id": "https://therecipecritic.com/hawaiian-meatballs/#webpage",
          },
          author: {
            "@id":
              "https://therecipecritic.com/#/schema/person/ae2ed0ce49d93c153919f465a8886b57",
          },
          headline: "Hawaiian Meatballs",
          datePublished: "2022-03-06T13:00:00+00:00",
          dateModified: "2022-03-04T19:20:03+00:00",
          wordCount: 1204,
          commentCount: 0,
          publisher: { "@id": "https://therecipecritic.com/#organization" },
          image: {
            "@id":
              "https://therecipecritic.com/hawaiian-meatballs/#primaryimage",
          },
          thumbnailUrl:
            "https://therecipecritic.com/wp-content/uploads/2022/02/hawaiianmeatballs-1.jpg",
          articleSection: ["Dinner", "Easy Recipes", "Pepper", "pineapple"],
          inLanguage: "en-US",
          potentialAction: [
            {
              "@type": "CommentAction",
              name: "Comment",
              target: [
                "https://therecipecritic.com/hawaiian-meatballs/#respond",
              ],
            },
          ],
        },
        {
          "@type": "Person",
          "@id":
            "https://therecipecritic.com/#/schema/person/ae2ed0ce49d93c153919f465a8886b57",
          name: "Alyssa Rivers",
          image: {
            "@type": "ImageObject",
            "@id": "https://therecipecritic.com/#personlogo",
            inLanguage: "en-US",
            url: "https://secure.gravatar.com/avatar/0d1c54543a985a9e7319fed336ff1bfb?s=96&d=mm&r=pg",
            contentUrl:
              "https://secure.gravatar.com/avatar/0d1c54543a985a9e7319fed336ff1bfb?s=96&d=mm&r=pg",
            caption: "Alyssa Rivers",
          },
          description:
            "I am Alyssa and the blogger behind The Recipe Critic. I started my blog in June of 2012 as a place to share my passion for cooking. I love trying new things and testing them out with my family.",
          sameAs: [
            "https://therecipecritic.com/",
            "http://www.facebook.com/therecipecritic",
            "http://instagram.com/alyssa_therecipecritic",
            "http://pinterest.com/therecipecritic/",
            "https://twitter.com/http://twitter.com/therecipecritic/",
          ],
        },
        {
          "@context": "http://schema.org/",
          "@type": "Recipe",
          name: "Hawaiian Meatballs",
          author: { "@type": "Person", name: "Alyssa Rivers" },
          description:
            "Hawaiian meatballs are the PERFECT main course for your dinner! You don&#039;t want to miss out on these! They are drenched in the most delicious sauce and packed with flavor.",
          datePublished: "2022-03-06T06:00:00+00:00",
          image: [
            "https://therecipecritic.com/wp-content/uploads/2022/02/hawaiianmeatballs-1.jpg",
            "https://therecipecritic.com/wp-content/uploads/2022/02/hawaiianmeatballs-1-500x500.jpg",
            "https://therecipecritic.com/wp-content/uploads/2022/02/hawaiianmeatballs-1-500x375.jpg",
            "https://therecipecritic.com/wp-content/uploads/2022/02/hawaiianmeatballs-1-480x270.jpg",
          ],
          recipeYield: ["5", "5 servings"],
          prepTime: "PT15M",
          cookTime: "PT25M",
          totalTime: "PT40M",
          recipeIngredient: [
            "1  lb ground beef or ground turkey",
            "1/2 cup panko bread crumbs",
            "1/4 cup onion, diced",
            "1  egg",
            "1 tsp garlic powder",
            "1 tsp salt",
            "1 tsp ground ginger",
            "1/2 cup chicken broth or water",
            "20 oz canned pineapple chunks (keep the juice!)",
            "2 tbsp soy sauce",
            "3/4 cup brown sugar",
            "1/2 cup vinegar",
            "1/4 cup cornstarch",
            "1/4 cup cold water",
            "1 tbsp olive oil",
            "2 cups sweet peppers, cut in chunks ((red, orange, yellow- any combination))",
            "green onion, for garnish",
            "rice for serving",
          ],
          recipeInstructions: [
            {
              "@type": "HowToSection",
              name: "Meatballs",
              itemListElement: [
                {
                  "@type": "HowToStep",
                  text: "Pre-heat oven to broil.  Line a large baking sheet pan with parchment paper.",
                  name: "Pre-heat oven to broil.  Line a large baking sheet pan with parchment paper.",
                  url: "https://therecipecritic.com/hawaiian-meatballs/#wprm-recipe-160576-step-0-0",
                },
                {
                  "@type": "HowToStep",
                  text: "In a large bowl, combine all the meatball ingredients and mix until incorporated.  Form into tablespoon sized meatballs and place them on the the prepared pan.  You should get about 20 meatballs total.",
                  name: "In a large bowl, combine all the meatball ingredients and mix until incorporated.  Form into tablespoon sized meatballs and place them on the the prepared pan.  You should get about 20 meatballs total.",
                  url: "https://therecipecritic.com/hawaiian-meatballs/#wprm-recipe-160576-step-0-1",
                },
                {
                  "@type": "HowToStep",
                  text: "Place in the oven on broil for 10 minutes.  After 10 minutes, set the oven to bake at 375°F.  Bake the meatballs for an additional 10 minutes, or until cooked through.",
                  name: "Place in the oven on broil for 10 minutes.  After 10 minutes, set the oven to bake at 375°F.  Bake the meatballs for an additional 10 minutes, or until cooked through.",
                  url: "https://therecipecritic.com/hawaiian-meatballs/#wprm-recipe-160576-step-0-2",
                },
              ],
            },
            {
              "@type": "HowToSection",
              name: "Sauce",
              itemListElement: [
                {
                  "@type": "HowToStep",
                  text: "While the meatballs are baking, heat a large pot over medium high heat.  Add 1 tablespoon olive oil, and the chopped bell peppers.  Stir to cook and soften the peppers for about 3 minutes.  Remove from the pot and set aside.",
                  name: "While the meatballs are baking, heat a large pot over medium high heat.  Add 1 tablespoon olive oil, and the chopped bell peppers.  Stir to cook and soften the peppers for about 3 minutes.  Remove from the pot and set aside.",
                  url: "https://therecipecritic.com/hawaiian-meatballs/#wprm-recipe-160576-step-1-0",
                },
                {
                  "@type": "HowToStep",
                  text: "In the same pot over medium high heat, add the chicken broth and the juice of the canned pineapple, about 1 cup.  Reserve the pineapple chunks for later.",
                  name: "In the same pot over medium high heat, add the chicken broth and the juice of the canned pineapple, about 1 cup.  Reserve the pineapple chunks for later.",
                  url: "https://therecipecritic.com/hawaiian-meatballs/#wprm-recipe-160576-step-1-1",
                },
                {
                  "@type": "HowToStep",
                  text: "Add the soy sauce, vinegar, and brown sugar.  Whisk to combine and simmer for 3 minutes.",
                  name: "Add the soy sauce, vinegar, and brown sugar.  Whisk to combine and simmer for 3 minutes.",
                  url: "https://therecipecritic.com/hawaiian-meatballs/#wprm-recipe-160576-step-1-2",
                },
                {
                  "@type": "HowToStep",
                  text: "In a small bowl, combine the water and cornstarch.  Whisk until the cornstarch is dissolved.  Pour into the pot and stir.  Allow the mixture to simmer for 5 minutes while stirring occasionally so the bottom doesn&#39;t burn.  Cook until sauce is thickened.",
                  name: "In a small bowl, combine the water and cornstarch.  Whisk until the cornstarch is dissolved.  Pour into the pot and stir.  Allow the mixture to simmer for 5 minutes while stirring occasionally so the bottom doesn&#39;t burn.  Cook until sauce is thickened.",
                  url: "https://therecipecritic.com/hawaiian-meatballs/#wprm-recipe-160576-step-1-3",
                },
                {
                  "@type": "HowToStep",
                  text: "Add the cooked meatballs, cooked peppers, and pineapple chunks.  Stir and warm all the ingredients together for about 3 minutes.",
                  name: "Add the cooked meatballs, cooked peppers, and pineapple chunks.  Stir and warm all the ingredients together for about 3 minutes.",
                  url: "https://therecipecritic.com/hawaiian-meatballs/#wprm-recipe-160576-step-1-4",
                },
                {
                  "@type": "HowToStep",
                  text: "Serve with rice and chopped green onions for garnish.",
                  name: "Serve with rice and chopped green onions for garnish.",
                  url: "https://therecipecritic.com/hawaiian-meatballs/#wprm-recipe-160576-step-1-5",
                },
              ],
            },
          ],
          recipeCategory: ["Dinner"],
          recipeCuisine: ["American", "hawaiian"],
          keywords: "hawaiian meatballs",
          nutrition: {
            "@type": "NutritionInformation",
            calories: "544 kcal",
            carbohydrateContent: "66 g",
            proteinContent: "20 g",
            fatContent: "22 g",
            saturatedFatContent: "8 g",
            transFatContent: "1 g",
            cholesterolContent: "97 mg",
            sodiumContent: "1086 mg",
            fiberContent: "3 g",
            sugarContent: "52 g",
            unsaturatedFatContent: "11 g",
            servingSize: "1 serving",
          },
          "@id": "https://therecipecritic.com/hawaiian-meatballs/#recipe",
          isPartOf: {
            "@id": "https://therecipecritic.com/hawaiian-meatballs/#article",
          },
          mainEntityOfPage:
            "https://therecipecritic.com/hawaiian-meatballs/#webpage",
        },
      ],
    },
  },
  {
    name: "Top level node with multiple context types",
    url: "https://www.simplyrecipes.com/easy-cassoulet-recipe-5217552",
    expected: {
      categories: ["Entree", "Dinner", "Ingredient"],
      cookTime: "PT35M",
      cuisine: ["French"],
      description:
        "Cassoulet on a weeknight? It’s possible! This quick and easy cassoulet with white beans, chicken, and sausages comes together in about 45 minutes.",
      ingredients: [
        "4 ounces thick-cut bacon, cut into 1-inch pieces",
        "4 bone-in, skin-on chicken thighs (about 1 1/2 pounds)",
        "1/2 teaspoon salt",
        "1/4 teaspoon freshly ground black pepper",
        "4 sweet Italian pork sausages (about 12 ounces)",
        "2 tablespoons olive oil, divided",
        "1 yellow onion, finely chopped",
        "3 cloves garlic, minced",
        "1 (14.5-ounce) can diced tomatoes",
        "2 (14.5-ounce) cans great northern or navy beans",
        "1 small handful fresh thyme, tied together with kitchen twine",
        "1 1/2 cups coarse  fresh breadcrumbs",
        "2 teaspoons chopped fresh parsley, plus more for garnish",
        "Baguette, for serving",
      ],
      instructionSections: [
        {
          instructions: [
            {
              text: "Cook the bacon: In a large skillet over medium heat, cook the bacon for 3 to 4 minutes stirring frequently, until it renders much of its fat but is not yet crisp. Transfer the bacon to a large plate.",
            },
            {
              text: "Prep the chicken and sausages: Pat the chicken dry with a paper towel and season both sides with salt and black pepper. Prick each sausage with the tip of a paring knife in a couple of places. This will prevent them from bursting as they cook. ",
            },
            {
              text: "Cook the chicken and sausages: In the same skillet used to cook the bacon, add 1 tablespoon olive oil and heat it over medium-high heat. No need to drain out the bacon grease. Add the chicken, skin side-down, and the sausages. You may need to do this in batches if the skillet is not large enough. Cook the meat until golden brown on both sides, 8 to 10 minutes. Transfer them to the plate with the bacon.",
            },
            {
              text: "Cook the onions and garlic: Pour off and discard all but a thin layer of fat from the skillet. Return the skillet to the stove over medium heat. Add the onions and garlic and cook for 3 to 4 minutes, until the onions soften.",
            },
            {
              text: "Assemble the cassoulet: Transfer the cooked onions and garlic into a large (at least 4-quart) Dutch oven. Stir in the tomatoes, beans with their liquid, and thyme sprigs. Nestle in the bacon, chicken thighs, and sausages. Bring the cassoulet to a simmer over medium heat. Adjust the heat to a steady simmer and cook, uncovered, for 15 minutes, until the chicken and sausages are cooked through. The chicken should measure 165ºF when an instant read thermometer is inserted into the thickest part of the meat.",
            },
            {
              text: "Turn on the broiler: Set a rack about 8 inches from the broiler element and turn on the broiler.",
            },
            {
              text: "Make the breadcrumbs: In a small bowl, toss the breadcrumbs with the remaining 1 tablespoon olive oil and parsley.",
            },
            {
              text: "Broil the cassoulet: Remove and discard the thyme sprigs from the cassoulet. Evenly sprinkle in the breadcrumbs and place the Dutch oven into the oven to broil for 1 to 2 minutes, until the top browns. Watch it carefully—this only takes a minute or two. Remove the cassoulet from the oven and sprinkle in more parsley, if you’d like.",
            },
            {
              text: "Serve the cassoulet: Ladle some beans into 4 shallow bowls. Top each bowl with a sausage and a chicken thigh. Serve with a baguette on the side and a large spoon to scoop up all the delicious juices. ",
            },
          ],
        },
      ],
      keywords: [
        "bacon",
        "chicken",
        "italian sausage",
        "garlic",
        "diced tomatoes",
        "white beans",
        "thyme",
        "breadcrumbs",
        "baguette",
        "weeknight dinner",
        "family dinner",
        "cassoulet",
        "casserole",
      ],
      name: "Easy Cassoulet",
      prepTime: "PT10M",
      recipeYield: "4",
      totalTime: "PT45M",
      url: "https://www.simplyrecipes.com/easy-cassoulet-recipe-5217552",
    },
    responseJson: {
      "@context": "http://schema.org",
      "@type": ["Recipe", "NewsArticle"],
      headline: "Easy Cassoulet",
      datePublished: "2022-02-04T13:25:34.834-05:00",
      dateModified: "2022-02-04T13:25:34.834-05:00",
      author: [
        {
          "@type": "Person",
          name: "Sally Vargas",
          description:
            "Sally is the author of four cookbooks and is a regular correspondent for the Boston Globe Wednesday Food Section. She also is a food photographer.",
          url: "https://www.simplyrecipes.com/sally-vargas-5091780",
          sameAs: [
            "https://www.facebook.com/sally.p.vargas",
            "https://twitter.com/sallypvargas",
            "https://www.instagram.com/sallypv/",
          ],
          knowsAbout: ["Vegetarian, Healthy, French, Mediterranean, Pastry "],
        },
      ],
      description:
        "Cassoulet on a weeknight? It’s possible! This quick and easy cassoulet with white beans, chicken, and sausages comes together in about 45 minutes.",
      image: [
        {
          "@type": "ImageObject",
          url: "https://www.simplyrecipes.com/thmb/TuSLJW2AeXgMRJCIUSYX-0tNUiY=/5487x3086/smart/filters:no_upscale()/Simply-Recipes-Easy-Cassoulet-LEAD-07-4d725211bd434b23b7bf9140d2167265.jpg",
          height: 3086,
          width: 5487,
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Simply Recipes",
        url: "https://www.simplyrecipes.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.simplyrecipes.com/thmb/QvixEwCD02s_lnkgkVb6mHwKS7c=/1125x320/filters:no_upscale():max_bytes(150000):strip_icc()/SimplyRecipesLogoTransparent-07a297c54b2142ae9c079abb2f0fa639.png",
          width: 1125,
          height: 320,
        },
        brand: "Simply Recipes",
        publishingPrinciples:
          "https://www.simplyrecipes.com/about-us-5096129#toc-editorial-guidelines",
      },
      name: "Easy Cassoulet",
      cookTime: "PT35M",
      keywords:
        "bacon, chicken, italian sausage, garlic, diced tomatoes, white beans, thyme, breadcrumbs, baguette, weeknight dinner, family dinner, cassoulet, casserole",
      prepTime: "PT10M",
      recipeCategory: ["Entree", "Dinner", "Ingredient"],
      recipeCuisine: ["French"],
      recipeIngredient: [
        "4 ounces thick-cut bacon, cut into 1-inch pieces",
        "4 bone-in, skin-on chicken thighs (about 1 1/2 pounds)",
        "1/2 teaspoon salt",
        "1/4 teaspoon freshly ground black pepper",
        "4 sweet Italian pork sausages (about 12 ounces)",
        "2 tablespoons olive oil, divided",
        "1 yellow onion, finely chopped",
        "3 cloves garlic, minced",
        "1 (14.5-ounce) can diced tomatoes",
        "2 (14.5-ounce) cans great northern or navy beans",
        "1 small handful fresh thyme, tied together with kitchen twine",
        "1 1/2 cups coarse  fresh breadcrumbs",
        "2 teaspoons chopped fresh parsley, plus more for garnish",
        "Baguette, for serving",
      ],
      recipeInstructions: [
        {
          "@type": "HowToStep",
          image: {
            "@type": "ImageObject",
            url: "https://www.simplyrecipes.com/thmb/nGZBJVYpxWBngKusqRN-3QatCGk=/4902x3268/filters:no_upscale()/Simply-Recipes-Easy-Cassoulet-METHOD-01-d64f724fcb0147eaa15ed7480c368c3e.jpg",
            height: 3268,
            width: 4902,
          },
          text: "Cook the bacon: In a large skillet over medium heat, cook the bacon for 3 to 4 minutes stirring frequently, until it renders much of its fat but is not yet crisp. Transfer the bacon to a large plate.",
        },
        {
          "@type": "HowToStep",
          text: "Prep the chicken and sausages: Pat the chicken dry with a paper towel and season both sides with salt and black pepper. Prick each sausage with the tip of a paring knife in a couple of places. This will prevent them from bursting as they cook. ",
        },
        {
          "@type": "HowToStep",
          image: {
            "@type": "ImageObject",
            url: "https://www.simplyrecipes.com/thmb/vI6GABYEs9yQhN5a5qXKzDjYwRM=/4989x3326/filters:no_upscale()/Simply-Recipes-Easy-Cassoulet-METHOD-02-3db4e2e79813401b8d9f25836a2c3129.jpg",
            height: 3326,
            width: 4989,
          },
          text: "Cook the chicken and sausages: In the same skillet used to cook the bacon, add 1 tablespoon olive oil and heat it over medium-high heat. No need to drain out the bacon grease. Add the chicken, skin side-down, and the sausages. You may need to do this in batches if the skillet is not large enough. Cook the meat until golden brown on both sides, 8 to 10 minutes. Transfer them to the plate with the bacon.",
        },
        {
          "@type": "HowToStep",
          text: "Cook the onions and garlic: Pour off and discard all but a thin layer of fat from the skillet. Return the skillet to the stove over medium heat. Add the onions and garlic and cook for 3 to 4 minutes, until the onions soften.",
        },
        {
          "@type": "HowToStep",
          image: {
            "@type": "ImageObject",
            url: "https://www.simplyrecipes.com/thmb/rorOadXJ5tvu7H2bVgrstnYUCWM=/4225x2817/filters:no_upscale()/Simply-Recipes-Easy-Cassoulet-METHOD-04-599bf30ec8344ad9aeaa1973c6279a79.jpg",
            height: 2817,
            width: 4225,
          },
          text: "Assemble the cassoulet: Transfer the cooked onions and garlic into a large (at least 4-quart) Dutch oven. Stir in the tomatoes, beans with their liquid, and thyme sprigs. Nestle in the bacon, chicken thighs, and sausages. Bring the cassoulet to a simmer over medium heat. Adjust the heat to a steady simmer and cook, uncovered, for 15 minutes, until the chicken and sausages are cooked through. The chicken should measure 165ºF when an instant read thermometer is inserted into the thickest part of the meat.",
        },
        {
          "@type": "HowToStep",
          text: "Turn on the broiler: Set a rack about 8 inches from the broiler element and turn on the broiler.",
        },
        {
          "@type": "HowToStep",
          image: {
            "@type": "ImageObject",
            url: "https://www.simplyrecipes.com/thmb/LK4YpQFX_AYotF55FUb5aDm6TG4=/2838x1892/filters:no_upscale()/Simply-Recipes-Easy-Cassoulet-METHOD-03-8d93173a1f9a4b22bef806ee68dc472e.jpg",
            height: 1892,
            width: 2838,
          },
          text: "Make the breadcrumbs: In a small bowl, toss the breadcrumbs with the remaining 1 tablespoon olive oil and parsley.",
        },
        {
          "@type": "HowToStep",
          image: {
            "@type": "ImageObject",
            url: "https://www.simplyrecipes.com/thmb/BvLdg5fRVFojiDZD3JNCDaELy1Q=/3811x2541/filters:no_upscale()/Simply-Recipes-Easy-Cassoulet-METHOD-05-1eb016626bb4497881318e231c1d5aae.jpg",
            height: 2541,
            width: 3811,
          },
          text: "Broil the cassoulet: Remove and discard the thyme sprigs from the cassoulet. Evenly sprinkle in the breadcrumbs and place the Dutch oven into the oven to broil for 1 to 2 minutes, until the top browns. Watch it carefully—this only takes a minute or two. Remove the cassoulet from the oven and sprinkle in more parsley, if you’d like.",
        },
        {
          "@type": "HowToStep",
          image: {
            "@type": "ImageObject",
            url: "https://www.simplyrecipes.com/thmb/jlSj98Ylt761MH7giVBI-qAZw7k=/5616x3744/filters:no_upscale()/Simply-Recipes-Easy-Cassoulet-LEAD-09-dcc088239d7747df8fdb0b10100a73c3.jpg",
            height: 3744,
            width: 5616,
          },
          text: "Serve the cassoulet: Ladle some beans into 4 shallow bowls. Top each bowl with a sausage and a chicken thigh. Serve with a baguette on the side and a large spoon to scoop up all the delicious juices. ",
        },
      ],
      recipeYield: "4",
      totalTime: "PT45M",
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4",
          },
          author: {
            "@type": "Person",
            name: "Cici",
          },
          reviewBody:
            "Just made this and it’s very good, thank you! Did a few things differently that worked out well: Cut up the sausage and chicken thighs (no skin) into pieces. Used fresh Rosemary instead of Thyme. Used a larger can of Cento whole tomatoes and broke them up. Used a lot of pepper. Next time I’ll strain the beans and add broth.",
        },
      ],
      mainEntityOfPage: {
        "@type": ["WebPage"],
        "@id": "https://www.simplyrecipes.com/easy-cassoulet-recipe-5217552",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": "https://www.simplyrecipes.com/dinner-recipes-5091433",
                name: "Dinners",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id":
                  "https://www.simplyrecipes.com/comfort-food-recipes-5091432",
                name: "Comfort Food",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@id":
                  "https://www.simplyrecipes.com/easy-cassoulet-recipe-5217552",
                name: "Easy Cassoulet",
              },
            },
          ],
        },
      },
      about: [],
    },
  },
  {
    name: "Top level node with unrelated graph",
    url: "https://www.delish.com/cooking/recipe-ideas/recipes/a52475/slow-cooker-scalloped-potatoes-recipe/",
    expected: {
      categories: ["nut-free", "dinner party", "weeknight meals", "side dish"],
      cuisine: ["American"],
      description:
        "Keep Easter easy with these Slow Cooker Scalloped Potatoes. ",
      ingredients: [
        "1 c. <p>heavy cream or half and half</p>",
        "1/4 c. <p>low-sodium chicken broth</p>",
        "1 <p>pinch paprika</p>",
        "1/4 tsp. <p>ground nutmeg</p>",
        "2 tbsp. <p>fresh thyme leaves, plus more for garnish</p>",
        "2 tbsp. <p>freshly chopped rosemary, plus more for garnish</p>",
        "2 tsp. <p>garlic powder</p>",
        '3 lb. <p>russet potatoes, sliced 1/4"  thick</p>',
        "1/2 c. <p>freshly grated Parmesan</p>",
        "2 1/2 c. <p>shredded Gruy\u00e8re</p>",
        "<p>kosher salt</p>",
        "<p>Freshly ground black pepper</p>",
      ],
      instructionSections: [
        {
          instructions: [
            {
              text: "In a large bowl, whisk together heavy cream (or half and half), chicken broth, paprika, nutmeg, thyme, rosemary, and garlic powder until combined.",
            },
            {
              text: "Line bottom of a slow-cooker  with a layer of potatoes, then top with 1/3 of cream mixture, 1/2 cup parmesan and 1/2 cup gruy\u00e8re. Season with salt and pepper. Repeat until all ingredients are used up. Cover and cook on high for 4 hours.",
            },
            {
              text: "Remove the lid, turn off heat, and let set 30 minutes. (Drain any grease.) Transfer to a bowl and garnish with more thyme and rosemary, then serve.",
            },
          ],
        },
      ],
      keywords: [
        "Slow cooker scalloped potatoes",
        "easy slow cooker potatoes",
        "slow cooker cheesy potatoes",
        "slow cooker potatoes",
        "slow cooker meals",
        "easy slow cooker recipe",
        "best slow cooker recipes",
      ],
      name: "Slow-Cooker Scalloped Potatoes",
      prepTime: "PT15M",
      recipeYield: "10 servings",
      totalTime: "PT4H45M",
      url: "https://www.delish.com/cooking/recipe-ideas/recipes/a52475/slow-cooker-scalloped-potatoes-recipe/",
    },
    responseJson: {
      "@graph": [
        {
          "@type": "Question",
          text: "Do you always peel your potatoes?",
          suggestedAnswer: [
            { "@type": "Answer", text: "No" },
            { "@type": "Answer", text: "Yes" },
          ],
        },
      ],
      "@context": "http://schema.org",
      url: "https://www.delish.com/cooking/recipe-ideas/recipes/a52475/slow-cooker-scalloped-potatoes-recipe/",
      publisher: {
        "@type": "Organization",
        name: "Delish",
        logo: {
          "@type": "ImageObject",
          url: "https://assets.hearstapps.com/sites/delish/assets/images/logos/logo-jsonld.58eed96.png",
          width: 219,
          height: 60,
        },
      },
      "@type": "Recipe",
      author: { name: "Megan Shepherd", "@type": "Person" },
      datePublished: "2017-04-10T21:39:00Z",
      headline: "Slow-Cooker Scalloped Potatoes",
      image: {
        "@type": "ImageObject",
        height: 1080,
        thumbnail:
          "https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1024x1024/square-1491859543-delish-slow-cooker-scalloped-potatoes-2.jpg?resize=100:*",
        url: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1491859543-delish-slow-cooker-scalloped-potatoes-2.jpg",
        width: 1920,
      },
      mainEntityOfPage: {
        "@id":
          "https://www.delish.com/cooking/recipe-ideas/recipes/a52475/slow-cooker-scalloped-potatoes-recipe/",
        "@type": "WebPage",
      },
      thumbnailUrl:
        "https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1024x1024/square-1491859543-delish-slow-cooker-scalloped-potatoes-2.jpg?resize=100:*",
      dateModified: "2022-03-04T21:18:00Z",
      isAccessibleForFree: "False",
      hasPart: [
        {
          "@type": "WebPageElement",
          isAccessibleForFree: "False",
          cssSelector: ".content-container",
        },
      ],
      name: "Slow-Cooker Scalloped Potatoes",
      prepTime: "PT15M",
      cookTime: "PT0S",
      totalTime: "PT4H45M",
      recipeIngredient: [
        "1 c. <p>heavy cream or half and half</p>",
        "1/4 c. <p>low-sodium chicken broth</p>",
        "1 <p>pinch paprika</p>",
        "1/4 tsp. <p>ground nutmeg</p>",
        "2 tbsp. <p>fresh thyme leaves, plus more for garnish</p>",
        "2 tbsp. <p>freshly chopped rosemary, plus more for garnish</p>",
        "2 tsp. <p>garlic powder</p>",
        '3 lb. <p>russet potatoes, sliced 1/4"  thick</p>',
        "1/2 c. <p>freshly grated Parmesan</p>",
        "2 1/2 c. <p>shredded Gruy\u00e8re</p>",
        "<p>kosher salt</p>",
        "<p>Freshly ground black pepper</p>",
      ],
      recipeInstructions: [
        {
          "@type": "HowToStep",
          text: "In a large bowl, whisk together heavy cream (or half and half), chicken broth, paprika, nutmeg, thyme, rosemary, and garlic powder until combined.",
        },
        {
          "@type": "HowToStep",
          text: "Line bottom of a slow-cooker  with a layer of potatoes, then top with 1/3 of cream mixture, 1/2 cup parmesan and 1/2 cup gruy\u00e8re. Season with salt and pepper. Repeat until all ingredients are used up. Cover and cook on high for 4 hours.",
        },
        {
          "@type": "HowToStep",
          text: "Remove the lid, turn off heat, and let set 30 minutes. (Drain any grease.) Transfer to a bowl and garnish with more thyme and rosemary, then serve.",
        },
      ],
      video: {
        "@type": "VideoObject",
        contentUrl:
          "https://streaming.hearstdigitalstudios.com/024074c3-e63e-4cf3-b1fe-eae80d3e08c8/video_rover_16x9_1080p_hd_1555511856_27603.mp4",
        description:
          "It ain't easy bein' cheesy (unless we're talking about these scalloped potatoes)...",
        duration: "PT46S",
        embedUrl:
          "https://glimmer.hearstapps.com/?id=f7ef5f55-8c17-461e-98e9-1937f8d107b2",
        name: "Slow-Cooker Scalloped Potatoes",
        thumbnailUrl:
          "https://hips.hearstapps.com/hmg-prod/images/delish-slow-cooker-scalloped-potatoes-pin-1-1530810553.jpg",
        uploadDate: "2017-04-20T20:02:04.521119Z",
      },
      recipeCuisine: ["American"],
      aggregateRating: {
        "@context": "http://schema.org/",
        "@type": "AggregateRating",
        ratingValue: 3.8,
        reviewCount: 5,
        worstRating: 1,
        bestRating: 5,
      },
      review: [
        {
          "@context": "http://schema.org/",
          "@type": "Review",
          datePublished: "2021-01-20",
          author: {
            "@context": "http://schema.org/",
            "@type": "Person",
            name: "kai515",
          },
          reviewBody:
            "I think I may have done something wrong... My half and half looks and smells like it curdled. I followed the recipe (it seemed easy enough) but something tells me it went wrong. Mine is not creamy but lumpy and looks like cottage cheese.",
          reviewRating: {
            "@context": "http://schema.org/",
            "@type": "Rating",
            ratingValue: 2,
            worstRating: 1,
            bestRating: 5,
          },
        },
        {
          "@context": "http://schema.org/",
          "@type": "Review",
          datePublished: "2019-12-25",
          author: {
            "@context": "http://schema.org/",
            "@type": "Person",
            name: "CyanCocktail",
          },
          reviewBody:
            "I made these today for the first time and they were fantastic! Thank you. I suggest cooking them on low. I didn\u2019t want to get up, so I cooked them on high and they browned a little on the sides. But still good!!!",
          reviewRating: {
            "@context": "http://schema.org/",
            "@type": "Rating",
            ratingValue: 5,
            worstRating: 1,
            bestRating: 5,
          },
        },
      ],
      recipeCategory: [
        "nut-free",
        "dinner party",
        "weeknight meals",
        "side dish",
      ],
      recipeYield: "10 servings",
      description:
        "Keep Easter easy with these Slow Cooker Scalloped Potatoes. ",
      keywords:
        "Slow cooker scalloped potatoes, easy slow cooker potatoes, slow cooker cheesy potatoes, slow cooker potatoes, slow cooker meals, easy slow cooker recipe, best slow cooker recipes",
    },
  },
];

export default validJsonLdTestCases;

// Common Greek ingredients with translations
const commonIngredients = [
    { el: "ντομάτες", en: "tomatoes" },
    { el: "αγγούρι", en: "cucumber" },
    { el: "φέτα", en: "feta cheese" },
    { el: "ελαιόλαδο", en: "olive oil" },
    { el: "αλάτι", en: "salt" },
    { el: "πιπέρι", en: "pepper" },
    { el: "ρίγανη", en: "oregano" },
    { el: "λεμόνι", en: "lemon" },
    { el: "κρεμμύδι", en: "onion" },
    { el: "σκόρδο", en: "garlic" },
    { el: "μελιτζάνα", en: "eggplant" },
    { el: "κολοκύθι", en: "zucchini" },
    { el: "πατάτες", en: "potatoes" },
    { el: "μέλι", en: "honey" },
    { el: "γιαούρτι", en: "yogurt" },
    { el: "κανέλα", en: "cinnamon" },
    { el: "γαρίφαλο", en: "clove" },
    { el: "δυόσμος", en: "mint" },
    { el: "μαϊντανός", en: "parsley" },
    { el: "άνηθος", en: "dill" },
    { el: "κύμινο", en: "cumin" },
    { el: "πιπεριά", en: "bell pepper" },
    { el: "μοσχάρι", en: "beef" },
    { el: "αρνί", en: "lamb" },
    { el: "χοιρινό", en: "pork" },
    { el: "κοτόπουλο", en: "chicken" },
    { el: "αυγά", en: "eggs" },
    { el: "ρύζι", en: "rice" },
    { el: "φύλλο κρούστας", en: "phyllo dough" },
    { el: "κασέρι", en: "kaseri cheese" },
    { el: "γραβιέρα", en: "graviera cheese" },
    { el: "κεφαλοτύρι", en: "kefalotyri cheese" },
    { el: "σπανάκι", en: "spinach" },
    { el: "μπακαλιάρος", en: "cod" },
    { el: "σαρδέλες", en: "sardines" },
    { el: "γαύρος", en: "anchovy" },
    { el: "καλαμάρι", en: "squid" },
    { el: "χταπόδι", en: "octopus" },
    { el: "γαρίδες", en: "shrimp" },
    { el: "μύδια", en: "mussels" }
];

// Recipe data
const recipes = [
    {
        id: 1,
        title: { el: "Χωριάτικη Σαλάτα", en: "Greek Salad" },
        ingredients: [
            { el: "ντομάτες", en: "tomatoes" },
            { el: "αγγούρι", en: "cucumber" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "πιπεριά", en: "bell pepper" },
            { el: "φέτα", en: "feta cheese" },
            { el: "ελιές", en: "olives" },
            { el: "ρίγανη", en: "oregano" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 0,
        calories: 320,
        servings: 4,
        tags: ["salad", "vegetarian", "summer"],
        description: {
            el: "Η αυθεντική ελληνική χωριάτικη σαλάτα με φρέσκα λαχανικά και φέτα.",
            en: "Authentic Greek salad with fresh vegetables and feta cheese."
        },
        instructions: {
            el: [
                "Κόψτε τις ντομάτες και το αγγούρι σε κύβους.",
                "Κόψτε το κρεμμύδι σε λεπτές φέτες.",
                "Κόψτε την πιπεριά σε ροδέλες.",
                "Τοποθετήστε όλα τα λαχανικά σε ένα μεγάλο μπολ.",
                "Προσθέστε τις ελιές.",
                "Τοποθετήστε ένα μεγάλο κομμάτι φέτας πάνω από τη σαλάτα.",
                "Πασπαλίστε με ρίγανη.",
                "Περιχύστε με ελαιόλαδο.",
                "Αλατοπιπερώστε κατά προτίμηση και ανακατέψτε."
            ],
            en: [
                "Cut tomatoes and cucumber into cubes.",
                "Slice the onion thinly.",
                "Cut the bell pepper into rings.",
                "Place all vegetables in a large bowl.",
                "Add the olives.",
                "Place a large piece of feta cheese on top of the salad.",
                "Sprinkle with oregano.",
                "Drizzle with olive oil.",
                "Season with salt and pepper to taste and mix."
            ]
        }
    },
    {
        id: 2,
        title: { el: "Μουσακάς", en: "Moussaka" },
        ingredients: [
            { el: "μελιτζάνες", en: "eggplants" },
            { el: "πατάτες", en: "potatoes" },
            { el: "μοσχάρι", en: "ground beef" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ντομάτες", en: "tomatoes" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "μοσχοκάρυδο", en: "nutmeg" },
            { el: "γαρίφαλο", en: "clove" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλεύρι", en: "flour" },
            { el: "γάλα", en: "milk" },
            { el: "βούτυρο", en: "butter" },
            { el: "αυγά", en: "eggs" },
            { el: "παρμεζάνα", en: "parmesan cheese" }
        ],
        difficulty: "hard",
        prepTime: 90,
        cookTime: 45,
        calories: 650,
        servings: 8,
        tags: ["main dish", "meat", "baked"],
        description: {
            el: "Ένα κλασικό ελληνικό πιάτο με στρώσεις από μελιτζάνες, πατάτες και μοσχαρίσιο κιμά με μπεσαμέλ.",
            en: "A classic Greek dish with layers of eggplant, potatoes, and ground beef topped with béchamel sauce."
        },
        instructions: {
            el: [
                "Κόψτε τις μελιτζάνες και τις πατάτες σε λεπτές φέτες.",
                "Αλατίστε τις μελιτζάνες και αφήστε τις για 30 λεπτά. Στεγνώστε τις με χαρτί κουζίνας.",
                "Τηγανίστε ελαφρά τις πατάτες και τις μελιτζάνες και αφήστε τις στην άκρη.",
                "Σε ένα τηγάνι, σοτάρετε το κρεμμύδι και το σκόρδο μέχρι να μαλακώσουν.",
                "Προσθέστε τον κιμά και μαγειρέψτε μέχρι να ροδίσει.",
                "Προσθέστε τις ντομάτες, την κανέλα, το μοσχοκάρυδο και το γαρίφαλο.",
                "Αφήστε τη σάλτσα να σιγοβράσει για 30 λεπτά.",
                "Φτιάξτε την μπεσαμέλ: λιώστε το βούτυρο, προσθέστε το αλεύρι και στη συνέχεια το γάλα, ανακατεύοντας συνεχώς.",
                "Αφού πήξει η μπεσαμέλ, προσθέστε το τριμμένο τυρί και τα αυγά.",
                "Σε ένα ταψί, τοποθετήστε μια στρώση πατάτες, μια στρώση μελιτζάνες και μετά τον κιμά.",
                "Επαναλάβετε τις στρώσεις και καλύψτε με την μπεσαμέλ.",
                "Ψήστε στους 180°C για 45 λεπτά μέχρι να ροδίσει η επιφάνεια."
            ],
            en: [
                "Slice the eggplants and potatoes thinly.",
                "Salt the eggplants and let them sit for 30 minutes. Pat them dry with paper towels.",
                "Lightly fry the potatoes and eggplants and set them aside.",
                "In a pan, sauté the onion and garlic until soft.",
                "Add the ground beef and cook until browned.",
                "Add the tomatoes, cinnamon, nutmeg, and clove.",
                "Let the sauce simmer for 30 minutes.",
                "Make the béchamel sauce: melt the butter, add the flour, and then the milk, stirring constantly.",
                "Once the béchamel has thickened, add the grated cheese and eggs.",
                "In a baking dish, place a layer of potatoes, a layer of eggplants, and then the meat sauce.",
                "Repeat the layers and top with the béchamel sauce.",
                "Bake at 180°C for 45 minutes until the top is golden brown."
            ]
        }
    },
    {
        id: 3,
        title: { el: "Σπανακόπιτα", en: "Spanakopita" },
        ingredients: [
            { el: "σπανάκι", en: "spinach" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "πράσο", en: "leek" },
            { el: "άνηθος", en: "dill" },
            { el: "φέτα", en: "feta cheese" },
            { el: "αυγά", en: "eggs" },
            { el: "φύλλο κρούστας", en: "phyllo dough" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "medium",
        prepTime: 60,
        cookTime: 45,
        calories: 380,
        servings: 8,
        tags: ["pie", "vegetarian", "snack"],
        description: {
            el: "Παραδοσιακή ελληνική πίτα με σπανάκι, φέτα και αρωματικά βότανα.",
            en: "Traditional Greek pie with spinach, feta cheese, and aromatic herbs."
        },
        instructions: {
            el: [
                "Πλύνετε καλά και ψιλοκόψτε το σπανάκι.",
                "Σε ένα τηγάνι, σοτάρετε το κρεμμύδι και το πράσο μέχρι να μαλακώσουν.",
                "Προσθέστε το σπανάκι και μαγειρέψτε μέχρι να μαραθεί.",
                "Αφήστε το μείγμα να κρυώσει και προσθέστε τη φέτα, τα αυγά, τον άνηθο, αλάτι και πιπέρι.",
                "Λαδώστε ένα ταψί και στρώστε τα μισά φύλλα κρούστας, λαδώνοντας κάθε φύλλο.",
                "Απλώστε το μείγμα σπανακιού.",
                "Καλύψτε με τα υπόλοιπα φύλλα, λαδώνοντας και πάλι κάθε φύλλο.",
                "Χαράξτε την επιφάνεια σε κομμάτια.",
                "Ψήστε στους 180°C για 45 λεπτά ή μέχρι να ροδίσουν τα φύλλα."
            ],
            en: [
                "Wash and finely chop the spinach.",
                "In a pan, sauté the onion and leek until soft.",
                "Add the spinach and cook until wilted.",
                "Let the mixture cool and add the feta cheese, eggs, dill, salt, and pepper.",
                "Grease a baking dish and layer half of the phyllo sheets, brushing each sheet with olive oil.",
                "Spread the spinach mixture.",
                "Cover with the remaining phyllo sheets, again brushing each with olive oil.",
                "Score the top into serving pieces.",
                "Bake at 180°C for 45 minutes or until the phyllo is golden brown."
            ]
        }
    },
    {
        id: 4,
        title: { el: "Σουβλάκι", en: "Souvlaki" },
        ingredients: [
            { el: "χοιρινό", en: "pork" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "λεμόνι", en: "lemon" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ρίγανη", en: "oregano" },
            { el: "πιπεριά", en: "bell pepper" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "ντομάτες", en: "tomatoes" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" },
            { el: "πίτα", en: "pita bread" },
            { el: "τζατζίκι", en: "tzatziki" }
        ],
        difficulty: "easy",
        prepTime: 30,
        cookTime: 15,
        calories: 450,
        servings: 4,
        tags: ["main dish", "meat", "grilled"],
        description: {
            el: "Ζουμερά κομμάτια χοιρινού μαριναρισμένα με λεμόνι και μυρωδικά, ψημένα στα κάρβουνα.",
            en: "Juicy chunks of pork marinated with lemon and herbs, grilled to perfection."
        },
        instructions: {
            el: [
                "Κόψτε το χοιρινό σε κύβους 2-3 εκ.",
                "Σε ένα μπολ, ανακατέψτε το ελαιόλαδο, το χυμό λεμονιού, το σκόρδο, τη ρίγανη, το αλάτι και το πιπέρι.",
                "Προσθέστε το χοιρινό και ανακατέψτε καλά. Μαρινάρετε για τουλάχιστον 2 ώρες ή όλο το βράδυ.",
                "Κόψτε τις πιπεριές και τα κρεμμύδια σε μεγάλα κομμάτια.",
                "Περάστε το κρέας και τα λαχανικά σε ξύλινα σουβλάκια, εναλλάσσοντας.",
                "Ψήστε στα κάρβουνα ή σε δυνατό γκριλ για 12-15 λεπτά, γυρίζοντας τακτικά.",
                "Σερβίρετε με ζεστή πίτα, ντομάτες και τζατζίκι."
            ],
            en: [
                "Cut the pork into 2-3 cm cubes.",
                "In a bowl, mix the olive oil, lemon juice, garlic, oregano, salt, and pepper.",
                "Add the pork and mix well. Marinate for at least 2 hours or overnight.",
                "Cut the bell peppers and onions into large pieces.",
                "Thread the meat and vegetables onto wooden skewers, alternating.",
                "Grill over charcoal or on a high heat grill for 12-15 minutes, turning regularly.",
                "Serve with warm pita bread, tomatoes, and tzatziki."
            ]
        }
    },
    {
        id: 5,
        title: { el: "Τζατζίκι", en: "Tzatziki" },
        ingredients: [
            { el: "γιαούρτι", en: "Greek yogurt" },
            { el: "αγγούρι", en: "cucumber" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "ξύδι", en: "vinegar" },
            { el: "άνηθος", en: "dill" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 0,
        calories: 120,
        servings: 6,
        tags: ["dip", "vegetarian", "appetizer"],
        description: {
            el: "Δροσερό ντιπ με βάση το γιαούρτι, τέλειο συνοδευτικό για σουβλάκια και ψητά κρέατα.",
            en: "Cool yogurt-based dip, perfect as a side for souvlaki and grilled meats."
        },
        instructions: {
            el: [
                "Τρίψτε το αγγούρι και στραγγίστε το καλά από τα υγρά του.",
                "Λιώστε το σκόρδο και ψιλοκόψτε τον άνηθο.",
                "Σε ένα μπολ, ανακατέψτε το γιαούρτι με το τριμμένο αγγούρι.",
                "Προσθέστε το σκόρδο, το ελαιόλαδο, το ξύδι και τον άνηθο.",
                "Αλατοπιπερώστε κατά προτίμηση.",
                "Καλύψτε το μπολ και βάλτε το στο ψυγείο για τουλάχιστον 1 ώρα πριν το σερβίρισμα."
            ],
            en: [
                "Grate the cucumber and drain it well.",
                "Crush the garlic and finely chop the dill.",
                "In a bowl, mix the yogurt with the grated cucumber.",
                "Add the garlic, olive oil, vinegar, and dill.",
                "Season with salt and pepper to taste.",
                "Cover the bowl and refrigerate for at least 1 hour before serving."
            ]
        }
    },
    {
        id: 6,
        title: { el: "Παστίτσιο", en: "Pastitsio" },
        ingredients: [
            { el: "μακαρόνια", en: "pasta" },
            { el: "μοσχάρι", en: "ground beef" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ντομάτες", en: "tomatoes" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "μοσχοκάρυδο", en: "nutmeg" },
            { el: "γαρίφαλο", en: "clove" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλεύρι", en: "flour" },
            { el: "γάλα", en: "milk" },
            { el: "βούτυρο", en: "butter" },
            { el: "αυγά", en: "eggs" },
            { el: "παρμεζάνα", en: "parmesan cheese" }
        ],
        difficulty: "medium",
        prepTime: 60,
        cookTime: 45,
        calories: 620,
        servings: 8,
        tags: ["main dish", "pasta", "baked"],
        description: {
            el: "Κλασικό ελληνικό πιάτο με στρώσεις μακαρονιών, μοσχαρίσιου κιμά και κρεμώδους μπεσαμέλ.",
            en: "Classic Greek dish with layers of pasta, ground beef and creamy béchamel sauce."
        },
        instructions: {
            el: [
                "Βράστε τα μακαρόνια σύμφωνα με τις οδηγίες της συσκευασίας.",
                "Σε ένα τηγάνι, σοτάρετε το κρεμμύδι και το σκόρδο μέχρι να μαλακώσουν.",
                "Προσθέστε τον κιμά και μαγειρέψτε μέχρι να ροδίσει.",
                "Προσθέστε τις ντομάτες, την κανέλα, το μοσχοκάρυδο και το γαρίφαλο.",
                "Αφήστε τη σάλτσα να σιγοβράσει για 20 λεπτά.",
                "Φτιάξτε την μπεσαμέλ: λιώστε το βούτυρο, προσθέστε το αλεύρι και στη συνέχεια το γάλα, ανακατεύοντας συνεχώς.",
                "Αφού πήξει η μπεσαμέλ, προσθέστε το τριμμένο τυρί και τα αυγά.",
                "Σε ένα ταψί, τοποθετήστε μια στρώση μακαρόνια, τη σάλτσα κιμά και τέλος την μπεσαμέλ.",
                "Ψήστε στους 180°C για 45 λεπτά μέχρι να ροδίσει η επιφάνεια."
            ],
            en: [
                "Cook the pasta according to package instructions.",
                "In a pan, sauté the onion and garlic until soft.",
                "Add the ground beef and cook until browned.",
                "Add the tomatoes, cinnamon, nutmeg, and clove.",
                "Let the sauce simmer for 20 minutes.",
                "Make the béchamel sauce: melt the butter, add the flour, and then the milk, stirring constantly.",
                "Once the béchamel has thickened, add the grated cheese and eggs.",
                "In a baking dish, place a layer of pasta, the meat sauce, and finally the béchamel sauce.",
                "Bake at 180°C for 45 minutes until the top is golden brown."
            ]
        }
    },
    {
        id: 7,
        title: { el: "Γεμιστά", en: "Gemista (Stuffed Vegetables)" },
        ingredients: [
            { el: "ντομάτες", en: "tomatoes" },
            { el: "πιπεριές", en: "bell peppers" },
            { el: "κολοκύθια", en: "zucchini" },
            { el: "μελιτζάνες", en: "eggplants" },
            { el: "ρύζι", en: "rice" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "σκόρδο", en: "garlic" },
            { el: "μαϊντανός", en: "parsley" },
            { el: "άνηθος", en: "dill" },
            { el: "δυόσμος", en: "mint" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" },
            { el: "πατάτες", en: "potatoes" }
        ],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 60,
        calories: 320,
        servings: 6,
        tags: ["main dish", "vegetarian", "summer"],
        description: {
            el: "Λαχανικά γεμιστά με ρύζι και μυρωδικά, μαγειρεμένα σε σάλτσα ντομάτας.",
            en: "Vegetables stuffed with rice and herbs, cooked in tomato sauce."
        },
        instructions: {
            el: [
                "Κόψτε τα καπάκια από τις ντομάτες και τις πιπεριές και αφαιρέστε το εσωτερικό τους.",
                "Κόψτε τα κολοκύθια και τις μελιτζάνες στη μέση και αφαιρέστε το εσωτερικό τους.",
                "Ψιλοκόψτε το εσωτερικό των ντοματών και ανακατέψτε με το ρύζι, το κρεμμύδι, το σκόρδο και τα μυρωδικά.",
                "Προσθέστε ελαιόλαδο, αλάτι και πιπέρι και ανακατέψτε καλά.",
                "Γεμίστε τα λαχανικά με το μείγμα ρυζιού.",
                "Κόψτε τις πατάτες σε κύβους και τοποθετήστε τις γύρω από τα γεμιστά σε ένα ταψί.",
                "Περιχύστε με ελαιόλαδο και λίγο νερό.",
                "Ψήστε στους 180°C για 1 ώρα ή μέχρι να μαλακώσουν τα λαχανικά και να ψηθεί το ρύζι."
            ],
            en: [
                "Cut the tops off the tomatoes and peppers and remove their insides.",
                "Cut the zucchini and eggplants in half and scoop out their insides.",
                "Chop the insides of the tomatoes and mix with rice, onion, garlic, and herbs.",
                "Add olive oil, salt, and pepper and mix well.",
                "Fill the vegetables with the rice mixture.",
                "Cut the potatoes into cubes and place them around the stuffed vegetables in a baking dish.",
                "Drizzle with olive oil and a little water.",
                "Bake at 180°C for 1 hour or until the vegetables are soft and the rice is cooked."
            ]
        }
    },
    {
        id: 8,
        title: { el: "Μπακλαβάς", en: "Baklava" },
        ingredients: [
            { el: "φύλλο κρούστας", en: "phyllo dough" },
            { el: "καρύδια", en: "walnuts" },
            { el: "αμύγδαλα", en: "almonds" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "γαρίφαλο", en: "clove" },
            { el: "βούτυρο", en: "butter" },
            { el: "ζάχαρη", en: "sugar" },
            { el: "μέλι", en: "honey" },
            { el: "νερό", en: "water" },
            { el: "λεμόνι", en: "lemon" }
        ],
        difficulty: "hard",
        prepTime: 60,
        cookTime: 45,
        calories: 420,
        servings: 20,
        tags: ["dessert", "sweet", "traditional"],
        description: {
            el: "Παραδοσιακό γλυκό με στρώσεις από φύλλο κρούστας, ξηρούς καρπούς και σιρόπι μελιού.",
            en: "Traditional dessert with layers of phyllo dough, nuts, and honey syrup."
        },
        instructions: {
            el: [
                "Αλέστε τα καρύδια και τα αμύγδαλα και ανακατέψτε με την κανέλα και το γαρίφαλο.",
                "Βουτυρώστε ένα ταψί και στρώστε τα μισά φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.",
                "Απλώστε το μείγμα ξηρών καρπών.",
                "Συνεχίστε με τα υπόλοιπα φύλλα, βουτυρώνοντας κάθε φύλλο.",
                "Κόψτε τον μπακλαβά σε διαμάντια πριν το ψήσιμο.",
                "Ψήστε στους 170°C για 45 λεπτά ή μέχρι να ροδίσουν τα φύλλα.",
                "Ετοιμάστε το σιρόπι: βράστε το νερό με τη ζάχαρη, το μέλι και το λεμόνι για 10 λεπτά.",
                "Περιχύστε τον ζεστό μπακλαβά με το κρύο σιρόπι ή το αντίθετο."
            ],
            en: [
                "Grind the walnuts and almonds and mix with cinnamon and clove.",
                "Butter a baking dish and layer half of the phyllo sheets, buttering each sheet.",
                "Spread the nut mixture.",
                "Continue with the remaining phyllo sheets, buttering each sheet.",
                "Cut the baklava into diamond shapes before baking.",
                "Bake at 170°C for 45 minutes or until the phyllo is golden brown.",
                "Prepare the syrup: boil water with sugar, honey, and lemon for 10 minutes.",
                "Pour the cold syrup over the hot baklava or vice versa."
            ]
        }
    },
    {
        id: 9,
        title: { el: "Φασολάδα", en: "Fasolada (Bean Soup)" },
        ingredients: [
            { el: "φασόλια", en: "white beans" },
            { el: "καρότα", en: "carrots" },
            { el: "σέλινο", en: "celery" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ντομάτες", en: "tomatoes" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" },
            { el: "θυμάρι", en: "thyme" }
        ],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 90,
        calories: 280,
        servings: 6,
        tags: ["soup", "vegetarian", "winter"],
        description: {
            el: "Παραδοσιακή ελληνική σούπα με φασόλια, λαχανικά και ελαιόλαδο.",
            en: "Traditional Greek bean soup with vegetables and olive oil."
        },
        instructions: {
            el: [
                "Μουλιάστε τα φασόλια από το προηγούμενο βράδυ.",
                "Στραγγίξτε τα φασόλια και βράστε τα σε φρέσκο νερό για 30 λεπτά.",
                "Σε μια κατσαρόλα, σοτάρετε το κρεμμύδι, το σκόρδο, τα καρότα και το σέλινο.",
                "Προσθέστε τις ντομάτες και το θυμάρι και αφήστε να σιγοβράσουν για 5 λεπτά.",
                "Προσθέστε τα φασόλια με το νερό τους και μαγειρέψτε σε χαμηλή φωτιά για περίπου 60 λεπτά ή μέχρι να μαλακώσουν τα φασόλια.",
                "Προσθέστε αλάτι και πιπέρι.",
                "Σερβίρετε με φρέσκο ελαιόλαδο από πάνω."
            ],
            en: [
                "Soak the beans overnight.",
                "Drain the beans and boil them in fresh water for 30 minutes.",
                "In a pot, sauté the onion, garlic, carrots, and celery.",
                "Add the tomatoes and thyme and let them simmer for 5 minutes.",
                "Add the beans with their water and cook on low heat for about 60 minutes or until the beans are soft.",
                "Add salt and pepper.",
                "Serve with fresh olive oil on top."
            ]
        }
    },
    {
        id: 10,
        title: { el: "Γαλακτομπούρεκο", en: "Galaktoboureko" },
        ingredients: [
            { el: "φύλλο κρούστας", en: "phyllo dough" },
            { el: "γάλα", en: "milk" },
            { el: "σιμιγδάλι", en: "semolina" },
            { el: "αυγά", en: "eggs" },
            { el: "ζάχαρη", en: "sugar" },
            { el: "βούτυρο", en: "butter" },
            { el: "βανίλια", en: "vanilla" },
            { el: "λεμόνι", en: "lemon" },
            { el: "νερό", en: "water" },
            { el: "κανέλα", en: "cinnamon" }
        ],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 45,
        calories: 380,
        servings: 12,
        tags: ["dessert", "sweet", "traditional"],
        description: {
            el: "Παραδοσιακό γλυκό με κρέμα σιμιγδαλιού τυλιγμένη σε τραγανό φύλλο κρούστας και σιρόπι.",
            en: "Traditional dessert with semolina custard wrapped in crispy phyllo dough and syrup."
        },
        instructions: {
            el: [
                "Βράστε το γάλα με τη μισή ζάχαρη.",
                "Ρίξτε το σιμιγδάλι ανακατεύοντας συνεχώς για να μη σβολιάσει.",
                "Χτυπήστε τα αυγά με την υπόλοιπη ζάχαρη και προσθέστε τα στο μείγμα του γάλακτος.",
                "Προσθέστε τη βανίλια και αφήστε την κρέμα να κρυώσει ελαφρώς.",
                "Βουτυρώστε ένα ταψί και στρώστε τα μισά φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.",
                "Απλώστε την κρέμα και καλύψτε με τα υπόλοιπα φύλλα, βουτυρώνοντας κάθε φύλλο.",
                "Ψήστε στους 180°C για 45 λεπτά.",
                "Ετοιμάστε το σιρόπι: βράστε νερό με ζάχαρη, λεμόνι και κανέλα για 5 λεπτά.",
                "Περιχύστε το ζεστό γαλακτομπούρεκο με το κρύο σιρόπι."
            ],
            en: [
                "Boil the milk with half the sugar.",
                "Add the semolina while stirring constantly to avoid lumps.",
                "Beat the eggs with the remaining sugar and add them to the milk mixture.",
                "Add the vanilla and let the custard cool slightly.",
                "Butter a baking dish and layer half of the phyllo sheets, buttering each sheet.",
                "Spread the custard and cover with the remaining phyllo sheets, buttering each sheet.",
                "Bake at 180°C for 45 minutes.",
                "Prepare the syrup: boil water with sugar, lemon, and cinnamon for 5 minutes.",
                "Pour the cold syrup over the hot galaktoboureko."
            ]
        }
    },
    {
        id: 11,
        title: { el: "Κλέφτικο", en: "Kleftiko" },
        ingredients: [
            { el: "αρνί", en: "lamb" },
            { el: "πατάτες", en: "potatoes" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "σκόρδο", en: "garlic" },
            { el: "δεντρολίβανο", en: "rosemary" },
            { el: "θυμάρι", en: "thyme" },
            { el: "λεμόνι", en: "lemon" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" },
            { el: "φέτα", en: "feta cheese" }
        ],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 180,
        calories: 550,
        servings: 6,
        tags: ["main dish", "meat", "baked", "traditional"],
        description: {
            el: "Παραδοσιακό πιάτο με αρνί και λαχανικά μαγειρεμένα αργά στο φούρνο σε λαδόκολλα.",
            en: "Traditional dish with lamb and vegetables slow-cooked in the oven in parchment paper."
        },
        instructions: {
            el: [
                "Κόψτε το αρνί σε μεγάλα κομμάτια και τις πατάτες σε χοντρές φέτες.",
                "Κόψτε τα κρεμμύδια σε τέταρτα και ψιλοκόψτε το σκόρδο.",
                "Τοποθετήστε λαδόκολλα σε ένα μεγάλο ταψί και αλείψτε με ελαιόλαδο.",
                "Βάλτε το αρνί, τις πατάτες και τα κρεμμύδια πάνω στη λαδόκολλα.",
                "Προσθέστε το σκόρδο, το δεντρολίβανο, το θυμάρι, και τριμμένη φλούδα λεμονιού.",
                "Περιχύστε με χυμό λεμονιού και ελαιόλαδο.",
                "Αλατοπιπερώστε και θρυμματίστε λίγη φέτα από πάνω.",
                "Κλείστε τη λαδόκολλα σφιχτά και ψήστε στους 160°C για περίπου 3 ώρες ή μέχρι το αρνί να γίνει τρυφερό."
            ],
            en: [
                "Cut the lamb into large pieces and the potatoes into thick slices.",
                "Cut the onions into quarters and finely chop the garlic.",
                "Place parchment paper in a large baking dish and brush with olive oil.",
                "Put the lamb, potatoes, and onions on the parchment paper.",
                "Add the garlic, rosemary, thyme, and grated lemon zest.",
                "Drizzle with lemon juice and olive oil.",
                "Season with salt and pepper and crumble some feta cheese on top.",
                "Seal the parchment paper tightly and bake at 160°C for about 3 hours or until the lamb is tender."
            ]
        }
    },
    {
        id: 12,
        title: { el: "Γιουβαρλάκια", en: "Giouvarlakia (Meatball Soup)" },
        ingredients: [
            { el: "μοσχάρι", en: "ground beef" },
            { el: "ρύζι", en: "rice" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "μαϊντανός", en: "parsley" },
            { el: "δυόσμος", en: "mint" },
            { el: "αυγά", en: "eggs" },
            { el: "λεμόνι", en: "lemon" },
            { el: "αλεύρι", en: "flour" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 60,
        calories: 380,
        servings: 6,
        tags: ["soup", "meat", "winter"],
        description: {
            el: "Παραδοσιακή σούπα με κεφτεδάκια από μοσχαρίσιο κιμά και ρύζι σε αυγολέμονο.",
            en: "Traditional soup with meatballs made from ground beef and rice in an egg-lemon sauce."
        },
        instructions: {
            el: [
                "Σε ένα μπολ, αναμείξτε τον κιμά με το ρύζι, το ψιλοκομμένο κρεμμύδι, τον μαϊντανό και τον δυόσμο.",
                "Προσθέστε ένα αυγό, αλάτι και πιπέρι και ζυμώστε καλά.",
                "Πλάστε μικρά κεφτεδάκια και αλευρώστε τα ελαφρά.",
                "Βράστε 2 λίτρα νερό σε μια κατσαρόλα και προσθέστε τα κεφτεδάκια.",
                "Μαγειρέψτε σε χαμηλή φωτιά για περίπου 40 λεπτά.",
                "Για το αυγολέμονο, χτυπήστε 2 αυγά και προσθέστε σταδιακά το χυμό λεμονιού.",
                "Προσθέστε σταδιακά ζεστό ζωμό από τη σούπα στο μείγμα αυγολέμονου, ανακατεύοντας συνεχώς.",
                "Απομακρύνετε την κατσαρόλα από τη φωτιά και προσθέστε το αυγολέμονο, ανακατεύοντας απαλά."
            ],
            en: [
                "In a bowl, mix the ground beef with rice, finely chopped onion, parsley, and mint.",
                "Add an egg, salt, and pepper and knead well.",
                "Form small meatballs and lightly coat them with flour.",
                "Boil 2 liters of water in a pot and add the meatballs.",
                "Cook on low heat for about 40 minutes.",
                "For the egg-lemon sauce, beat 2 eggs and gradually add lemon juice.",
                "Gradually add hot broth from the soup to the egg-lemon mixture, stirring constantly.",
                "Remove the pot from the heat and add the egg-lemon sauce, stirring gently."
            ]
        }
    },
    {
        id: 13,
        title: { el: "Σαγανάκι", en: "Saganaki" },
        ingredients: [
            { el: "κεφαλοτύρι", en: "kefalotyri cheese" },
            { el: "αλεύρι", en: "flour" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "λεμόνι", en: "lemon" }
        ],
        difficulty: "easy",
        prepTime: 5,
        cookTime: 5,
        calories: 320,
        servings: 4,
        tags: ["appetizer", "vegetarian", "quick"],
        description: {
            el: "Τυρί τηγανισμένο μέχρι να γίνει χρυσαφένιο και τραγανό, σερβίρεται με λεμόνι.",
            en: "Cheese fried until golden and crispy, served with lemon."
        },
        instructions: {
            el: [
                "Κόψτε το κεφαλοτύρι σε παχιές φέτες περίπου 1 εκ.",
                "Αλευρώστε τις φέτες τυριού και από τις δύο πλευρές.",
                "Ζεστάνετε το ελαιόλαδο σε ένα τηγάνι σε μέτρια-υψηλή φωτιά.",
                "Τηγανίστε το τυρί για 2 λεπτά από κάθε πλευρά ή μέχρι να ροδίσει.",
                "Αφαιρέστε από το τηγάνι και στραγγίξτε σε χαρτί κουζίνας.",
                "Σερβίρετε αμέσως με φέτες λεμονιού."
            ],
            en: [
                "Cut the kefalotyri cheese into thick slices about 1 cm.",
                "Coat the cheese slices with flour on both sides.",
                "Heat the olive oil in a pan over medium-high heat.",
                "Fry the cheese for 2 minutes on each side or until golden brown.",
                "Remove from the pan and drain on paper towels.",
                "Serve immediately with lemon wedges."
            ]
        }
    },
    {
        id: 14,
        title: { el: "Γύρος Χοιρινός", en: "Pork Gyros" },
        ingredients: [
            { el: "χοιρινό", en: "pork" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "λεμόνι", en: "lemon" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ρίγανη", en: "oregano" },
            { el: "πάπρικα", en: "paprika" },
            { el: "πίτα", en: "pita bread" },
            { el: "ντομάτες", en: "tomatoes" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "τζατζίκι", en: "tzatziki" },
            { el: "πατάτες", en: "potatoes" }
        ],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 30,
        calories: 650,
        servings: 4,
        tags: ["main dish", "meat", "street food"],
        description: {
            el: "Παραδοσιακό ελληνικό φαστ φουντ με μαριναρισμένο χοιρινό, πίτα και γαρνιτούρες.",
            en: "Traditional Greek fast food with marinated pork, pita bread, and garnishes."
        },
        instructions: {
            el: [
                "Κόψτε το χοιρινό σε λεπτές λωρίδες.",
                "Σε ένα μπολ, ανακατέψτε το ελαιόλαδο, το χυμό λεμονιού, το ψιλοκομμένο σκόρδο, τη ρίγανη και την πάπρικα.",
                "Προσθέστε το χοιρινό και ανακατέψτε καλά. Μαρινάρετε για τουλάχιστον 2 ώρες ή όλο το βράδυ.",
                "Τηγανίστε τις πατάτες μέχρι να γίνουν χρυσαφένιες και τραγανές.",
                "Μαγειρέψτε το χοιρινό σε δυνατή φωτιά μέχρι να ροδίσει και να ψηθεί καλά.",
                "Ζεστάνετε τις πίτες στο τηγάνι ή στο φούρνο.",
                "Για το σερβίρισμα, απλώστε τζατζίκι πάνω στην πίτα, προσθέστε το χοιρινό, ντομάτες και κρεμμύδι, και συνοδέψτε με τις τηγανητές πατάτες."
            ],
            en: [
                "Cut the pork into thin strips.",
                "In a bowl, mix olive oil, lemon juice, minced garlic, oregano, and paprika.",
                "Add the pork and mix well. Marinate for at least 2 hours or overnight.",
                "Fry the potatoes until golden and crispy.",
                "Cook the pork over high heat until browned and cooked through.",
                "Warm the pita bread in a pan or oven.",
                "To serve, spread tzatziki on the pita, add the pork, tomatoes, and onion, and serve with the fried potatoes."
            ]
        }
    },
    {
        id: 15,
        title: { el: "Μπουγάτσα", en: "Bougatsa" },
        ingredients: [
            { el: "φύλλο κρούστας", en: "phyllo dough" },
            { el: "γάλα", en: "milk" },
            { el: "σιμιγδάλι", en: "semolina" },
            { el: "αυγά", en: "eggs" },
            { el: "ζάχαρη", en: "sugar" },
            { el: "βούτυρο", en: "butter" },
            { el: "βανίλια", en: "vanilla" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "άχνη ζάχαρη", en: "powdered sugar" }
        ],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 30,
        calories: 350,
        servings: 8,
        tags: ["dessert", "breakfast", "sweet"],
        description: {
            el: "Παραδοσιακό ελληνικό γλυκό με κρέμα ανάμεσα σε τραγανά φύλλα κρούστας, πασπαλισμένο με ζάχαρη και κανέλα.",
            en: "Traditional Greek sweet with custard between crispy phyllo sheets, sprinkled with sugar and cinnamon."
        },
        instructions: {
            el: [
                "Σε μια κατσαρόλα, ζεστάνετε το γάλα με τη μισή ζάχαρη.",
                "Προσθέστε σταδιακά το σιμιγδάλι, ανακατεύοντας συνεχώς για να μη σβολιάσει.",
                "Μαγειρέψτε σε χαμηλή φωτιά μέχρι να πήξει η κρέμα.",
                "Αφαιρέστε από τη φωτιά και αφήστε να κρυώσει λίγο.",
                "Χτυπήστε τα αυγά με την υπόλοιπη ζάχαρη και προσθέστε τα στην κρέμα μαζί με τη βανίλια.",
                "Βουτυρώστε ένα ταψί και στρώστε τα μισά φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.",
                "Απλώστε την κρέμα και καλύψτε με τα υπόλοιπα φύλλα, βουτυρώνοντας κάθε φύλλο.",
                "Ψήστε στους 180°C για 30 λεπτά ή μέχρι να ροδίσουν τα φύλλα.",
                "Αφήστε να κρυώσει, κόψτε σε κομμάτια και πασπαλίστε με άχνη ζάχαρη και κανέλα."
            ],
            en: [
                "In a pot, heat the milk with half the sugar.",
                "Gradually add the semolina, stirring constantly to avoid lumps.",
                "Cook on low heat until the custard thickens.",
                "Remove from heat and let it cool slightly.",
                "Beat the eggs with the remaining sugar and add them to the custard along with the vanilla.",
                "Butter a baking dish and layer half of the phyllo sheets, buttering each sheet.",
                "Spread the custard and cover with the remaining phyllo sheets, buttering each sheet.",
                "Bake at 180°C for 30 minutes or until the phyllo is golden brown.",
                "Let it cool, cut into pieces, and sprinkle with powdered sugar and cinnamon."
            ]
        }
    },
    {
        id: 16,
        title: { el: "Ντολμαδάκια", en: "Dolmades" },
        ingredients: [
            { el: "αμπελόφυλλα", en: "grape leaves" },
            { el: "ρύζι", en: "rice" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "μαϊντανός", en: "parsley" },
            { el: "δυόσμος", en: "mint" },
            { el: "άνηθος", en: "dill" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "λεμόνι", en: "lemon" },
            { el: "πιπέρι", en: "pepper" },
            { el: "αλάτι", en: "salt" }
        ],
        difficulty: "hard",
        prepTime: 60,
        cookTime: 45,
        calories: 250,
        servings: 6,
        tags: ["appetizer", "vegetarian", "traditional"],
        description: {
            el: "Αμπελόφυλλα γεμιστά με ρύζι και αρωματικά βότανα, μαγειρεμένα σε ζωμό λεμονιού.",
            en: "Grape leaves stuffed with rice and aromatic herbs, cooked in lemon broth."
        },
        instructions: {
            el: [
                "Βράστε τα αμπελόφυλλα για 5 λεπτά και στραγγίξτε τα.",
                "Σε ένα μπολ, ανακατέψτε το ρύζι με το ψιλοκομμένο κρεμμύδι, τον μαϊντανό, τον άνηθο, τον δυόσμο, αλάτι, πιπέρι και ελαιόλαδο.",
                "Απλώστε κάθε αμπελόφυλλο και τοποθετήστε λίγη γέμιση στο κέντρο.",
                "Διπλώστε τις άκρες και τυλίξτε σφιχτά σε μικρά ρολά.",
                "Στρώστε μερικά αμπελόφυλλα στον πάτο μιας κατσαρόλας και τοποθετήστε τα ντολμαδάκια το ένα δίπλα στο άλλο.",
                "Τοποθετήστε ένα πιάτο ανάποδα πάνω τους για να μείνουν στη θέση τους.",
                "Προσθέστε νερό, ελαιόλαδο και χυμό λεμονιού μέχρι να καλυφθούν.",
                "Μαγειρέψτε σε χαμηλή φωτιά για 45 λεπτά ή μέχρι να μαλακώσει το ρύζι.",
                "Σερβίρετε με έξτρα χυμό λεμονιού."
            ],
            en: [
                "Boil the grape leaves for 5 minutes and drain them.",
                "In a bowl, mix the rice with finely chopped onion, parsley, dill, mint, salt, pepper, and olive oil.",
                "Lay out each grape leaf and place a small amount of filling in the center.",
                "Fold the edges and roll tightly into small rolls.",
                "Layer some grape leaves on the bottom of a pot and place the dolmades next to each other.",
                "Place a plate upside down on top to keep them in place.",
                "Add water, olive oil, and lemon juice until covered.",
                "Cook on low heat for 45 minutes or until the rice is soft.",
                "Serve with extra lemon juice."
            ]
        }
    },
    {
        id: 17,
        title: { el: "Χταπόδι στα Κάρβουνα", en: "Grilled Octopus" },
        ingredients: [
            { el: "χταπόδι", en: "octopus" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "λεμόνι", en: "lemon" },
            { el: "ρίγανη", en: "oregano" },
            { el: "σκόρδο", en: "garlic" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 60,
        calories: 180,
        servings: 4,
        tags: ["seafood", "appetizer", "grilled"],
        description: {
            el: "Τρυφερό χταπόδι ψημένο στα κάρβουνα με λεμόνι και ρίγανη.",
            en: "Tender octopus grilled over charcoal with lemon and oregano."
        },
        instructions: {
            el: [
                "Καθαρίστε το χταπόδι και αφαιρέστε το στόμα.",
                "Χτυπήστε το χταπόδι σε μια πέτρα ή επιφάνεια κοπής για να γίνει πιο τρυφερό.",
                "Βράστε το χταπόδι σε μια κατσαρόλα με νερό για περίπου 40-50 λεπτά ή μέχρι να μαλακώσει.",
                "Αφαιρέστε από το νερό και αφήστε να στεγνώσει.",
                "Κόψτε το χταπόδι σε κομμάτια.",
                "Ζεστάνετε τα κάρβουνα στην ψησταριά.",
                "Αλείψτε το χταπόδι με ελαιόλαδο και ψήστε για 2-3 λεπτά από κάθε πλευρά.",
                "Σερβίρετε με λεμόνι, ελαιόλαδο, ρίγανη και ψιλοκομμένο σκόρδο."
            ],
            en: [
                "Clean the octopus and remove the mouth.",
                "Beat the octopus on a rock or cutting surface to tenderize it.",
                "Boil the octopus in a pot of water for about 40-50 minutes or until tender.",
                "Remove from the water and let it dry.",
                "Cut the octopus into pieces.",
                "Heat the charcoal in the grill.",
                "Brush the octopus with olive oil and grill for 2-3 minutes on each side.",
                "Serve with lemon, olive oil, oregano, and minced garlic."
            ]
        }
    },
    {
        id: 18,
        title: { el: "Κουλούρια", en: "Koulourakia" },
        ingredients: [
            { el: "αλεύρι", en: "flour" },
            { el: "βούτυρο", en: "butter" },
            { el: "ζάχαρη", en: "sugar" },
            { el: "αυγά", en: "eggs" },
            { el: "γάλα", en: "milk" },
            { el: "baking powder", en: "baking powder" },
            { el: "βανίλια", en: "vanilla" },
            { el: "πορτοκάλι", en: "orange" },
            { el: "σουσάμι", en: "sesame seeds" }
        ],
        difficulty: "medium",
        prepTime: 60,
        cookTime: 20,
        calories: 180,
        servings: 24,
        tags: ["cookies", "dessert", "easter"],
        description: {
            el: "Παραδοσιακά ελληνικά μπισκότα βανίλιας με άρωμα πορτοκαλιού, πασπαλισμένα με σουσάμι.",
            en: "Traditional Greek vanilla cookies with orange flavor, sprinkled with sesame seeds."
        },
        instructions: {
            el: [
                "Χτυπήστε το βούτυρο και τη ζάχαρη μέχρι να αφρατέψουν.",
                "Προσθέστε τα αυγά ένα-ένα, χτυπώντας καλά μετά από κάθε προσθήκη.",
                "Προσθέστε το ξύσμα πορτοκαλιού, το χυμό πορτοκαλιού και τη βανίλια.",
                "Σε ξεχωριστό μπολ, ανακατέψτε το αλεύρι με το baking powder.",
                "Προσθέστε σταδιακά το μείγμα αλευριού στο μείγμα βουτύρου, εναλλάσσοντας με το γάλα.",
                "Αφήστε τη ζύμη να ξεκουραστεί για 30 λεπτά.",
                "Πλάστε τη ζύμη σε μικρά κορδόνια και διαμορφώστε σε διάφορα σχήματα (σπείρες, πλεξούδες, κλπ).",
                "Αλείψτε με αυγό και πασπαλίστε με σουσάμι.",
                "Ψήστε στους 180°C για 15-20 λεπτά ή μέχρι να χρυσίσουν ελαφρά."
            ],
            en: [
                "Beat the butter and sugar until fluffy.",
                "Add the eggs one by one, beating well after each addition.",
                "Add the orange zest, orange juice, and vanilla.",
                "In a separate bowl, mix the flour with baking powder.",
                "Gradually add the flour mixture to the butter mixture, alternating with milk.",
                "Let the dough rest for 30 minutes.",
                "Shape the dough into small cords and form into various shapes (spirals, braids, etc.).",
                "Brush with egg and sprinkle with sesame seeds.",
                "Bake at 180°C for 15-20 minutes or until lightly golden."
            ]
        }
    },
    {
        id: 19,
        title: { el: "Αρνάκι Φρικασέ", en: "Lamb Fricassee" },
        ingredients: [
            { el: "αρνί", en: "lamb" },
            { el: "μαρούλι", en: "lettuce" },
            { el: "φρέσκα κρεμμυδάκια", en: "spring onions" },
            { el: "άνηθος", en: "dill" },
            { el: "λεμόνι", en: "lemon" },
            { el: "αυγά", en: "eggs" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλεύρι", en: "flour" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 90,
        calories: 480,
        servings: 6,
        tags: ["main dish", "meat", "easter", "spring"],
        description: {
            el: "Παραδοσιακό πασχαλινό πιάτο με αρνί και χόρτα σε σάλτσα αυγολέμονο.",
            en: "Traditional Easter dish with lamb and greens in an egg-lemon sauce."
        },
        instructions: {
            el: [
                "Κόψτε το αρνί σε μερίδες και τσιγαρίστε το σε ελαιόλαδο μέχρι να ροδίσει.",
                "Προσθέστε τα ψιλοκομμένα φρέσκα κρεμμυδάκια και τσιγαρίστε για λίγα λεπτά.",
                "Πασπαλίστε με λίγο αλεύρι και ανακατέψτε.",
                "Προσθέστε ζεστό νερό μέχρι να καλυφθεί το κρέας και μαγειρέψτε σε χαμηλή φωτιά για περίπου 1 ώρα.",
                "Πλύνετε και κόψτε το μαρούλι σε χοντρές λωρίδες.",
                "Προσθέστε το μαρούλι και τον άνηθο στην κατσαρόλα και μαγειρέψτε για άλλα 20-30 λεπτά.",
                "Για το αυγολέμονο, χτυπήστε τα αυγά και προσθέστε σταδιακά το χυμό λεμονιού.",
                "Προσθέστε σταδιακά ζεστό ζωμό από τη σούπα στο μείγμα αυγολέμονου, ανακατεύοντας συνεχώς.",
                "Απομακρύνετε την κατσαρόλα από τη φωτιά και προσθέστε το αυγολέμονο, ανακατεύοντας απαλά."
            ],
            en: [
                "Cut the lamb into portions and sauté in olive oil until browned.",
                "Add the chopped spring onions and sauté for a few minutes.",
                "Sprinkle with some flour and stir.",
                "Add hot water until the meat is covered and cook on low heat for about 1 hour.",
                "Wash and cut the lettuce into thick strips.",
                "Add the lettuce and dill to the pot and cook for another 20-30 minutes.",
                "For the egg-lemon sauce, beat the eggs and gradually add the lemon juice.",
                "Gradually add hot broth from the soup to the egg-lemon mixture, stirring constantly.",
                "Remove the pot from the heat and add the egg-lemon sauce, stirring gently."
            ]
        }
    },
    {
        id: 20,
        title: { el: "Ταραμοσαλάτα", en: "Taramasalata" },
        ingredients: [
            { el: "ταραμάς", en: "fish roe" },
            { el: "ψωμί", en: "bread" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "λεμόνι", en: "lemon" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "πατάτα", en: "potato" }
        ],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 10,
        calories: 280,
        servings: 8,
        tags: ["appetizer", "dip", "lent"],
        description: {
            el: "Παραδοσιακός ελληνικός μεζές από χυλό ψαριού, ιδανικός για την περίοδο της νηστείας.",
            en: "Traditional Greek meze made from fish roe, ideal for the Lenten period."
        },
        instructions: {
            el: [
                "Βράστε μια μικρή πατάτα μέχρι να μαλακώσει.",
                "Μουλιάστε το ψωμί σε νερό και στύψτε το καλά.",
                "Σε ένα μπλέντερ, βάλτε τον ταραμά, το ψωμί, τη βρασμένη πατάτα και το ψιλοκομμένο κρεμμύδι.",
                "Προσθέστε σταδιακά το ελαιόλαδο και το χυμό λεμονιού, χτυπώντας μέχρι να γίνει το μείγμα λείο και αφράτο.",
                "Δοκιμάστε και προσαρμόστε τη γεύση με περισσότερο λεμόνι ή ελαιόλαδο αν χρειάζεται.",
                "Βάλτε στο ψυγείο για τουλάχιστον 2 ώρες πριν το σερβίρισμα.",
                "Διακοσμήστε με ελαιόλαδο, μαύρες ελιές και φρέσκο μαϊντανό."
            ],
            en: [
                "Boil a small potato until soft.",
                "Soak the bread in water and squeeze it well.",
                "In a blender, put the fish roe, bread, boiled potato, and finely chopped onion.",
                "Gradually add olive oil and lemon juice, blending until the mixture is smooth and fluffy.",
                "Taste and adjust the flavor with more lemon or olive oil if needed.",
                "Refrigerate for at least 2 hours before serving.",
                "Garnish with olive oil, black olives, and fresh parsley."
            ]
        }
    },
    {
        id: 21,
        title: { el: "Λουκουμάδες", en: "Loukoumades" },
        ingredients: [
            { el: "αλεύρι", en: "flour" },
            { el: "νερό", en: "water" },
            { el: "μαγιά", en: "yeast" },
            { el: "ζάχαρη", en: "sugar" },
            { el: "αλάτι", en: "salt" },
            { el: "λάδι για τηγάνισμα", en: "oil for frying" },
            { el: "μέλι", en: "honey" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "καρύδια", en: "walnuts" }
        ],
        difficulty: "medium",
        prepTime: 60,
        cookTime: 30,
        calories: 380,
        servings: 6,
        tags: ["dessert", "fried", "sweet"],
        description: {
            el: "Παραδοσιακοί ελληνικοί λουκουμάδες, τηγανητές μπουκιές ζύμης περιχυμένες με μέλι και κανέλα.",
            en: "Traditional Greek loukoumades, fried dough bites drizzled with honey and cinnamon."
        },
        instructions: {
            el: [
                "Σε ένα μπολ, διαλύστε τη μαγιά σε χλιαρό νερό με λίγη ζάχαρη.",
                "Προσθέστε το αλεύρι και το αλάτι και ανακατέψτε καλά.",
                "Προσθέστε σταδιακά νερό, ανακατεύοντας μέχρι να πετύχετε μια αραιή ζύμη.",
                "Καλύψτε το μπολ και αφήστε τη ζύμη να φουσκώσει για 1 ώρα.",
                "Ζεστάνετε άφθονο λάδι σε ένα βαθύ τηγάνι.",
                "Με ένα κουτάλι, ρίξτε μικρές ποσότητες ζύμης στο καυτό λάδι.",
                "Τηγανίστε μέχρι να χρυσίσουν και από τις δύο πλευρές.",
                "Στραγγίξτε σε χαρτί κουζίνας.",
                "Περιχύστε με ζεστό μέλι, πασπαλίστε με κανέλα και τριμμένα καρύδια."
            ],
            en: [
                "In a bowl, dissolve the yeast in lukewarm water with a little sugar.",
                "Add the flour and salt and mix well.",
                "Gradually add water, stirring until you achieve a loose batter.",
                "Cover the bowl and let the dough rise for 1 hour.",
                "Heat plenty of oil in a deep pan.",
                "With a spoon, drop small amounts of batter into the hot oil.",
                "Fry until golden brown on both sides.",
                "Drain on paper towels.",
                "Drizzle with warm honey, sprinkle with cinnamon and chopped walnuts."
            ]
        }
    },
    {
        id: 22,
        title: { el: "Καλαμαράκια Τηγανητά", en: "Fried Calamari" },
        ingredients: [
            { el: "καλαμάρι", en: "squid" },
            { el: "αλεύρι", en: "flour" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" },
            { el: "λάδι για τηγάνισμα", en: "oil for frying" },
            { el: "λεμόνι", en: "lemon" }
        ],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 10,
        calories: 320,
        servings: 4,
        tags: ["seafood", "appetizer", "fried"],
        description: {
            el: "Τραγανά τηγανητά καλαμαράκια, ένα κλασικό ελληνικό ορεκτικό που σερβίρεται με λεμόνι.",
            en: "Crispy fried calamari, a classic Greek appetizer served with lemon."
        },
        instructions: {
            el: [
                "Καθαρίστε τα καλαμάρια, αφαιρώντας το κεφάλι, τα εντόσθια και το διαφανές κόκαλο.",
                "Κόψτε τα καλαμάρια σε δαχτυλίδια πάχους περίπου 1 εκ.",
                "Σε ένα μπολ, ανακατέψτε το αλεύρι με αλάτι και πιπέρι.",
                "Περάστε τα δαχτυλίδια καλαμαριού από το αλεύρι, τινάζοντας το περίσσευμα.",
                "Ζεστάνετε άφθονο λάδι σε ένα βαθύ τηγάνι.",
                "Τηγανίστε τα καλαμάρια σε μικρές ποσότητες για 2-3 λεπτά ή μέχρι να γίνουν χρυσαφιά και τραγανά.",
                "Στραγγίξτε σε χαρτί κουζίνας.",
                "Σερβίρετε αμέσως με φέτες λεμονιού."
            ],
            en: [
                "Clean the squid, removing the head, innards, and transparent bone.",
                "Cut the squid into rings about 1 cm thick.",
                "In a bowl, mix the flour with salt and pepper.",
                "Coat the squid rings in flour, shaking off excess.",
                "Heat plenty of oil in a deep pan.",
                "Fry the calamari in small batches for 2-3 minutes or until golden and crispy.",
                "Drain on paper towels.",
                "Serve immediately with lemon wedges."
            ]
        }
    },
    {
        id: 23,
        title: { el: "Χορτόπιτα", en: "Hortopita (Greek Greens Pie)" },
        ingredients: [
            { el: "φύλλο κρούστας", en: "phyllo dough" },
            { el: "σπανάκι", en: "spinach" },
            { el: "σέσκουλα", en: "Swiss chard" },
            { el: "πράσο", en: "leek" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "άνηθος", en: "dill" },
            { el: "μαϊντανός", en: "parsley" },
            { el: "φέτα", en: "feta cheese" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 45,
        calories: 320,
        servings: 8,
        tags: ["pie", "vegetarian", "traditional"],
        description: {
            el: "Παραδοσιακή ελληνική πίτα με διάφορα χόρτα, αρωματικά βότανα και φέτα.",
            en: "Traditional Greek pie with various greens, aromatic herbs, and feta cheese."
        },
        instructions: {
            el: [
                "Πλύνετε καλά όλα τα χόρτα και κόψτε τα σε μικρά κομμάτια.",
                "Σε ένα μεγάλο τηγάνι, σοτάρετε το κρεμμύδι και το πράσο σε ελαιόλαδο μέχρι να μαλακώσουν.",
                "Προσθέστε τα χόρτα και μαγειρέψτε μέχρι να μαραθούν.",
                "Προσθέστε τον άνηθο και τον μαϊντανό και ανακατέψτε.",
                "Αφαιρέστε από τη φωτιά και αφήστε να κρυώσει.",
                "Θρυμματίστε τη φέτα και προσθέστε την στο μείγμα των χόρτων.",
                "Προσθέστε αλάτι και πιπέρι κατά προτίμηση.",
                "Βουτυρώστε ένα ταψί και στρώστε τα μισά φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.",
                "Απλώστε το μείγμα των χόρτων και καλύψτε με τα υπόλοιπα φύλλα, βουτυρώνοντας κάθε φύλλο.",
                "Χαράξτε την επιφάνεια σε κομμάτια και ψήστε στους 180°C για 45 λεπτά ή μέχρι να ροδίσει."
            ],
            en: [
                "Wash all the greens thoroughly and cut them into small pieces.",
                "In a large pan, sauté the onion and leek in olive oil until soft.",
                "Add the greens and cook until wilted.",
                "Add the dill and parsley and stir.",
                "Remove from heat and let it cool.",
                "Crumble the feta cheese and add it to the greens mixture.",
                "Add salt and pepper to taste.",
                "Butter a baking dish and layer half of the phyllo sheets, buttering each sheet.",
                "Spread the greens mixture and cover with the remaining phyllo sheets, buttering each sheet.",
                "Score the surface into pieces and bake at 180°C for 45 minutes or until golden brown."
            ]
        }
    },
    {
        id: 24,
        title: { el: "Αυγολέμονο", en: "Avgolemono (Egg-Lemon Soup)" },
        ingredients: [
            { el: "ζωμός κοτόπουλου", en: "chicken broth" },
            { el: "ρύζι", en: "rice" },
            { el: "αυγά", en: "eggs" },
            { el: "λεμόνι", en: "lemon" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" },
            { el: "κοτόπουλο", en: "chicken" },
            { el: "καρότο", en: "carrot" },
            { el: "σέλινο", en: "celery" }
        ],
        difficulty: "medium",
        prepTime: 15,
        cookTime: 30,
        calories: 220,
        servings: 6,
        tags: ["soup", "winter", "comfort food"],
        description: {
            el: "Κρεμώδης σούπα με ρύζι και κοτόπουλο σε σάλτσα αυγολέμονο.",
            en: "Creamy soup with rice and chicken in an egg-lemon sauce."
        },
        instructions: {
            el: [
                "Σε μια κατσαρόλα, βράστε τον ζωμό κοτόπουλου με το κοτόπουλο, το καρότο και το σέλινο.",
                "Όταν το κοτόπουλο μαγειρευτεί, αφαιρέστε το και τα λαχανικά από τον ζωμό.",
                "Κόψτε το κοτόπουλο σε μικρά κομμάτια.",
                "Προσθέστε το ρύζι στον ζωμό και μαγειρέψτε μέχρι να γίνει.",
                "Σε ένα μπολ, χτυπήστε τα αυγά και προσθέστε σταδιακά το χυμό λεμονιού.",
                "Προσθέστε σταδιακά λίγο ζεστό ζωμό στο μείγμα αυγολέμονου, ανακατεύοντας συνεχώς.",
                "Αποσύρετε την κατσαρόλα από τη φωτιά και προσθέστε το μείγμα αυγολέμονου, ανακατεύοντας συνεχώς.",
                "Προσθέστε το ψιλοκομμένο κοτόπουλο πίσω στη σούπα.",
                "Αλατοπιπερώστε κατά προτίμηση.",
                "Σερβίρετε αμέσως, γαρνίροντας με ψιλοκομμένο μαϊντανό."
            ],
            en: [
                "In a pot, boil the chicken broth with the chicken, carrot, and celery.",
                "When the chicken is cooked, remove it and the vegetables from the broth.",
                "Cut the chicken into small pieces.",
                "Add the rice to the broth and cook until done.",
                "In a bowl, beat the eggs and gradually add the lemon juice.",
                "Gradually add a bit of the hot broth to the egg-lemon mixture, stirring constantly.",
                "Remove the pot from the heat and add the egg-lemon mixture, stirring constantly.",
                "Add the chopped chicken back into the soup.",
                "Season with salt and pepper to taste.",
                "Serve immediately, garnishing with chopped parsley."
            ]
        }
    },
    {
        id: 25,
        title: { el: "Ρεβανί", en: "Revani" },
        ingredients: [
            { el: "σιμιγδάλι", en: "semolina" },
            { el: "αλεύρι", en: "flour" },
            { el: "αυγά", en: "eggs" },
            { el: "γιαούρτι", en: "yogurt" },
            { el: "ζάχαρη", en: "sugar" },
            { el: "βούτυρο", en: "butter" },
            { el: "baking powder", en: "baking powder" },
            { el: "νερό", en: "water" },
            { el: "λεμόνι", en: "lemon" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "καρύδα", en: "coconut" }
        ],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 40,
        calories: 360,
        servings: 12,
        tags: ["dessert", "sweet", "syrup"],
        description: {
            el: "Παραδοσιακό ελληνικό κέικ με σιμιγδάλι, εμποτισμένο με σιρόπι ζάχαρης και αρωματισμένο με λεμόνι.",
            en: "Traditional Greek semolina cake, soaked in sugar syrup and flavored with lemon."
        },
        instructions: {
            el: [
                "Χτυπήστε το βούτυρο με τη ζάχαρη μέχρι να αφρατέψουν.",
                "Προσθέστε τα αυγά ένα-ένα, χτυπώντας καλά μετά από κάθε προσθήκη.",
                "Προσθέστε το γιαούρτι και το ξύσμα λεμονιού.",
                "Σε ξεχωριστό μπολ, ανακατέψτε το σιμιγδάλι, το αλεύρι και το baking powder.",
                "Προσθέστε σταδιακά τα στεγνά υλικά στο υγρό μείγμα και ανακατέψτε απαλά.",
                "Ρίξτε το μείγμα σε ένα βουτυρωμένο ταψί.",
                "Ψήστε στους 180°C για 35-40 λεπτά ή μέχρι να ροδίσει.",
                "Για το σιρόπι, βράστε νερό με ζάχαρη, χυμό λεμονιού και ξύλο κανέλας για 5 λεπτά.",
                "Περιχύστε το ζεστό σιρόπι πάνω στο κρύο κέικ ή το κρύο σιρόπι πάνω στο ζεστό κέικ.",
                "Αφήστε το κέικ να απορροφήσει το σιρόπι για τουλάχιστον 2 ώρες.",
                "Πασπαλίστε με κανέλα και τριμμένη καρύδα πριν το σερβίρισμα."
            ],
            en: [
                "Beat the butter with sugar until fluffy.",
                "Add the eggs one by one, beating well after each addition.",
                "Add the yogurt and lemon zest.",
                "In a separate bowl, mix the semolina, flour, and baking powder.",
                "Gradually add the dry ingredients to the wet mixture and stir gently.",
                "Pour the mixture into a buttered baking dish.",
                "Bake at 180°C for 35-40 minutes or until golden brown.",
                "For the syrup, boil water with sugar, lemon juice, and a cinnamon stick for 5 minutes.",
                "Pour the hot syrup over the cold cake or the cold syrup over the hot cake.",
                "Let the cake absorb the syrup for at least 2 hours.",
                "Sprinkle with cinnamon and grated coconut before serving."
            ]
        }
    },
    {
        id: 26,
        title: { el: "Γιουβέτσι", en: "Youvetsi" },
        ingredients: [
            { el: "μοσχάρι", en: "beef" },
            { el: "κριθαράκι", en: "orzo pasta" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ντομάτα", en: "tomato" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "γαρύφαλλο", en: "clove" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" },
            { el: "κεφαλοτύρι", en: "kefalotyri cheese" }
        ],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 120,
        calories: 550,
        servings: 6,
        tags: ["main dish", "pasta", "meat", "baked"],
        description: {
            el: "Παραδοσιακό φαγητό φούρνου με μοσχάρι και κριθαράκι μαγειρεμένα σε πήλινο σκεύος.",
            en: "Traditional baked dish with beef and orzo pasta cooked in a clay pot."
        },
        instructions: {
            el: [
                "Κόψτε το μοσχάρι σε μικρά κομμάτια.",
                "Σε μια κατσαρόλα, ζεστάνετε το ελαιόλαδο και τσιγαρίστε το κρέας μέχρι να ροδίσει από όλες τις πλευρές.",
                "Προσθέστε το ψιλοκομμένο κρεμμύδι και σκόρδο και μαγειρέψτε μέχρι να μαλακώσουν.",
                "Προσθέστε τις ψιλοκομμένες ντομάτες, την κανέλα, το γαρύφαλλο, αλάτι και πιπέρι.",
                "Προσθέστε ζεστό νερό μέχρι να καλυφθεί το κρέας και μαγειρέψτε σε χαμηλή φωτιά για περίπου 1 ώρα ή μέχρι το κρέας να μαλακώσει.",
                "Μεταφέρετε το κρέας και τη σάλτσα σε ένα πήλινο σκεύος ή ταψί φούρνου.",
                "Προσθέστε το κριθαράκι και ανακατέψτε.",
                "Προσθέστε ζεστό νερό ή ζωμό κρέατος, αν χρειάζεται.",
                "Ψήστε στους 180°C για περίπου 30-40 λεπτά ή μέχρι το κριθαράκι να είναι έτοιμο, ανακατεύοντας περιστασιακά.",
                "Σερβίρετε με τριμμένο κεφαλοτύρι από πάνω."
            ],
            en: [
                "Cut the beef into small pieces.",
                "In a pot, heat the olive oil and sauté the meat until browned on all sides.",
                "Add the chopped onion and garlic and cook until soft.",
                "Add the chopped tomatoes, cinnamon, clove, salt, and pepper.",
                "Add hot water until the meat is covered and cook on low heat for about 1 hour or until the meat is tender.",
                "Transfer the meat and sauce to a clay pot or baking dish.",
                "Add the orzo pasta and stir.",
                "Add hot water or beef broth if needed.",
                "Bake at 180°C for about 30-40 minutes or until the orzo is done, stirring occasionally.",
                "Serve with grated kefalotyri cheese on top."
            ]
        }
    },
    {
        id: 27,
        title: { el: "Κεφτέδες", en: "Keftedes (Greek Meatballs)" },
        ingredients: [
            { el: "μοσχάρι", en: "ground beef" },
            { el: "χοιρινό", en: "ground pork" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ψωμί", en: "bread" },
            { el: "γάλα", en: "milk" },
            { el: "αυγό", en: "egg" },
            { el: "μαϊντανός", en: "parsley" },
            { el: "δυόσμος", en: "mint" },
            { el: "ρίγανη", en: "oregano" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "easy",
        prepTime: 30,
        cookTime: 20,
        calories: 420,
        servings: 4,
        tags: ["appetizer", "meat", "fried"],
        description: {
            el: "Παραδοσιακοί ελληνικοί κεφτέδες με αρωματικά βότανα, τηγανισμένοι μέχρι να γίνουν τραγανοί απ' έξω και ζουμεροί μέσα.",
            en: "Traditional Greek meatballs with aromatic herbs, fried until crispy on the outside and juicy inside."
        },
        instructions: {
            el: [
                "Μουλιάστε το ψωμί σε γάλα και στύψτε το καλά.",
                "Σε ένα μεγάλο μπολ, ανακατέψτε τον κιμά με το μουλιασμένο ψωμί.",
                "Προσθέστε το ψιλοκομμένο κρεμμύδι, σκόρδο, μαϊντανό και δυόσμο.",
                "Προσθέστε το αυγό, τη ρίγανη, αλάτι και πιπέρι.",
                "Ζυμώστε καλά με τα χέρια και αφήστε το μείγμα στο ψυγείο για τουλάχιστον 30 λεπτά.",
                "Πλάστε μικρές μπάλες από το μείγμα.",
                "Ζεστάνετε άφθονο ελαιόλαδο σε ένα τηγάνι.",
                "Τηγανίστε τους κεφτέδες σε μέτρια φωτιά, γυρίζοντάς τους μέχρι να ροδίσουν από όλες τις πλευρές.",
                "Στραγγίξτε σε χαρτί κουζίνας.",
                "Σερβίρετε ζεστούς με λεμόνι."
            ],
            en: [
                "Soak the bread in milk and squeeze it well.",
                "In a large bowl, mix the ground meat with the soaked bread.",
                "Add the finely chopped onion, garlic, parsley, and mint.",
                "Add the egg, oregano, salt, and pepper.",
                "Knead well with your hands and refrigerate the mixture for at least 30 minutes.",
                "Shape small balls from the mixture.",
                "Heat plenty of olive oil in a pan.",
                "Fry the meatballs over medium heat, turning them until they are browned on all sides.",
                "Drain on paper towels.",
                "Serve hot with lemon."
            ]
        }
    },
    {
        id: 28,
        title: { el: "Κολοκυθοκεφτέδες", en: "Kolokythokeftedes (Zucchini Fritters)" },
        ingredients: [
            { el: "κολοκύθι", en: "zucchini" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "φέτα", en: "feta cheese" },
            { el: "αυγό", en: "egg" },
            { el: "αλεύρι", en: "flour" },
            { el: "δυόσμος", en: "mint" },
            { el: "άνηθος", en: "dill" },
            { el: "μαϊντανός", en: "parsley" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "easy",
        prepTime: 30,
        cookTime: 15,
        calories: 280,
        servings: 4,
        tags: ["vegetarian", "appetizer", "fried"],
        description: {
            el: "Νόστιμες τηγανίτες με κολοκύθι, αρωματικά βότανα και φέτα.",
            en: "Tasty fritters with zucchini, aromatic herbs, and feta cheese."
        },
        instructions: {
            el: [
                "Τρίψτε τα κολοκύθια στον τρίφτη και αλατίστε τα.",
                "Αφήστε τα για 10-15 λεπτά και μετά στύψτε τα καλά για να φύγει το περισσότερο υγρό.",
                "Σε ένα μπολ, ανακατέψτε τα κολοκύθια με το ψιλοκομμένο κρεμμύδι.",
                "Προσθέστε τα ψιλοκομμένα αρωματικά βότανα και τη θρυμματισμένη φέτα.",
                "Προσθέστε το αυγό και ανακατέψτε.",
                "Προσθέστε σταδιακά αλεύρι μέχρι το μείγμα να γίνει αρκετά σφιχτό για να πλάθεται.",
                "Αλατοπιπερώστε κατά προτίμηση.",
                "Ζεστάνετε ελαιόλαδο σε ένα τηγάνι.",
                "Πλάστε κουταλιές από το μείγμα σε μικρές τηγανίτες και τηγανίστε μέχρι να ροδίσουν και από τις δύο πλευρές.",
                "Στραγγίξτε σε χαρτί κουζίνας και σερβίρετε ζεστά με τζατζίκι."
            ],
            en: [
                "Grate the zucchini and salt them.",
                "Let them sit for 10-15 minutes, then squeeze them well to remove most of the liquid.",
                "In a bowl, mix the zucchini with the finely chopped onion.",
                "Add the finely chopped aromatic herbs and crumbled feta cheese.",
                "Add the egg and mix.",
                "Gradually add flour until the mixture is firm enough to shape.",
                "Season with salt and pepper to taste.",
                "Heat olive oil in a pan.",
                "Shape spoonfuls of the mixture into small fritters and fry until golden brown on both sides.",
                "Drain on paper towels and serve hot with tzatziki."
            ]
        }
    },
    {
        id: 29,
        title: { el: "Μπακλαβάς", en: "Baklava" },
        ingredients: [
            { el: "φύλλο κρούστας", en: "phyllo dough" },
            { el: "καρύδια", en: "walnuts" },
            { el: "αμύγδαλα", en: "almonds" },
            { el: "ζάχαρη", en: "sugar" },
            { el: "μέλι", en: "honey" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "γαρύφαλλο", en: "clove" },
            { el: "λεμόνι", en: "lemon" },
            { el: "βούτυρο", en: "butter" }
        ],
        difficulty: "hard",
        prepTime: 45,
        cookTime: 50,
        calories: 420,
        servings: 24,
        tags: ["dessert", "sweet", "festive"],
        description: {
            el: "Παραδοσιακό γλυκό με στρώσεις από φύλλο κρούστας, καρύδια και σιρόπι μελιού.",
            en: "Traditional sweet with layers of phyllo dough, walnuts, and honey syrup."
        },
        instructions: {
            el: [
                "Προθερμάνετε το φούρνο στους 180°C.",
                "Αλέστε τα καρύδια και τα αμύγδαλα και ανακατέψτε τα με ζάχαρη και κανέλα.",
                "Βουτυρώστε ένα ταψί.",
                "Στρώστε 6-8 φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.",
                "Απλώστε ένα στρώμα από το μείγμα καρυδιών.",
                "Συνεχίστε με εναλλασσόμενες στρώσεις φύλλων κρούστας (2-3 φύλλα) και μείγματος καρυδιών.",
                "Τελειώστε με 6-8 φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.",
                "Κόψτε τον μπακλαβά σε ρόμβους ή τετράγωνα πριν το ψήσιμο.",
                "Ψήστε για περίπου 45-50 λεπτά ή μέχρι να ροδίσει.",
                "Για το σιρόπι, βράστε νερό με ζάχαρη, μέλι, ξύλο κανέλας, γαρύφαλλο και φλούδα λεμονιού για 10 λεπτά.",
                "Περιχύστε το ζεστό σιρόπι πάνω στον κρύο μπακλαβά ή το κρύο σιρόπι πάνω στον ζεστό μπακλαβά.",
                "Αφήστε τον μπακλαβά να απορροφήσει το σιρόπι για τουλάχιστον 4 ώρες πριν το σερβίρισμα."
            ],
            en: [
                "Preheat the oven to 180°C.",
                "Grind the walnuts and almonds and mix them with sugar and cinnamon.",
                "Butter a baking dish.",
                "Layer 6-8 phyllo sheets, buttering each sheet.",
                "Spread a layer of the nut mixture.",
                "Continue with alternating layers of phyllo sheets (2-3 sheets) and nut mixture.",
                "Finish with 6-8 phyllo sheets, buttering each sheet.",
                "Cut the baklava into diamonds or squares before baking.",
                "Bake for about 45-50 minutes or until golden brown.",
                "For the syrup, boil water with sugar, honey, cinnamon stick, clove, and lemon zest for 10 minutes.",
                "Pour the hot syrup over the cold baklava or the cold syrup over the hot baklava.",
                "Let the baklava absorb the syrup for at least 4 hours before serving."
            ]
        }
    },
    {
        id: 30,
        title: { el: "Γαλακτομπούρεκο", en: "Galaktoboureko" },
        ingredients: [
            { el: "φύλλο κρούστας", en: "phyllo dough" },
            { el: "γάλα", en: "milk" },
            { el: "σιμιγδάλι", en: "semolina" },
            { el: "αυγά", en: "eggs" },
            { el: "ζάχαρη", en: "sugar" },
            { el: "βούτυρο", en: "butter" },
            { el: "βανίλια", en: "vanilla" },
            { el: "λεμόνι", en: "lemon" },
            { el: "πορτοκάλι", en: "orange" },
            { el: "κανέλα", en: "cinnamon" }
        ],
        difficulty: "hard",
        prepTime: 45,
        cookTime: 45,
        calories: 380,
        servings: 12,
        tags: ["dessert", "sweet", "custard"],
        description: {
            el: "Παραδοσιακό γλυκό με κρέμα σιμιγδαλιού ανάμεσα σε τραγανά φύλλα κρούστας και περιχυμένο με σιρόπι.",
            en: "Traditional sweet with semolina custard between crispy phyllo sheets and drizzled with syrup."
        },
        instructions: {
            el: [
                "Σε μια κατσαρόλα, ζεστάνετε το γάλα με τη μισή ζάχαρη.",
                "Προσθέστε σταδιακά το σιμιγδάλι, ανακατεύοντας συνεχώς για να μη σβολιάσει.",
                "Μαγειρέψτε σε χαμηλή φωτιά μέχρι να πήξει η κρέμα.",
                "Αφαιρέστε από τη φωτιά και αφήστε να κρυώσει λίγο.",
                "Χτυπήστε τα αυγά με την υπόλοιπη ζάχαρη και προσθέστε τα στην κρέμα μαζί με τη βανίλια.",
                "Βουτυρώστε ένα ταψί και στρώστε τα μισά φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.",
                "Απλώστε την κρέμα και καλύψτε με τα υπόλοιπα φύλλα, βουτυρώνοντας κάθε φύλλο.",
                "Κόψτε το γλυκό σε κομμάτια πριν το ψήσιμο.",
                "Ψήστε στους 180°C για 45 λεπτά ή μέχρι να ροδίσουν τα φύλλα.",
                "Για το σιρόπι, βράστε νερό με ζάχαρη, χυμό λεμονιού, χυμό πορτοκαλιού και ξύλο κανέλας για 10 λεπτά.",
                "Περιχύστε το κρύο σιρόπι πάνω στο ζεστό γλυκό.",
                "Αφήστε το γλυκό να κρυώσει και να απορροφήσει το σιρόπι πριν το σερβίρισμα."
            ],
            en: [
                "In a pot, heat the milk with half the sugar.",
                "Gradually add the semolina, stirring constantly to avoid lumps.",
                "Cook on low heat until the custard thickens.",
                "Remove from heat and let it cool slightly.",
                "Beat the eggs with the remaining sugar and add them to the custard along with the vanilla.",
                "Butter a baking dish and layer half of the phyllo sheets, buttering each sheet.",
                "Spread the custard and cover with the remaining phyllo sheets, buttering each sheet.",
                "Cut the dessert into pieces before baking.",
                "Bake at 180°C for 45 minutes or until the phyllo is golden brown.",
                "For the syrup, boil water with sugar, lemon juice, orange juice, and a cinnamon stick for 10 minutes.",
                "Pour the cold syrup over the hot dessert.",
                "Let the dessert cool and absorb the syrup before serving."
            ]
        }
    },
    {
        id: 31,
        title: { el: "Μελιτζανοσαλάτα", en: "Melitzanosalata (Eggplant Dip)" },
        ingredients: [
            { el: "μελιτζάνα", en: "eggplant" },
            { el: "σκόρδο", en: "garlic" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "λεμόνι", en: "lemon" },
            { el: "μαϊντανός", en: "parsley" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" },
            { el: "πιπεριά", en: "bell pepper" }
        ],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 30,
        calories: 180,
        servings: 6,
        tags: ["appetizer", "dip", "vegetarian"],
        description: {
            el: "Κρεμώδης μεζές με ψημένη μελιτζάνα, σκόρδο και ελαιόλαδο.",
            en: "Creamy meze with roasted eggplant, garlic, and olive oil."
        },
        instructions: {
            el: [
                "Ψήστε τις μελιτζάνες στο φούρνο ή στην ψησταριά μέχρι η φλούδα να μαυρίσει και η σάρκα να μαλακώσει.",
                "Αφήστε τις να κρυώσουν και μετά αφαιρέστε τη φλούδα.",
                "Στραγγίξτε τις μελιτζάνες σε ένα σουρωτήρι για να φύγει το περισσότερο υγρό.",
                "Ψιλοκόψτε το κρεμμύδι, το σκόρδο και τον μαϊντανό.",
                "Σε ένα μπολ, λιώστε τη σάρκα της μελιτζάνας με ένα πιρούνι.",
                "Προσθέστε το ψιλοκομμένο κρεμμύδι, το σκόρδο και τον μαϊντανό.",
                "Προσθέστε το ελαιόλαδο και το χυμό λεμονιού και ανακατέψτε καλά.",
                "Αλατοπιπερώστε κατά προτίμηση.",
                "Προαιρετικά, προσθέστε ψιλοκομμένη κόκκινη πιπεριά για χρώμα.",
                "Σερβίρετε με ψωμί ή πίτα."
            ],
            en: [
                "Roast the eggplants in the oven or on the grill until the skin is blackened and the flesh is soft.",
                "Let them cool and then remove the skin.",
                "Drain the eggplants in a colander to remove most of the liquid.",
                "Finely chop the onion, garlic, and parsley.",
                "In a bowl, mash the eggplant flesh with a fork.",
                "Add the chopped onion, garlic, and parsley.",
                "Add olive oil and lemon juice and mix well.",
                "Season with salt and pepper to taste.",
                "Optionally, add finely chopped red bell pepper for color.",
                "Serve with bread or pita."
            ]
        }
    },
    {
        id: 32,
        title: { el: "Τηγανητές Πατάτες", en: "Greek Fried Potatoes" },
        ingredients: [
            { el: "πατάτες", en: "potatoes" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "ρίγανη", en: "oregano" },
            { el: "λεμόνι", en: "lemon" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" },
            { el: "φέτα", en: "feta cheese" }
        ],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 20,
        calories: 320,
        servings: 4,
        tags: ["side dish", "vegetarian", "comfort food"],
        description: {
            el: "Τραγανές τηγανητές πατάτες με ρίγανη και λεμόνι, σερβιρισμένες με τριμμένη φέτα.",
            en: "Crispy fried potatoes with oregano and lemon, served with crumbled feta cheese."
        },
        instructions: {
            el: [
                "Καθαρίστε και πλύνετε τις πατάτες.",
                "Κόψτε τις πατάτες σε χοντρές ροδέλες ή σε κομμάτια.",
                "Βάλτε τις πατάτες σε ένα μπολ με κρύο νερό για 30 λεπτά και μετά στραγγίξτε τις καλά.",
                "Στεγνώστε τις πατάτες με χαρτί κουζίνας.",
                "Ζεστάνετε άφθονο ελαιόλαδο σε ένα βαθύ τηγάνι.",
                "Τηγανίστε τις πατάτες σε μέτρια προς δυνατή φωτιά, ανακατεύοντας περιστασιακά, μέχρι να γίνουν χρυσαφένιες και τραγανές.",
                "Στραγγίξτε σε χαρτί κουζίνας.",
                "Πασπαλίστε με αλάτι, πιπέρι και ρίγανη.",
                "Σερβίρετε ζεστές με λεμόνι και τριμμένη φέτα από πάνω."
            ],
            en: [
                "Peel and wash the potatoes.",
                "Cut the potatoes into thick slices or chunks.",
                "Place the potatoes in a bowl of cold water for 30 minutes, then drain them well.",
                "Dry the potatoes with paper towels.",
                "Heat plenty of olive oil in a deep pan.",
                "Fry the potatoes over medium to high heat, stirring occasionally, until golden and crispy.",
                "Drain on paper towels.",
                "Sprinkle with salt, pepper, and oregano.",
                "Serve hot with lemon and crumbled feta cheese on top."
            ]
        }
    },
    {
        id: 33,
        title: { el: "Φασολάδα", en: "Fasolada (Bean Soup)" },
        ingredients: [
            { el: "φασόλια", en: "white beans" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "καρότο", en: "carrot" },
            { el: "σέλινο", en: "celery" },
            { el: "ντομάτα", en: "tomato" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" },
            { el: "ρίγανη", en: "oregano" }
        ],
        difficulty: "medium",
        prepTime: 120,
        cookTime: 90,
        calories: 320,
        servings: 6,
        tags: ["soup", "vegetarian", "winter", "traditional"],
        description: {
            el: "Παραδοσιακή ελληνική σούπα με λευκά φασόλια, λαχανικά και αρωματικά βότανα, θεωρείται το εθνικό φαγητό της Ελλάδας.",
            en: "Traditional Greek soup with white beans, vegetables, and aromatic herbs, considered the national dish of Greece."
        },
        instructions: {
            el: [
                "Μουλιάστε τα φασόλια σε κρύο νερό για τουλάχιστον 8 ώρες ή όλο το βράδυ.",
                "Στραγγίξτε τα φασόλια και ξεπλύνετέ τα.",
                "Σε μια μεγάλη κατσαρόλα, ζεστάνετε το ελαιόλαδο και σοτάρετε το ψιλοκομμένο κρεμμύδι και σκόρδο μέχρι να μαλακώσουν.",
                "Προσθέστε τα καρότα και το σέλινο κομμένα σε κύβους και σοτάρετε για λίγα λεπτά ακόμα.",
                "Προσθέστε τα φασόλια και αρκετό νερό για να τα καλύψετε.",
                "Μαγειρέψτε σε χαμηλή φωτιά για περίπου 1 ώρα ή μέχρι τα φασόλια να είναι σχεδόν έτοιμα.",
                "Προσθέστε τις ψιλοκομμένες ντομάτες, αλάτι, πιπέρι και ρίγανη.",
                "Συνεχίστε το μαγείρεμα για άλλα 30 λεπτά ή μέχρι τα φασόλια να μαλακώσουν εντελώς.",
                "Σερβίρετε ζεστή με επιπλέον ελαιόλαδο και φρέσκο ψωμί."
            ],
            en: [
                "Soak the beans in cold water for at least 8 hours or overnight.",
                "Drain the beans and rinse them.",
                "In a large pot, heat the olive oil and sauté the chopped onion and garlic until soft.",
                "Add the carrots and celery cut into cubes and sauté for a few more minutes.",
                "Add the beans and enough water to cover them.",
                "Cook on low heat for about 1 hour or until the beans are almost ready.",
                "Add the chopped tomatoes, salt, pepper, and oregano.",
                "Continue cooking for another 30 minutes or until the beans are completely soft.",
                "Serve hot with extra olive oil and fresh bread."
            ]
        }
    },
    {
        id: 34,
        title: { el: "Καριδόπιτα", en: "Karydopita (Walnut Cake)" },
        ingredients: [
            { el: "καρύδια", en: "walnuts" },
            { el: "αλεύρι", en: "flour" },
            { el: "ζάχαρη", en: "sugar" },
            { el: "αυγά", en: "eggs" },
            { el: "βούτυρο", en: "butter" },
            { el: "γάλα", en: "milk" },
            { el: "μέλι", en: "honey" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "γαρύφαλλο", en: "clove" },
            { el: "πορτοκάλι", en: "orange" },
            { el: "baking powder", en: "baking powder" }
        ],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 45,
        calories: 420,
        servings: 12,
        tags: ["dessert", "sweet", "cake"],
        description: {
            el: "Υγρό και αρωματικό κέικ με καρύδια, εμποτισμένο με σιρόπι μελιού και μπαχαρικών.",
            en: "Moist and aromatic cake with walnuts, soaked in honey and spice syrup."
        },
        instructions: {
            el: [
                "Προθερμάνετε το φούρνο στους 180°C και βουτυρώστε ένα ταψί.",
                "Χτυπήστε το βούτυρο με τη ζάχαρη μέχρι να αφρατέψουν.",
                "Προσθέστε τα αυγά ένα-ένα, χτυπώντας καλά μετά από κάθε προσθήκη.",
                "Προσθέστε το ξύσμα πορτοκαλιού, την κανέλα και το τριμμένο γαρύφαλλο.",
                "Σε ξεχωριστό μπολ, ανακατέψτε το αλεύρι με το baking powder.",
                "Προσθέστε τα ψιλοκομμένα καρύδια στο μείγμα αλευριού.",
                "Προσθέστε σταδιακά το μείγμα αλευριού στο υγρό μείγμα, εναλλάσσοντας με το γάλα.",
                "Ρίξτε το μείγμα στο ταψί και ψήστε για 40-45 λεπτά ή μέχρι μια οδοντογλυφίδα να βγαίνει καθαρή.",
                "Για το σιρόπι, βράστε νερό με ζάχαρη, μέλι, χυμό πορτοκαλιού, ξύλο κανέλας και γαρύφαλλο για 10 λεπτά.",
                "Περιχύστε το ζεστό σιρόπι πάνω στο κρύο κέικ ή το κρύο σιρόπι πάνω στο ζεστό κέικ.",
                "Αφήστε το κέικ να απορροφήσει το σιρόπι για τουλάχιστον 2 ώρες.",
                "Πασπαλίστε με τριμμένα καρύδια και κανέλα πριν το σερβίρισμα."
            ],
            en: [
                "Preheat the oven to 180°C and butter a baking dish.",
                "Beat the butter with sugar until fluffy.",
                "Add the eggs one by one, beating well after each addition.",
                "Add the orange zest, cinnamon, and ground clove.",
                "In a separate bowl, mix the flour with baking powder.",
                "Add the chopped walnuts to the flour mixture.",
                "Gradually add the flour mixture to the wet mixture, alternating with milk.",
                "Pour the mixture into the baking dish and bake for 40-45 minutes or until a toothpick comes out clean.",
                "For the syrup, boil water with sugar, honey, orange juice, cinnamon stick, and clove for 10 minutes.",
                "Pour the hot syrup over the cold cake or the cold syrup over the hot cake.",
                "Let the cake absorb the syrup for at least 2 hours.",
                "Sprinkle with ground walnuts and cinnamon before serving."
            ]
        }
    },
    {
        id: 35,
        title: { el: "Χταποδάκι με Κρασί", en: "Octopus in Wine" },
        ingredients: [
            { el: "χταπόδι", en: "octopus" },
            { el: "κόκκινο κρασί", en: "red wine" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ντομάτα", en: "tomato" },
            { el: "δαφνόφυλλο", en: "bay leaf" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "γαρύφαλλο", en: "clove" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "μαϊντανός", en: "parsley" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 60,
        calories: 280,
        servings: 4,
        tags: ["seafood", "main dish", "wine"],
        description: {
            el: "Τρυφερό χταπόδι μαγειρεμένο αργά σε κόκκινο κρασί με αρωματικά μπαχαρικά.",
            en: "Tender octopus slow-cooked in red wine with aromatic spices."
        },
        instructions: {
            el: [
                "Καθαρίστε το χταπόδι και αφαιρέστε το στόμα.",
                "Χτυπήστε το χταπόδι σε μια πέτρα ή επιφάνεια κοπής για να γίνει πιο τρυφερό.",
                "Σε μια κατσαρόλα, ζεστάνετε το ελαιόλαδο και σοτάρετε το ψιλοκομμένο κρεμμύδι και σκόρδο μέχρι να μαλακώσουν.",
                "Προσθέστε το χταπόδι και μαγειρέψτε για λίγα λεπτά.",
                "Προσθέστε το κόκκινο κρασί, τις ψιλοκομμένες ντομάτες, το δαφνόφυλλο, την κανέλα και το γαρύφαλλο.",
                "Μαγειρέψτε σε χαμηλή φωτιά για περίπου 45-60 λεπτά ή μέχρι το χταπόδι να γίνει τρυφερό και η σάλτσα να δέσει.",
                "Αλατοπιπερώστε κατά προτίμηση.",
                "Κόψτε το χταπόδι σε κομμάτια και σερβίρετε με τη σάλτσα.",
                "Γαρνίρετε με ψιλοκομμένο μαϊντανό."
            ],
            en: [
                "Clean the octopus and remove the mouth.",
                "Beat the octopus on a rock or cutting surface to tenderize it.",
                "In a pot, heat the olive oil and sauté the chopped onion and garlic until soft.",
                "Add the octopus and cook for a few minutes.",
                "Add the red wine, chopped tomatoes, bay leaf, cinnamon, and clove.",
                "Cook on low heat for about 45-60 minutes or until the octopus is tender and the sauce has thickened.",
                "Season with salt and pepper to taste.",
                "Cut the octopus into pieces and serve with the sauce.",
                "Garnish with chopped parsley."
            ]
        }
    },
    {
        id: 36,
        title: { el: "Παστίτσιο", en: "Pastitsio" },
        ingredients: [
            { el: "μοσχάρι", en: "ground beef" },
            { el: "μακαρόνια παστίτσιου", en: "pastitsio pasta" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ντομάτα", en: "tomato" },
            { el: "κανέλα", en: "cinnamon" },
            { el: "γαρύφαλλο", en: "clove" },
            { el: "μοσχοκάρυδο", en: "nutmeg" },
            { el: "αλεύρι", en: "flour" },
            { el: "γάλα", en: "milk" },
            { el: "βούτυρο", en: "butter" },
            { el: "παρμεζάνα", en: "parmesan cheese" },
            { el: "αυγά", en: "eggs" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "hard",
        prepTime: 45,
        cookTime: 60,
        calories: 650,
        servings: 8,
        tags: ["main dish", "pasta", "baked", "traditional"],
        description: {
            el: "Ελληνική εκδοχή του λαζάνια με στρώσεις ζυμαρικών, κιμά και κρεμώδη μπεσαμέλ.",
            en: "Greek version of lasagna with layers of pasta, ground meat, and creamy béchamel sauce."
        },
        instructions: {
            el: [
                "Προθερμάνετε το φούρνο στους 180°C.",
                "Μαγειρέψτε τα μακαρόνια παστίτσιου σύμφωνα με τις οδηγίες της συσκευασίας, μέχρι να είναι al dente.",
                "Σε ένα τηγάνι, ζεστάνετε το ελαιόλαδο και σοτάρετε το ψιλοκομμένο κρεμμύδι και σκόρδο.",
                "Προσθέστε τον κιμά και μαγειρέψτε μέχρι να ροδίσει.",
                "Προσθέστε τις ψιλοκομμένες ντομάτες, την κανέλα, το γαρύφαλλο, αλάτι και πιπέρι.",
                "Μαγειρέψτε σε χαμηλή φωτιά για περίπου 20 λεπτά.",
                "Για τη μπεσαμέλ, λιώστε το βούτυρο σε μια κατσαρόλα και προσθέστε το αλεύρι, ανακατεύοντας συνεχώς.",
                "Προσθέστε σταδιακά το γάλα, ανακατεύοντας συνεχώς για να αποφύγετε τους σβόλους.",
                "Μαγειρέψτε σε χαμηλή φωτιά μέχρι να πήξει η σάλτσα.",
                "Αφαιρέστε από τη φωτιά και προσθέστε μοσχοκάρυδο, αλάτι, πιπέρι και τη μισή παρμεζάνα.",
                "Προσθέστε τα χτυπημένα αυγά στη μπεσαμέλ, ανακατεύοντας γρήγορα.",
                "Σε ένα βουτυρωμένο ταψί, στρώστε τα μισά μακαρόνια.",
                "Απλώστε από πάνω τον κιμά.",
                "Στρώστε τα υπόλοιπα μακαρόνια.",
                "Καλύψτε με τη μπεσαμέλ και πασπαλίστε με την υπόλοιπη παρμεζάνα.",
                "Ψήστε για περίπου 45-60 λεπτά ή μέχρι η επιφάνεια να ροδίσει.",
                "Αφήστε το παστίτσιο να σταθεί για 15 λεπτά πριν το σερβίρετε."
            ],
            en: [
                "Preheat the oven to 180°C.",
                "Cook the pastitsio pasta according to package instructions until al dente.",
                "In a pan, heat the olive oil and sauté the chopped onion and garlic.",
                "Add the ground beef and cook until browned.",
                "Add the chopped tomatoes, cinnamon, clove, salt, and pepper.",
                "Cook on low heat for about 20 minutes.",
                "For the béchamel, melt the butter in a pot and add the flour, stirring constantly.",
                "Gradually add the milk, stirring continuously to avoid lumps.",
                "Cook on low heat until the sauce thickens.",
                "Remove from heat and add nutmeg, salt, pepper, and half the parmesan cheese.",
                "Add the beaten eggs to the béchamel, stirring quickly.",
                "In a buttered baking dish, layer half of the pasta.",
                "Spread the meat sauce on top.",
                "Layer the remaining pasta.",
                "Cover with the béchamel and sprinkle with the remaining parmesan.",
                "Bake for about 45-60 minutes or until the top is golden brown.",
                "Let the pastitsio rest for 15 minutes before serving."
            ]
        }
    },
    {
        id: 37,
        title: { el: "Γαλακτομπούρεκο", en: "Galaktoboureko" },
        ingredients: [
            { el: "φύλλο κρούστας", en: "phyllo dough" },
            { el: "γάλα", en: "milk" },
            { el: "σιμιγδάλι", en: "semolina" },
            { el: "αυγά", en: "eggs" },
            { el: "ζάχαρη", en: "sugar" },
            { el: "βούτυρο", en: "butter" },
            { el: "βανίλια", en: "vanilla" },
            { el: "λεμόνι", en: "lemon" },
            { el: "πορτοκάλι", en: "orange" }
        ],
        difficulty: "medium",
        prepTime: 40,
        cookTime: 45,
        calories: 380,
        servings: 12,
        tags: ["dessert", "sweet", "custard"],
        description: {
            el: "Αγαπημένο ελληνικό επιδόρπιο με κρέμα μέσα σε τραγανό φύλλο κρούστας.",
            en: "Beloved Greek dessert with custard wrapped in crispy phyllo dough."
        },
        instructions: {
            el: [
                "Ζεστάνετε το γάλα σε μια κατσαρόλα με τη μισή ζάχαρη και τη βανίλια.",
                "Προσθέστε σταδιακά το σιμιγδάλι, ανακατεύοντας συνεχώς.",
                "Μαγειρέψτε σε χαμηλή φωτιά μέχρι να πήξει η κρέμα.",
                "Αφαιρέστε από τη φωτιά και αφήστε να κρυώσει ελαφρώς.",
                "Χτυπήστε τα αυγά με την υπόλοιπη ζάχαρη και προσθέστε τα στην κρέμα.",
                "Βουτυρώστε ένα ταψί.",
                "Στρώστε τα μισά φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.",
                "Ρίξτε την κρέμα και καλύψτε με τα υπόλοιπα φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.",
                "Χαράξτε την επιφάνεια και ψήστε στους 180°C για 45 λεπτά.",
                "Ετοιμάστε το σιρόπι βράζοντας νερό, ζάχαρη, λεμόνι και πορτοκάλι.",
                "Περιχύστε το κρύο σιρόπι στο ζεστό γλυκό.",
                "Αφήστε να κρυώσει πριν σερβίρετε."
            ],
            en: [
                "Heat the milk in a pot with half the sugar and vanilla.",
                "Gradually add the semolina, stirring constantly.",
                "Cook on low heat until the custard thickens.",
                "Remove from heat and let it cool slightly.",
                "Beat the eggs with the remaining sugar and add them to the custard.",
                "Butter a baking dish.",
                "Layer half of the phyllo sheets, buttering each sheet.",
                "Pour in the custard and cover with the remaining phyllo sheets, buttering each sheet.",
                "Score the surface and bake at 180°C for 45 minutes.",
                "Prepare the syrup by boiling water, sugar, lemon, and orange.",
                "Pour the cold syrup over the hot dessert.",
                "Let it cool before serving."
            ]
        }
    },
    {
        id: 38,
        title: { el: "Κολοκυθάκια Γεμιστά με Ρύζι", en: "Stuffed Zucchini with Rice" },
        ingredients: [
            { el: "κολοκύθια", en: "zucchini" },
            { el: "ρύζι", en: "rice" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "ντομάτα", en: "tomato" },
            { el: "μαϊντανός", en: "parsley" },
            { el: "άνηθος", en: "dill" },
            { el: "μέντα", en: "mint" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "λεμόνι", en: "lemon" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 60,
        calories: 280,
        servings: 6,
        tags: ["vegetarian", "main dish", "stuffed vegetables"],
        description: {
            el: "Κολοκυθάκια γεμισμένα με αρωματικό ρύζι, ντομάτα και μυρωδικά.",
            en: "Zucchini stuffed with aromatic rice, tomato, and herbs."
        },
        instructions: {
            el: [
                "Πλύνετε τα κολοκύθια και κόψτε τα στη μέση κατά μήκος.",
                "Αφαιρέστε προσεκτικά τη σάρκα με ένα κουτάλι, αφήνοντας ένα περιθώριο περίπου 1 εκ.",
                "Ψιλοκόψτε τη σάρκα που αφαιρέσατε.",
                "Σε ένα τηγάνι, σοτάρετε το ψιλοκομμένο κρεμμύδι σε ελαιόλαδο.",
                "Προσθέστε το ρύζι και ανακατέψτε για 2 λεπτά.",
                "Προσθέστε τη ψιλοκομμένη ντομάτα, τη σάρκα των κολοκυθιών, τα μυρωδικά, αλάτι και πιπέρι.",
                "Προσθέστε λίγο νερό και μαγειρέψτε για 5 λεπτά (το ρύζι θα συνεχίσει να μαγειρεύεται στο φούρνο).",
                "Γεμίστε τα κολοκύθια με το μείγμα ρυζιού.",
                "Τοποθετήστε τα γεμιστά κολοκύθια σε ένα ταψί.",
                "Περιχύστε με ελαιόλαδο, λεμόνι και λίγο νερό.",
                "Καλύψτε με αλουμινόχαρτο και ψήστε στους 180°C για 45-60 λεπτά.",
                "Αφαιρέστε το αλουμινόχαρτο και συνεχίστε το ψήσιμο για άλλα 10 λεπτά.",
                "Σερβίρετε ζεστά ή σε θερμοκρασία δωματίου με φρέσκο λεμόνι."
            ],
            en: [
                "Wash the zucchini and cut them in half lengthwise.",
                "Carefully scoop out the flesh with a spoon, leaving a border of about 1 cm.",
                "Finely chop the scooped flesh.",
                "In a pan, sauté the chopped onion in olive oil.",
                "Add the rice and stir for 2 minutes.",
                "Add the chopped tomato, zucchini flesh, herbs, salt, and pepper.",
                "Add a little water and cook for 5 minutes (the rice will continue cooking in the oven).",
                "Fill the zucchini with the rice mixture.",
                "Place the stuffed zucchini in a baking dish.",
                "Drizzle with olive oil, lemon, and a little water.",
                "Cover with aluminum foil and bake at 180°C for 45-60 minutes.",
                "Remove the foil and continue baking for another 10 minutes.",
                "Serve hot or at room temperature with fresh lemon."
            ]
        }
    },
    {
        id: 39,
        title: { el: "Κοτόπουλο Λεμονάτο", en: "Lemon Chicken" },
        ingredients: [
            { el: "κοτόπουλο", en: "chicken" },
            { el: "λεμόνι", en: "lemon" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ρίγανη", en: "oregano" },
            { el: "θυμάρι", en: "thyme" },
            { el: "πατάτες", en: "potatoes" },
            { el: "κρασί", en: "white wine" },
            { el: "ζωμός κοτόπουλου", en: "chicken broth" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 60,
        calories: 420,
        servings: 4,
        tags: ["main dish", "meat", "baked"],
        description: {
            el: "Ζουμερό κοτόπουλο ψημένο με πατάτες σε σάλτσα λεμονιού και αρωματικών βοτάνων.",
            en: "Juicy chicken baked with potatoes in a lemon and herb sauce."
        },
        instructions: {
            el: [
                "Προθερμάνετε το φούρνο στους 180°C.",
                "Καθαρίστε και κόψτε τις πατάτες σε χοντρές φέτες.",
                "Τοποθετήστε τις πατάτες και το κοτόπουλο σε ένα ταψί.",
                "Σε ένα μπολ, ανακατέψτε το ελαιόλαδο, το χυμό λεμονιού, το ψιλοκομμένο σκόρδο, τη ρίγανη, το θυμάρι, αλάτι και πιπέρι.",
                "Περιχύστε το κοτόπουλο και τις πατάτες με το μείγμα.",
                "Προσθέστε το κρασί και το ζωμό κοτόπουλου στο ταψί.",
                "Ψήστε για περίπου 60 λεπτά ή μέχρι το κοτόπουλο να ψηθεί καλά και οι πατάτες να μαλακώσουν.",
                "Κατά τη διάρκεια του ψησίματος, περιχύστε το κοτόπουλο με τα υγρά του ταψιού 2-3 φορές.",
                "Σερβίρετε ζεστό, περιχύνοντας με τη σάλτσα από το ταψί και φρέσκο χυμό λεμονιού."
            ],
            en: [
                "Preheat the oven to 180°C.",
                "Clean and cut the potatoes into thick slices.",
                "Place the potatoes and chicken in a baking dish.",
                "In a bowl, mix the olive oil, lemon juice, minced garlic, oregano, thyme, salt, and pepper.",
                "Drizzle the chicken and potatoes with the mixture.",
                "Add the wine and chicken broth to the baking dish.",
                "Bake for about 60 minutes or until the chicken is well cooked and the potatoes are soft.",
                "During baking, baste the chicken with the pan juices 2-3 times.",
                "Serve hot, drizzling with the sauce from the pan and fresh lemon juice."
            ]
        }
    },
    {
        id: 40,
        title: { el: "Ρεβύθια Φούρνου", en: "Baked Chickpeas" },
        ingredients: [
            { el: "ρεβύθια", en: "chickpeas" },
            { el: "κρεμμύδι", en: "onion" },
            { el: "σκόρδο", en: "garlic" },
            { el: "ντομάτα", en: "tomato" },
            { el: "πιπεριά", en: "bell pepper" },
            { el: "ελαιόλαδο", en: "olive oil" },
            { el: "λεμόνι", en: "lemon" },
            { el: "ρίγανη", en: "oregano" },
            { el: "κύμινο", en: "cumin" },
            { el: "αλάτι", en: "salt" },
            { el: "πιπέρι", en: "pepper" }
        ],
        difficulty: "easy",
        prepTime: 120,
        cookTime: 90,
        calories: 320,
        servings: 4,
        tags: ["vegetarian", "main dish", "legumes", "baked"],
        description: {
            el: "Παραδοσιακό πιάτο με ρεβύθια ψημένα στο φούρνο με ντομάτα και αρωματικά μυρωδικά.",
            en: "Traditional dish with chickpeas baked in the oven with tomato and aromatic herbs."
        },
        instructions: {
            el: [
                "Μουλιάστε τα ρεβύθια σε κρύο νερό για τουλάχιστον 8 ώρες ή όλο το βράδυ.",
                "Στραγγίξτε τα ρεβύθια και ξεπλύνετέ τα.",
                "Βράστε τα ρεβύθια σε νερό για περίπου 1 ώρα ή μέχρι να μαλακώσουν ελαφρώς (όχι εντελώς).",
                "Προθερμάνετε το φούρνο στους 180°C.",
                "Σε ένα ταψί, συνδυάστε τα ρεβύθια με το ψιλοκομμένο κρεμμύδι, σκόρδο και πιπεριά.",
                "Προσθέστε τις ψιλοκομμένες ντομάτες, το ελαιόλαδο, τη ρίγανη, το κύμινο, αλάτι και πιπέρι.",
                "Προσθέστε νερό μέχρι να καλυφθούν σχεδόν τα ρεβύθια.",
                "Καλύψτε το ταψί με αλουμινόχαρτο και ψήστε για 1 ώρα.",
                "Αφαιρέστε το αλουμινόχαρτο και συνεχίστε το ψήσιμο για άλλα 30 λεπτά ή μέχρι τα ρεβύθια να μαλακώσουν εντελώς και η σάλτσα να δέσει.",
                "Σερβίρετε ζεστά με φρέσκο χυμό λεμονιού και επιπλέον ελαιόλαδο, συνοδευόμενα από φέτα και ψωμί."
            ],
            en: [
                "Soak the chickpeas in cold water for at least 8 hours or overnight.",
                "Drain the chickpeas and rinse them.",
                "Boil the chickpeas in water for about 1 hour or until slightly softened (not completely).",
                "Preheat the oven to 180°C.",
                "In a baking dish, combine the chickpeas with the chopped onion, garlic, and bell pepper.",
                "Add the chopped tomatoes, olive oil, oregano, cumin, salt, and pepper.",
                "Add water until the chickpeas are almost covered.",
                "Cover the baking dish with aluminum foil and bake for 1 hour.",
                "Remove the foil and continue baking for another 30 minutes or until the chickpeas are completely soft and the sauce has thickened.",
                "Serve hot with fresh lemon juice and extra olive oil, accompanied by feta cheese and bread."
            ]
        }
    }
];

// UI Translations
const translations = {
    welcome: {
        el: "Καλώς ήρθατε στη Γεννήτρια Ελληνικών Συνταγών",
        en: "Welcome to Greek Recipe Generator"
    },
    searchTitle: {
        el: "Αναζήτηση Συνταγών",
        en: "Search Recipes"
    },
    ingredientsTitle: {
        el: "Επιλέξτε Υλικά",
        en: "Select Ingredients"
    },
    difficultyTitle: {
        el: "Επίπεδο Δυσκολίας",
        en: "Difficulty Level"
    },
    prepTimeTitle: {
        el: "Χρόνος Προετοιμασίας",
        en: "Preparation Time"
    },
    searchButton: {
        el: "Αναζήτηση",
        en: "Search"
    },
    clearButton: {
        el: "Καθαρισμός",
        en: "Clear"
    },
    resultsTitle: {
        el: "Αποτελέσματα",
        en: "Results"
    },
    noResults: {
        el: "Δεν βρέθηκαν συνταγές που να ταιριάζουν με την αναζήτησή σας.",
        en: "No recipes match your search criteria."
    },
    ingredients: {
        el: "Υλικά",
        en: "Ingredients"
    },
    instructions: {
        el: "Οδηγίες",
        en: "Instructions"
    },
    difficulty: {
        el: "Δυσκολία",
        en: "Difficulty"
    },
    prepTime: {
        el: "Χρόνος Προετοιμασίας",
        en: "Preparation Time"
    },
    cookTime: {
        el: "Χρόνος Μαγειρέματος",
        en: "Cooking Time"
    },
    calories: {
        el: "Θερμίδες",
        en: "Calories"
    },
    servings: {
        el: "Μερίδες",
        en: "Servings"
    },
    minutes: {
        el: "λεπτά",
        en: "minutes"
    },
    viewRecipe: {
        el: "Δείτε τη Συνταγή",
        en: "View Recipe"
    },
    easy: {
        el: "Εύκολη",
        en: "Easy"
    },
    medium: {
        el: "Μέτρια",
        en: "Medium"
    },
    hard: {
        el: "Δύσκολη",
        en: "Hard"
    },
    all: {
        el: "Όλες",
        en: "All"
    }
};

// Function to get all ingredients
function getAllIngredients() {
    const allIngredients = [];
    
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            // Check if ingredient already exists in the array
            const existingIngredient = allIngredients.find(
                item => item.en.toLowerCase() === ingredient.en.toLowerCase()
            );
            
            if (!existingIngredient) {
                allIngredients.push(ingredient);
            }
        });
    });
    
    return allIngredients.sort((a, b) => a.en.localeCompare(b.en));
}

// Function to search and filter recipes
function searchRecipes(selectedIngredients = [], difficulty = 'all', maxPrepTime = 180) {
    let filteredRecipes = recipes;
    
    // Filter by difficulty if not 'all'
    if (difficulty !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.difficulty === difficulty);
    }
    
    // Filter by preparation time
    filteredRecipes = filteredRecipes.filter(recipe => recipe.prepTime <= maxPrepTime);
    
    // Filter by ingredients if any are selected
    if (selectedIngredients.length > 0) {
        filteredRecipes = filteredRecipes.filter(recipe => {
            // Check if recipe contains at least one of the selected ingredients
            return selectedIngredients.some(selectedIng => 
                recipe.ingredients.some(recipeIng => 
                    recipeIng.en.toLowerCase() === selectedIng.toLowerCase() ||
                    recipeIng.el.toLowerCase() === selectedIng.toLowerCase()
                )
            );
        });
    }
    
    return filteredRecipes;
}

// Function to display recipes
function displayRecipes(filteredRecipes, language = 'en') {
    const recipeContainer = document.getElementById('recipe-results');
    recipeContainer.innerHTML = '';

    if (filteredRecipes.length === 0) {
        recipeContainer.innerHTML = `<p class="no-results">${translations.noResults[language]}</p>`;
        return;
    }

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        
        recipeCard.innerHTML = `
            <h3>${recipe.title[language]}</h3>
            <p class="recipe-difficulty">${translations.difficulty[language]}: ${translations[recipe.difficulty][language]}</p>
            <p class="recipe-time">${translations.prepTime[language]}: ${recipe.prepTime} ${translations.minutes[language]}</p>
            <p class="recipe-description">${recipe.description[language]}</p>
            <button class="view-recipe-btn" data-id="${recipe.id}">${translations.viewRecipe[language]}</button>
        `;
        
        recipeContainer.appendChild(recipeCard);
    });
    
    // Add event listeners to view recipe buttons
    document.querySelectorAll('.view-recipe-btn').forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = parseInt(this.getAttribute('data-id'));
            displayRecipeDetails(recipeId, language);
        });
    });
}

// Function to display recipe details
function displayRecipeDetails(recipeId, language = 'en') {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const recipeModal = document.createElement('div');
    recipeModal.className = 'recipe-modal';
    
    const ingredientsList = recipe.ingredients.map(ing => 
        `<li>${ing[language]}</li>`
    ).join('');
    
    const instructionsList = recipe.instructions[language].map(step => 
        `<li>${step}</li>`
    ).join('');
    
    recipeModal.innerHTML = `
        <div class="recipe-modal-content">
            <span class="close-modal">&times;</span>
            <h2>${recipe.title[language]}</h2>
            <div class="recipe-info">
                <p><strong>${translations.difficulty[language]}:</strong> ${translations[recipe.difficulty][language]}</p>
                <p><strong>${translations.prepTime[language]}:</strong> ${recipe.prepTime} ${translations.minutes[language]}</p>
                <p><strong>${translations.cookTime[language]}:</strong> ${recipe.cookTime} ${translations.minutes[language]}</p>
                <p><strong>${translations.calories[language]}:</strong> ${recipe.calories}</p>
                <p><strong>${translations.servings[language]}:</strong> ${recipe.servings}</p>
            </div>
            <div class="recipe-ingredients">
                <h3>${translations.ingredients[language]}:</h3>
                <ul>${ingredientsList}</ul>
            </div>
            <div class="recipe-instructions">
                <h3>${translations.instructions[language]}:</h3>
                <ol>${instructionsList}</ol>
            </div>
        </div>
    `;

    document.body.appendChild(recipeModal);

    // Close modal when clicking on X or outside the modal
    const closeBtn = recipeModal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(recipeModal);
    });
    
    recipeModal.addEventListener('click', (e) => {
        if (e.target === recipeModal) {
            document.body.removeChild(recipeModal);
        }
    });
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set default language
    let currentLanguage = 'en';
    
    // Get references to elements
    const languageToggle = document.getElementById('language-toggle');
    const searchForm = document.getElementById('search-form');
    const ingredientsContainer = document.getElementById('ingredients-container');
    const difficultySelect = document.getElementById('difficulty-select');
    const prepTimeRange = document.getElementById('prep-time-range');
    const prepTimeValue = document.getElementById('prep-time-value');
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');
    
    // Initialize ingredient checkboxes
    const allIngredients = getAllIngredients();
    allIngredients.forEach(ingredient => {
        const ingredientLabel = document.createElement('label');
        ingredientLabel.className = 'ingredient-label';
        
        const ingredientCheckbox = document.createElement('input');
        ingredientCheckbox.type = 'checkbox';
        ingredientCheckbox.className = 'ingredient-checkbox';
        ingredientCheckbox.value = ingredient.en;
        ingredientCheckbox.dataset.el = ingredient.el;
        
        const ingredientText = document.createElement('span');
        ingredientText.className = 'ingredient-text';
        ingredientText.textContent = ingredient.en;
        ingredientText.dataset.el = ingredient.el;
        ingredientText.dataset.en = ingredient.en;
        
        ingredientLabel.appendChild(ingredientCheckbox);
        ingredientLabel.appendChild(ingredientText);
        ingredientsContainer.appendChild(ingredientLabel);
    });
    
    // Update prep time display
    prepTimeRange.addEventListener('input', function() {
        prepTimeValue.textContent = this.value;
    });
    
    // Language toggle functionality
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'el' : 'en';
        updateUILanguage();
    });
    
    // Update all UI elements with new language
    function updateUILanguage() {
        // Update headers and button texts
        document.querySelector('.site-title').textContent = translations.welcome[currentLanguage];
        document.querySelector('.search-title').textContent = translations.searchTitle[currentLanguage];
        document.querySelector('.ingredients-title').textContent = translations.ingredientsTitle[currentLanguage];
        document.querySelector('.difficulty-title').textContent = translations.difficultyTitle[currentLanguage];
        document.querySelector('.prep-time-title').textContent = translations.prepTimeTitle[currentLanguage];
        document.querySelector('.results-title').textContent = translations.resultsTitle[currentLanguage];
        searchBtn.textContent = translations.searchButton[currentLanguage];
        clearBtn.textContent = translations.clearButton[currentLanguage];
        
        // Update language toggle button
        languageToggle.textContent = currentLanguage === 'en' ? 'Ελληνικά' : 'English';
        
        // Update ingredient labels
        document.querySelectorAll('.ingredient-text').forEach(el => {
            el.textContent = el.dataset[currentLanguage];
        });
        
        // Update difficulty select options
        const difficultyOptions = ['all', 'easy', 'medium', 'hard'];
        difficultySelect.innerHTML = '';
        difficultyOptions.forEach(option => {
            const optionEl = document.createElement('option');
            optionEl.value = option;
            optionEl.textContent = translations[option][currentLanguage];
            difficultySelect.appendChild(optionEl);
        });
        
        // Update recipe display if there are currently displayed recipes
        const recipeResults = document.getElementById('recipe-results');
        if (recipeResults.children.length > 0 && recipeResults.children[0].className !== 'no-results') {
            const selectedIngredients = Array.from(document.querySelectorAll('.ingredient-checkbox:checked')).map(cb => cb.value);
            const selectedDifficulty = difficultySelect.value;
            const maxPrepTime = parseInt(prepTimeRange.value);
            
            const filteredRecipes = searchRecipes(selectedIngredients, selectedDifficulty, maxPrepTime);
            displayRecipes(filteredRecipes, currentLanguage);
        }
    }
    
    // Search form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const selectedIngredients = Array.from(document.querySelectorAll('.ingredient-checkbox:checked')).map(cb => cb.value);
        const selectedDifficulty = difficultySelect.value;
        const maxPrepTime = parseInt(prepTimeRange.value);
        
        const filteredRecipes = searchRecipes(selectedIngredients, selectedDifficulty, maxPrepTime);
        displayRecipes(filteredRecipes, currentLanguage);
    });
    
    // Clear button functionality
    clearBtn.addEventListener('click', function() {
        document.querySelectorAll('.ingredient-checkbox').forEach(cb => {
            cb.checked = false;
        });
        
        difficultySelect.value = 'all';
        prepTimeRange.value = 180;
        prepTimeValue.textContent = '180';
        
        document.getElementById('recipe-results').innerHTML = '';
    });
    
    // Initial UI setup
    updateUILanguage();
}); 
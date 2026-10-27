export const BATCH_BUNDLES = [
  {
    id: 'bundle-solo',
    name: 'The Solo Executive',
    tagline: '5–7 Days of Zero Cooking for 1 Busy Lagos Professional',
    householdSize: '1 Adult',
    price: 42500,
    originalPrice: 48000,
    popular: false,
    badge: 'Popular for Island Pros',
    description: 'Perfect for working long hours in VI, Marina or Lekki. Come home every evening knowing dinner is already sorted in the fridge.',
    includes: [
      '1x 2.0L Signature Soup (e.g. Egusi or Seafood Okro)',
      '1x 1.5L Signature Stew (e.g. Ayamase or Buka Stew)',
      '1x Tray of 6 Large Proteins (Peppered Turkey / Goat Meat)',
      '4x Airtight Freezer Tubs with Heat & Eat Instructions'
    ],
    savingsHours: '9 hours cooking & market shopping saved',
    mealsCount: '10–12 Portions',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bundle-couples',
    name: "The Couple's Weekly Pantry",
    tagline: 'Complete 7-Day Household Coverage for Working Couples',
    householdSize: '2 Adults',
    price: 78000,
    originalPrice: 89000,
    popular: true,
    badge: 'Most Subscribed Plan',
    description: 'No more "What are we cooking tonight?" debates after 7 PM traffic. Balanced authentic meals ready to scoop, warm, and enjoy.',
    includes: [
      '2x 2.0L Signature Soups (Choose 2 varieties)',
      '1x 2.0L Rich Stew or Sauce (Ayamase or Buka Stew)',
      '2x Trays of 8 Proteins (16 pcs assorted beef, turkey or fish)',
      'Airtight stackable containers with freshness date stamp'
    ],
    savingsHours: '14 hours saved weekly for relaxation',
    mealsCount: '20–24 Portions',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bundle-family',
    name: 'The Family Batch Replenishment',
    tagline: 'Nourish the Entire Household with Zero Weekend Stress',
    householdSize: 'Family of 4–6',
    price: 145000,
    originalPrice: 165000,
    popular: false,
    badge: 'Family Value',
    description: 'Everything your home needs for weekday dinners, school prep, and weekend lunches. Freshly cooked on Friday, delivered chilled on Saturday morning.',
    includes: [
      '2x 3.5L Big Batch Soups (Egusi & Efo Riro or Afang)',
      '1x 3.5L Big Batch Buka / Sunday Tomato Stew',
      '2x Trays of 12 Big Proteins (24 total pcs: Asun Goat, Turkey, Croaker)',
      '1x 3.0L Smoked Lagos Party Jollof Rice Base',
      'Freezer storage & reheat timing guide card'
    ],
    savingsHours: '20+ hours of market runs & stove time saved',
    mealsCount: '38–42 Portions',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
  }
];

export const SOUPS = [
  {
    id: 'soup-egusi',
    name: 'Royal Egusi Elegusi',
    category: 'soups',
    description: 'Slow-simmered hand-peeled melon seeds with smoked panla, stockfish flakes, cow tripe (shaki), and fresh uziza & bitterleaf.',
    sizes: [
      { label: '1.5 Litre (Small Batch)', volume: 1.5, price: 16500, portions: '4–6 bowls' },
      { label: '2.5 Litre (Medium Batch)', volume: 2.5, price: 26000, portions: '8–10 bowls', recommended: true },
      { label: '4.0 Litre (Household Trough)', volume: 4.0, price: 39500, portions: '14–16 bowls' }
    ],
    spiceLevel: 'Medium Balanced',
    shelfLife: '5 days refrigerated, 4 weeks frozen',
    tags: ['Lagos Favorite', 'Rich Stockfish', 'Low Carb'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soup-seafood-okro',
    name: 'Island Fisherman Seafood Okro',
    category: 'soups',
    description: 'Crunchy chopped native okra cooked in rich marine broth with jumbo tiger prawns, fresh calamari, blue crabs, and smoked catfish.',
    sizes: [
      { label: '1.5 Litre (Small Batch)', volume: 1.5, price: 22000, portions: '4–6 bowls' },
      { label: '2.5 Litre (Medium Batch)', volume: 2.5, price: 34500, portions: '8–10 bowls', recommended: true },
      { label: '4.0 Litre (Household Trough)', volume: 4.0, price: 52000, portions: '14–16 bowls' }
    ],
    spiceLevel: 'Mild Spicy',
    shelfLife: '4 days refrigerated, 3 weeks frozen',
    tags: ['Fresh Catch', 'High Protein', 'Keto Friendly'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soup-efo-riro',
    name: 'Rich Yoruba Efo Riro',
    category: 'soups',
    description: 'Vibrant local shoko & spinach blanched and tossed with crushed red scotch bonnets, fermented locust beans (iru), dry fish, and tender ponmo.',
    sizes: [
      { label: '1.5 Litre (Small Batch)', volume: 1.5, price: 15500, portions: '4–6 bowls' },
      { label: '2.5 Litre (Medium Batch)', volume: 2.5, price: 24500, portions: '8–10 bowls', recommended: true },
      { label: '4.0 Litre (Household Trough)', volume: 4.0, price: 37000, portions: '14–16 bowls' }
    ],
    spiceLevel: 'Spicy Authentic',
    shelfLife: '5 days refrigerated, 4 weeks frozen',
    tags: ['Iron Rich', 'Traditional Iru', 'Vegetable Rich'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soup-afang',
    name: 'Calabar Royal Afang Soup',
    category: 'soups',
    description: 'Pounded wild okazi leaves simmered with fresh waterleaf, shelled periwinkles, smoked catfish, dried prawns, and rich palm fruit extract.',
    sizes: [
      { label: '1.5 Litre (Small Batch)', volume: 1.5, price: 18500, portions: '4–6 bowls' },
      { label: '2.5 Litre (Medium Batch)', volume: 2.5, price: 29000, portions: '8–10 bowls', recommended: true },
      { label: '4.0 Litre (Household Trough)', volume: 4.0, price: 44000, portions: '14–16 bowls' }
    ],
    spiceLevel: 'Medium Warm',
    shelfLife: '5 days refrigerated, 4 weeks frozen',
    tags: ['Traditional Special', 'Periwinkle Infused'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soup-nsala',
    name: 'Ofe Nsala (White Soup)',
    category: 'soups',
    description: 'Hearty Anambra white soup thickened with pounded sweet yam, spiced with calabash nutmeg, alligator pepper, and loaded with fresh point & kill catfish.',
    sizes: [
      { label: '1.5 Litre (Small Batch)', volume: 1.5, price: 19500, portions: '4–6 bowls' },
      { label: '2.5 Litre (Medium Batch)', volume: 2.5, price: 31000, portions: '8–10 bowls' },
      { label: '4.0 Litre (Household Trough)', volume: 4.0, price: 46000, portions: '14–16 bowls' }
    ],
    spiceLevel: 'Herbal Aromatic Peppery',
    shelfLife: '4 days refrigerated, 3 weeks frozen',
    tags: ['Herbal Broth', 'Fresh Catfish', 'Restorative'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  }
];

export const STEWS = [
  {
    id: 'stew-ayamase',
    name: 'Designer Ayamase (Ofada Stew)',
    category: 'stews',
    description: 'Coarsely blended green bell peppers & scotch bonnets fried in aromatic bleached palm oil with locust beans, boiled eggs, smoked panla, and tender offals.',
    sizes: [
      { label: '1.5 Litre Tub', volume: 1.5, price: 18000, portions: '6–8 meals' },
      { label: '2.5 Litre Tub', volume: 2.5, price: 28500, portions: '10–14 meals', recommended: true },
      { label: '4.0 Litre Tub', volume: 4.0, price: 43000, portions: '18–22 meals' }
    ],
    spiceLevel: 'Hot & Flavorful',
    shelfLife: '7 days refrigerated, 6 weeks frozen',
    tags: ['Lagos Cult Favorite', 'Bleached Palm Oil', 'Includes Boiled Eggs'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stew-buka',
    name: 'Slow-Simmered Buka Stew',
    category: 'stews',
    description: 'The definitive Lagos party stew. Charcoal-roasted tatase and tomatoes slow-cooked in spiced groundnut oil with tender chunks of seasoned beef and shaki.',
    sizes: [
      { label: '1.5 Litre Tub', volume: 1.5, price: 15000, portions: '6–8 meals' },
      { label: '2.5 Litre Tub', volume: 2.5, price: 23500, portions: '10–14 meals', recommended: true },
      { label: '4.0 Litre Tub', volume: 4.0, price: 36000, portions: '18–22 meals' }
    ],
    spiceLevel: 'Medium Balanced',
    shelfLife: '7 days refrigerated, 6 weeks frozen',
    tags: ['Smoky Flavour', 'Pairs with Everything', 'Family Staple'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stew-native-sauce',
    name: 'Rivers Native Fisherman Sauce',
    category: 'stews',
    description: 'Aromatic palm oil base with shredded dry prawns, smoked titus flakes, chopped fresh scent leaves, and sliced yellow habanero peppers.',
    sizes: [
      { label: '1.5 Litre Tub', volume: 1.5, price: 17500, portions: '6–8 meals' },
      { label: '2.5 Litre Tub', volume: 2.5, price: 27000, portions: '10–14 meals' },
      { label: '4.0 Litre Tub', volume: 4.0, price: 41000, portions: '18–22 meals' }
    ],
    spiceLevel: 'Warm Fragrant',
    shelfLife: '6 days refrigerated, 4 weeks frozen',
    tags: ['Scent Leaf Infused', 'Great with Yam or Plantain'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROTEINS = [
  {
    id: 'protein-turkey',
    name: 'Spiced Peppered Turkey Quarters',
    category: 'proteins',
    description: 'Deeply seasoned, golden fried succulent turkey quarters tossed in a rich scotch bonnet and charred onion sauce.',
    options: [
      { label: 'Tray of 6 Portions', quantity: 6, price: 16000 },
      { label: 'Tray of 12 Portions', quantity: 12, price: 29500, recommended: true },
      { label: 'Tray of 20 Portions', quantity: 20, price: 47000 }
    ],
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'protein-goat',
    name: 'Slow-Braised Asun-Style Goat Meat',
    category: 'proteins',
    description: 'Tender chevon pieces slow-cooked with fresh rosemary, thyme, garlic, and tossed over high heat with roasted habanero peppers.',
    options: [
      { label: 'Tray of 10 Chunks', quantity: 10, price: 17500 },
      { label: 'Tray of 20 Chunks', quantity: 20, price: 32000, recommended: true },
      { label: 'Big Batch (35 Chunks)', quantity: 35, price: 54000 }
    ],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'protein-croaker',
    name: 'Charred Spiced Croaker Steaks',
    category: 'proteins',
    description: 'Thick cut Atlantic croaker fish steaks marinated in ginger, garlic, scent leaves, and grilled to juicy perfection.',
    options: [
      { label: 'Tray of 6 Steaks', quantity: 6, price: 18500 },
      { label: 'Tray of 12 Steaks', quantity: 12, price: 34000, recommended: true }
    ],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'protein-beef-shaki',
    name: 'Assorted Tender Beef & Shaki Medley',
    category: 'proteins',
    description: 'Melt-in-your-mouth braised flank steak, cow honeycomb tripe, and tender tendon simmered in seasoned herb broth.',
    options: [
      { label: 'Tray of 12 Cuts', quantity: 12, price: 14500 },
      { label: 'Tray of 24 Cuts', quantity: 24, price: 27000, recommended: true }
    ],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  }
];

export const BASES = [
  {
    id: 'base-jollof',
    name: 'Firewood Smoked Party Jollof',
    category: 'bases',
    description: 'Authentic Nigerian long-grain rice infused with fire-roasted peppers, bay leaves, and that classic party bottom-pot aroma.',
    sizes: [
      { label: '3.0 Litre Family Tub', volume: 3.0, price: 14000, portions: '6–8 plates' },
      { label: '5.0 Litre Feast Tub', volume: 5.0, price: 22500, portions: '12–15 plates' }
    ],
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-fried-rice',
    name: 'Lagos Savory Fried Rice',
    category: 'bases',
    description: 'Stir-fried rice with sweet corn, spring onions, diced beef liver, carrots, and aromatic curry-thyme stock.',
    sizes: [
      { label: '3.0 Litre Family Tub', volume: 3.0, price: 16000, portions: '6–8 plates' },
      { label: '5.0 Litre Feast Tub', volume: 5.0, price: 25000, portions: '12–15 plates' }
    ],
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80'
  }
];

/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "Assorted cheese cupake",
    description:
      "This is our specail cheese mixed soft cupcake with american, canadian and swiss cheese. ",
    price: 589,
    discontinued: false,
    categories: ["C2", "C4"]
  },
  {
    id: "P2",
    title: "Easter daises and nut cupcake",
    description: "This is our simnel fruit cake enriched with cream and nuts mixed.",
    price: 469,
    discontinued: false,
    categories: ["C3", "C4"]
  },
  {
    id: "P3",
    title: "Coconut and chocochip cupcake",
    description:
      "This is our coconut and crunchy chocochips mixed cupcake with enriched coconut oil.",
    price: 689,
    discontinued: false,
    categories: ["C1", "C3", "C4"]
  },
  {
    id: "P4",
    title: "Dark chocolate cupcake",
    description:
      "This is our premium dark chocolate enriched cupcake exclusively made with choco syrp.",
    price: 886,
    discontinued: false,
    categories: ["C1", "C4"]
  },
  {
    id: "P5",
    title: "Whiskey and Irish cream filled cupcake",
    description:
      "This is our super soft cupcake with the core filled with white whipped-irish cream.",
    price: 679,
    discontinued: false,
    categories: ["C2", "C4"]
  },
  {
    id: "P6",
    title: "Cream and cheese frosting cupcake",
    description:
      "This is our extra-soft cream and cheese burst cupcake, specailly made with swiss cheese.",
    price: 550,
    discontinued: true,
    categories: ["C2", "C4"]
  },
  {
    id: "P7",
    title: "Ultimate chocolate",
    description:
      "This is our extra chocolaty cupcake, made with ultimate latte white and brown chocolate.",
    price: 648,
    discontinued: false,
    categories: ["C1", "C4"]
  },
  {
    id: "P8",
    title: "White chip macadamia nut cookie",
    description: "This our special super soft cookie with mixed white chip macadamia nuts.",
    price: 250,
    discontinued: false,
    categories: ["C3", "C6"]
  },
  {
    id: "P9",
    title: "Peanut butter and cream cookie",
    description: "This is our creamy cookie specailly made with peanut salty butter.",
    price: 200,
    discontinued: false,
    categories: ["C2", "C6"]
  },
  {
    id: "P10",
    title: "Oatmeal raisin spice cookie",
    description: "This our heavy oatmeal spice cookie made with extra raisins.",
    price: 350,
    discontinued: true,
    categories: ["C3", "C6"]
  },
  {
    id: "P11",
    title: "Cream and cheese filled cookie",
    description:
      "This is our extra creamy and cheesy cookie with cheese outside and cream filled in the core.",
    price: 259,
    discontinued: false,
    categories: ["C2", "C6"]
  },
  {
    id: "P12",
    title: "Double chocolate cookie",
    description: "This is extra chocolaty cookie made with chocolate and topped with chocochips.",
    price: 499,
    discontinued: false,
    categories: ["C1", "C6"]
  },
  {
    id: "P13",
    title: "Apple fritter donut",
    description: "This is our specail extra sweet donut filled with apple fritter.",
    price: 567,
    discontinued: true,
    categories: ["C3", "C5"]
  },
  {
    id: "P14",
    title: "Chocolate dip donut",
    description: "This is most popular donut with the top dipped in dark chocolate.",
    price: 459,
    discontinued: false,
    categories: ["C1", "C5"]
  },
  {
    id: "P15",
    title: "Sour cream plain donut",
    description: "This is our donut specially made for kids, plain with sour cream.",
    price: 389,
    discontinued: false,
    categories: ["C2", "C5"]
  },
  {
    id: "P16",
    title: "Double chocolate donut",
    description:
      "This is our extra-chocolaty donut, made with chocolate and top dipped in chocolate. ",
    price: 679,
    discontinued: false,
    categories: ["C1", "C5"]
  },
  {
    id: "P17",
    title: "Boston cream donut",
    description: "This is our creamy donut dipped in boston cream. ",
    price: 459,
    discontinued: false,
    categories: ["C2", "C5"]
  },
  {
    id: "P18",
    title: "Honey cruller donut",
    description: "This is our extra-sweet donut dipped in honey.",
    price: 439,
    discontinued: false,
    categories: ["C5"]
  },
  {
    id: "P19",
    title: "Strawberry and vanilla donut",
    description: "This is our specail extra-fruity donut with strawberry and vanilla stuffing.",
    price: 699,
    discontinued: true,
    categories: ["C3", "C5"]
  },
  {
    id: "P20",
    title: "Chocolate chip muffin",
    description: "This is our chocolaty muffin with choco-chips on top of it.",
    price: 650,
    discontinued: false,
    categories: ["C1", "C7"]
  },
  {
    id: "P21",
    title: "Fruit explosion muffin",
    description: "This is our fruit mixed muffin with extra sugar and fruits stuffing.",
    price: 789,
    discontinued: false,
    categories: ["C3", "C7"]
  },
  {
    id: "P22",
    title: "Wild blueberry muffin",
    description: "This is our sweet and sour muffin exclusively made with wild blueberries.",
    price: 600,
    discontinued: false,
    categories: ["C3", "C7"]
  },
  {
    id: "P23",
    title: "Carrot and walnut muffin",
    description: "This is our premium muffin with carrot and walnut toppings",
    price: 679,
    discontinued: false,
    categories: ["C3", "C7"]
  }
];

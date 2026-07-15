/* ============================================================
   AARAMBH — PRODUCT & SITE SETTINGS
   ------------------------------------------------------------
   This is the ONLY file you need to edit to:
     - add a new saree
     - change a price
     - start or end a sale
     - change your WhatsApp order number

   You do NOT need to touch index.html for any of this.
   Just edit the values below, save the file, and refresh the page.
   ============================================================ */


/* ---------- 1. YOUR WHATSAPP NUMBER ----------
   Used for the "Enquire on WhatsApp" buttons.
   Format: country code + number, no +, no spaces, no dashes.
   Example for an Indian number 98765 43210 -> "919876543210"
*/
const SITE_CONFIG = {
  whatsappNumber: "91XXXXXXXXX",

  /* ---------- 2. SITE-WIDE SALE BANNER ----------
     Turn the top banner on/off and set its text.
     saleActive: true  -> banner shows
     saleActive: false -> banner is hidden
  */
  saleActive: false,
  saleText: "Festive Edit — flat 15% off Handloom Heritage this week",
};


/* ---------- 3. YOUR PRODUCTS ----------
   Each saree is one { ... } block below. To add a new one:
     1. Copy an entire block from the opening { to the closing },
     2. Paste it just before the closing ]; at the bottom,
     3. Change the values inside.

   FIELD GUIDE:
     id          -> just a unique number, never repeat one
     name        -> saree name shown on the card
     collection  -> must be exactly one of:
                    "heritage"   (Handloom Heritage)
                    "edit"       (Contemporary Edit)
                    "daily"      (Everyday Aarambh)
     fabric      -> short fabric/technique description
     price       -> the regular price, just the number, no commas or ₹
     salePercent -> 0 if no sale. Otherwise the discount, e.g. 20 for 20% off
     image       -> path to the photo file (see note below)
     badge       -> optional small tag: "New", "Bestseller", or "" for none
     description -> one short line about the piece

   ABOUT IMAGES:
   Put your photos in an "images" folder next to index.html, and
   reference them like "images/rani-kanjivaram.jpg". Until you add
   real photos, the cards will show a placeholder color swatch instead.
*/

const PRODUCTS = [
  {
    id: 1,
    name: "Rani Kanjivaram",
    collection: "heritage",
    fabric: "Pure silk, zari border",
    price: 18500,
    salePercent: 0,
    image: "",
    badge: "Bestseller",
    description: "Deep rani pink silk with a contrast gold zari border.",
  },
  {
    id: 2,
    name: "Indigo Ikat",
    collection: "daily",
    fabric: "Handwoven cotton",
    price: 4200,
    salePercent: 0,
    image: "",
    badge: "",
    description: "Everyday cotton ikat in a soft indigo tone.",
  },
  {
    id: 3,
    name: "Marigold Tussar",
    collection: "heritage",
    fabric: "Tussar silk",
    price: 9800,
    salePercent: 0,
    image: "",
    badge: "New",
    description: "Warm marigold tussar with a raw silk texture.",
  },
  {
    id: 4,
    name: "Dusk Georgette",
    collection: "edit",
    fabric: "Pre-draped georgette",
    price: 6400,
    salePercent: 0,
    image: "",
    badge: "",
    description: "Pre-draped for effortless evening wear.",
  },
  {
    id: 5,
    name: "Bandhani Rose",
    collection: "daily",
    fabric: "Bandhani cotton silk",
    price: 7900,
    salePercent: 0,
    image: "",
    badge: "",
    description: "Classic bandhani dots in a soft rose colourway.",
  },
  {
    id: 6,
    name: "Ink Jamdani",
    collection: "heritage",
    fabric: "Handloom jamdani",
    price: 12300,
    salePercent: 0,
    image: "",
    badge: "",
    description: "Fine handloom jamdani in deep ink blue.",
  },
  {
    id: 7,
    name: "Sunlit Linen",
    collection: "daily",
    fabric: "Handloom linen",
    price: 3600,
    salePercent: 0,
    image: "",
    badge: "",
    description: "Breathable linen, ideal for daily wear.",
  },
  {
    id: 8,
    name: "Twilight Chanderi",
    collection: "edit",
    fabric: "Chanderi silk cotton",
    price: 8700,
    salePercent: 0,
    image: "",
    badge: "",
    description: "Sheer chanderi with a contemporary drape.",
  },
  {
    id: 9,
    name: "Sea-Green Peacock Paithani",
    collection: "heritage",
    fabric: "Katan silk, peacock motif border",
    price: 2000,
    salePercent: 0,
    image: "sea-green-peacock-paithani.jpg",
    badge: "New",
    description: "All-over peacock pair Paithani in katan silk. Price excludes shipping.",
  },
];

export interface Subcategory {
  name: string;
  subtitle: string;
  image: string;
  code: string;
  price: string;
}

export interface Category {
  slug: string;
  name: string;
  image: string;
  subcategories: Subcategory[];
}

export const categories: Category[] = [
  { 
    slug: "guvech",
    name: "Гювечи и гърнета", 
    image: "/products/01_2026 (8).avif",
    subcategories: [
      { name: "Гювече", subtitle: "0.500 л", image: "/products/01_2026 (8).avif", code: "1001", price: "" },
      { name: "Гювеч", subtitle: "1 л", image: "/products/12_2025_-15.avif", code: "1002", price: "" },
      { name: "Гювеч", subtitle: "3 л", image: "/products/12_2025_-6.avif", code: "1003", price: "" },
      { name: "Гювеч", subtitle: "6 л", image: "/products/more/1004гювеч 6л.jpeg", code: "1004", price: "" },
      { name: "Гърне за боб", subtitle: "3 л", image: "/images/slide-3.jpg", code: "1005", price: "" },
      { name: "Гърне за боб", subtitle: "5 л", image: "/images/slide-3.jpg", code: "1006", price: "" },
    ]
  },
  { 
    slug: "kupi",
    name: "Купи и сосиерки", 
    image: "/products/01_2026 (13).avif",
    subcategories: [
      { name: "Купа малка", subtitle: "Ø 12 см", image: "/products/12_2025_-25.avif", code: "2001", price: "" },
      { name: "Купа средна", subtitle: "Ø 14 см", image: "/products/01_2026 (25).avif", code: "2002", price: "" },
      { name: "Купа голяма", subtitle: "Ø 16 см", image: "/products/01_2026 (13).avif", code: "2003", price: "" },
      { name: "Купа №3", subtitle: "Ø 18 см", image: "/products/12_2025_-5.avif", code: "2004", price: "" },
      { name: "Купа №5", subtitle: "Ø 20 см", image: "/products/12_2025_-3.avif", code: "2005", price: "" },
      { name: "Купа №7", subtitle: "Ø 24 см", image: "/products/01_2026 (4) copy.avif", code: "2006", price: "" },
      { name: "Купа №13", subtitle: "Ø 28 см", image: "/products/01_2026 (2).avif", code: "2007", price: "" },
      { name: "Купа с дръжка", subtitle: "400 мл", image: "/images/slide-3.jpg", code: "2008", price: "" },
      { name: "Купа за спагети", subtitle: "", image: "/images/slide-3.jpg", code: "2009", price: "" },
      { name: "Сосиерка", subtitle: "", image: "/products/01_2026 (56).avif", code: "2010", price: "" },
    ]
  },
  { 
    slug: "chinii",
    name: "Чинии и пахари", 
    image: "/products/01_2026 (20).avif",
    subcategories: [
      { name: "Чиния", subtitle: "Ø 15 см", image: "/products/01_2026 (20).avif", code: "3001", price: "" },
      { name: "Чиния", subtitle: "Ø 18 см", image: "/products/01_2026 (21).avif", code: "3002", price: "" },
      { name: "Чиния", subtitle: "Ø 22 см", image: "/products/more/3003 .jpeg", code: "3003", price: "" },
      { name: "Чиния", subtitle: "Ø 26 см", image: "/products/more/3004.jpeg", code: "3004", price: "" },
      { name: "Чиния", subtitle: "Ø 30 см", image: "/products/more/3005.jpeg", code: "3005", price: "" },
      { name: "Пахар", subtitle: "Ø 17 см", image: "/images/slide-3.jpg", code: "3006", price: "" },
    ]
  },
  { 
    slug: "tavi",
    name: "Тави", 
    image: "/products/01_2026 (3).avif",
    subcategories: [
      { name: "Тава №5", subtitle: "Ø 20 см", image: "/images/slide-3.jpg", code: "4001", price: "" },
      { name: "Тава №7", subtitle: "Ø 24 см", image: "/products/12_2025_-2-1.avif", code: "4002", price: "" },
      { name: "Тава №13", subtitle: "Ø 28 см", image: "/products/01_2026 (3).avif", code: "4003", price: "" },
      { name: "Тава за пиле", subtitle: "Ø 28 см", image: "/products/01_2026 (1).avif", code: "4004", price: "" },
    ]
  },
  { 
    slug: "chashi-alkohol",
    name: "Чаши за алкохол", 
    image: "/products/01_2026 (50).avif",
    subcategories: [
      { name: "Чаша за ракия", subtitle: "100 мл", image: "/products/01_2026 (50).avif", code: "5001", price: "" },
      { name: "Чаша шот", subtitle: "100 мл", image: "/products/01_2026 (43).avif", code: "5002", price: "" },
      { name: "Мини халба", subtitle: "100 мл", image: "/products/01_2026 (34).avif", code: "5003", price: "" },
      { name: "Юзче", subtitle: "100 мл", image: "/products/12_2025_-22.avif", code: "5004", price: "" },
      { name: "Чаша за вино", subtitle: "200 мл", image: "/products/01_2026 (36).avif", code: "5005", price: "" },
    ]
  },
  { 
    slug: "chashi-kafe",
    name: "Чаши за кафе и чай", 
    image: "/products/01_2026 (35).avif",
    subcategories: [
      { name: "Чаша за кафе \"Столче\"", subtitle: "", image: "/products/more/6001.jpeg", code: "6001", price: "" },
      { name: "Чаша за кафе лате", subtitle: "", image: "/products/01_2026 (35).avif", code: "6002", price: "" },
      { name: "Чаша за кафе \"Канче\"", subtitle: "", image: "/products/01_2026 (39).avif", code: "6003", price: "" },
      { name: "Чаша за кафе \"Бонбон\"", subtitle: "", image: "/products/01_2026 (33).avif", code: "6004", price: "" },
      { name: "Чаша за кафе \"Лале\"", subtitle: "", image: "/products/01_2026 (41).avif", code: "6005", price: "" },
      { name: "Чаша за кафе \"Буре\"", subtitle: "", image: "/products/01_2026 (46).avif", code: "6006", price: "" },
      { name: "Чаша за кафе ристрето", subtitle: "", image: "/products/01_2026 (44).avif", code: "6007", price: "" },
      { name: "Чаша за кафе с чинийка \"Лаваца\"", subtitle: "", image: "/products/01_2026 (53).avif", code: "6008", price: "" },
      { name: "Чаша за кафе с чинийка", subtitle: "", image: "/products/01_2026 (52).avif", code: "6009", price: "" },
      { name: "Чаша за чай с чинийка", subtitle: "", image: "/products/more/6010 чаша чай и чиниика.jpeg", code: "6010", price: "" },
    ]
  },
  { 
    slug: "chashi-napitki",
    name: "Чаши за напитки и халби", 
    image: "/products/01_2026 (42).avif",
    subcategories: [
      { name: "Чаша за мляко", subtitle: "400 мл", image: "/products/01_2026 (42).avif", code: "7001", price: "" },
      { name: "Чаша за безалкохолно", subtitle: "400 мл", image: "/products/01_2026 (37).avif", code: "7002", price: "" },
      { name: "Халба", subtitle: "500 мл", image: "/products/12_2025_-8.avif", code: "7003", price: "" },
    ]
  },
  { 
    slug: "servizi",
    name: "Сервизи", 
    image: "/products/01_2026 (14).avif",
    subcategories: [
      { name: "Сервиз оливерник", subtitle: "", image: "/products/01_2026 (14).avif", code: "8001", price: "" },
      { name: "Сервиз оливерник \"Каручка\"", subtitle: "", image: "/images/Olivernik karuca.jpg", code: "8002", price: "" },
      { name: "Сервиз за вино", subtitle: "", image: "/images/slide-3.jpg", code: "8003", price: "" },
      { name: "Сервиз за ракия", subtitle: "", image: "/images/rakia cup.jpg", code: "8004", price: "" },
    ]
  },
  { 
    slug: "aksesori",
    name: "Дребни аксесоари", 
    image: "/products/01_2026 (54).avif",
    subcategories: [
      { name: "Яйчарка", subtitle: "", image: "/products/01_2026 (49).avif", code: "9001", price: "" },
      { name: "Камбанка", subtitle: "", image: "/products/01_2026 (54).avif", code: "9002", price: "" },
      { name: "Лимоноизтисквачка", subtitle: "", image: "/products/12_2025_-26.avif", code: "9003", price: "" },
      { name: "Чесновка", subtitle: "", image: "/products/12_2025_-27.avif", code: "9004", price: "" },
      { name: "Буркан малък", subtitle: "60 мл", image: "/products/more/9005 буркан малък-60мл.jpeg", code: "9005", price: "" },
      { name: "Буркан среден", subtitle: "150 мл", image: "/products/01_2026 (32).avif", code: "9006", price: "" },
      { name: "Буркан голям", subtitle: "350 мл", image: "/products/02_2026 (1).avif", code: "9007", price: "" },
      { name: "Захарник малък", subtitle: "150 мл", image: "/products/01_2026 (9).avif", code: "9008", price: "" },
      { name: "Захарник голям", subtitle: "350 мл", image: "/products/more/9009 Захарник голям 350мл.jpeg", code: "9009", price: "" },
      { name: "Пепелник за една цигара", subtitle: "", image: "/products/01_2026 (58).avif", code: "9010", price: "" },
      { name: "Пепелник за две цигари", subtitle: "", image: "/products/01_2026 (57).avif", code: "9011", price: "" },
      { name: "Пепелник за три цигари", subtitle: "", image: "/products/01_2026 (22).avif", code: "9012", price: "" },
      { name: "Градински пепелник", subtitle: "", image: "/products/01_2026 (10).avif", code: "9013", price: "" },
      { name: "Магнит чинийка", subtitle: "", image: "/products/01_2026(24).avif", code: "9014", price: "" },
      { name: "Ваза", subtitle: "20 см", image: "/images/slide-3.jpg", code: "9015", price: "" },
    ]
  },
  { 
    slug: "neznayni",
    name: "Незнайни", 
    image: "/products/more/4005.jpeg",
    subcategories: [
      // --- Products from /products/more/ with SKU but no matching product ---
      { name: "4005", subtitle: "", image: "/products/more/4005.jpeg", code: "4005", price: "" },
      { name: "Тиган с капак", subtitle: "", image: "/products/more/4006 Тиган с капак.jpeg", code: "4006", price: "" },
      { name: "4007", subtitle: "", image: "/products/more/4007.jpeg", code: "4007", price: "" },
      { name: "4007-А", subtitle: "", image: "/products/more/4007-А.jpeg", code: "4007-А", price: "" },
      { name: "9016", subtitle: "", image: "/products/more/9016.jpeg", code: "9016", price: "" },
      { name: "Кана", subtitle: "1.500 мл", image: "/products/more/9017-кана 1.500мл.jpeg", code: "9017", price: "" },
      { name: "Нергеле", subtitle: "", image: "/products/more/9021 нергеле.jpeg", code: "9021", price: "" },
      // --- Unassigned images from /products/ main folder ---
      { name: "Незнаен продукт", subtitle: "01_2026 (5)", image: "/products/01_2026 (5).avif", code: "U-01", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (6)", image: "/products/01_2026 (6).avif", code: "U-02", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (7)", image: "/products/01_2026 (7).avif", code: "U-03", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (11)", image: "/products/01_2026 (11).avif", code: "U-04", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (12)", image: "/products/01_2026 (12).avif", code: "U-05", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (15)", image: "/products/01_2026 (15).avif", code: "U-06", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (16)", image: "/products/01_2026 (16).avif", code: "U-07", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (17)", image: "/products/01_2026 (17).avif", code: "U-08", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (18)", image: "/products/01_2026 (18).avif", code: "U-09", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (19)", image: "/products/01_2026 (19).avif", code: "U-10", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (26)", image: "/products/01_2026 (26).avif", code: "U-11", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (27)", image: "/products/01_2026 (27).avif", code: "U-12", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (28)", image: "/products/01_2026 (28).avif", code: "U-13", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (29)", image: "/products/01_2026 (29).avif", code: "U-14", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (30)", image: "/products/01_2026 (30).avif", code: "U-15", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (38)", image: "/products/01_2026 (38).avif", code: "U-16", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (40)", image: "/products/01_2026 (40).avif", code: "U-17", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (47)", image: "/products/01_2026 (47).avif", code: "U-18", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (48)", image: "/products/01_2026 (48).avif", code: "U-19", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (51)", image: "/products/01_2026 (51).avif", code: "U-20", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026 (55)", image: "/products/01_2026 (55).avif", code: "U-21", price: "" },
      { name: "Незнаен продукт", subtitle: "01_2026(23)", image: "/products/01_2026(23).avif", code: "U-22", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_1", image: "/products/12_2025_1.avif", code: "U-23", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-4", image: "/products/12_2025_-4.avif", code: "U-24", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-9", image: "/products/12_2025_-9.avif", code: "U-25", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-10", image: "/products/12_2025_-10.avif", code: "U-26", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-11", image: "/products/12_2025_-11.avif", code: "U-27", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-12", image: "/products/12_2025_-12.avif", code: "U-28", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-13", image: "/products/12_2025_-13.avif", code: "U-29", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-17", image: "/products/12_2025_-17.avif", code: "U-30", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-19", image: "/products/12_2025_-19.avif", code: "U-31", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-20", image: "/products/12_2025_-20.avif", code: "U-32", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-21", image: "/products/12_2025_-21.avif", code: "U-33", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-23", image: "/products/12_2025_-23.avif", code: "U-34", price: "" },
      { name: "Незнаен продукт", subtitle: "12_2025_-24", image: "/products/12_2025_-24.avif", code: "U-35", price: "" },
    ]
  },
];

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
      { name: "Гювече", subtitle: "0.500 л", image: "/products/12_2025_-13.avif", code: "1001", price: "" },
      { name: "Гювече", subtitle: "0.500 л", image: "/products/12_2025_-17.avif", code: "1001", price: "" },
      { name: "Гювече", subtitle: "0.500 л", image: "/products/more/1001.jpeg", code: "1001", price: "" },
      { name: "Гювече", subtitle: "0.500 л", image: "/products/more/1001(2).jpeg", code: "1001", price: "" },
      { name: "Гювеч", subtitle: "1 л", image: "/products/12_2025_-15.avif", code: "1002", price: "" },
      { name: "Гювеч", subtitle: "3 л", image: "/products/12_2025_-6.avif", code: "1003", price: "" },
      { name: "Гювеч", subtitle: "6 л", image: "/products/more/2302/6 литра гювеч 2.jpeg", code: "1004", price: "" },
      { name: "Гювеч", subtitle: "6 л", image: "/products/more/2302/6 литра гювеч.jpeg", code: "1004", price: "" },
      { name: "Гювеч", subtitle: "6 л", image: "/products/more/2302/Гювеч 6 литра 2.jpeg", code: "1004", price: "" },
      { name: "Гювеч", subtitle: "6 л", image: "/products/more/2302/Гювеч 6 литра.jpeg", code: "1004", price: "" },
      { name: "Гърне за боб", subtitle: "3 л", image: "/products/more/2302/Гърне 3 л.jpeg", code: "1005", price: "" },
      { name: "Гърне за боб", subtitle: "5 л", image: "/products/more/2302/Гърне 5 л.jpeg", code: "1006", price: "" },
    ]
  },
  { 
    slug: "kupi",
    name: "Купи и сосиерки", 
    image: "/products/01_2026 (13).avif",
    subcategories: [
      { name: "Купа малка", subtitle: "Ø 12 см", image: "/products/12_2025_-25.avif", code: "2001", price: "" },
      { name: "Купа малка", subtitle: "Ø 12 см", image: "/products/more/2001.jpeg", code: "2001", price: "" },
      { name: "Купа малка", subtitle: "Ø 12 см", image: "/products/01_2026 (26).avif", code: "2001А", price: "" },
      { name: "Купа малка", subtitle: "Ø 12 см", image: "/products/12_2025_-24.avif", code: "2001А", price: "" },
      { name: "Купа средна", subtitle: "Ø 14 см", image: "/products/01_2026 (25).avif", code: "2002", price: "" },
      { name: "Купа средна", subtitle: "Ø 14 см", image: "/products/12_2025_-4.avif", code: "2002", price: "" },
      { name: "Купа средна", subtitle: "Ø 14 см", image: "/products/12_2025_-9.avif", code: "2002", price: "" },
      { name: "Купа голяма", subtitle: "Ø 16 см", image: "/products/01_2026 (13).avif", code: "2003", price: "" },
      { name: "Купа голяма", subtitle: "Ø 16 см", image: "/products/12_2025_-10.avif", code: "2003", price: "" },
      { name: "Купа голяма", subtitle: "Ø 16 см", image: "/products/12_2025_-11.avif", code: "2003", price: "" },
      { name: "Купа голяма", subtitle: "Ø 16 см", image: "/products/more/2003.jpeg", code: "2003", price: "" },
      { name: "Купа голяма", subtitle: "Ø 16 см", image: "/products/more/2003(2).jpeg", code: "2003", price: "" },
      { name: "Купа голяма", subtitle: "Ø 16 см", image: "/products/more/2003(3).jpeg", code: "2003", price: "" },
      { name: "Купа голяма", subtitle: "Ø 16 см", image: "/products/12_2025_-12.avif", code: "2003А", price: "" },
      { name: "Купа №3", subtitle: "Ø 18 см", image: "/products/12_2025_-5.avif", code: "2004", price: "" },
      { name: "Купа №5", subtitle: "Ø 20 см", image: "/products/12_2025_-3.avif", code: "2005", price: "" },
      { name: "Купа №5", subtitle: "Ø 20 см", image: "/products/more/2005.jpeg", code: "2005", price: "" },
      { name: "Купа №5", subtitle: "Ø 20 см", image: "/products/more/2005(2).jpeg", code: "2005", price: "" },
      { name: "Купа №7", subtitle: "Ø 24 см", image: "/products/01_2026 (4) copy.avif", code: "2006", price: "" },
      { name: "Купа №7", subtitle: "Ø 24 см", image: "/products/more/2006.jpeg", code: "2006", price: "" },
      { name: "Купа №13", subtitle: "Ø 28 см", image: "/products/01_2026 (2).avif", code: "2007", price: "" },
      { name: "Купа №13", subtitle: "Ø 28 см", image: "/products/01_2026 (27).avif", code: "2007", price: "" },
      { name: "Купа №13", subtitle: "Ø 28 см", image: "/products/12_2025_1.avif", code: "2007", price: "" },
      { name: "Сосиерка", subtitle: "", image: "/products/01_2026 (56).avif", code: "2010", price: "" },
      { name: "Сосиерка", subtitle: "", image: "/products/01_2026 (55).avif", code: "2010", price: "" },
      { name: "Сосиерка", subtitle: "", image: "/products/01_2026(23).avif", code: "2010", price: "" },
      { name: "Сосиерка", subtitle: "", image: "/products/more/2010.jpeg", code: "2010", price: "" },
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
      { name: "Чиния", subtitle: "Ø 26 см", image: "/products/more/2302/чиния 26см.jpeg", code: "3004", price: "" },
      { name: "Чиния", subtitle: "Ø 30 см", image: "/products/more/3005.jpeg", code: "3005", price: "" },
    ]
  },
  { 
    slug: "tavi",
    name: "Тави", 
    image: "/products/more/4006 Тиган с капак.jpeg",
    subcategories: [
      { name: "Тава №7", subtitle: "Ø 24 см", image: "/products/12_2025_-2-1.avif", code: "4002", price: "" },
      { name: "Тава №13", subtitle: "Ø 28 см", image: "/products/01_2026 (3).avif", code: "4003", price: "" },
      { name: "Тава за пиле", subtitle: "Ø 28 см", image: "/products/01_2026 (1).avif", code: "4004", price: "" },
      { name: "Тиган", subtitle: "", image: "/products/more/4005.jpeg", code: "4005", price: "" },
      { name: "Тиган", subtitle: "", image: "/products/01_2026 (11).avif", code: "4005", price: "" },
      { name: "Тиган с капак", subtitle: "", image: "/products/more/4006 Тиган с капак.jpeg", code: "4006", price: "" },
      { name: "Пахар", subtitle: "Ø 17 см", image: "/products/more/4007.jpeg", code: "4007", price: "" },
      { name: "Пахар", subtitle: "Ø 17 см", image: "/products/01_2026 (5).avif", code: "4007", price: "" },
      { name: "Пахар", subtitle: "Ø 17 см", image: "/products/more/4007(3).jpeg", code: "4007", price: "" },
      { name: "Пахар нов малък", subtitle: "", image: "/products/more/4007-А.jpeg", code: "4007А", price: "" },
      { name: "Пахар нов малък", subtitle: "", image: "/products/01_2026 (7).avif", code: "4007А", price: "" },
      { name: "Пахар нов малък", subtitle: "", image: "/products/more/4007-А(2).jpeg", code: "4007А", price: "" },
      { name: "Пахар", subtitle: "Ø 17 см", image: "/products/01_2026 (6).avif", code: "4007Б", price: "" },
    ]
  },
  { 
    slug: "chashi-alkohol",
    name: "Чаши за алкохол", 
    image: "/products/01_2026 (50).avif",
    subcategories: [
      { name: "Чаша за ракия", subtitle: "100 мл", image: "/products/01_2026 (50).avif", code: "5001", price: "" },
      { name: "Чаша за ракия", subtitle: "100 мл", image: "/products/12_2025_-19.avif", code: "5001", price: "" },
      { name: "Чаша шот", subtitle: "100 мл", image: "/products/01_2026 (43).avif", code: "5002", price: "" },
      { name: "Мини халба", subtitle: "100 мл", image: "/products/01_2026 (34).avif", code: "5003", price: "" },
      { name: "Мини халба", subtitle: "100 мл", image: "/products/12_2025_-20.avif", code: "5003", price: "" },
      { name: "Мини халба", subtitle: "100 мл", image: "/products/12_2025_-21.avif", code: "5003", price: "" },
      { name: "Мини халба", subtitle: "100 мл", image: "/products/12_2025_-23.avif", code: "5003", price: "" },
      { name: "Мини халба", subtitle: "100 мл", image: "/products/01_2026 (51).avif", code: "5003", price: "" },
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
      { name: "Чаша за кафе лате", subtitle: "", image: "/products/01_2026 (38).avif", code: "6002", price: "" },
      { name: "Чаша за кафе \"Канче\"", subtitle: "", image: "/products/01_2026 (39).avif", code: "6003", price: "" },
      { name: "Чаша за кафе \"Канче\"", subtitle: "", image: "/products/more/6003.jpeg", code: "6003", price: "" },
      { name: "Чаша за кафе \"Канче\"", subtitle: "", image: "/products/more/6003(2).jpeg", code: "6003", price: "" },
      { name: "Чаша за кафе \"Бонбон\"", subtitle: "", image: "/products/01_2026 (33).avif", code: "6004", price: "" },
      { name: "Чаша за кафе \"Бонбон\"", subtitle: "", image: "/products/more/6004.jpeg", code: "6004", price: "" },
      { name: "Чаша за кафе \"Лале\"", subtitle: "", image: "/products/01_2026 (41).avif", code: "6005", price: "" },
      { name: "Чаша за кафе \"Лале\"", subtitle: "", image: "/products/more/6005.jpeg", code: "6005", price: "" },
      { name: "Чаша за кафе \"Лале\"", subtitle: "", image: "/products/more/6005(2).jpeg", code: "6005", price: "" },
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
      { name: "Чаша за мляко", subtitle: "400 мл", image: "/products/01_2026 (40).avif", code: "7001", price: "" },
      { name: "Чаша за мляко", subtitle: "400 мл", image: "/products/more/7001.jpeg", code: "7001", price: "" },
      { name: "Чаша за безалкохолно", subtitle: "400 мл", image: "/products/01_2026 (37).avif", code: "7002", price: "" },
      { name: "Халба", subtitle: "500 мл", image: "/products/12_2025_-8.avif", code: "7003", price: "" },
      { name: "Халба", subtitle: "500 мл", image: "/products/more/7003.jpeg", code: "7003", price: "" },
      { name: "Халба", subtitle: "500 мл", image: "/products/more/2302/Халба.jpeg", code: "7003", price: "" },
      { name: "Чаша супа", subtitle: "", image: "/products/01_2026 (47).avif", code: "7004", price: "" },
    ]
  },
  { 
    slug: "servizi",
    name: "Сервизи", 
    image: "/products/01_2026 (14).avif",
    subcategories: [
      { name: "Сервиз оливерник", subtitle: "", image: "/products/01_2026 (14).avif", code: "8001", price: "" },
      { name: "Сервиз оливерник", subtitle: "", image: "/products/more/8001.jpeg", code: "8001", price: "" },
      { name: "Сервиз за вино", subtitle: "", image: "/products/more/2302/Сервиз Вино.jpeg", code: "8003", price: "" },
      { name: "Сервиз за вино", subtitle: "", image: "/products/more/2302/Сервиз Вино - 2.jpeg", code: "8003", price: "" },
      { name: "Сервиз за ракия", subtitle: "", image: "/products/more/2302/Сервиз Ракия.jpeg", code: "8004", price: "" },
      { name: "Сервиз за ракия", subtitle: "", image: "/products/more/2302/сервиз Ракия - 2.jpeg", code: "8004", price: "" },
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
      { name: "Лимоноизтисквачка", subtitle: "", image: "/products/more/9003.jpeg", code: "9003", price: "" },
      { name: "Чесновка", subtitle: "", image: "/products/12_2025_-27.avif", code: "9004", price: "" },
      { name: "Буркан малък", subtitle: "60 мл", image: "/products/more/9005 буркан малък-60мл.jpeg", code: "9005", price: "" },
      { name: "Буркан малък", subtitle: "60 мл", image: "/products/more/9005(2).jpeg", code: "9005", price: "" },
      { name: "Буркан малък", subtitle: "60 мл", image: "/products/more/9005(3).jpeg", code: "9005", price: "" },
      { name: "Буркан малък", subtitle: "60 мл", image: "/products/more/9005(4).jpeg", code: "9005", price: "" },
      { name: "Буркан среден", subtitle: "150 мл", image: "/products/01_2026 (32).avif", code: "9006", price: "" },
      { name: "Буркан среден", subtitle: "150 мл", image: "/products/01_2026 (29).avif", code: "9006", price: "" },
      { name: "Буркан среден", subtitle: "150 мл", image: "/products/01_2026 (30).avif", code: "9006", price: "" },
      { name: "Буркан среден", subtitle: "150 мл", image: "/products/more/9006.jpeg", code: "9006", price: "" },
      { name: "Буркан голям", subtitle: "350 мл", image: "/products/02_2026 (1).avif", code: "9007", price: "" },
      { name: "Буркан голям", subtitle: "350 мл", image: "/products/more/9007.jpeg", code: "9007", price: "" },
      { name: "Захарник малък", subtitle: "150 мл", image: "/products/01_2026 (9).avif", code: "9008", price: "" },
      { name: "Захарник голям", subtitle: "350 мл", image: "/products/more/9009 Захарник голям 350мл.jpeg", code: "9009", price: "" },
      { name: "Пепелник за една цигара", subtitle: "", image: "/products/01_2026 (58).avif", code: "9010", price: "" },
      { name: "Пепелник за две цигари", subtitle: "", image: "/products/01_2026 (57).avif", code: "9011", price: "" },
      { name: "Пепелник за две цигари", subtitle: "", image: "/products/01_2026 (19).avif", code: "9011", price: "" },
      { name: "Пепелник за три цигари", subtitle: "", image: "/products/01_2026 (22).avif", code: "9012", price: "" },
      { name: "Градински пепелник", subtitle: "", image: "/products/01_2026 (10).avif", code: "9013", price: "" },
      { name: "Магнит чинийка", subtitle: "", image: "/products/01_2026(24).avif", code: "9014", price: "" },
      { name: "Ваза", subtitle: "20 см", image: "/products/more/2302/Ваза.jpeg", code: "9015", price: "" },
      { name: "Бърдуче", subtitle: "", image: "/products/more/9016.jpeg", code: "9016", price: "" },
      { name: "Ръсачки", subtitle: "", image: "/products/01_2026 (15).avif", code: "9018", price: "" },
      { name: "Ръсачки", subtitle: "", image: "/products/01_2026 (16).avif", code: "9018", price: "" },
      { name: "Солничка двойка", subtitle: "", image: "/products/01_2026 (28).avif", code: "9019", price: "" },
      { name: "Сервиз солнички", subtitle: "", image: "/products/01_2026 (18).avif", code: "9020", price: "" },
      { name: "Нергеле", subtitle: "", image: "/products/more/9021 нергеле.jpeg", code: "9021", price: "" },
      { name: "Кана", subtitle: "1.500 мл", image: "/products/more/9017-кана 1.500мл.jpeg", code: "9017", price: "" },
      { name: "Кана", subtitle: "1.500 мл", image: "/products/more/9017(2).jpeg", code: "9017", price: "" },
      { name: "Кана", subtitle: "1.500 мл", image: "/products/more/9017(3).jpeg", code: "9017", price: "" },
    ]
  },
];

const profile = {
  name: "Alberth Paredes",
  email: "orlando.alb77@gmail.com",
  imgUrl: "/alberth.svg",
};
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const categories = {
  broaster: [
    { id: 1, title: "Cheap chicken", price: 25.0, stock: 20 },
    { id: 2, title: "Quarter chicken", price: 40.0, stock: 13 },
  ],
  spit: [
    { id: 1, title: "Cheap chicken", price: 25.0, stock: 20 },
    { id: 2, title: "Quarter chicken", price: 35.0, stock: 13 },
  ],
  soup: [
    { id: 1, title: "Chicken Soup", price: 10.0, stock: 17 },
    { id: 2, title: "Lamb Soup", price: 15.0, stock: 15 },
  ],
  grill: [
    { id: 1, title: "Grilled Rib", price: 30.0, stock: 24 },
    { id: 2, title: "Grilled Chicken", price: 18.0, stock: 14 },
  ],
};
export { profile, userNavigation, categories };

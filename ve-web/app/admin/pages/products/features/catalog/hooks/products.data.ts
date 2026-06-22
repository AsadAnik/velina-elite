export type AdminProduct = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  stock: number;
  status: "active" | "low-stock" | "out-of-stock";
};

export const adminProducts: AdminProduct[] = [
  {
    id: "PRD-001",
    name: "CeraVe Hydrating Cleanser 236ml",
    category: "Skin",
    brand: "CeraVe",
    price: "৳1,850",
    stock: 124,
    status: "active",
  },
  {
    id: "PRD-002",
    name: "Maybelline Fit Me Foundation",
    category: "Makeup",
    brand: "Maybelline",
    price: "৳1,290",
    stock: 8,
    status: "low-stock",
  },
  {
    id: "PRD-003",
    name: "The Ordinary Niacinamide 10%",
    category: "Skin",
    brand: "The Ordinary",
    price: "৳1,250",
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PRD-004",
    name: "MAC Ruby Woo Lipstick",
    category: "Makeup",
    brand: "MAC",
    price: "৳4,200",
    stock: 45,
    status: "active",
  },
  {
    id: "PRD-005",
    name: "L'Oréal Paris Elvive Shampoo",
    category: "Hair",
    brand: "L'Oréal",
    price: "৳650",
    stock: 210,
    status: "active",
  },
  {
    id: "PRD-006",
    name: "Neutrogena Ultra Sheer Sunscreen",
    category: "Skin",
    brand: "Neutrogena",
    price: "৳1,450",
    stock: 5,
    status: "low-stock",
  },
];

export const productCategories = ["All", "Makeup", "Skin", "Hair", "Personal Care"];

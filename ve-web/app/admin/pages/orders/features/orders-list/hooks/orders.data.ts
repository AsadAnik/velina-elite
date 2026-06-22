export type AdminOrder = {
  id: string;
  customer: string;
  email: string;
  items: number;
  total: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  payment: "paid" | "pending" | "refunded";
  date: string;
};

export const adminOrders: AdminOrder[] = [
  {
    id: "VE-10482",
    customer: "Nusrat Jahan",
    email: "nusrat@email.com",
    items: 3,
    total: "৳4,850",
    status: "processing",
    payment: "paid",
    date: "Jun 23, 2026",
  },
  {
    id: "VE-10481",
    customer: "Rafi Ahmed",
    email: "rafi@email.com",
    items: 1,
    total: "৳1,890",
    status: "shipped",
    payment: "paid",
    date: "Jun 23, 2026",
  },
  {
    id: "VE-10480",
    customer: "Sadia Rahman",
    email: "sadia@email.com",
    items: 2,
    total: "৳2,700",
    status: "delivered",
    payment: "paid",
    date: "Jun 22, 2026",
  },
  {
    id: "VE-10479",
    customer: "Tanvir Hasan",
    email: "tanvir@email.com",
    items: 4,
    total: "৳6,100",
    status: "pending",
    payment: "pending",
    date: "Jun 22, 2026",
  },
  {
    id: "VE-10478",
    customer: "Mim Akter",
    email: "mim@email.com",
    items: 1,
    total: "৳4,200",
    status: "delivered",
    payment: "paid",
    date: "Jun 21, 2026",
  },
  {
    id: "VE-10477",
    customer: "Karim Uddin",
    email: "karim@email.com",
    items: 2,
    total: "৳1,550",
    status: "cancelled",
    payment: "refunded",
    date: "Jun 21, 2026",
  },
];

export const orderStatusFilters = [
  "All",
  "pending",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
] as const;

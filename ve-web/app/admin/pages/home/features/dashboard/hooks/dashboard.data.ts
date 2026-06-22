export type DashboardStat = {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  accent: "rose" | "gold" | "magenta" | "neutral";
};

export type RecentOrder = {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  date: string;
};

export type TopProduct = {
  id: string;
  name: string;
  category: string;
  sold: number;
  revenue: string;
};

export type ActivityItem = {
  id: string;
  message: string;
  time: string;
  type: "order" | "product" | "customer" | "promo";
};

export const dashboardStats: DashboardStat[] = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: "৳12,48,500",
    change: "+18.2%",
    trend: "up",
    accent: "rose",
  },
  {
    id: "orders",
    label: "Orders Today",
    value: "284",
    change: "+12.5%",
    trend: "up",
    accent: "gold",
  },
  {
    id: "customers",
    label: "New Customers",
    value: "1,248",
    change: "+8.1%",
    trend: "up",
    accent: "magenta",
  },
  {
    id: "products",
    label: "Active Products",
    value: "15,420",
    change: "+24 new",
    trend: "neutral",
    accent: "neutral",
  },
];

export const recentOrders: RecentOrder[] = [
  {
    id: "VE-10482",
    customer: "Nusrat Jahan",
    product: "CeraVe Moisturizing Cream",
    amount: "৳2,450",
    status: "processing",
    date: "2 min ago",
  },
  {
    id: "VE-10481",
    customer: "Rafi Ahmed",
    product: "Maybelline Fit Me Foundation",
    amount: "৳1,890",
    status: "shipped",
    date: "15 min ago",
  },
  {
    id: "VE-10480",
    customer: "Sadia Rahman",
    product: "The Ordinary Niacinamide 10%",
    amount: "৳1,250",
    status: "delivered",
    date: "32 min ago",
  },
  {
    id: "VE-10479",
    customer: "Tanvir Hasan",
    product: "L'Oréal Paris Hair Serum",
    amount: "৳3,100",
    status: "pending",
    date: "1 hr ago",
  },
  {
    id: "VE-10478",
    customer: "Mim Akter",
    product: "MAC Ruby Woo Lipstick",
    amount: "৳4,200",
    status: "delivered",
    date: "2 hr ago",
  },
];

export const topProducts: TopProduct[] = [
  {
    id: "p1",
    name: "CeraVe Hydrating Cleanser",
    category: "Skin",
    sold: 342,
    revenue: "৳2,05,200",
  },
  {
    id: "p2",
    name: "Maybelline Sky High Mascara",
    category: "Makeup",
    sold: 298,
    revenue: "৳1,78,800",
  },
  {
    id: "p3",
    name: "The Ordinary AHA 30% Peeling",
    category: "Skin",
    sold: 215,
    revenue: "৳1,29,000",
  },
  {
    id: "p4",
    name: "L'Oréal Elvive Shampoo",
    category: "Hair",
    sold: 189,
    revenue: "৳94,500",
  },
];

export const activityFeed: ActivityItem[] = [
  {
    id: "a1",
    message: "New order #VE-10482 placed by Nusrat Jahan",
    time: "2 min ago",
    type: "order",
  },
  {
    id: "a2",
    message: "Product 'MAC Studio Fix' stock updated to 48 units",
    time: "18 min ago",
    type: "product",
  },
  {
    id: "a3",
    message: "New customer registration: Rafi Ahmed",
    time: "25 min ago",
    type: "customer",
  },
  {
    id: "a4",
    message: "Flash sale 'MEGA OFFERS' activated for 48 hours",
    time: "1 hr ago",
    type: "promo",
  },
];

export const revenueChartData = [
  { day: "Mon", value: 62 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 88 },
  { day: "Fri", value: 95 },
  { day: "Sat", value: 72 },
  { day: "Sun", value: 84 },
];

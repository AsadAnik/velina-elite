"use client";

import StatCard from "./components/StatCard";
import QuickActions from "./components/QuickActions";
import RecentOrders from "./components/RecentOrders";
import TopProducts from "./components/TopProducts";
import ActivityFeed from "./components/ActivityFeed";
import RevenueChart from "./components/RevenueChart";
import { useDashboardStats } from "./hooks";

export default function Home() {
  const { stats, orders, topProducts, activity, chartData } = useDashboardStats();

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-[#2e1a2e] to-[#1c223a] p-6 md:p-8 text-white">
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-velina-rose/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-velina-gold/15 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-pink-200/80">
              Velina Elite BD
            </p>
            <h2 className="mt-1 text-2xl md:text-3xl font-black leading-tight">
              Welcome back,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-velina-gold to-velina-rose">
                Admin
              </span>
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-md">
              Your beauty empire at a glance — track sales, orders, and top products in real time.
            </p>
          </div>
          <div className="flex gap-3">
            {[
              { label: "Today's Sales", value: "৳84,200" },
              { label: "Pending Orders", value: "42" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 min-w-[120px]"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-black text-velina-gold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      {/* Charts + sidebar widgets */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueChart data={chartData} />
        </div>
        <QuickActions />
      </section>

      {/* Orders table */}
      <section>
        <RecentOrders orders={orders} />
      </section>

      {/* Bottom row */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopProducts products={topProducts} />
        <ActivityFeed items={activity} />
      </section>
    </div>
  );
}

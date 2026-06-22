import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Velina Elite BD",
  description: "Velina Elite BD store administration panel",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

'use client';

import '../../globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // You can conditionally hide navbar from root layout by CSS or state
  return <main className="p-4">{children}</main>;
}
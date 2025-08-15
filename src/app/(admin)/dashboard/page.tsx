import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
const cookieStore = cookies();           
  const token = (await cookieStore).get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to the Dashboard 🎉</h1>
      <form action="/api/logout" method="POST">
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </form>
    </div>
  );
}

import { Card } from "@/components/Card";
import Link from "next/link";

const linkClassName = "text-blue-500 hover:underline hover:text-blue-400";

export default function Notifications() {
  return (
    <Card>
        <div>Notifications</div>
        <div>
            <Link href={"/complex-dashboard/archived"} className={linkClassName}>Archived</Link>
        </div>
    </Card>
  );
}

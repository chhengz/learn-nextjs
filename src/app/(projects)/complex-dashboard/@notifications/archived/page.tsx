import { Card } from "@/components/Card";
import Link from "next/link";

const linkClassName = "text-blue-500 hover:underline hover:text-blue-400";

export default function ArchivedNotifications() {
  return (
    <Card>
        <div>Archived Notifications</div>
        <div>
            <Link href={"/complex-dashboard"} className={linkClassName}>Default</Link>
        </div>
    </Card>
  );
}

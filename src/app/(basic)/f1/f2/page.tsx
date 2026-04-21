import { Button } from "@/components/Button";

export default function F2Page() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">F2 Page</h1>
      <p>This is the F2 page content.</p>

      <Button href="/f1">Go to F1</Button>
      <Button href="/f4">Go to F4</Button>
    </div>
  );
}

import { Button } from "@/components/Button";

export default function F1Page() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">F1 Page</h1>
      <p>This is the F1 page content.</p>

      <Button href="/f1/f2">Go to F2</Button>
      <Button href="/f3">Go to F3</Button>
    </div>
  );
}

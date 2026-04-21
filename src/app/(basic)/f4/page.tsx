import { Button } from "@/components/Button";

export default function F4Page() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">F4 Page</h1>
      <p>This is the F4 page content.</p>
        <Button href="/f1/f2">Go to F2</Button>
    </div>
  );
}

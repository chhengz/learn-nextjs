import { Button } from "@/components/Button";

export default function InterceptedF2Page() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">(.) Intercepted F2 Page</h1>
      <p>This is the Intercepted F2 Page content.</p>

      <Button href="/f1">Go to F1</Button>
    </div>
  );
}

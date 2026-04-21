import { Button } from "@/components/Button";

export default function InterceptedF3Page() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">(..) Intercepted F3 Page</h1>
      <p>This is the Intercepted F3 Page content.</p>

      <Button href="/f1">Go to F1</Button>
    </div>
  );
}

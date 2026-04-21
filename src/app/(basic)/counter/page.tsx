
import {CounterComponent} from "./counter";


export const metadata = {
    title: "Counter Page",
}


export default function CounterPage() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        
        <CounterComponent />

        </div>
    );
}
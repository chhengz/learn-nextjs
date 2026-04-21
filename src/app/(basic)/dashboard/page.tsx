
export const metadata = {
    title: "Dashboard",
    description: "Dashboard page with charts and analytics",
}


function BarChart() {
    return <h1>Bar Chart</h1>
}

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* <LineChart /> */}
            <BarChart />
        </div>
    );
}
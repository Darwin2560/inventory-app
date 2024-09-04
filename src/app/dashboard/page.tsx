"use client"

import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "@/app/dashboard/StatCard";
import {CheckCircle, Package, Tag, TrendingDown, TrendingUp} from "lucide-react";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
            <CardPopularProducts />
            <CardSalesSummary />
            <CardPurchaseSummary />
            <CardExpenseSummary />
            <StatCard
                title={`Customer & Expenses`}
                primaryIcon={<Package className="text-blue-600 w-6 h-6"/>}
                details={[
                    {title: "Customer & Growth", amount: "175.00", changePercentage: 131, IconComponent: TrendingUp},
                    {title: "Expenses", amount: "10.00", changePercentage: -56, IconComponent: TrendingDown}
                ]}
                dateRange={`22 - 29 October 2024`}
            />
            <StatCard
                title={`Dues & Pending Orders`}
                primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6"/>}
                details={[
                    {title: "Dues", amount: "250.00", changePercentage: 131, IconComponent: TrendingUp},
                    {title: "Pending Orders", amount: "147", changePercentage: -56, IconComponent: TrendingDown}
                ]}
                dateRange={`22 - 29 October 2024`}
            />
            <StatCard
                title={`Sales & Discount`}
                primaryIcon={<Tag className="text-blue-600 w-6 h-6"/>}
                details={[
                    {title: "Sales", amount: "1000.00", changePercentage: 20, IconComponent: TrendingUp},
                    {title: "Discount", amount: "200.00", changePercentage: -10, IconComponent: TrendingDown}
                ]}
                dateRange={`22 - 29 October 2024`}
            />
        </div>
    )
}

export default Dashboard;

import { dashboardCardsData } from "@/utils/constant";
import { Link } from "react-router-dom";

const RestaurantDashboard = () => {

    return (
        <div className="p-8 min-h-screen bg-gray-100 dark:bg-background">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dashboardCardsData?.map((card) => (
                    <Link
                        to={card?.link}
                        key={card?.title}
                        className="no-underline"
                    >
                        <div
                            className="flex flex-col items-center bg-white dark:bg-background rounded-xl shadow-md p-8 min-h-[180px] transition-all duration-200 hover:shadow-xl hover:bg-primary/90 hover:text-primary-foreground group cursor-pointer border border-primary/20"
                        >
                            <span className="text-4xl mb-4">{card?.icon}</span>
                            <h2 className="text-lg font-semibold mb-1 group-hover:text-primary-foreground">{card?.title}</h2>
                            <p className="text-gray-600 dark:text-muted-foreground text-center text-base mb-2 group-hover:text-primary-foreground">{card?.description}</p>
                            <span className="mt-2 text-xs font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full group-hover:bg-primary-foreground group-hover:text-primary">{card?.count} total</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RestaurantDashboard;

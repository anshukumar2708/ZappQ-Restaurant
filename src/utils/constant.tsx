import {
    LayoutDashboard,
    Utensils,
    ClipboardList,
    ListOrdered,
    Users,
    Settings,
    Table as TableIcon,
    Menu
} from "lucide-react";

export const dashboardCardsData = [
    {
        title: "Table Management",
        description: "Manage and view all restaurant tables.",
        icon: "🍽️",
        link: "/table-management",
        count: 12,
    },
    {
        title: "Menu Management",
        description: "Update and organize your menu items.",
        icon: "📋",
        link: "/menu-management",
        count: 34,
    },
    {
        title: "Orders",
        description: "Track and manage customer orders.",
        icon: "🧾",
        link: "/orders",
        count: 8,
    },
    {
        title: "Category",
        description: "Organize menu categories.",
        icon: "🗂️",
        link: "/categories",
        count: 6,
    },
    {
        title: "Customers",
        description: "View and manage customer.",
        icon: "👥",
        link: "/customers",
        count: 120,
    },
    {
        title: "Settings",
        description: "Configure restaurant settings.",
        icon: "⚙️",
        link: "/settings",
        count: 1,
    },
];

export const sidebarItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Table Management", path: "/table-management", icon: TableIcon },
    { name: "Menu Management", path: "/owner/menu", icon: Utensils },
    { name: "Orders", path: "/owner/orders", icon: ClipboardList },
    { name: "Categories", path: "/owner/categories", icon: ListOrdered },
    { name: "Customers", path: "/owner/customers", icon: Users },
    { name: "Settings", path: "/owner/settings", icon: Settings },
];
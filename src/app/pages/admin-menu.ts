import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Vendor",
    icon: "monitor-outline",
    link: "admin",
    home: true,
    children: [
      {
        title: "Review New Vendors",
        link: "/admin/vendor/review",
      },
      {
        title: "All Stores",
        link: "/admin/vendor/stores",
      },
    ],
  },
  {
    title: "Product",
    icon: "shopping-bag-outline",
    link: "admin",
    home: true,
    children: [
      {
        title: "All Products",
        link: "/admin/product/all",
      },
      {
        title: "Top Deal",
        link: "/admin/product/top-deal",
      },
      {
        title: "Today Deal",
        link: "/admin/product/today-deal",
      },
    ],
  },
  {
    title: "Category",
    icon: "grid-outline",
    link: "admin",
    home: true,
    children: [
      {
        title: "Categories",
        link: "/admin/category/all",
      },
      {
        title: "Categories Insights",
        link: "/admin/category/product-count",
      },
      {
        title: "Add Category",
        link: "/admin/category/add",
      },
    ],
  },
];

import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Product",
    icon: "monitor-outline",
    link: "vendor",
    home: true,
    children: [
      {
        title: "Add Product",
        link: "/vendor/product/add",
      },
      {
        title: "Edit Product",
        link: "/vendor/product/edit",
      },
      {
        title: "Manage Image",
        link: "/vendor/product/images",
      },
    ],
  },
  {
    title: "Order",
    icon: "shopping-cart-outline",
    link: "vendor",
    home: true,
    children: [
      {
        title: "Orders",
        link: "/vendor/order",
      },
    ],
  },

  {
    title: "Setting",
    icon: "settings-2-outline",
    link: "vendor",
    home: true,
    children: [
      {
        title: "Profile",
        link: "/vendor/profile",
      },
    ],
  },
];

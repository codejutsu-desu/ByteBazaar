export const PRODUCT_CATEGORIES = [
  {
    label: "Ebooks",
    value: "ebooks" as const,
    featured: [
      {
        name: "Editor picks",
        href: `/products?category=ebooks`,
        imageSrc: "/nav/ebooks/one.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=ebooks&sort=desc",
        imageSrc: "/nav/ebooks/two.jpg",
      },
      {
        name: "Bestsellers",
        href: "/products?category=ebooks",
        imageSrc: "/nav/ebooks/three.jpg",
      },
    ],
  },
  {
    label: "Subscriptions",
    value: "subscriptions" as const,
    featured: [
      {
        name: "Favorite Subscriptions Picks",
        href: `/products?category=subscriptions`,
        imageSrc: "/nav/subscriptions/one.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=subscriptions&sort=desc",
        imageSrc: "/nav/subscriptions/two.jpeg",
      },
      {
        name: "Bestselling subscriptions",
        href: "/products?category=subscriptions",
        imageSrc: "/nav/subscriptions/three.jpg",
      },
    ],
  },
  {
    label: "Digital arts",
    value: "arts" as const,
    featured: [
      {
        name: "Favorite arts Picks",
        href: `/products?category=arts`,
        imageSrc: "/nav/digital-arts/one.png",
      },
      {
        name: "New Arrivals",
        href: "/products?category=arts&sort=desc",
        imageSrc: "/nav/digital-arts/two.png",
      },
      {
        name: "Bestselling arts",
        href: "/products?category=arts",
        imageSrc: "/nav/digital-arts/three.jpg",
      },
    ],
  },
  {
    label: "Web templates",
    value: "templates" as const,
    featured: [
      {
        name: "Favorite templates Picks",
        href: `/products?category=templates`,
        imageSrc: "/nav/web-templates/one.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=templates&sort=desc",
        imageSrc: "/nav/web-templates/two.jpg",
      },
      {
        name: "Bestselling templates",
        href: "/products?category=templates",
        imageSrc: "/nav/web-templates/three.jpg",
      },
    ],
  },
];

import {LatestSalesType, StatsCardType, TopAgentType} from "@/data/types";

export const sidebar = [
    {
        id: 1,
        name: "Dashboard",
        icon: "/icons/dashboards-icon.svg",
        iconActive: "/icons/white-dashboards-icon.svg",
        link: '/',
    },
    {
        id: 2,
        name: "Property",
        icon: "/icons/property-icon.svg",
        iconActive: "/icons/white-property-icon.svg",
        link: '/Dashboard/Property',
    },
    {
        id: 3,
        name: "Agent",
        icon: "/icons/agent-icon.svg",
        iconActive: "/icons/white-agent-icon.svg",
        link: '/Dashboard/Agent',
    },
    {
        id: 4,
        name: "Review",
        icon: "/icons/review-icon.svg",
        iconActive: "/icons/white-review-icon.svg",
        link: '/Dashboard/Review',
    },
    {
        id: 5,
        name: "Message",
        icon: "/icons/message-icon.svg",
        iconActive: "/icons/white-message-icon.svg",
        link: '/Dashboard/Message',
    },
    {
        id: 6,
        name: "My Profile",
        icon: "/icons/profile-icon.svg",
        iconActive: "/icons/white-profile-icon.svg",
        link: '/Dashboard/MyProfile',
    },
];

export const statsCard: StatsCardType[] = [
    {
        id: 1,
        title: "Properties for Sale",
        number: 684,
    },
    {
        id: 2,
        title: "Properties for Rent",
        number: 546,
    },
    {
        id: 3,
        title: "Total Customer",
        number: 5732,
    },
    {
        id: 4,
        title: "Total Cities",
        number: 90,
    },
];

export const propertyReferrals = [
    {
        id: 1,
        name: "Social Media",
        percentage: 64,
        color: "#6C5DD3",
    },
    {
        id: 2,
        name: "Marketplaces",
        percentage: 40,
        color: "#7FBA7A",
    },
    {
        id: 3,
        name: "Websites",
        percentage: 50,
        color: "#FFCE73",
    },
    {
        id: 4,
        name: "Digital Ads",
        percentage: 80,
        color: "#FFA2C0",
    },
    {
        id: 5,
        name: "Others",
        percentage: 15,
        color: "#F45252",
    },
];

export const topAgent: TopAgentType[] = [
    {
        id: 1,
        name: "Benny Chagur",
        agent: "Top Agent",
        image: "/user1.png",
    },
    {
        id: 2,
        name: "Chynita Heree",
        agent: "Top Agent",
        image: "/user2.png",
    },
    {
        id: 3,
        name: "David Yers",
        agent: "Top Agent",
        image: "/user3.png",
    },
    {
        id: 4,
        name: "Hayder Jahid",
        agent: "Top Agent",
        image: "/user4.png",
    },
    {
        id: 5,
        name: "Benny Chagur",
        agent: "Top Agent",
        image: "/user1.png",
    },
];

export const latestSales: LatestSalesType[] = [
    {
        id: 1,
        name: "Metro Jayakar Apartment",
        country: "North Carolina, USA",
        price: "35",
        image: "/estate1.png",
    },
    {
        id: 2,
        name: "Letdo Ji Hotel & Aportment",
        country: " Carolina North, UK",
        price: "40",
        image: "/estate2.png",
    },
    {
        id: 3,
        name: "Star Sun Hotel & Apartment",
        country: "North Carolina, USA",
        price: "50",
        image: "/estate3.png",
    },
    {
        id: 4,
        name: "Metro Jayakar Apartment",
        country: "North Carolina, USA",
        price: "35",
        image: "/estate4.png",
    },
    {
        id: 4,
        name: "Letdo Ji Hotel & Aportment",
        country: " Carolina North, UK",
        price: "40",
        image: "/estate2.png",
    },
];
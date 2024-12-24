
export interface StatsCardType {
    id: number;
    title: string;
    number: number;
}

export interface TopAgentType {
    id: number;
    name: string;
    agent: string;
    image: string;
}

export interface LatestSalesType {
    id: number;
    name: string;
    country: string;
    image: string;
    price: string;
}

export interface PropertyListType {
    id: number;
    name: string;
    country: string;
    image: string;
    price: string;
}

export interface NotificationsListType {
    id: number;
    title: string;
    message: string;
    dateTime: string;
    notificationType: string;
}
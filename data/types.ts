
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

export interface PropertyListDateType {
    id: number;
    name: string;
    country: string;
    propertyType?: string;
    image: string;
    price: string;
    room?: number;
    area?: number;
}
export interface PropertyListDateDetailsType {
    id: number;
    name: string;
    description: string;
    propertyType?: string;
    rating: number;
    agent: string;
    agentImage: string;
    propertis?: number;
    price: string;
    country: string;
    room?: number;
    baths?: number;
    area?: number;
    somokingArea: boolean;
    kitchen: number;
    balcony: boolean;
    wifi: boolean;
    parkingArea: boolean;
    images?: string[];
}

export interface PropertyDetailsUserType {
    agent: string;
    agentImage: string;
    country: string;
    propertis: number;
}

// export interface PropertyDetailsDescriptionType {
//     name: string;
//     country: string;
//     propertyType?: string;
//     price: string;
//     rating: number;
//     room?: number;
//     area?: number;
//     baths?: number;
// }
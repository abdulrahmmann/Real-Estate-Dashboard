export interface SidebarType {
    id: number;
    name: string;
    icon: string;
    iconActive: string;
    link: string;
}

export interface PropertyReferralsType {
    id: number;
    name: string;
    percentage: number;
    color: string;
}

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

export interface AgentsType {
    id?: number;
    agent?: string;
    country?: string;
    propertis?: number;
    phone?: string;
    email?: string;
    image?: string;

    age?: number;
    city?: string;
    state?: string;
    postCode?: number;
    agentID?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;

    overview?: string;

    agency?: string;
    agentLicense?: string;
    taxNumber?: string;
    serviceArea?: string;

    totalListings?: number;
    propertiesSold?: number;
    propertiesRent?: number;

    activeListing?: ActiveListingType[];
}

export interface ActiveListingType {
    id: number;
    image: string;
    price: number;
    name: string;
    location: string;
}

export interface ReviewListType {
    id: number;
    name: string;
    image: string;
    codeId: string;
    joinDate: string;
    description: string;
    rating: string [];
    ratingCount: number;
}
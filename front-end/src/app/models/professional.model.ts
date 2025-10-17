export interface ProfessionalDetails {
    id: string;
    name: string;
    category: string;
    location?: string;
    rating: number;
    reviewCount: number;
    hourlyRate: number;
    yearsExperience: number;
    avatarUrl: string;
    isVerified: boolean;
    availability?: 'today' | 'tomorrow' | 'unavailable';
    skills?: string[];
    responseTime?: string;
    jobsCompleted?: number;
    bio?: string;
    servicesOffered?: Service[];
    badges?: string[];
}

export interface Service {
    name: string;
    isPrimary: boolean;
}
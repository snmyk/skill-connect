export interface ProfessionalApplication {
    // Step 1: Personal Information
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;

    // Step 2: Professional Details
    primaryService: string;
    yearsExperience: string;
    hourlyRate: number;
    availability: string;
    skills: string;
    bio: string;

    // Step 3: Profile & Verification
    profilePhoto: File | null;
}
export interface IUser {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    role: "Patient" | "Doctor" | "Admin";
    password: string;
    address?: string;
    dateOfBirth?: string; // ISO format (YYYY-MM-DD)
    gender?: "Male" | "Female" | "Non-binary" | "Other";
    profileImage?: string;
}

interface IPatient extends IUser {
    medicalHistory?: string[]; // List of medical records/summary
    insuranceDetails?: {
        provider: string;
        policyNumber: string;
    };
    emergencyContact?: {
        name: string;
        phoneNumber: string;
    };
    allergies?: string[];
    preferredDoctor?: string; // Doctor ID
}

interface IDoctor extends IUser {
    specialization: string;
    licenseNumber: string;
    yearsOfExperience: number;
    availabilitySchedule: {
        day: string; // e.g., "Monday"
        startTime: string; // e.g., "09:00"
        endTime: string; // e.g., "17:00"
    }[];
    rating?: number; // Average rating (optional)
    hospitalDepartment: string;
}


interface IAdmin extends IUser {
    employeeId: string;
    department: string;
}
export interface IUser {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    role: "Patient" | "Doctor" | "Admin";
    password: string;
    address?: string;
    dateOfBirth?: string;
    gender?: "Male" | "Female" | "Non-binary" | "Other";
    profileImage?: string;
}

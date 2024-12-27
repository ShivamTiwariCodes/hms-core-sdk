export default interface IAppointment {
    id: string;
    patientId: string;
    doctorId: string;
    appointmentDateTime: string; // ISO format (YYYY-MM-DDTHH:mm:ss)
    status: "Scheduled" | "Completed" | "Cancelled";
    reasonForVisit: string;
    notes?: string;
    createdAt: string; // ISO format
    updatedAt: string; // ISO format
    prescription?: {
        medicine: string;
        dosage: string; // e.g., "1 tablet twice a day"
        duration: string; // e.g., "7 days"
    }[];
    testResults?: {
        testName: string;
        result: string; // e.g., "Normal"
        date: string; // ISO format
    }[];
    consultationType?: "In-person" | "Online";
    duration?: number; // Duration in minutes
    paymentDetails?: {
        amount: number;
        method: "Cash" | "Card" | "Online";
        status: "Paid" | "Pending";
    };
}
export default interface IAppointment {
    id: string;
    patientId: string;
    doctorId: string;
    appointmentDateTime: string;
    status: "Scheduled" | "Completed" | "Cancelled";
    reasonForVisit: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
    prescription?: {
        medicine: string;
        dosage: string;
        duration: string;
    }[];
    testResults?: {
        testName: string;
        result: string;
        date: string;
    }[];
    consultationType?: "In-person" | "Online";
    duration?: number;
    paymentDetails?: {
        amount: number;
        method: "Cash" | "Card" | "Online";
        status: "Paid" | "Pending";
    };
}

import IAppointment from "../interfaces/IAppointment";

export interface IAppointmentService {
    createAppointment(appointment: IAppointment): Promise<IAppointment>;
    getAppointmentsByUser(userId: string): Promise<IAppointment[]>;
    updateAppointmentStatus(appointment: IAppointment, status: string): Promise<IAppointment>;
    updateConsultationType(appointment: IAppointment, consultationType: string): Promise<IAppointment>;

}
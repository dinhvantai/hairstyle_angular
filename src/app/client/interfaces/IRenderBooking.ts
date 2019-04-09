export interface IRenderBooking {
    id: number;
    day: string;
    time_start: string;
    total_slot: number;
    status: number;
    department_id: number;
    created_at: string;
    updated_at: string;
    statusLabel: string;
}

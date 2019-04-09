export interface IStylist {
    id: number;
    name: string;
    email: string;
    phone: string;
    birthday?: string;
    avatar: string;
    gender: string;
    permission: number;
    experience?: string;
    specialize?: string;
    about_me?: string;
    department_id: number;
    created_at?: string;
    updated_at?: string;
    address: string;
}

export type Nullable<T> = T | null;

export interface QueuedUser {
    id: string;
    place: number;
}

export interface Queue {
    id: string;
    name: string;
    users: QueuedUser[];
}
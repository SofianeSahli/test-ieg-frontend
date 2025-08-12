import { EntityAdapter, EntityState } from '@ngrx/entity';
export enum UserType {
  Admin = 'Admin',
  Customer = 'Customer',
}

export enum AccountStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Suspended = 'Suspended',
}

export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  cin?: string;
  email?: string;
  contractNumber?: string;
  agencieId?: string;
  userType?: UserType;
  status?: AccountStatus;
}

export interface UsersState extends EntityState<User> {
  selecteduserd: string | null;
  loading: boolean;
  error: Array<string> | null;
}

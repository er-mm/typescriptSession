import { Model } from './Model';

export interface UserProps {
  id: number;
  name: string;
}

export class User extends Model<UserProps> {
  details(): string {
    return `
      My ID is: ${this.get('id')}
      My Name is: ${this.get('name')}`;
  }
}

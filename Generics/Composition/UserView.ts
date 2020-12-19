import { View } from './View';
import { User, UserProps } from './User';
import { Attributes } from './Attributes';

export class UserView extends View<User, UserProps> {}

// Lest run this code
const user = new User(new Attributes({ id: 1, name: 'Raju' }));
const userView = new UserView(user);

userView.printDetails();
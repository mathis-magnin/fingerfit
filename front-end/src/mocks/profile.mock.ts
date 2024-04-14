import { Profile } from '../models/profile.model';

export const PROFILE_DOE: Profile = {
    firstName: 'John',
    name: 'Doe',
    age: 12,
    profilePicture: 'assets/main-logo.ico'
};

export const PROFILE_SMITH: Profile = {
    firstName: 'Jane',
    name: 'Smith',
    age: 15,
    profilePicture: 'assets/main-logo.ico'
    
};

export const PROFILE_MIKE: Profile = {
    firstName: 'Mike',
    name: 'Johnson',
    age: 10,
    profilePicture: 'assets/main-logo.ico'
};

export const PROFILE_LIST: Profile[] = [PROFILE_DOE, PROFILE_SMITH, PROFILE_MIKE, PROFILE_DOE, PROFILE_SMITH];
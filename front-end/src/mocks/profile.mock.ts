import { Profile } from '../models/profile.model';

export const PROFILE_DOE: Profile = {
    name: 'John Doe',
    age: 12,
    profilePic: 'assets/main-logo.ico'
};

export const PROFILE_SMITH: Profile = {
    name: 'Jane Smith',
    age: 15,
    profilePic: 'assets/main-logo.ico'
};

export const PROFILE_MIKE: Profile = {
    name: 'Mike Johnson',
    age: 10,
    profilePic: 'assets/main-logo.ico'
};

export const PROFILE_LIST: Profile[] = [PROFILE_DOE, PROFILE_SMITH, PROFILE_MIKE, PROFILE_DOE, PROFILE_SMITH];
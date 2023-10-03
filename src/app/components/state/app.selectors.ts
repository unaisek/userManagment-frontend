import { createSelector } from "@ngrx/store";
import { appProfile, appUsers } from "./app.state";
import { Profile, Users } from "../models/allUsers";

export const profileRootSelector = (state: appProfile) => state.userdetails;
export const userProfile = createSelector(
    profileRootSelector,
    (userdetails: Profile) => {
        return userdetails
    }
)

export const userRootSelector = (state: appUsers) => state.allusers;
export const uniqueEmail = createSelector(
    userRootSelector,
    (allusers: Users[]) => {
        return [...allusers]
    }
)

// import { createSelector } from '@ngrx/store';
// import { appProfile, appUsers } from './app.state';
// import { Profile, Users } from '../models/allUsers';

// // Selector to get the user profile
// export const selectUserProfile = (state: appProfile) => state.userdetails;

// // Selector to get the user profile details
// export const userProfile = createSelector(
//     selectUserProfile,
//     (userdetails: Profile) => {
//          return userdetails}
// );

// // Selector to get the list of all users
// export const selectAllUsers = (state: appUsers) => state.allusers;

// // Selector to get unique emails from all users
// export const uniqueEmails = createSelector(
//     selectAllUsers,
//     (allusers: Users[]) => {
//         const uniqueEmailSet = new Set<string>();
//         allusers.forEach(user => uniqueEmailSet.add(user.email));
//         return Array.from(uniqueEmailSet);
//     }
// );

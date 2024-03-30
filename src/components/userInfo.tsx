'use client';
import { useUser } from '@clerk/nextjs';

export const UserInfo = () => {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) {
        return null;
    }

    if (isSignedIn) {
        return <div>Hello {user.firstName} {user.lastName}!! </div>;
    }

    return <div>Not signed in</div>;
};
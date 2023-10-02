import {UserInfo} from "../types/User";

const fetchUserProfile = () => {
    // TODO
    return new Promise<UserInfo>((resolve, _reject) => {
        setTimeout(() => {
            resolve({
                username: 'Test User',
                usertag: 'testuser_',
                bio: 'Hi there, welcome to Journee! Feel free to have a look at my memories.',
                followers: 420000,
                following: 69,
                journeyAmount: 10
            } as UserInfo)
        }, 500)
    })
}

export const userAdapter = {
    fetchUserProfile
}

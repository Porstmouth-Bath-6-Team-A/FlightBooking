import userStore from '../stores/userStore';

class userServices {

    isLogin = () => {
        let user = userStore.getUser();

        return user ? true : false;
    }

    getEmailAddress = () => {
        let user = userStore.getUser();

        return user ? user.emailAddress : null;
    }

    getUser = () => {
        return userStore.getUser();
    }

}

const _userServices = new userServices();
export default _userServices;
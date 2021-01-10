import userStore from '../stores/userStore';
import {userEvents} from '../enums/events';
import * as userActions from '../actions/userActions';

class loginHandler {

    constructor() {
        this.loginCaller = null;
    }

    start = () => {
        userStore.on(userEvents.SET_LOGIN_DONE, this._onloginCaller);
        userStore.on(userEvents.SET_USER_DONE, this._onloginCaller);
        userStore.on(userEvents.SET_LOGIN_FAILED, this._offloginCaller);
        userStore.on(userEvents.SET_LOGOUT_DONE, this._offloginCaller);
    }

    stop = () => {
        userStore.off(userEvents.SET_LOGIN_DONE, this._onloginCaller);
        userStore.off(userEvents.SET_USER_DONE, this._onloginCaller);
        userStore.off(userEvents.SET_LOGIN_FAILED, this._offloginCaller);
        userStore.off(userEvents.SET_LOGOUT_DONE, this._offloginCaller);
    }

    _offloginCaller = () => {
        window.clearInterval(this.loginCaller);
    }

    _onloginCaller = () => {
        this.loginCaller = window.setInterval(() => {
            userActions.getLogInToken();
        }, 60000);
    }

}

const _loginHandler = new loginHandler();
export default _loginHandler;
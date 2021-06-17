import API from '@/services/API'

export default {
    login(user) {
        return API().post('login', user);
    }
}
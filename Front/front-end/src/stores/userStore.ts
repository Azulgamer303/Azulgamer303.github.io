import { ref } from 'vue';
import { defineStore } from 'pinia';

interface UserAuth {
    login: boolean
}

export const useUserAuthStore = defineStore('userauth', () => {
    const userauth = ref<UserAuth>({
        login: true
    })

    function getLogin(){
        return userauth.value
    }

    function setLogin(){
        userauth.value.login = true
    }

    function setLogout(){
        userauth.value.login = false
    }

    return { userauth, getLogin, setLogin, setLogout }
})
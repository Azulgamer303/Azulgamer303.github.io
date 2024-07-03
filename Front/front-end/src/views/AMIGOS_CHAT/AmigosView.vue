<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import AmigosHeader from '@/components/AMIGOS_CHAT/AmigosHeader.vue';
import AmigoCard from '@/components/AMIGOS_CHAT/AmigoCard.vue';
import Layout from "@/components/AMIGOS_CHAT/AmigosChatLayout.vue";
import { globalUsers } from '@/assets/AMIGOS_CHAT/users';
import styles from './MyComponent.module.css';

import getRandomUsersData from '@/assets/AMIGOS_CHAT/UsuarioAmigosTest';

// TODO: Refactor and add types

defineProps({
    username: {
        type: String,
        required: true
    }
});

const usernameFriends: Ref<{ username: string; picture: string; }[]> = ref([]);
const filteredFriendsResults: Ref<{ username: string; picture: string; }[]> = ref([]);
const filteredGlobalResults: Ref<{ username: string; picture: string; }[]> = ref([]);
const isAmigoModalEnabled = ref(false)
const friendSelected: Ref<{ username: string; picture: string; } | null> = ref(null)

const onAmigoCardClicked = (friend: { username: string; picture: string; }) => {
    friendSelected.value = friend
    changeIsModalEnabled(true)
}

const changeIsModalEnabled = (b: boolean) => {
    if (b) {
        isAmigoModalEnabled.value = true
    } else {
        isAmigoModalEnabled.value = b
        friendSelected.value = null
    }
}

const getUsernameFriends = async () => {
    usernameFriends.value = await getRandomUsersData();
    filteredFriendsResults.value = [...usernameFriends.value];
}

const handleSearch = (searchTerm: string) => {
    searchTerm = searchTerm.trim();
    if (searchTerm === '') {
        filteredFriendsResults.value = [...usernameFriends.value];
        filteredGlobalResults.value = [];
    } else {
        filteredFriendsResults.value = usernameFriends.value.filter(friend =>
            friend.username.toLowerCase().includes(searchTerm.toLowerCase())
        );

        filteredGlobalResults.value = globalUsers.filter(friend =>
            friend.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
}

onMounted(() => {
    getUsernameFriends()
})
</script>


<template >
    <Layout>
        <AmigosHeader :onSearchCallback="handleSearch" />
        <main class="[grid-area:main] bg-primary-800/50 flex flex-col w-full h-full text-text">

            <div class="w-full h-full px-12 py-5  overflow-y-auto">
                <p class="w-full text-center font-semibold text-text/70 mt-4"
                    v-if="filteredFriendsResults.length === 0 && filteredGlobalResults.length === 0">
                    No se encontraron resultados
                </p>
                <div v-if="filteredFriendsResults.length !== 0" class="flex flex-col">
                    <h6 class=" uppercase text-sm font-semibold text-text/70">Tus Amigos</h6>
                    <ul class=" my-5">
                        <li v-for="(friend, index) in filteredFriendsResults" :key="index">
                            <AmigoCard :isFriend="true" @click="onAmigoCardClicked(friend)"
                                :friend-username="friend.username" :friend-picture="friend.picture" />
                        </li>
                    </ul>
                </div>

                <div v-if="filteredGlobalResults.length !== 0" class="flex flex-col">
                    <h6 class=" uppercase text-sm font-semibold text-text/70">GLOBAL</h6>
                    <ul class=" my-5">
                        <li v-for="(friend, index) in filteredGlobalResults" :key="index">
                            <AmigoCard :isFriend="false" @click="onAmigoCardClicked(friend)"
                                :friend-username="friend.username" :friend-picture="friend.picture" />
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </Layout>
</template>


<style scope>


</style>
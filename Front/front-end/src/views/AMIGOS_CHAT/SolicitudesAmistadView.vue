<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import getRandomUsersData from '@/assets/AMIGOS_CHAT/UsuarioAmigosTest';
import SolicitudAmistadCard from '@/components/AMIGOS_CHAT/SolicitudAmistadCard.vue';
import Layout from '@/components/AMIGOS_CHAT/AmigosChatLayout.vue';
import AmigosHeader from '@/components/AMIGOS_CHAT/AmigosHeader.vue';

const props = defineProps({
    username: {
        type: String,
        required: true
    }
});

const friendsRequest: Ref<{ username: string; picture: string; }[]> = ref([])
const filteredResults: Ref<{ username: string; picture: string; }[]> = ref([])


const getUsernameFriendsRequest = async (username: string) => {
    friendsRequest.value = await getRandomUsersData()
    filteredResults.value = [...friendsRequest.value]
}

const handleSearch = (searchTerm: string) => {
    searchTerm = searchTerm.trim();
    if (searchTerm === '') {
        filteredResults.value = [...friendsRequest.value];
    } else {
        filteredResults.value = friendsRequest.value.filter(friend =>
            friend.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
}

onMounted(() => {
    getUsernameFriendsRequest(props.username)
})
</script>

<template>
    <Layout>
        <AmigosHeader :onSearchCallback="handleSearch" />
        <main class="[grid-area:main] bg-primary-800/50 flex flex-col justify-between gap-4 h-full w-full text-text">
            <section class="w-full h-full px-12 py-5  overflow-y-auto">
                <h6 class=" uppercase text-sm font-semibold text-text/70">Solicitudes recibidas</h6>
                <ul class=" my-5">
                    <li v-for="(friend, index) in filteredResults" :key="index">
                        <SolicitudAmistadCard :friend-request-username="friend.username"
                            :friend-request-picture="friend.picture" />
                    </li>
                </ul>
            </section>
        </main>
    </Layout>
</template>

<style scoped>

</style>
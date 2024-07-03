<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import { groups } from '@/assets/AMIGOS_CHAT/GruposTest.js';
import { type Group } from '@/assets/AMIGOS_CHAT/GruposTest.js';
import InvitacionGrupoCard from '@/components/AMIGOS_CHAT/InvitacionGrupoCard.vue';
import Layout from '@/components/AMIGOS_CHAT/AmigosChatLayout.vue';
import AmigosHeader from '@/components/AMIGOS_CHAT/AmigosHeader.vue';

const props = defineProps({
    username: {
        type: String,
        required: true
    }
});

const groupsRequest: Ref<Group[]> = ref([]);
const filteredResults: Ref<Group[]> = ref([]);


const getUsernameGroupsRequest = async (username: string) => {
    groupsRequest.value = groups
    filteredResults.value = [...groupsRequest.value]
}

onMounted(() => {
    getUsernameGroupsRequest(props.username)
});

const handleSearch = (searchTerm: string) => {
    searchTerm = searchTerm.trim();
    if (searchTerm === '') {
        filteredResults.value = [...groupsRequest.value];
    } else {
        filteredResults.value = groupsRequest.value.filter(group =>
            group.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
}

</script>

<template>
    <Layout>
        <AmigosHeader :onSearchCallback="handleSearch" />
        <main class="[grid-area:main] bg-primary-800/50 flex flex-col justify-between gap-4 h-full w-full">
            <section class="w-full h-full px-12 py-5 overflow-y-auto">
                <h6 class=" uppercase text-sm font-semibold text-text/70">Invitaciones recibidas</h6>
                <ul class=" my-5">
                    <li v-for="(group, index) in filteredResults" :key="index">
                        <InvitacionGrupoCard :group-request-name="group.name" :group-request-picture="group.picture"
                            :group-request-owner="group.owner" :group-request-participants="group.participants" />
                    </li>
                </ul>
            </section>
        </main>
    </Layout>
</template>

<style scoped>

</style>
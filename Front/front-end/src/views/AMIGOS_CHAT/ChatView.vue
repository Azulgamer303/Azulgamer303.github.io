<script setup lang="ts">
import { type Chat, type Mensaje } from "@/services/AMIGOS_CHAT/types";
import Layout from "@/components/AMIGOS_CHAT/AmigosChatLayout.vue";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import MessageTile from "@/components/AMIGOS_CHAT/MessageTile.vue";
import AmigosChatHeader from "@/components/AMIGOS_CHAT/AmigosChatHeader.vue";
import ChatPreferencesVue from "@/components/AMIGOS_CHAT/ChatPreferences.vue";
import { watchEffect, ref, onMounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import { getChatByID } from "@/services/AMIGOS_CHAT/chatService";

const socket = ref<WebSocket | null>(null);
const inputMessage = ref<string>("");
const messages = ref<Mensaje[]>([]);
const chatID = ref<string>("");
const chat = ref<Chat>();
const currentUserID = ref<number>(0);
const route = useRoute();
const messagesContainer = ref<HTMLElement | null>(null);


const handleGetChatId = async () => {
   const newId = route.params.id as string;
   const isGroupChat = route.query.isGroupChat as string;

   chat.value = await getChatByID(parseInt(newId), isGroupChat === "true", currentUserID.value);
}

watchEffect(() => {
   currentUserID.value = parseInt(sessionStorage.getItem("userId")!);
   handleGetChatId();
});

watch(() => chat.value, async (newChat, _) => {
   if (!newChat) return;

   if (socket.value) {
      socket.value.close();
   }

   const url = `ws://localhost:8080/chats?${newChat.tipo === 'grupal'
      ? "groupChatId" : "chatId"}=${newChat.chatId}&userId=${currentUserID.value}`;
   socket.value = new WebSocket(url);

   socket.value.onopen = () => {
      messages.value = [];
   };

   socket.value.onmessage = (event) => {
      const message = JSON.parse(event.data) as Mensaje;

      if (!messages.value.some(msg => msg.mensajeId === message.mensajeId)) {
         if (message.chatId.toString() === newChat.chatId.toString() &&
            message.chatGrupal === (chat.value!.tipo === 'grupal')) {
            messages.value.push(message);
         }
         nextTick(() => {
            messagesContainer.value?.scrollTo({
               top: messagesContainer.value?.scrollHeight,
               behavior: "smooth",
            });
         });
      }
   };

   socket.value.onclose = () => {
      console.log("Disconnected from chat: " + newChat.chatId);
   };
}, { immediate: true });

// send message to websocket
const handleSendMessage = () => {
   if (inputMessage.value.trim() === "") {
      return;
   }

   socket.value!.send(
      JSON.stringify({
         emisorId: currentUserID.value,
         chatId: chatID.value,
         contenido: inputMessage.value,
         timestamp: Date.now(),
      })
   );

   inputMessage.value = "";
}

const handleKeyUp = (event: KeyboardEvent) => {
   if (event.key === 'Enter') {
      handleSendMessage();
   }
};

const checkIfWasSentByCurrentUser = (message: Mensaje) => {
   return message.emisorId.toString() === currentUserID.value.toString();
};


</script>

<template>
   <Layout v-if="chat !== undefined">
      <AmigosChatHeader :title="chat.nombre ?? 'Chat'" :icon="faMessage">
         <ChatPreferencesVue :chat="chat" />
      </AmigosChatHeader>
      <main class="[grid-area:main] bg-primary-800/50 flex flex-col justify-between gap-4 h-full w-full">
         <section ref="messagesContainer" class="flex flex-col h-full overflow-y-auto w-full justify-between">
            <div class="flex flex-col gap-6 py-6 px-10">
               <p class="text-text/60 text-center mt-4 font-medium" v-if="messages.length === 0">
                  Aún no hay mensajes en este chat. ¡Empieza la conversación!
               </p>
               <div v-for="message in messages" :key="message.mensajeId">
                  <MessageTile :message="message" :sentByCurrentUser="checkIfWasSentByCurrentUser(message)" />
               </div>
            </div>
         </section>
         <section class="flex items-center bg-background-950 md:h-20 h-14 px-4 py-6">
            <input v-model="inputMessage" @keyup="handleKeyUp" type="text"
               class="bg-primary-800/50 w-full h-10 rounded-md bg-background-950 text-text px-4"
               :placeholder="`Mensaje a @${chat?.nombre ?? 'usuario'}`" />
         </section>
      </main>
   </Layout>
</template>

<style scoped>

</style>

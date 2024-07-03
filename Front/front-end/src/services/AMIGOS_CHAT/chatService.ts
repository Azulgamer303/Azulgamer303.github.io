import type { Chat, Mensaje } from '@/services/AMIGOS_CHAT/types';
import { users, type User } from "@/assets/AMIGOS_CHAT/users";

export const fetchChats = async (userId: string): Promise<Chat[]> => {
   try {
      const token = sessionStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/chats/`,
         {
            headers: {
               Authorization: `Bearer ${token}`,
            }
         }
      );
      const data = await response.json();
      const chats = parseChats(data, parseInt(userId));
      return chats;
   } catch (error) {
      throw new Error('Error fetching chats: ' + error);
   }
};

const parseChats = (chatsData: any, userId: number): Chat[] => {
   const individualChats = chatsData.chats.map((chat: any) => parseIndividualChat(chat, userId));
   const groupalChats = chatsData.chatsGrupales.map((chat: any) => parseGroupalChat(chat));


   return [...individualChats, ...groupalChats];
};

export const findMessageSender = (message: Mensaje): User => {
   return users.find((user) => user.id.toString() === message.emisorId.toString()) ?? users[0];
}

export const getChatByID = async (chatId: number, isGrupal: boolean, userId: number): Promise<Chat> => {
   try {
      const token = sessionStorage.getItem('token');

      const url = isGrupal ?
         `http://localhost:8080/chats/grupal/${chatId}`
         :
         `http://localhost:8080/chats/${chatId}`;

      const response = await fetch(url,
         {
            headers: {
               Authorization: `Bearer ${token}`,
            }
         }
      );
      const data = await response.json();

      if (isGrupal) {
         return parseGroupalChat(data);
      }

      return parseIndividualChat(data, userId);
   } catch (error) {
      throw new Error('Error fetching chat: ' + error);
   }

}


const parseIndividualChat = (chat: any, userId: number): Chat => {
   const anotherParticipant = chat.participanteId === userId
      ? { id: chat.creadorId, nombre: chat.creadorNombre }
      : { id: chat.participanteId, nombre: chat.participanteNombre };

   chat.ultimoMensajeTimestamp = parseInt(chat.ultimoMensajeTimestamp, 10);

   return {
      ...chat,
      nombre: anotherParticipant.nombre,
      tipo: 'individual',
      participantes: [
         { id: chat.creadorId, nombre: chat.creadorNombre },
         { id: chat.participanteId, nombre: chat.participanteNombre }
      ]
   };
}

const parseGroupalChat = (chat: any): Chat => {
   chat.ultimoMensajeTimestamp = parseInt(chat.ultimoMensajeTimestamp, 10);

   return {
      ...chat,
      tipo: 'grupal',
      participantes: chat.participantesIds.map((id: any) => ({ id })),
   };

}

export const muteChat = async (userId: number, chatId: number, isGrupal: boolean, mute: boolean = true): Promise<void> => {
   try {
      const token = sessionStorage.getItem('token');

      const url = isGrupal ?
         `http://localhost:8080/chats/grupal/${chatId}/mute/${mute}`
         :
         `http://localhost:8080/chats/${chatId}/mute/${mute}`;

      const response = await fetch(url, {
         method: 'PATCH',
         headers: {
            Authorization: `Bearer ${token}`,
         }
      });
      const data = await response.json();

      return data;

   } catch (error) {
      throw new Error('Error muting chat: ' + error);
   }
}

export const getHoursAndMinutes = (timestamp: number): string => {
   const date = new Date(timestamp);
   const hours = date.getHours();
   const minutes = date.getMinutes();
   const formattedHours = hours < 10 ? '0' + hours : hours;
   const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
   return `${formattedHours}:${formattedMinutes}`;
};

export const formatTimestampFromEpoch = (timestamp: string) => {

   const parsedTimestamp = parseInt(timestamp);

   const date = new Date(parsedTimestamp);

   const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Santiago',
   } as Intl.DateTimeFormatOptions;

   const formatter = new Intl.DateTimeFormat('es-CL', options);
   const formattedDate = formatter.format(date);
   const [datePart, timePart] = formattedDate.split(', ');
   const [day, month, year] = datePart.split(' de ');
   const [hour, minute] = timePart.split(':');

   return `${hour}:${minute}, ${day} de ${month}`;
};

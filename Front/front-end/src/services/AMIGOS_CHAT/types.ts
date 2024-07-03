// all types are exported from this file (types === models === DTOs)
// all types here must have the same field names as the DTOs in the SpringBoot API

export interface Mensaje {
    mensajeId?: number;
    chatId: number;
    emisorId: string;
    contenido: string;
    timestamp: string;
    chatGrupal: boolean;
}

export interface Chat {
    chatId: number;
    fechaCreacion: string;
    nombre: string;
    silenciado: boolean;
    mensajesSinLeer: number;
    ultimoMensajeTimestamp: number;
    creadorId: number;
    tipo: 'individual' | 'grupal';
    participantesSilenciadosIds: number[];
    participantes: { id: number, nombre: string }[];
    mensajes: Mensaje[];
}

export interface NotificacionChat {
    notificacionId: number,
    usuarioId: number,
    contenido: string,
    fecha: string,
    tipoNotificacion: 'MENSAJE_RECIBIDO' | 'INVITACION_GRUPO' | 'SOLICITUD_AMISTAD',
    leida: boolean,
    chatId: number | null,
    chatGrupalId: number | null,
    chatGrupal: boolean
}


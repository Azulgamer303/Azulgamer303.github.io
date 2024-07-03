

// Definición de la interfaz para una invitación a grupo
interface notificacion {
    id: number;
    remitenteId: number;
    destinatarioId: number;
    nombreGrupo: string;
    tipo: number; // Tipo 2: Invitación a grupo
}

// Definición de la interfaz para un usuario
interface Usuario {
    id: number;
    nombre: string;
}

// Datos falsos de usuarios
const usuariosFalsos: Usuario[] = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Jose" },
    { id: 3, nombre: "Maria" },
    { id: 4, nombre: "Rudecindo" },
    { id: 5, nombre: "Octavia" },
    { id: 6, nombre: "nana" },
    { id: 7, nombre: "pepe" },
    { id: 8, nombre: "tarro" },
    { id: 9, nombre: "felipe" },
    { id: 10, nombre: "lala" },
];

// Datos falsos de notificaciones
const notificacionesFalsas: notificacion[] = [
    { id: 1, remitenteId: 4, destinatarioId: 1, nombreGrupo: " ", tipo: 1 },
    { id: 2, remitenteId: 2, destinatarioId: 1, nombreGrupo: " ", tipo: 1 },
    { id: 3, remitenteId: 3, destinatarioId: 1, nombreGrupo: " ", tipo: 1 },
    { id: 4, remitenteId: 4, destinatarioId: 2, nombreGrupo: " ", tipo: 1 },
    { id: 5, remitenteId: 5, destinatarioId: 2, nombreGrupo: " ", tipo: 1 },
    { id: 6, remitenteId: 3, destinatarioId: 1, nombreGrupo: "Grupo 1", tipo: 2 },
    { id: 7, remitenteId: 2, destinatarioId: 1, nombreGrupo: "Grupo 2", tipo: 2 },
    { id: 8, remitenteId: 3, destinatarioId: 1, nombreGrupo: "Grupo 3", tipo: 2 },
    { id: 9, remitenteId: 4, destinatarioId: 2, nombreGrupo: "Grupo 4", tipo: 2 },
    { id: 10, remitenteId: 5, destinatarioId: 2, nombreGrupo: "Grupo 5", tipo: 2 },
];

// Exportar el array de notificaciones falsas para que pueda ser utilizado en otros archivos
export { usuariosFalsos, notificacionesFalsas };

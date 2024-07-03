import { createRouter, createWebHistory } from "vue-router";
import BibliotecaView from "@/views/BIBLIOTECA/BibliotecaView.vue";
import TiendaView from "@/views/TIENDA/TiendaView.vue";
import CuentaView from "@/views/CuentaView.vue";

import CarrritoView from "@/views/TIENDA/CarrritoView.vue";
import JuegoView from "@/views/TIENDA/JuegoView.vue";

import BibliotecaJuegoView from "@/views/BIBLIOTECA/BibliotecaJuegoView.vue";

import RegisterDeveloperView from "@/views/cuentas/RegisterDeveloperView.vue";
import RegisterUserView from "@/views/cuentas/RegisterUserView.vue";
import LoginView from "@/views/cuentas/LoginView.vue";
import RequestResetPasswordView from "@/views/cuentas/RequestResetPasswordView.vue";
import ResetPassword from "@/views/cuentas/ResetPasswordView.vue";
import ProfileView from "@/views/cuentas/ProfileView.vue";
import EditProfile from "@/views/cuentas/EditProfileView.vue";
import ChangePhoto from "@/views/cuentas/ChangePhotoView.vue";
import ConfirmEmailView from "@/views/cuentas/ConfirmEmailView.vue";
import PublicarVideojuegoView from "@/views/DESARROLLADOR/PublicarVideojuegoView.vue";
import GestionarVideojuegosView from "@/views/DESARROLLADOR/GestionarVideojuegosView.vue";
import DetalleVideojuegoView from "@/views/DESARROLLADOR/DetalleVideojuegoView.vue";
import EstadisticasVentaView from "@/views/DESARROLLADOR/EstadisticasVentaView.vue";
import ComentariosVideojuegoView from "@/views/DESARROLLADOR/ComentariosVideojuegoView.vue";
import EditarVideojuegoView from "@/views/DESARROLLADOR/EditarVideojuegoView.vue";
import CompraExitosaView from "@/views/PAGOS/CompraExitosaView.vue";
import CompraFallidaView from "@/views/PAGOS/CompraFallidaView.vue";
import DetallesPagoView from "@/views/PAGOS/DetallesPagoView.vue";
import HistorialComprasView from "@/views/PAGOS/HistorialComprasView.vue";
import DetallesCompraView from "@/views/PAGOS/DetallesCompraView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "tienda",
      component: TiendaView,
    },
    {
      path: "/biblioteca/juego/:datosJuego",
      name: "BibliotecaJuegoView",
      component: BibliotecaJuegoView,
      props: true,
    },
    {
      path: "/carrito",
      name: "carrito",
      component: CarrritoView,
    },
    {
      path: "/biblioteca",
      name: "biblioteca",
      component: BibliotecaView,
    },
    {
      path: "/social",
      name: "amigos-chat",
      children: [
        {
          path: "",
          name: "amigos",
          component: import("@/views/AMIGOS_CHAT/AmigosView.vue"),
        },
        {
          path: "solicitudes-amistad",
          name: "solicitudes-amistad",
          component: () =>
            import("@/views/AMIGOS_CHAT/SolicitudesAmistadView.vue"),
        },
        {
          path: "invitaciones-grupo",
          name: "invitaciones-grupo",
          component: () =>
            import("@/views/AMIGOS_CHAT/InvitacionesGrupoView.vue"),
        },
        {
          path: "chat/:id",
          name: "chat",
          component: () => import("@/views/AMIGOS_CHAT/ChatView.vue"),
        },
        // {
        //   path: 'friends',
        //   name: 'friends',
        //   component: FriendsView
        // },
        // {
        //   path: 'friendRequests',
        //   name: 'friendRequests',
        //   component: FriendRequestsView
        // },
        // {
        //   path: 'groupInvitations',
        //   name: 'groupInvitations',
        //   component: GroupInvitationsView
        // }
      ],
    },
    {
      path: "/cuenta",
      name: "cuenta",
      component: CuentaView,
    },
    {
      path: "/desarrollador/gestionar-videojuegos",
      name: "gestionar-videojuegos",
      component: GestionarVideojuegosView,
    },
    {
      path: "/desarrollador/publicar-videojuego",
      name: "publicar-videojuego",
      component: PublicarVideojuegoView,
    },
    {
      path: "/desarrollador/comentarios-videojuego/:id",
      name: "comentarios-videojuego",
      component: ComentariosVideojuegoView,
      props: true, // Para pasar el id del videojuego
    },
    {
      path: "/desarrollador/estadisticas-venta/:id",
      name: "estadisticas-venta",
      component: EstadisticasVentaView,
      props: true, // Para pasar el id del videojuego
    },
    {
      path: "/desarrollador/actualizar-videojuego/:id",
      name: "actualizar-videojuego",
      component: EditarVideojuegoView,
      props: true, // Para pasar el id del videojuego
    },
    {
      path: "/desarrollador/gestionar-videojuegos/videojuego/:id",
      name: "detalle-videojuego",
      component: DetalleVideojuegoView,
      props: true, // Para pasar el id del videojuego
    },
    {
      path: "/juego",
      name: "juego",
      component: JuegoView,
    },
    {
      path: "/register-developer",
      name: "register-developer",
      component: RegisterDeveloperView,
    },
    {
      path: "/register-user",
      name: "register-user",
      component: RegisterUserView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/request-reset",
      name: "request-reset",
      component: RequestResetPasswordView,
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: ResetPassword,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      component: EditProfile,
    },
    {
      path: "/change-photo",
      name: "change-photo",
      component: ChangePhoto,
    },
    {
      path: "/confirm-email",
      name: "confirm-email",
      component: ConfirmEmailView,
    },
    {
      path: "/tienda/carrito/compra-exitosa",
      name: "compra-exitosa",
      component: CompraExitosaView,
      meta: {
        breadcrumb: [
          { name: "Detalles del pago", link: "/tienda/carrito/detalles-pago" },
          { name: "Compra exitosa" },
        ],
      },
    },
    {
      path: "/tienda/carrito/compra-fallida",
      name: "compra-fallida",
      component: CompraFallidaView,
      meta: {
        breadcrumb: [
          { name: "Detalles del pago", link: "/tienda/carrito/detalles-pago" },
          { name: "Compra fallida" },
        ],
      },
    },
    {
      path: "/tienda/carrito/detalles-pago",
      name: "detalles-pago",
      component: DetallesPagoView,
      meta: {
        breadcrumb: [
          { name: "Tienda", link: "/tienda" },
          { name: "Carrito de compras", link: "/tienda/carrito" },
          { name: "Detalles del pago" },
        ],
      },
    },
    {
      path: "/cuenta/historial-de-compras",
      name: "historial-compras",
      component: HistorialComprasView,
      meta: {
        breadcrumb: [
          { name: "Cuenta", link: "/cuenta" },
          { name: "Historial de compras" },
        ],
      },
    },
    {
      path: "/cuenta/historial-de-compras/detalles-compra/:id",
      name: "detalles-compra",
      component: DetallesCompraView,
      meta: {
        breadcrumb: [
          { name: "Cuenta", link: "/cuenta" },
          {
            name: "Historial de compras",
            link: "/cuenta/historial-de-compras",
          },
          { name: "Detalles de la compra" },
        ],
      },
    },
  ],
});

export default router;

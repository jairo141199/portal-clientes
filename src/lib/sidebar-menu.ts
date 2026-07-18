export interface MenuColumn {
  heading: string;
  links: string[];
}

export interface MenuSection {
  key: string;
  label: string;
  columns: MenuColumn[];
}

export const SIDEBAR_MENUS: MenuSection[] = [
  {
    key: "transacciones",
    label: "Transacciones",
    columns: [
      {
        heading: "Transferir",
        links: ["A tus productos", "A otros bancos", "Programar transferencias"],
      },
      {
        heading: "Pagar",
        links: ["Tus tarjetas", "Otras tarjetas", "Tus créditos", "Tus facturas inscritas"],
      },
      {
        heading: "Inscribir",
        links: ["Inscribir productos", "Inscribir facturas"],
      },
      {
        heading: "Internacionales",
        links: ["Transferir plata", "Recibir plata", "Inscribir cuentas"],
      },
      {
        heading: "Consultar",
        links: ["Transferencias programadas", "Pagos de facturas"],
      },
    ],
  },
  {
    key: "productos",
    label: "Productos",
    columns: [
      {
        heading: "Cuentas",
        links: ["Tus cuentas", "Tu tarjeta débito virtual", "Ir a bolsillos"],
      },
      {
        heading: "Tarjetas de crédito",
        links: ["Tus tarjetas", "Activar tarjetas", "Hacer avances", "Cambiar cuotas"],
      },
      {
        heading: "Créditos",
        links: ["Tus créditos", "Tu crédito ágil", "Desembolsar crédito ágil"],
      },
      {
        heading: "Inversiones",
        links: ["Tus inversiones"],
      },
      {
        heading: "Leasing",
        links: ["Tus leasings"],
      },
    ],
  },
  {
    key: "solicitud-productos",
    label: "Solicitud de productos",
    columns: [
      {
        heading: "Cuentas",
        links: ["Abrir cuenta", "Abrir cuenta internacional"],
      },
      {
        heading: "Tarjetas de crédito",
        links: ["Pedir tarjetas de crédito", "Crear e-card"],
      },
      {
        heading: "Créditos",
        links: ["Solicitar crédito ágil", "Solicitar libre inversión", "Otros créditos"],
      },
      {
        heading: "Inversiones",
        links: ["Abrir inversión virtual", "Abrir fondos de inversión"],
      },
      {
        heading: "Seguros",
        links: ["Arrendamiento seguro", "Integral para cáncer", "Mascota protegida"],
      },
      {
        heading: "Leasing",
        links: ["Solicitar leasing"],
      },
      {
        heading: "Solicitudes",
        links: ["Seguimiento de solicitudes", "Seguimiento de datáfono"],
      },
      {
        heading: "Para tu negocio",
        links: ["Datáfonos y pagos en línea"],
      },
    ],
  },
  {
    key: "documentos",
    label: "Documentos y trámites",
    columns: [
      {
        heading: "Consultar",
        links: [
          "Extractos",
          "Certificados tributarios",
          "Reporte anual de costos totales",
          "Proyección crédito de vivienda",
        ],
      },
      {
        heading: "Servicios en línea",
        links: ["Trámites digitales"],
      },
    ],
  },
  {
    key: "ajustes",
    label: "Ajustes",
    columns: [
      {
        heading: "Tu usuario",
        links: ["Actualizar datos", "Preferencias de pantalla", "Eliminar usuario"],
      },
      {
        heading: "Seguridad",
        links: ["Editar topes", "Alertas y notificaciones"],
      },
      {
        heading: "Productos",
        links: ["Tus productos", "Productos inscritos"],
      },
      {
        heading: "Bloqueos",
        links: ["Bloquear clave principal", "Bloquear clave dinámica", "Apagar tarjetas", "Bloquear tarjetas"],
      },
    ],
  },
];

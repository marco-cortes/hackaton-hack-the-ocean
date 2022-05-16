const usuario = {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    email: "juan@email.com",
    password: "123456",
    rol: "USER_ROLE",
}

const acciones_usuario = {
    registro: "REGISTRO",
    login: "LOGIN",
    actualizacion_datos: "ACTUALIZACION_DATOS",
    cambio_password: "CAMBIO_PASSWORD",
    cambio_email: "CAMBIO_EMAIL",
    ver_destinos: "VER_DESTINOS",
    ver_destino: "VER_DESTINO",
    crear_comentario: "CREAR_COMENTARIO",
    crear_reporte: "CREAR_REPORTE",
}

const dueño = {
    id: 2,
    nombre: "Andrea",
    apellido: "Jimenez",
    email: "andrea@email.com",
    password: "123456",
    rol: "OWNER_ROLE",
}

const acciones_dueño = {
    ...acciones_usuario,
    crear_destino: "CREAR_DESTINO",
    actualizar_destino: "ACTUALIZAR_DESTINO",
    eliminar_destino: "ELIMINAR_DESTINO",
}

const administrador = {
    id: 3,
    nombre: "Fernando",
    apellido: "Corona",
    email: "admin@email.com",
    password: "123456",
    rol: "ADMIN_ROLE",
}

const acciones_administrador = {
    ...acciones_dueño,
    admitir_destino: "ADMITIR_DESTINO",
    rechazar_destino: "RECHAZAR_DESTINO",
    ver_reportes: "VER_REPORTES",
}

const destino = {
    id: 1,
    nombre: "Cancun",
    descripcion: "lorem ipsum",
    dueño: dueño.id,
    calificacion: 5,
    fotos: [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        }
    ],
    videos: [
        {
            id: 1,
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
            id: 2,
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        }
    ],
    ubicacion: {
        lat: 20.567,
        lng: -100.567,
    },
    comentarios: [
        {
            id: 1,
            comentario: "lorem ipsum",
            usuario: usuario.id,
            fecha: new Date(),
            calificacion: 5,
        },
        {
            id: 2,
            comentario: "lorem ipsum",
            usuario: usuario.id,
            fecha: new Date(),
            calificacion: 5,
        }
    ],
    recomendaciones: [
        {
            id: 1,
            titulo: "lorem ipsum",
            descripcion: "lorem ipsum",
        },
        {
            id: 2,
            titulo: "lorem ipsum",
            descripcion: "lorem ipsum",
        }
    ],
    creado: new Date(),
    actualizado: new Date(),
}

const reporte = {
    id: 1,
    descripcion: "lorem ipsum",
    destino: destino.id,
    usuario: usuario.id,
    fecha: new Date(),
}



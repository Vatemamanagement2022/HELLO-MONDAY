/* Configuración de la herramienta interna Hello Monday OC.
 * Rellena los valores marcados con TODO antes de desplegar (ver README.md). */
window.HM_CONFIG = {
  // Firebase Console → Configuración del proyecto → Tus apps → App web → "Configuración del SDK".
  // Estos valores NO son secretos: la seguridad la ponen el login y firestore.rules.
  firebase: {
    apiKey: 'TODO',
    authDomain: 'TODO.firebaseapp.com',
    projectId: 'TODO',
    storageBucket: 'TODO.firebasestorage.app',
    messagingSenderId: 'TODO',
    appId: 'TODO'
  },

  // Cualquier cuenta verificada de este dominio de Google Workspace puede entrar como equipo.
  allowedDomain: 'helloomonday.com',

  // Administración (Ángel): acceso completo, incluido el cierre de OC y los objetivos.
  // Deben coincidir con ADMIN_EMAILS en firestore.rules.
  adminEmails: [
    // 'angel@helloomonday.com'
  ],

  // Solo consulta (antes Willy y Terry con PIN): ven Matriz, Dashboard y Objetivos, sin editar.
  // Pueden ser cuentas de fuera del dominio. Deben coincidir con VIEWER_EMAILS en firestore.rules.
  viewerEmails: {
    // 'willy@ejemplo.com': 'Willy',
    // 'terry@ejemplo.com': 'Terry'
  },

  // Opcional: asigna el nombre del equipo a cada correo para que nadie tenga que elegirlo
  // (ni pueda elegir el de otra persona). Si un correo del dominio no está aquí, se le pide el nombre.
  teamEmails: {
    // 'belen@helloomonday.com': 'Belén',
    // 'leire@helloomonday.com': 'Leire'
  }
};

# HELLO-MONDAY · OC (herramienta interna)

Órdenes de compra y rentabilidad del equipo, alojada en Firebase Hosting con login de Google
(solo cuentas autorizadas) y datos en Firestore.

## Por qué Google tiraba la web
La pantalla de entrada mostraba el logo y pedía un PIN en un campo de contraseña en un dominio
`*.web.app` público: Google Safe Browsing lo clasifica como posible phishing. Esta versión:
- entra con **Google** (cuentas `@helloomonday.com` + listas de `public/config.js`), sin campos de contraseña;
- no se indexa (`noindex` en la página y en cabeceras, `robots.txt` con `Disallow: /`);
- protege los datos con `firestore.rules` (antes el PIN estaba en el código de la página).

## Puesta en marcha
1. Firebase Console → **Authentication** → activar el proveedor **Google**.
2. **Firestore Database** → crear base de datos (modo producción).
3. Rellenar `public/config.js` (config del SDK web, `adminEmails`, `viewerEmails`, `teamEmails`)
   y las mismas listas en `firestore.rules`. Poner el ID del proyecto en `.firebaserc`.
4. `npm i -g firebase-tools && firebase login && firebase deploy`
5. Si el dominio sigue marcado en rojo, solicitar revisión en Google Search Console
   (Problemas de seguridad) o en https://safebrowsing.google.com/safebrowsing/report_error/.

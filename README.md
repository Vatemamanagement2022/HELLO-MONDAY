# HELLO-MONDAY · OC (herramienta interna)

Código de https://hello-monday-oc-temporal.web.app (Firebase Hosting, proyecto `hello-monday-oc-temporal`).
Login con Google (lista `TEAM_EMAILS` en `public/index.html`) y datos en Firestore.

Las reglas de Firestore viven en la consola de Firebase: este repo solo despliega el hosting.

## Desplegar
```
npm i -g firebase-tools
firebase login
firebase deploy --only hosting
```

## Si Google la marca en rojo
1. Search Console → añadir la propiedad → Seguridad → Solicitar revisión.
2. Mejor solución: dominio propio (p. ej. `oc.helloomonday.com`) en Firebase Hosting → Dominio personalizado.

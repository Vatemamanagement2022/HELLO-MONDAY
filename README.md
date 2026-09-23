# HELLO-MONDAY

Web corporativa de **Hello Monday**: una página estática (HTML, CSS y JavaScript sin dependencias), responsive y en español.

## Estructura

```
index.html        Página principal (inicio, servicios, nosotros, proceso, FAQ, contacto)
css/styles.css    Estilos (colores y tipografías en variables al inicio del archivo)
js/main.js        Menú móvil, animaciones y formulario de contacto
assets/           Favicon y recursos gráficos
```

## Ver en local

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Personalizar

- **Textos**: edítalos directamente en `index.html`.
- **Colores / tipografías**: variables `:root` al principio de `css/styles.css`.
- **Email de contacto**: `CONTACT_EMAIL` en `js/main.js` y el enlace `mailto:` de `index.html`.
- **Formulario**: ahora abre el cliente de correo del visitante. Para recibir mensajes directamente, conéctalo a un servicio como Formspree o Netlify Forms.

## Publicar

Al ser una web estática se puede publicar gratis en GitHub Pages, Netlify o Vercel apuntando a la raíz del repositorio.

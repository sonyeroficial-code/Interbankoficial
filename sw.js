const CACHE_NAME = 'interbank-pwa-v3';
const APP_SHELL = ["/", "/index.html", "/manifest.webmanifest", "/assets/icons/icon-192.png", "/assets/icons/icon-512.png", "/assets/icons/apple-touch-icon.png", "/assets/IMG-20260813-WA0010.jpg", "/assets/Logo-Bcp.svg", "/assets/LogoYape.svg", "/assets/LogoYapeCuadrado.svg", "/assets/Lupa-icon.svg", "/assets/Novedad1.svg", "/assets/SIN-SALDO-ICON.svg", "/assets/ahorro-total-icon.svg", "/assets/aldeas-icon-main.svg", "/assets/alerta-icon.svg", "/assets/atras.svg", "/assets/avi-chat-icon.jpg", "/assets/ayuda.svg", "/assets/back.svg", "/assets/banner-dolares-tipo-cambio-alternativo.png", "/assets/banner-dolares-tipo-cambio.png", "/assets/banner-mis-finanzas-alternativo.jpg", "/assets/banner-plinea-whatsapp-azul.png", "/assets/banner-plinea-whatsapp-blanco.png", "/assets/banner-plinea-whatsapp-inferior.png", "/assets/banner-plinea-whatsapp.png", "/assets/bcp-logoazul.svg", "/assets/bcpchat.svg", "/assets/beneficios-icon.svg", "/assets/bloquear-h-icon.svg", "/assets/bloquear-mi-tarjeta-icon.svg", "/assets/bloquear-tarjeta-icon.svg", "/assets/bloqueo-bien.svg", "/assets/border-plin.svg", "/assets/borderinter.svg", "/assets/cambiar-pass-icon.svg", "/assets/cambiar-soles-icon.svg", "/assets/campana-icon.svg", "/assets/campana.svg", "/assets/candado-i-icon.svg", "/assets/celular-p-icon.svg", "/assets/celular-w-icon.svg", "/assets/centro-de-ayuda-icon.svg", "/assets/cerdito-ahorro-icon.png", "/assets/cerdito-rosa-icon.png", "/assets/cerrar-sesion-icon.svg", "/assets/check.json", "/assets/circ-p.svg", "/assets/circ-t.svg", "/assets/comp.svg", "/assets/compartir-cop.svg", "/assets/compartir-icon.svg", "/assets/compartir-tran.svg", "/assets/configuracion-flash.svg", "/assets/configurar-mi-app-icon.svg", "/assets/configurar-mi-app-w-icon.svg", "/assets/configurar-mis-tarjetas-icon.svg", "/assets/configurar-plin-icon.svg", "/assets/confirmado-icon.svg", "/assets/consultar-mi-solicitud-icon.svg", "/assets/contacto-icon.svg", "/assets/cuadro-inicio-icon.svg", "/assets/cuadro-login-icon.svg", "/assets/cuadro-login2-icon.svg", "/assets/customer-icon.svg", "/assets/descargar-tran.svg", "/assets/descubre-flash.svg", "/assets/donbelisario-icon-main.svg", "/assets/downborder.svg", "/assets/entidades-icon.svg", "/assets/equis.svg", "/assets/equis1.svg", "/assets/equis3.svg", "/assets/eyeclose.svg", "/assets/favicon.png", "/assets/finanzas.jpg", "/assets/flecha-atras.svg", "/assets/flecha-g-atras.svg", "/assets/flecha-icon.svg", "/assets/flecha-yape.svg", "/assets/flecha.svg", "/assets/flechab.svg", "/assets/flechas-transferencia-verdes-icon.png", "/assets/fondo-qr.svg", "/assets/fonts/Geometria-Bold.woff", "/assets/fonts/Geometria-Light.woff", "/assets/fonts/Geometria-Medium.woff", "/assets/fonts/Geometria.woff", "/assets/fonts/Montserrat-Bold.ttf", "/assets/fonts/Montserrat-Medium.ttf", "/assets/fonts/Montserrat-Regular.ttf", "/assets/fonts/Montserrat-SemiBold.ttf", "/assets/global.css", "/assets/guardar-fav.jpg", "/assets/html2canvas.min.js", "/assets/huella-b-icon.svg", "/assets/huella-w-icon.svg", "/assets/iconicsnew/activar-auto.svg", "/assets/iconicsnew/activar-sms.svg", "/assets/iconicsnew/anuncio-home.svg", "/assets/iconicsnew/atras-cuenta.svg", "/assets/iconicsnew/borrar-historial.svg", "/assets/iconicsnew/celular-color-icon.svg", "/assets/iconicsnew/constancia-correo.svg", "/assets/iconicsnew/correo-blanco-icon.svg", "/assets/iconicsnew/cuenta-contacto.svg", "/assets/iconicsnew/cuenta-datos.svg", "/assets/iconicsnew/cuenta-qr.svg", "/assets/iconicsnew/cuenta-soporte.svg", "/assets/iconicsnew/cuenta-terminos.svg", "/assets/iconicsnew/cuenta-voucher.svg", "/assets/iconicsnew/editar-nombre.svg", "/assets/iconicsnew/fondo-olvide.svg", "/assets/iconicsnew/fondo-total.jpg", "/assets/iconicsnew/formulario-blanco-icon.svg", "/assets/iconicsnew/inicio-blanco-icon.svg", "/assets/iconicsnew/inicio-fondo.png", "/assets/iconicsnew/ojo-abierto.svg", "/assets/iconicsnew/ojo-cerrado.svg", "/assets/iconicsnew/sms-blanco-icon.svg", "/assets/icons/icon.png", "/assets/index.html", "/assets/ingresar-bien.svg", "/assets/inicio-d-icon.svg", "/assets/inicio-dia.svg", "/assets/inicio-flash.svg", "/assets/inicio-icon.svg", "/assets/inicio.svg", "/assets/instascan.min.js", "/assets/interbank-login.svg", "/assets/interbank-logo.svg", "/assets/lapiz-cop.svg", "/assets/lapiz-in.svg", "/assets/lg_favicon_light.svg", "/assets/login-atras-icon.svg", "/assets/login-atras-morado-icon-v2.svg", "/assets/login-atras-morado-icon.svg", "/assets/login-atras-w-icon-v2.svg", "/assets/login-atras-w-icon-v3.svg", "/assets/login-atras-w-icon.svg", "/assets/login-id-icon.svg", "/assets/login-menu-icon.svg", "/assets/login-menu-morado-icon-v2.svg", "/assets/login-menu-morado-icon.svg", "/assets/login-menu-w-icon-v2.svg", "/assets/login-menu-w-icon-v3.svg", "/assets/login-menu-w-icon.svg", "/assets/login-pass-icon.svg", "/assets/login-user-icon.svg", "/assets/logo-icon.jpg", "/assets/logoplin.svg", "/assets/mail-constancia.svg", "/assets/manifest.json", "/assets/mas-opciones-icon.svg", "/assets/mas-opciones.svg", "/assets/me-voy-de-viaje-icon.svg", "/assets/menu-icon.svg", "/assets/menu-w-icon.svg", "/assets/menu.svg", "/assets/mi-perfil-icon.svg", "/assets/mi-qr-icon.svg", "/assets/mis-finanzas-d-icon.svg", "/assets/mis-finanzas-icon.svg", "/assets/mis-seguros-icon.svg", "/assets/more-contact.svg", "/assets/mostrar-qr-icon.svg", "/assets/navigationbar.svg", "/assets/notificaciones-cuenta-icon.png", "/assets/novedad-home.jpg", "/assets/nuevo-numero-icon.jpg", "/assets/ojo-abierto-icon.svg", "/assets/ojo-abierto-w-icon.svg", "/assets/ojo-cerrado-icon.svg", "/assets/ojo-cerrado-w-icon.svg", "/assets/ojo.svg", "/assets/operaciones-d-icon.svg", "/assets/operaciones-flash.svg", "/assets/operaciones-icon.svg", "/assets/options.svg", "/assets/otroDestino.jpg", "/assets/over.svg", "/assets/paga-online.svg", "/assets/pagar-celular-icon.svg", "/assets/pagar-cred-tarj.svg", "/assets/pagar-h-icon.svg", "/assets/pagar-servicios.svg", "/assets/pagar-serviciosM.svg", "/assets/para-ti-d-icon.svg", "/assets/para-ti-icon.svg", "/assets/para-ti-notificacion-icon.svg", "/assets/parati-bien.svg", "/assets/perfil-user.svg", "/assets/person-dog.svg", "/assets/person-dog1.svg", "/assets/pig-border-draw.svg", "/assets/pig-icon.svg", "/assets/pizza-icon-principal.svg", "/assets/plin-contact.svg", "/assets/productosmas.svg", "/assets/productosmas1.svg", "/assets/promos-plin.svg", "/assets/qr-inicio-icon.svg", "/assets/qr-p-icon.svg", "/assets/qr-w-icon.svg", "/assets/qr.png", "/assets/qr.svg", "/assets/qrinter-g-icon.svg", "/assets/qrinter-icon.svg", "/assets/question.svg", "/assets/recarga-cel.svg", "/assets/retiro-sin-tarjeta-icon.svg", "/assets/saldo-disponible-icon.svg", "/assets/searchmovs.svg", "/assets/selector-soles-cerdito.jpg", "/assets/selector-soles-slider.png", "/assets/servicios-h-icon.svg", "/assets/servicios-icon.svg", "/assets/servicios-p-icon.svg", "/assets/subir-qr-icon.svg", "/assets/sweetAlert.js", "/assets/tarjeta-mis-inversiones-alternativa.png", "/assets/tarjeta-mis-inversiones.png", "/assets/techo-icon-main.svg", "/assets/telegram-u-icon.svg", "/assets/telegram.svg", "/assets/tipo-moneda.svg", "/assets/token-bien.svg", "/assets/transbcp.svg", "/assets/transf-dinero.svg", "/assets/transf-dineroM.svg", "/assets/transferencias-icon.svg", "/assets/transferir-bien.svg", "/assets/transporte-p-icon.svg", "/assets/triab.svg", "/assets/triar.svg", "/assets/ubicanos-bien.svg", "/assets/ubicar-un-cajero-icon.svg", "/assets/uncss.css", "/assets/yape-logo-promo.svg", "/assets/yape.svg", "/assets/yapea-servicios.svg", "/assets/yapechek.json", "/icon.png"];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Cache one by one so a single missing file never breaks installation.
    for (const url of APP_SHELL) {
      try { await cache.add(new Request(url, {cache:'reload'})); } catch (_) {}
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        if (fresh && fresh.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put('/index.html', fresh.clone()).catch(()=>{});
        }
        return fresh;
      } catch (_) {
        return (await caches.match(req)) || (await caches.match('/index.html')) || (await caches.match('/'));
      }
    })());
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const fresh = await fetch(req);
        if (fresh && fresh.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(req, fresh.clone()).catch(()=>{});
        }
        return fresh;
      } catch (_) {
        return cached || Response.error();
      }
    })());
    return;
  }

  // External libraries/fonts: network first, cached fallback after first successful load.
  event.respondWith((async () => {
    try {
      const fresh = await fetch(req);
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, fresh.clone()).catch(()=>{});
      return fresh;
    } catch (_) {
      return (await caches.match(req)) || Response.error();
    }
  })());
});

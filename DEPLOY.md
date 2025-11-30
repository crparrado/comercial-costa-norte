---
description: Guía para desplegar la aplicación en Railway y conectar el dominio .cl
---

# Despliegue a Producción (Railway)

¡Tu código ya está en GitHub! Ahora solo falta ponerlo en línea.

**Repositorio:** [https://github.com/crparrado/comercial-costa-norte](https://github.com/crparrado/comercial-costa-norte)

## 1. Desplegar en Railway

1.  Ve a [Railway.app](https://railway.app) y crea una cuenta (entra con GitHub).
2.  Haz clic en **"New Project"** -> **"Deploy from GitHub repo"**.
3.  Selecciona tu repositorio: `comercial-costa-norte`.
4.  Railway detectará automáticamente el `Dockerfile` y comenzará a construir tu sitio.
5.  Espera unos minutos a que termine el despliegue.

## 2. Conectar tu Dominio (.cl)

1.  En el panel de tu proyecto en Railway, ve a **Settings** -> **Domains**.
2.  Haz clic en **"Custom Domain"** y escribe `www.comercialcostanorte.cl`.
3.  Railway te dará un registro DNS (probablemente un `CNAME`).
    *   **Type**: `CNAME`
    *   **Name**: `www`
    *   **Value**: `cname.railway.app` (o el valor que te den).

4.  **Ve a donde compraste tu dominio** (ej: NIC Chile, GoDaddy, o tu hosting actual).
5.  Busca la zona de **DNS**.
6.  Agrega el registro CNAME que te dio Railway.
7.  Espera a que se propaguen los cambios.

¡Listo! Tu sitio estará corriendo en Railway con tu dominio propio.

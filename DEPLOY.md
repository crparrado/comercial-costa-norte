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

## 2. Conectar tu Dominio (NIC Chile + Cloudflare)

Como tienes el dominio en **NIC Chile**, usaremos **Cloudflare** para gestionar los DNS (es gratis y muy rápido).

### Paso A: Configurar Cloudflare
1.  Crea una cuenta en [Cloudflare.com](https://www.cloudflare.com).
2.  Haz clic en **"Add a Site"** y escribe `comercialcostanorte.cl`.
3.  Selecciona el **Plan Free** (abajo del todo).
4.  Cloudflare escaneará tus DNS. Dale a "Continue".
5.  Cloudflare te dará dos **Nameservers** (ej: `bob.ns.cloudflare.com` y `lola.ns.cloudflare.com`). **Cópialos**.

### Paso B: Configurar NIC Chile
1.  Entra a [NIC.cl](https://www.nic.cl) con tu cuenta.
2.  Selecciona tu dominio `comercialcostanorte.cl`.
3.  Busca la sección **"Servidores de Nombre" (DNS)**.
4.  Borra los que haya y pega los dos que te dio Cloudflare.
5.  Guarda los cambios. (Esto puede tardar desde 1 hora hasta 24 horas en propagarse).

### Paso C: Apuntar a Railway
1.  Vuelve a **Cloudflare** -> Sección **DNS**.
2.  Agrega un registro:
    *   **Type**: `CNAME`
    *   **Name**: `www`
    *   **Target**: `cname.railway.app` (o el valor que te dio Railway en Settings > Domains).
    *   **Proxy status**: Puedes dejarlo en "Proxied" (Nube naranja) para tener HTTPS gratis de Cloudflare.
3.  Agrega otro registro para la raíz (opcional, para que entre sin www):
    *   **Type**: `CNAME`
    *   **Name**: `@`
    *   **Target**: `cname.railway.app` (o el mismo valor de antes).

### Paso D: Verificar en Railway
1.  En Railway, Settings > Domains, asegúrate que esté agregado `www.comercialcostanorte.cl`.
2.  Cuando los tickets de verificación se pongan verdes, ¡tu sitio estará online!

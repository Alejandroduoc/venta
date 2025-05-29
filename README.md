# API de Ventas

Esta API permite registrar ventas en una base de datos MySQL.

## Endpoints

### Crear una venta

- **URL:** `/api/ventas`
- **Método:** `POST`
- **Descripción:** Registra una nueva venta.

#### Cuerpo de la solicitud (JSON)

```json
{
  "codigo_producto": "string",
  "cantidad": 1,
  "precio_venta": 100.50,
  "fecha_venta": "YYYY-MM-DD"
}
```

#### Respuestas

- **201 Created**
  ```json
  {
    "message": "Sale created successfully",
    "saleId": 1
  }
  ```
- **400 Bad Request**
  ```json
  {
    "message": "Missing required fields"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Error creating sale",
    "error": {}
  }
  ```

## Variables de entorno

Configura las siguientes variables en tu archivo `.env`:

- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `DB_PORT`
- `APP_HOST_PORT`
- `PMA_HOST_PORT`

## Ejecución

1. Instala dependencias:
   ```sh
   npm install
   ```
2. Compila el proyecto:
   ```sh
   npm run build
   ```
3. Inicia el servidor:
   ```sh
   npm start
   ```

O usa Docker Compose:
```sh
docker-compose up --build
```

## Acceso rápido

- API: `http://localhost:3001/api/ventas`
- phpMyAdmin: `http://localhost:8081`

---

> Consulta el archivo [src/controllers/ventas.controller.ts](src/controllers/ventas.controller.ts) para ver la lógica del endpoint.
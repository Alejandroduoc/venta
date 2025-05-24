-- /Users/ale/Documents/GitHub/venta/init.sql

-- El script de entrada de MySQL seleccionará automáticamente la base de datos
-- especificada por MYSQL_DATABASE (en tu caso, 'ferremas') antes de ejecutar
-- los scripts en /docker-entrypoint-initdb.d/.
-- Sin embargo, puedes incluir 'USE ferremas;' si quieres ser explícito.
-- USE ferremas;

CREATE TABLE IF NOT EXISTS ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo_producto VARCHAR(255) NOT NULL,
    cantidad INT NOT NULL,
    precio_venta DECIMAL(10, 2) NOT NULL,
    fecha_venta DATE NOT NULL, -- Almacena la fecha de la venta proporcionada
    fecha_actual DATETIME NOT NULL -- Almacena la fecha y hora en que se registró la venta en el sistema
);

-- Puedes añadir aquí la creación de otras tablas o inserciones de datos iniciales.
-- Ejemplo: CREATE TABLE IF NOT EXISTS productos (...);
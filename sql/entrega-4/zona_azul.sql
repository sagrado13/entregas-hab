use zona_azul;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellidos VARCHAR(50),
    dni VARCHAR(9),
    email VARCHAR(50),
    movil VARCHAR(9),
    numero_cuenta VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS coches (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    matricula VARCHAR(10),
    tipo ENUM('coche', 'moto', 'furgoneta'),
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

CREATE TABLE IF NOT EXISTS zonas_azules (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    hora_inicio DATETIME,
    hora_fin DATETIME,
    precio_minuto DECIMAL(4, 2),
    limite_tiempo INT,
    observaciones VARCHAR(300)
);

CREATE TABLE IF NOT EXISTS registros (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tiempo INT,
    fecha_entrada DATETIME,
    fecha_salida DATETIME,
    multa DECIMAL(4, 2),
    fecha_reclamacion DATETIME,
    estado VARCHAR(50),
    mensaje VARCHAR(100),
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

CREATE TABLE coche_zona_azul_registro (
    id_coche INT UNSIGNED,
    FOREIGN KEY (id_coche) REFERENCES coches (id),
	id_zona_azul INT UNSIGNED,
    FOREIGN KEY (id_zona_azul) REFERENCES zonas_azules (id),
    id_registro INT UNSIGNED,
    FOREIGN KEY (id_registro) REFERENCES registros (id),
    PRIMARY KEY (id_coche, id_zona_azul, id_registro)
);

SET FOREIGN_KEY_CHECKS = 1;
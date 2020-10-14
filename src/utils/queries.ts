const queries = {
    SIGN_UP: `INSERT INTO usuario (email_usuario, clave_usuario) VALUES ($1, $2) RETURNING *`,
    GET_PASSWORD: `SELECT clave_usuario FROM usuario WHERE email_usuario = $1`,
    CHECK_USER: `SELECT email_usuario FROM usuario WHERE email_usuario = $1`,
    
    GET_PLAYER: `SELECT * FROM jugador WHERE id_jugador = $1`,
    GET_PLAYERS: `SELECT * FROM jugador`,
    CREATE_PLAYER: `INSERT INTO jugador (nombre_jugador, edad_jugador, pie_jugador, fecha_jugador, altura_jugador, salario_jugador, dorsal_jugador, id_seleccion, id_club) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    UPDATE_PLAYER: `UPDATE jugador SET nombre_jugador = $1, edad_jugador = $2, pie_jugador = $3, fecha_jugador = $4, altura_jugador = $5, salario_jugador = $6, dorsal_jugador = $7, id_seleccion = $8, id_club = $9 WHERE id_jugador = $10 RETURNING *`,
    DELETE_PLAYER: `DELETE FROM jugador WHERE id_jugador = $1`,
    
    GET_POSITION: `SELECT * FROM posicion WHERE id_posicion = $1`,
    GET_POSITIONS: `SELECT * FROM posicion`,
    CREATE_POSITION: `INSERT INTO posicion (nombre_posicion) VALUES ($1) RETURNING *`,
    UPDATE_POSITION: `UPDATE posicion SET nombre_posicion = $1 WHERE id_posicion = $2 RETURNING *`,
    DELETE_POSITION: `DELETE FROM posicion WHERE id_posicion = $1`,
    
    GET_PLAYER_POSITION: `SELECT * FROM jugador_posicion WHERE id_jugador_posicion = $1`,
    GET_PLAYER_POSITIONS: `SELECT * FROM jugador_posicion`,
    CREATE_PLAYER_POSITION: `INSERT INTO jugador_posicion (id_posicion, id_jugador) VALUES ($1, $2) RETURNING *`,
    UPDATE_PLAYER_POSITION: `UPDATE jugador_posicion SET id_posicion = $1, id_jugador = $2 WHERE id_jugador_posicion = $3 RETURNING *`,
    DELETE_PLAYER_POSITION: `DELETE FROM jugador_posicion WHERE id_jugador_posicion = $1`,
    
    GET_PLAYER_NATIONALITY: `SELECT * FROM jugador_nacionalidad WHERE id_jugador_nacionalidad = $1`,
    GET_PLAYER_NATIONALITIES: `SELECT * FROM jugador_nacionalidad`,
    CREATE_PLAYER_NATIONALITY: `INSERT INTO jugador_nacionalidad (id_jugador, id_pais) VALUES ($1, $2) RETURNING *`,
    UPDATE_PLAYER_NATIONALITY: `UPDATE jugador_nacionalidad SET id_jugador = $1, id_pais = $2 WHERE id_jugador_nacionalidad = $3 RETURNING *`,
    DELETE_PLAYER_NATIONALITY: `DELETE FROM jugador_nacionalidad WHERE id_jugador_nacionalidad = $1`,

    GET_CITY: `SELECT * FROM ciudad WHERE id_ciudad = $1`,
    GET_CITIES: `SELECT * FROM ciudad`,
    CREATE_CITY: `INSERT INTO ciudad (nombre_ciudad, poblacion_ciudad, estado_ciudad, id_pais) VALUES ($1, $2, $3, $4) RETURNING *`,
    UPDATE_CITY: `UPDATE ciudad SET nombre_ciudad = $1, poblacion_ciudad = $2, estado_ciudad = $3, id_pais = $4 WHERE id_ciudad = $5 RETURNING * `,
    DELETE_CITY: `DELETE FROM ciudad WHERE id_ciudad = $1`,
    
    GET_COUNTRY: `SELECT * FROM pais WHERE id_pais = $1`,
    GET_COUNTRIES: `SELECT * FROM pais`,
    CREATE_COUNTRY: `INSERT INTO pais (nombre_pais, continente_pais) VALUES ($1, $2) RETURNING *`,
    UPDATE_COUNTRY: `UPDATE pais SET nombre_pais = $1, continente_pais = $2 WHERE id_pais = $3 RETURNING *`,
    DELETE_COUNTRY: `DELETE FROM pais WHERE id_pais = $1`,

    GET_LEAGUE: `SELECT * FROM liga WHERE id_liga = $1`,
    GET_LEAGUES: `SELECT * FROM liga`,
    CREATE_LEAGUE: `INSERT INTO liga (cantidad_equipos, nombre_liga, id_pais) VALUES ($1, $2, $3) RETURNING *`,
    UPDATE_LEAGUE: `UPDATE liga SET cantidad_equipos = $1, nombre_liga = $2, id_pais = $3 WHERE id_liga = $4 RETURNING *`,
    DELETE_LEAGUE: `DELETE FROM liga WHERE id_liga = $1`
};

export default queries;
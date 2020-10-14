const queries = {
    SIGN_UP: `INSERT INTO usuario (email_usuario, clave_usuario) VALUES ($1, $2) RETURNING *`,
    GET_PASSWORD: `SELECT clave_usuario FROM usuario WHERE email_usuario = $1`,
    CHECK_USER: `SELECT email_usuario FROM usuario WHERE email_usuario = $1`,
    
    CREATE_PLAYER: `INSERT INTO jugador (nombre_jugador, edad_jugador, pie_jugador, fecha_jugador, altura_jugador, dorsal_jugador, id_seleccion, id_club) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    GET_PLAYERS: `SELECT * FROM jugador`,
    GET_PLAYER: `SELECT * FROM jugador WHERE id_jugador = $1`,
    UPDATE_PLAYER: `UPDATE jugador SET nombre_jugador = $1, edad_jugador = $2, pie_jugador = $3, fecha_jugador = $4, altura_jugador = $5, dorsal_jugador = $6, id_seleccion = $7, id_club = $8 WHERE id_jugador = $9 RETURNING *`,
    DELETE_PLAYER: `DELETE FROM jugador WHERE id_jugador = $1`,
    
    CREATE_POSITION: `INSERT INTO posicion (nombre_posicion) VALUES ($1) RETURNING *`,
    GET_POSITIONS: `SELECT * FROM posicion`,
    GET_POSITION: `SELECT * FROM posicion WHERE id_posicion = $1`,
    UPDATE_POSITION: `UPDATE posicion SET nombre_posicion = $1 RETURNING *`,
    DELETE_POSITION: `DELETE FROM posicion WHERE id_posicion = $1`,
    
    CREATE_PLAYER_POSITION: `INSERT INTO jugador_posicion (id_posicion, id_jugador) VALUES ($1, $2) RETURNING *`,
    GET_PLAYER_POSITIONS: `SELECT * FROM jugador_posicion`,
    GET_PLAYER_POSITION: `SELECT * FROM jugador_posicion WHERE id_jugador_posicion = $1`,
    UPDATE_PLAYER_POSITION: `UPDATE jugador_posicion SET id_posicion = $1, id_jugador = $2 RETURNING *`,
    DELETE_PLAYER_POSITION: `DELETE FROM jugador_posicion WHERE id_jugador_posicion = $1`,
    
    CREATE_PLAYER_NATIONALITY: `INSERT INTO jugador_nacionalidad (id_jugador, id_pais) VALUES ($1, $2) RETURNING *`,
    GET_PLAYER_NATIONALITIES: `SELECT * FROM jugador_nacionalidad`,
    GET_PLAYER_NATIONALITY: `SELECT * FROM jugador_nacionalidad WHERE id_jugador_nacionalidad = $1`,
    UPDATE_PLAYER_NATIONALITY: `UPDATE jugador_nacionalidad SET id_jugador = $1, id_pais = $2 RETURNING *`,
    DELETE_PLAYER_NATIONALITY: `DELETE FROM jugador_nacionalidad WHERE id_jugador_nacionalidad = $1`

    
};

export default queries;
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
    DELETE_LEAGUE: `DELETE FROM liga WHERE id_liga = $1`,

    GET_CLUB: `SELECT * FROM club WHERE id_club = $1`,
    GET_CLUBS: `SELECT * FROM club`,
    CREATE_CLUB: `INSERT INTO club (nombre_club, propietario_club, estadio_club, id_director_tecnico, id_ciudad) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    UPDATE_CLUB: `UPDATE club SET nombre_club = $1, propietario_club = $2, estadio_club = $3, id_director_tecnico = $4, id_ciudad = $5 WHERE id_club = $6 RETURNING *`,
    DELETE_CLUB: `DELETE FROM club WHERE id_club = $1`,

    GET_NATIONAL: `SELECT * FROM seleccion WHERE id_seleccion = $1`,
    GET_NATIONALS: `SELECT * FROM seleccion`,
    CREATE_NATIONAL: `INSERT INTO seleccion (nombre_seleccion, id_director_tecnico) VALUES ($1, $2) RETURNING *`,
    UPDATE_NATIONAL: `UPDATE seleccion SET nombre_seleccion = $1, id_director_tecnico = $2 WHERE id_seleccion = $3 RETURNING *`,
    DELETE_NATIONAL: `DELETE FROM seleccion WHERE id_seleccion = $1`,

    GET_COMPETITION: `SELECT * FROM competicion WHERE id_competicion = $1`,
    GET_COMPETITIONS: `SELECT * FROM competicion`,
    CREATE_COMPETITION: `INSERT INTO competicion (nombre_competicion) VALUES ($1) RETURNING *`,
    UPDATE_COMPETITION: `UPDATE competicion SET nombre_competicion = $1 WHERE id_competicion = $2 RETURNING *`,
    DELETE_COMPETITION: `DELETE FROM competicion WHERE id_competicion = $1`,

    GET_CLUB_COMPETITION: `SELECT * FROM club_competicion WHERE id_club_competicion = $1`,
    GET_CLUB_COMPETITIONS: `SELECT * FROM club_competicion`,
    CREATE_CLUB_COMPETITION: `INSERT INTO club_competicion (id_club, id_competicion) VALUES ($1, $2) RETURNING *`,
    UPDATE_CLUB_COMPETITION: `UPDATE club_competicion SET id_club = $1, id_competicion = $2 RETURNING *`,
    DELETE_CLUB_COMPETITION: `DELETE FROM club_competicion WHERE id_club_competicion = $1`,

    GET_NATIONAL_COMPETITION: `SELECT * FROM seleccion_competicion WHERE id_seleccion_competicion = $1`,
    GET_NATIONAL_COMPETITIONS: `SELECT * FROM seleccion_competicion`,
    CREATE_NATIONAL_COMPETITION: `INSERT INTO seleccion_competicion (id_seleccion, id_competicion) VALUES ($1, $2) RETURNING *`,
    UPDATE_NATIONAL_COMPETITION: `UPDATE seleccion_competicion SET id_seleccion = $1, id_competicion = $2 WHERE id_seleccion_competicion = $3 RETURNING *`,
    DELETE_NATIONAL_COMPETITION: `DELETE FROM seleccion_competicion WHERE id_seleccion_competicion = $1`,

    GET_MATCH: `SELECT * FROM partido WHERE id_partido = $1`,
    GET_MATCHES: `SELECT * FROM partido`,
    CREATE_MATCH: `INSERT INTO partido (fecha_partido) VALUES ($1) RETURNING *`,
    UPDATE_MATCH: `UPDATE partido SET fecha_partido = $1 WHERE id_partido = $2 RETURNING *`,
    DELETE_MATCH: `DELETE FROM partido WHERE id_partido = $1`,

    GET_CLUB_MATCH: `SELECT * FROM partido_club WHERE id_partido_club = $1`,
    GET_CLUB_MATCHES: `SELECT * FROM partido_club`,
    CREATE_CLUB_MATCH: `INSERT INTO partido_club (resultado_partido_club, id_partido, id_club_competicion_local, id_club_competicion_visitante) VALUES ($1, $2, $3, $4) RETURNING *`,
    UPDATE_CLUB_MATCH: `UPDATE partido_club SET resultado_partido_club = $1, id_partido = $2, id_club_competicion_local = $3, id_club_competicion_visitante = $4 WHERE id_partido_club = $5 RETURNING *`,
    DELETE_CLUB_MATCH: `DELETE FROM partido_club WHERE id_partido_club = $1`,

    GET_NATIONAL_MATCH: `SELECT * FROM partido_seleccion WHERE id_partido_seleccion = $1`,
    GET_NATIONAL_MATCHES: `SELECT * FROM partido_seleccion`,
    CREATE_NATIONAL_MATCH: `INSERT INTO partido_seleccion (resultado_partido_seleccion, id_partido, id_seleccion_competicion_local, id_seleccion_competicion_visitante) VALUES ($1, $2, $3, $4) RETURNING *`,
    UPDATE_NATIONAL_MATCH: `UPDATE partido_seleccion SET resultado_partido_seleccion = $1, id_partido = $2, id_seleccion_competicion_local = $3, id_seleccion_competicion_visitante = $4 WHERE id_partido_seleccion = $5 RETURNING *`,
    DELETE_NATIONAL_MATCH: `DELETE FROM partido_seleccion WHERE id_partido_seleccion = $1`
};

export default queries;
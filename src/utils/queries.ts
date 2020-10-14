const queries = {
    SIGN_UP: `INSERT INTO usuario (email_usuario, clave_usuario) VALUES ($1, $2) RETURNING *`,
    GET_PASSWORD: `SELECT clave_usuario FROM usuario WHERE email_usuario = $1`,
    CHECK_USER: `SELECT email_usuario FROM usuario WHERE email_usuario = $1`
};

export default queries;
const queries = {
    SIGN_UP: `INSERT INTO usuario (email_usuario, clave_usuario) VALUES ($1, $2) RETURNING *`
};

export default queries;
const auth = async (req, res, next) => {
    const headers = req.headers
    const authHeader = req.headers.authorization
    next()
}
export default auth
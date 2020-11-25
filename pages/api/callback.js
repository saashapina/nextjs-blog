import auth0 from '../../utils/auth0'

export default async function Callback(req, res) {
    try {
        await auth0.handleCallback(req, res, {});
    }
    
    catch (error) {
        console.log(error)
        res.status(error.status || 500).end(error.message)
    }
}
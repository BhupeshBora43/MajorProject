import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function AuthWrapper({ children }) {
    const { isLoggedIn } = useSelector((state) => state.auth);
    if (!isLoggedIn) return (
        <Navigate to="/login"/>
    )
    return children
}

export default AuthWrapper

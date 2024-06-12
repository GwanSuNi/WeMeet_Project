import LoginComponent from "../components/auth/LoginComponent";
import JoinComponent from "../components/auth/JoinComponent";

const AuthenticationRoutes = [
    {
        path: '/login',
        children: [
            {
                path: '',
                element: <LoginComponent/>
            },
        ]
    },
    {
        path: 'signup',
        element: <JoinComponent/>
    }
];

export default AuthenticationRoutes;
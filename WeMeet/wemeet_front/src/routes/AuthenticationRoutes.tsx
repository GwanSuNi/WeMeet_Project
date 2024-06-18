import Login from "../components/auth/Login";
import SignUpMethod, {
    SetBirthDate,
    SetBloodType,
    SetEmail,
    SetNickname,
    SignUpConfirm
} from "../components/auth/SignUpPage";

const AuthenticationRoutes = [
    {
        path: '/login',
        children: [
            {
                path: '',
                element: <Login/>
            },
        ]
    },
    {
        path: 'signup',
        children: [
            {
                path: '',
                element: <SignUpMethod/>
            },
            {
                path: 'email',
                element: <SetEmail/>
            },
            {
                path: 'nickname',
                element: <SetNickname/>
            },
            {
                path: 'birthDate',
                element: <SetBirthDate/>
            },
            {
                path: 'bloodType',
                element: <SetBloodType/>
            },
            {
                path: 'confirm',
                element: <SignUpConfirm/>
            }
        ]
    }
];

export default AuthenticationRoutes;
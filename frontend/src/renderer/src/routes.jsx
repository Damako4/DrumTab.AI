import ProgressPage from "./pages/ProgressPage";
import UploadPage from "./pages/UploadPage";

const routes = [
    {
        path: '/',
        element: <UploadPage />
    },
    {
        path: '/progress',
        element: <ProgressPage />
    }
]

export default routes;
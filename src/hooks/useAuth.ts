import auth from '@/services/auth.service';

const useAuth = () => auth.getUser();

export default useAuth;

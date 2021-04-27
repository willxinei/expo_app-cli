import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface User {
  id: string;
  name: string;
  telefone: number;
  email: string;
  avatar_url: string;
}

interface SignInCred {
  email: string;
  password: string;
}

interface AuthContexData {
  user: User;
  loading: boolean;
  signIn(credential: SignInCred): Promise<void>;
  signOut(): void;
  updateUser(user: User): Promise<void>;
}

interface AuthState {
  token: string;
  user: User;
}

export const AuthContext = createContext<AuthContexData>({} as AuthContexData);

export const AuthProvider: React.FC = ({children}) => {
  const [data, seData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@will:token',
        '@will:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        seData({token: token[1], user: JSON.parse(user[1])});
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({email, password}) => {
    const response = await api.post('session', {
      email,
      password,
    });

    const {token, user} = response.data;

    await AsyncStorage.multiSet([
      ['@will:token', token],
      ['@will:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    seData({token, user});
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@will:user', '@will:token']);

    seData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@will:user', JSON.stringify(user));

      seData({
        token: data.token,
        user,
      });
    },
    [seData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{user: data.user, loading, signIn, signOut, updateUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContexData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used with ..');
  }

  return context;
}

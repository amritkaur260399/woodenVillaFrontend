import { useMutation } from "@tanstack/react-query";

import {loginn} from '@/services/Login/index';

export function useLogin() {
    return useMutation((payload: any) => loginn(payload));
  }
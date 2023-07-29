import { useMutation } from "@tanstack/react-query";

import {resendOtp, verifyOtp} from '@/services/Otp/index';

export function useOtp() {
    return useMutation((payload: any) => verifyOtp(payload));
  }
  export function useSendotp() {
    return useMutation((payload: any) => resendOtp(payload));
  }
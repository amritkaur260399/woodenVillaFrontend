import { useMutation } from "@tanstack/react-query";
import { signup } from "@/services/Signup/index";

export function useSign() {
    return useMutation((payload: any) => signup(payload));
  }
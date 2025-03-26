import { toast } from "sonner";

export const showSuccessToast = (message: string, description?: string) => {
  toast.success(message, {
    description
  });
};

export const showErrorToast = (message: string, description?: string) => {
  toast.error(message, {
    description
  });
};

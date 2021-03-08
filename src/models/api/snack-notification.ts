
import { VariantType } from "notistack";

interface SnackNotification {
    message: string;
    amountNotification?: number;
    variant: VariantType;
}

export type { SnackNotification };

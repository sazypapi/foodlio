import { useActionState, useEffect } from "react";
import { toast } from "sonner";
const initialState = { message: "" };

/* eslint-disable @typescript-eslint/no-explicit-any */
function ActionButton({
  action,
  clerkUserId,
  label,
  className,
}: {
  action: (prevState: any, formData: FormData) => Promise<{ message: string }>;
  clerkUserId: string;
  label: string;
  className: string;
}) {
  const [state, formAction, isPending] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) toast(state.message);
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="clerkId" value={clerkUserId} />
      <button
        type="submit"
        disabled={isPending}
        className={`text-sm px-3 py-1.5 rounded-sm transition-colors duration-200 disabled:opacity-50 ${className}`}
      >
        {isPending ? "Please wait..." : label}
      </button>
    </form>
  );
}
export default ActionButton;

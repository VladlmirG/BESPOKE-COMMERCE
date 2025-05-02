"use client";

import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-bluey text-pinky p-2 rounded-md cursor-pointer disabled:bg-hovr disabled:cursor-not-allowed max-w-96 hover:bg-pinky hover:text-bluey transition duration-500"
    >
      {pending ? "Updating..." : "Update Info"}
    </button>
  );
};

export default UpdateButton;

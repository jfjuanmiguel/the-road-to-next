import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <LoaderCircle className="h-16 w-16 animate-spin" />
    </div>
  );
};

export { Spinner };

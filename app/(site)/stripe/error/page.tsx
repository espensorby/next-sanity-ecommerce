import { X } from 'lucide-react';

export default function ErrorStripe() {
  return (
    <div className="h-screen">
      <div className="mx-auto mt-42 md:max-w-[50vw]"></div>
      <X className="w-16 h-16 mx-auto my-6 text-red-600 " />
      <div className="text-center">
        <h3 className="text-base text-center font-semibold text-gray-900 md:text-2xl">
          Payment Failed
        </h3>
        <p className="my-2 text-gray-600">Please try again later.</p>
      </div>
    </div>
  );
}

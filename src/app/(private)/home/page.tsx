import Image from "next/image";
import NotificationBell from "../../../../public/notification_bell.png";

export default function Home() {
  return (
    <section className="flex h-[100svh] w-full overflow-hidden bg-gray-200">
      <div className="px-50 py-8 pt-12 rounded-full">
        <h3 className="text-4xl font-semibold text-gray-600 tracking-tight leading-tight">Bienvenido, Croissant</h3>
      </div>
     <div className="flex justify-between items-center">
        <Image
          src={NotificationBell}
          alt="Notification Bell"
          width={50}
          height={50}
          className="w-[10svw] select-none"
          priority
        />
      </div>
    </section>
  );
}



import Image from "next/image";
import visualizer from "../../../../public/mockup_acc.png";
export default function Reservaciones() {
  return (
    <div className="relative w-full min-h-full">
      <Image src={visualizer} alt="mapa accenture" className="py-20 px-40" />
    </div>
  );
}

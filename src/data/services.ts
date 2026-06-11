import {
  Laptop,
  Monitor,
  HardDrive,
  MemoryStick,
  ShieldCheck,
  Settings,
} from "lucide-react";

export const services = [
  {
    title: "Servis Laptop",
    description: "Perbaikan laptop mati, lemot, overheat, dan berbagai kerusakan lainnya.",
    icon: Laptop,
  },
  {
    title: "Servis Komputer",
    description: "Diagnosa dan perbaikan komputer untuk kebutuhan rumah maupun kantor.",
    icon: Monitor,
  },
  {
    title: "Upgrade SSD",
    description: "Meningkatkan kecepatan booting dan performa perangkat.",
    icon: HardDrive,
  },
  {
    title: "Upgrade RAM",
    description: "Membuat multitasking lebih lancar dan responsif.",
    icon: MemoryStick,
  },
  {
    title: "Pembersihan Virus",
    description: "Membersihkan malware, virus, dan ancaman keamanan lainnya.",
    icon: ShieldCheck,
  },
  {
    title: "Install Ulang & Software",
    description: "Windows, Office, Driver, dan aplikasi pendukung lainnya.",
    icon: Settings,
  },
];
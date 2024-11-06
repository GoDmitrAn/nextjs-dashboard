import { Comic_Neue, Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const comic = Comic_Neue({
  weight: "700",
  subsets: ["latin"],
  style: "italic",
});
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

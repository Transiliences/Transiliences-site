import "./globals.css";

export const metadata = {
  title: "Transiliences — Accompagner les transitions & les coopérations",
  description: "Transiliences accompagne les transitions territoriales, la coopération européenne, l’économie sociale et solidaire, la participation citoyenne et les démarches collectives."
};

export default function RootLayout({ children }) {
  return <html lang="fr"><body>{children}</body></html>;
}

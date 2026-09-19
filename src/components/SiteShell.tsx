import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteShell({
  children,
  overlay = false,
}: {
  children: React.ReactNode;
  overlay?: boolean;
}) {
  return (
    <>
      <Header overlay={overlay} />
      <div id="contenido" className="flex-1">
        {children}
      </div>
      <Footer />
    </>
  );
}

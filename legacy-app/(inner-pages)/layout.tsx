import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header1 menuClass="header-menu-area3" className="vs-header3" />

      {children}
      <section className="main-sec">
        <Contact />
        <Footer1 />
      </section>
    </>
  );
}

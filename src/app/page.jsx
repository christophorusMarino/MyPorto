import Image from "next/image";
import HeaderSection from "./component/mainPage/headerPage";
import ContentSection from "./component/mainPage/contentPage";

export default function Home() {
  return (
    <div>
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{
        background: "radial-gradient(600px at 1436px 69px, rgba(29, 78, 216, 0.15), transparent 80%)"
      }}>
      </div>
      <div className="font-sans mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md-py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <HeaderSection />
          <ContentSection />
        </div>
      </div>
    </div>
  );
}

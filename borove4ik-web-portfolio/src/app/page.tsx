import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/Hero"
import { ExperienceSection } from "@/components/sections/Experience"
import { Marquee } from "@/components/shared/Marquee"

// Остальные секции добавляй по мере готовности:
import { StackSection } from "@/components/sections/Stack"
import { ProjectsSection } from "@/components/sections/Projects"
// import { EducationSection } from "@/components/sections/Education"
// import { CertificationsSection } from "@/components/sections/Certifications"

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1. Hero — первый экран */}
        <HeroSection />

        <Marquee />
        
        {/* 2. Stack — технологии (раскомментируй когда сделаем) */}
        <StackSection />

        {/* 3. Projects — проекты */}
        <ProjectsSection />

        {/* 4. Experience — опыт работы */}
        <ExperienceSection />

        {/* 5. Education — образование */}
        {/* <EducationSection /> */}

        {/* 6. Certifications — сертификаты */}
        {/* <CertificationsSection /> */}
      </main>

      <Footer />
    </>
  )
}

export type EducationItem = {
  id: number
  institution: string
  degree: string
  field: string
  period: string
  logo: string
}

export type CertificationItem = {
  id: number
  issuer: string
  title: string
  period: string
  url?: string
}

export const education: EducationItem[] = [
  {
    id: 1,
    institution: "Higher School of Economics",
    degree: "Master's degree",
    field: "Civil and commercial law",
    period: "2018 – 2021",
    logo: '/images/hse-logo.png'
  },
  {
    id: 2,
    institution: "Peter the Great St.Petersburg Polytechnic University",
    degree: "Bachelor's degree",
    field: "Law",
    period: "2014 – 2018",
    logo: '/images/spbpolytech-logo.png'
  },
]

export const certifications: CertificationItem[] = [
  {
    id: 1,
    issuer: "Yandex Practicum",
    title: "Web Development",
    period: "Jan 2023 – Mar 2024",
    url: "https://drive.google.com/file/d/1LVKobGP2GxW9z_PXgXl-UQQuePDK6VBL/view",
  },
]

export type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Traveling around Russia",
    description:
      "A website about traveling around Russia – popular and little-known places worth visiting or moving to.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/borove4ik/russian-travel",
    demo: "https://borove4ik.github.io/russian-travel/index.html",
    image: "/images/projects/travel.png"
  },
  {
    id: 2,
    title: "Olmo Art & Music",
    description:
      "A personal website for a music artist. Includes a short bio, visuals, and a link to the featured track.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/borove4ik/olmo-art-music",
    demo: "https://borove4ik.github.io/olmo-art-music/",
    image: "/images/projects/olmo.png"
  },
  {
    id: 3,
    title: "Mesto",
    description:
      "Интерактивная веб-страница для публикации фотографий с возможностью ставить лайки, удалять фото и регистрировать пользователя.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/borove4ik/mesto",
    demo: "https://borove4ik.github.io/mesto/",
    image: "/images/projects/mesto.png"
  },
  {
    id: 4,
    title: "Tessera Mosaic School",
    description: "Website for Mosaic Courses that utilizes React and Django. It allows users to view available courses, book them, and access various other features.",
    tags: ["JavaScript", "React", "SCSS", "HTML", "Docker"],
    github: "https://github.com/ReneNorth/Mosaic-courses-website",
    demo: "https://tesseramosaic.art/",
    image: "/images/projects/mosaic.png"
  }
]

// Добавляй новые проекты по примеру выше.
// status: "live" — задеплоен, "wip" — в разработке, "archived" — архив

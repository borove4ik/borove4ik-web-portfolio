export type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  status: "live" | "wip" | "archived"
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Путешествие по России",
    description:
      "Сайт о путешествии по России — популярные и малоизвестные места, куда стоит съездить или переехать.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/borove4ik/russian-travel",
    demo: "https://borove4ik.github.io/russian-travel/index.html",
    status: "live",
  },
  {
    id: 2,
    title: "Rent System",
    description:
      "Система учёта аренды — панель управления для отслеживания арендаторов, объектов и платежей.",
    tags: ["JavaScript", "CSS"],
    github: "https://github.com/borove4ik/control-panel",
    status: "wip",
  },
  {
    id: 3,
    title: "Mesto",
    description:
      "Интерактивная веб-страница для публикации фотографий с возможностью ставить лайки, удалять фото и регистрировать пользователя.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/borove4ik/mesto",
    demo: "https://borove4ik.github.io/mesto/",
    status: "live",
  },
]

// Добавляй новые проекты по примеру выше.
// status: "live" — задеплоен, "wip" — в разработке, "archived" — архив

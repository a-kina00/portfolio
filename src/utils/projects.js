import mesto_bg from '../images/mesto.png'
import burger_bg from '../images/burger.png'
import cone_bg from '../images/cone.png'
import procharity_bg from '../images/procharity.png'

export const siteProjects = [
    {
        "id": "0",
        "title": "Mesto",
        "about": {
            "ru": "представить портфолио путешественника-фотографа. Создание блока с личной информацией о пользователе: аватар, никнейм; и блока с фотографиями, где другие пользователи могут делиться своими снимками и мемами. Реализована функциональность открытия/закрытия окон, валидация форм и добавление/удаление фотографий, добавленных самим пользователем.",
            "eng": "eng"
        },
        "technologies": ["HTML5", "Flexbox", "Grid", "BEM-Nested", "CSS", "JavaScript", "REST API", "Webpack", "Adaptive"],
        "background": mesto_bg,
        "gh": "https://github.com/a-kina00/mesto-project",
    },
    {
        "id": "1",
        "title": "Pro-Charity",
        "about": {
            "ru": "ProCharity - это место, где благотворительные фонды и волонтеры могут найти друг друга. Обновление страницы регистрации волонтеров и фондов, чтобы сделать ее интуитивно понятной, минимизировать риск ошибочной регистрации не в том кабинете. Обновление формы регистрации, формы заполнения личных данных волонтера, так чтобы этап заполнения был более приятный и менее утомительный для регистрирующегося. Повышение процента заполненности полей в профиле волонтера. Увеличение процента пользователей прошедших все этапы заполнения личных данных.",
            "eng": "eng"
        },
        "technologies": ["HTML5", "Flexbox", "Grid", "BEM-Nested", "CSS", "JavaScript", "REST API", "Webpack", "Tagify js", "Cropper js", "Adaptive"],
        "background": procharity_bg,
        "gh": "https://github.com/lucy2n/ProCharity-project",
    },
    {
        "id": "2",
        "title": "Stellar-Burger",
        "about": {
            "ru": "создать интерактивный сайт галлактической бургерной. Реализация блока с разнообразными наполнениями блюда, интерактивное меню для более удобного выбора желаемой категории ингредиента, создания конструктора для бургера с возможностью добавлять, сортировать и удалять ингредиенты по желанию.",
            "eng": "eng"
        },
        "technologies": ["HTML5", "Flexbox", "Grid", "BEM-Nested", "CSS", "React", "Webpack", "Dnd", "Redux"],
        "background": burger_bg,
        "gh": "https://github.com/a-kina00/react-stellar-burger",
        "gh_pages": "https://a-kina00.github.io/react-stellar-burger/"
    },
    {
        "id": "3",
        "title": "Cone",
        "about": {
            "ru": "",
            "eng": "eng"
        },
        "technologies": ["HTML5", "Flexbox", "CSS", "React", "Webpack", "Redux", "Three js fiber"],
        "background": cone_bg,
        "gh": "https://github.com/a-kina00/3Dcone",
        "gh_pages": "https://a-kina00.github.io/3Dcone/"
    },
]
export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Ecommerce",
    description:
      "Use Context API to manage the state. Use Firebase for authentication. Added page protection to prevent any unauthorized access. Used React Router to seamlessly navigate through tabs. Implemented the cart functionality.",
    link: "https://react-ecommerce-104c7.web.app/",
  },
  {
    title: "Expense Tracker",
    description:
      "Using Redux for state management. Light and dark mode functionalities. Addition of a premium feature if spending exceeds a predetermined threshold.",
    link: "https://expense-tracker-c2f34.web.app/",
  },
  {
    title: "Mail-Box",
    description:
      "Integrated react-draft-wysiwyg editor for composing a new email. User can read send and receive emails properly. Implemented seen and unseen functionality.",
    link: "https://mail-box-a393b.web.app/",
  },
  {
    title: "Abp News",
    description:
      "Use the News Data API for fetching news. Users can add news to their favorite lists. Users can filter news based on category. Search for news with a particular keyword. Read the entire news by clicking on the particular news.",
    link: "https://abpnews.netlify.app/",
  },
  {
    title: "To-do",
    description:
      "Created a simple todo application for adding, updating, and deleting tasks using Next Js and Mongo Db.",
    link: "https://github.com/roshani2022/ToDo.git",
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Data Research Analyst",
    place: "Instituto Politécnico de Bragança",
    year: "2021",
    description:
      "Contributed to R&D efforts by collecting and analyzing data using statistical tools. Collaborated closely with professors to bolster research initiatives and played a key role in publishing a scientific journal.",
    link: "https://www.researchgate.net/publication/363003998_Factors_Affecting_the_Adventure_Tourism_Development_Index_A_Worldwide_Analysis",
    skills: ["rstudio", "excel"],
  },
  {
    id: 2,
    title: "Teaching Assistant",
    place: "Ironhack Portugal",
    year: "2022 - 2023",
    description:
      "Assisting the lead instructor in teaching and refining students' technical abilities. Managed and guided students through their projects, developed software to streamline workflow and tasks, and actively contributed to the continuous development and updates of the course curriculum.",
    skills: ["python", "sql", "tableau", "streamlit", "flask", "gcp"],
  },
  {
    id: 3,
    title: "Freelancer",
    place: "Self-employed",
    year: "2023 - present",
    description:
      "Collaborated with a diverse clientele from various countries to provide data analysis solutions, optimizing their business operations and decision-making processes. Continuously explored and implemented a wide range of data analysis tools and techniques to tailor solutions to each client's unique needs.",
    skills: ["powerbi", "firebase", "azure", "GA4", "openai"],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Automated Email Sender",
    summary:
      "A web app built on Flask that automates the sending of personalized reservation emails to property owners.",
    image: "/images/projects/1.png",
    tag: ["All", "Automation"],
    header:
      "In collaboration with a Canadian property management and rental services company, I created an automated web application to enhance owner communication. The project aimed to provide property owners with weekly reservation updates for their units.",
    objective:
      "Develop a user-friendly solution that automates the process of notifying property owners about upcoming reservations, thereby strengthening ownercompany relationships.",
    solution:
      "I designed and implemented a Flask-based web app that seamlessly integrated with the company's operations. This app facilitated the automated dispatch of personalized reservation emails to property owners. The application was hosted on a dedicated domain using PythonAnywhere.",
    workflow: [
      {
        id:11,
        desc: "Data Integration : Integrated the latest reservation data from the company's Excel sheets as the basis for generating tailored notifications.",
        image: "AES1.png",
        width: "800",
        height: "500",
      },
      {
        id:12,
        desc: "Preview and Confirmation: Developed a dynamic preview of reservation information for each owner, allowing them to confirm before proceeding.",
        image: "AES2.png",
        width: "800",
        height: "500",
      },
      {
        id:13,
        desc: "Personalized Emails: Efficiently compiled and sent individualized email notifications containing reservation details specific to each owner's units.",
        image: "AES3.png",
        width: "800",
        height: "500",
      },
    ],
    closing:
      "By seamlessly connecting data management, automated email dispatch, and user-friendly previews, this solution significantly enhanced the company's communication efficiency and customer satisfaction. Property owners now receive timely, accurate, and tailored updates, fostering a sense of confidence and transparency in the management of their units",
  },
  {
    id: 2,
    title: "Data Viz Web App",
    summary:
      "Visualize data automatically extracted from Github using Streamlit and Plotly.",
    image: "/images/projects/2.png",
    tag: ["All", "Visualization"],
    github: "https://github.com/gladysmawarni/centralabs"
  },
  {
    id: 3,
    title: "Executable Automation",
    summary:
      "An automated solution that drastically reduces the time-consuming weekly data cleaning process.",
    image: "/images/projects/3.png",
    tag: ["All", "Automation"],
    header:
      "This project was commissioned by a UK-based client to automatize their data preparation and visualization pipeline, ultimately optimizing the decision-making process for stakeholders.",
    objective:
      "The core objective of this project was to design an automated solution that reduces the time-consuming weekly data cleaning process. Requirements: : Merge data from two Excel files to create acomprehensive dataset, Group data based on a designated column and apply intricate calculations to derive valuable insights,  Develop a robust solution capable of handling substantial datasets without performance degradation, even on machines without Python installed.",
    solution:
      "The solution crafted for this project involves an intuitively designed executable application, compatible with both Windows and Mac environments (distinct compilation for each platform).",
    workflow: [
      {
        id:31,
        desc: "User Input: Upon launching the application, users are greeted with an initial window. Here, the user select the requisite files, specify the most recent date, and even determine the historical data range they wish to include in the final processed dataset. This empowers users to automate the process to their specific needs",
        image: "EA1.png",
        width: "300",
        height: "300",
      },
      {
        id:32,
        desc: "Data Read Phase: After submission, a progress window appears, indicating that the application is reading and processing the data. ",
        image: "EA2.png",
        width: "500",
        height: "500",
      },
      {
        id:33,
        desc: "Confirmation and Processing: Once the data is ingested, a confirmation window displays the submitted file names and chosen parameters. Users can confidently initiate the data cleaning and transformation process by clicking the 'Process' button, while a visual progress bar keeps them informed about the ongoing task",
        image: "EA3.png",
        width: "500",
        height: "500",
      },
      {
        id:34,
        desc: "Completion Notification: Upon successful completion, a notification window confirms the task's finalization. It provides clear instructions about the saved dataset's location, conveniently named 'final_data' along with the current date, with extension ‘.xlsx’, and located in the application's directory.",
        image: "EA4.png",
        width: "500",
        height: "500",
      },
    ],
  },
  {
    id: 4,
    title: "Spotify Data Extraction",
    summary:
      "Streamline the process of identifying rising artists and promising tracks.",
    image: "/images/projects/4.png",
    tag: ["All", "Extraction"],
    header: "Designed for a UK-based client, this project aimed to revolutionize music label operations by simplifying the discovery of emerging artists and potential hit songs with exceptional market potential.",
    objective: "Streamline the process of identifying rising artists and promising tracks by incorporating specific parameters like beats per minute (bpm), maximum artist followers, minimum song play count, and allowable bpm range.",
    solution: "To uncover potential talents before they reached widespread acclaim, the project strategically harnessed the potency of Spotify's 'Fresh Finds' playlist. This playlist was employed as a foundational resource to pinpoint emerging artists and promising tracks. By leveraging a playlist as a foundation and utilizing input parameters stored in a text file, I crafted a script that interacted with the Spotify API. This script systematically accessed similar artists who met the specified criteria.",
    workflow: [
      {
        id:41,
        desc: "Spotting Similar Artists: The script initiated by pinpointing similar artists within the vast sea of 'Fresh Finds'. This step paved the way for further exploration.",
        image: "SPOT1.png",
        width: "800",
        height: "500",
      },
      {
        id:42,
        desc: "Gathering Insights: The script then delved deeper, gathering comprehensive artist data and their latest releases. This insight-rich data fueled our decision-making process.",
        image: "SPOT2.png",
        width: "800",
        height: "500",
      },
      {
        id:43,
        desc: "Crafting the Perfect Mix: Finally, it filtered out artists and tracks based on a medley of criteria—bpm, artist followers, and more.",
        image: "SPOT3.png",
        width: "800",
        height: "500",
      },
    ],
    closing: "Through this project, I harnessed the potency of Python and APIs to swiftly fetch essential data within minutes. This tool empowers my client to reclaim precious time previously spent manually hunting for emerging artists and potential hits. While there are various factors in predicting a song's hit potential, this project offers an excellent initial step in a comprehensive process. "
  },
  {
    id: 5,
    title: "PDF Data Extraction",
    summary:
      "Automatise the process of data extraction from PDF invoices to Excel.",
    image: "/images/projects/5.png",
    tag: ["All", "Extraction"],
    header:
      "This project was undertaken for a client based in Canada with a primary goal to significantly enhance the efficiency of extracting data from numerous PDF files and consolidating it into a single Excel file.",
    objective:
      "The primary objective of this project was to revolutionize the process of data extraction from PDF invoices to Excel, making it faster and more efficient. Requirements: Develop a web-based application capable of serving multiple users within the organization, The application should accept a zip file containing numerous PDF invoices and produce a single Excel file with each PDF's data represented in a row, Ensure compatibility with invoices in both English and French.",
    solution:
      "To fulfill these requirements, I conceptualized and executed a web application based on Flask, a robust web framework in Python. The application was designed to efficiently process zip files containing PDF invoices, extracting the pertinent data and compiling it into a well-organized Excel file. Hosting was facilitated through PythonAnywhere, providing a dedicated domain for seamless access. An integral aspect of the solution involved meticulous consideration of processing times, particularly when utilizing Tesseract, an OCR (Optical Character Recognition) tool, to extract data from PDF files. Given the web application environment, there was a potential for 'Request Timeout' errors when background tasks exceeded expected durations. To mitigate this, I employed asynchronous (Async) work, enabling background jobs to run uninterrupted, ensuring the web application remained responsive.",
    workflow: [
      {
        id:51,
        desc: "User Submission: Users access the web application and submit their zip files for processing.",
        image: "PDF1.png",
        width: "800",
        height: "500",
      },
      {
        id:52,
        desc: "Progress Monitoring: Upon submission, users are redirected to a 'waiting' page where they can monitor the progress of their task. This page provides realtime updates as the background task processes the PDF files within the zip archive.",
        image: "PDF2.png",
        width: "800",
        height: "500",
      },
      {
        id:53,
        desc: "Completion and Verification: Once the task is completed, users receive notifications regarding any potential errors with specific files. They can then proceed to download the resulting Excel file by clicking on a dedicated button.",
        image: "PDF3.png",
        width: "800",
        height: "500",
      },
    ],
    closing:
      "The successful execution of this project has led to a remarkable improvement in the efficiency of data extraction from PDF invoices to Excel, benefitting the client's entire organization. By seamlessly integrating OCR technology, a web-based environment, and meticulous attention to processing times, this solution exemplifies the commitment to innovation and efficiency in data management.",
  },
  {
    id: 6,
    title: "Pixel Art Game",
    summary: "A simple retro spaceship shooting game made using Pyxel.",
    image: "/images/projects/6.png",
    tag: ["All"],
    github: "https://github.com/gladysmawarni/spaceadventure"
  },
];

import s from "../img/User.jpg"

let state = {
    // Первый комонент
    posts: [{ 
            text: "Привет",
            id: 1,
            img: s,
            likes: 1861
        },
        {
            text: "гол",
            id: 2,
            img: s,
            likes: 33
        },
        {
            text: "рессентимент",
            id: 3,
            img: s,
            likes: 1612
        },
        {
            text: "Проверка",
            id: 3,
            img: s,
            likes: 1917
        }
    ],



    // Второй комонент
    dialogs_data:{
        
        data: [{
            name: "Валерий",
            id: 1
        },
        {
            name: "Денис",
            id: 2
        },
        {
            name: "Богдан",
            id: 3
        }
        ],

        messages: [{
            message: "Привет",
            id: 1
        },
        {
            message: "гол",
            id: 2
        },
        {
            message: "рессентимент",
            id: 3
        }
    ]

    }

};

export default state;


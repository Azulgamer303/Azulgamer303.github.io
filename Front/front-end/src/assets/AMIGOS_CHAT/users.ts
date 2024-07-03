
export interface User {
    id: number;
    name: string;
    picture: string;
}

export const users: User[] = [
    {
        id: 1,
        name: "CQuark", // main user
        picture: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 2,
        name: "FronteraFury",
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 3,
        name: "PixelProwler",
        picture: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 4,
        name: "PlayfulGamer",
        picture: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 5,
        name: "Orden Del Pixel",
        picture: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        id: 6,
        name: "Shade",
        picture: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        id: 7,
        name: "VirtualVoyagerX",
        picture: "https://randomuser.me/api/portraits/women/6.jpg",
    },
]

export const globalUsers = [
    {
        id: 9,
        username: "NeoNinja",
        isFriend: false,
        picture: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
        id: 10,
        username: "DigitalDynamo",
        isFriend: false,
        picture: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
        id: 11,
        username: "TechnoTrailblazer",
        isFriend: false,
        picture: "https://randomuser.me/api/portraits/women/9.jpg"
    }
]
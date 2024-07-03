export interface Group {
  name: string;
  picture: string;
  owner: string;
  participants: number;
}

export const groups: Group[] = [
  {
    name: "Liga de leyendas",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    owner: "PixelWarrior",
    participants: 10,
  },
  {
    name: "GameFusionPro",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    owner: "PlayfulGamer",
    participants: 8,
  },
  {
    name: "PixelProwler",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    owner: "PixelWarrior",
    participants: 6,
  },
];

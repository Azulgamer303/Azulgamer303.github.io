interface RandomUser {
  login: {
    username: string;
  };
  picture: {
    large: string;
  };
}

const getRandomUsersData = async (): Promise<
  { username: string; picture: string }[]
> => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const results: RandomUser[] = data.results;

    const usersData = results.map((user) => {
      return {
        username: user.login.username,
        picture: user.picture.large,
      };
    });

    return usersData;
  } catch (error) {
    console.error("Error fetching random user data:", error);
    return [];
  }
};

export default getRandomUsersData;

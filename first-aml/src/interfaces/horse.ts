interface Horse {
  id: string;
  name: string;
  profile: HorseProfile;
}

interface HorseProfile {
  favouriteFood: string;
  physical: {
    height: number;
    weight: number;
  };
}

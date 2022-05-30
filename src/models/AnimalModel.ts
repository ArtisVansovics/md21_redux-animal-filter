type Animal = {
  name: string;
  species: string;
  imgUrl: string;
}

export type Species = {
  speciesName: string;
  speciesTranslations: {
    eng: string;
    lv: string;
    rus: string;
  }
}

export default Animal;

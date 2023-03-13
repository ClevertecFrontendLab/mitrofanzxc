import { TCatalogData } from 'constants/constants.types';

export const handleSearch = (value: string, data: TCatalogData[]) => {
  const temporaryData: TCatalogData[] = JSON.parse(JSON.stringify(data));
  const filteredData = temporaryData.filter((element) =>
    element.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );

  return filteredData;
};

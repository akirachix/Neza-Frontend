
import { getFiles } from "../utilities/utils";
import { useEffect, useState } from "react";
interface FilesData {
  id: number;
  location: string;
  sources_of_water: number;
  proximity_to_industries: string;
  number_of_garages_in_area: number;
  proximity_to_dumpsite: number;
  presence_of_open_sewage: number;
  past_cases_of_lead_poisoning: number;
  women_and_children_population: number;
  file_hash: string;
    // lead_blood_levels:string,
}
const useGetFiles = () => {
  const [files, setFiles] = useState<FilesData[]>([]);
  useEffect(() => {
    (async () => {
      const fetchedFiles = await getFiles();
      const uniqueFiles = fetchedFiles.filter(
        (file: { file_hash: any; }, index: any, self: any[]) =>
          index === self.findIndex((f: { file_hash: any; }) => f.file_hash === file.file_hash)
      );
      setFiles(uniqueFiles);
    })();
  }, []);
  return { files };
};
export default useGetFiles;
import diares from "../../data/entries"
import { NonSensitiveDiaryEntry, DiaryEntry, NewDiaryEntry } from "../types";

const getEntries = (): DiaryEntry[] => {
  return diares;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diares.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {

  const newDiaryEntry = {
    id: Math.max(...diares.map(d => d.id)) + 1,
    ...entry
  };

diares.push(newDiaryEntry);
return newDiaryEntry;
};
const findById = (id: number): DiaryEntry | undefined => {
  const entry = diares.find(d => d.id === id);
  return entry;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById
};
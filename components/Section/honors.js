import { getMultiSectionDefaultFieldsString } from "./utils";

const key = "honors"

const fields = [
  {
    title: "Most cucked",
    subtitle: "Ethan Nankervis",
    date: "July 2021",
    other: [],
  },
  {
    title: "Abortion date",
    subtitle: "parents",
    date: "July 2002",
    other: [],
  },
]

const getDefaultFields = () => getMultiSectionDefaultFieldsString(fields);

export const getHonors = () => {
    return {
        name: key,
        char: `/${key}\n${getDefaultFields()}`,
        display: {
            title: "Honors",
            description: "Brag about your past awards and honors.",
        },
    }
}

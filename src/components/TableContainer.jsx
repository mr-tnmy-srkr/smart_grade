import TableRow from "./TableRow";
import {
  studentsDataOfClassOne,
  studentsDataOfClassTwo,
  studentsDataOfClassThree,
} from "../data/studentsData";

export default function TableContainer() {
  console.log(studentsDataOfClassOne);

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#FFFFFF0D]">
          <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
            ID
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold text-left">
            Name
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
          <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white/5">
          <td className="p-5 text-sm md:text-xl" colSpan="4">
            Class One
          </td>
        </tr>

        {studentsDataOfClassOne?.map((data) => (
          <TableRow key={data.id} studentInfo={data} />
        ))}

        <tr className="bg-white/5">
          <td className="p-5 text-sm md:text-xl" colSpan="4">
            Class Two
          </td>
        </tr>

        {studentsDataOfClassTwo?.map((data) => (
          <TableRow key={data.id} studentInfo={data} />
        ))}

        <tr className="bg-white/5">
          <td className="p-5 text-sm md:text-xl" colSpan="4">
            Class Three
          </td>
        </tr>

        {studentsDataOfClassThree?.map((data) => (
          <TableRow key={data.id} studentInfo={data} />
        ))}
      </tbody>
    </table>
  );
}

import TableRow from "./TableRow";
import {
  studentsData
} from "../data/studentsData";

export default function TableContainer() {
  const classOneStudents = studentsData.filter(
    (student) => student.classes === "one"
  );
  const classTwoStudents = studentsData.filter(
    (student) => student.classes === "two"
  );
  const classThreeStudents = studentsData.filter(
    (student) => student.classes === "three"
  );

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
        {<TableRow StudentClass="Class One" studentInfo={classOneStudents} />}
        {<TableRow StudentClass="Class Two" studentInfo={classTwoStudents} />}
        {
          <TableRow
            StudentClass="Class Three"
            studentInfo={classThreeStudents}
          />
        }
      </tbody>
    </table>
  );
}

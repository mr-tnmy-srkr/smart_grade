export default function TableRow({ StudentClass, studentInfo }) {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          {StudentClass}
        </td>
      </tr>
     
      {studentInfo.map((student, idx) => (
        <tr key={student.id} className="border-b border-[#7ECEB529]">
          <td className="p-5 text-sm md:text-xl">{idx + 1}</td>
          <td className="p-5 text-sm md:text-xl">
            <div className="flex space-x-3 items-center">
              <img
                className="w-8 h-8"
                src={student.pic}
                width="32"
                height="32"
                alt="Student Name"
              />
              <span className="whitespace-nowrap">{student.name}</span>
            </div>
          </td>
          <td className="p-5 text-sm md:text-xl text-center">
            {student.scores}
          </td>
          <td className="p-5 text-sm md:text-xl text-center">
            {student.percentage}%
          </td>
        </tr>
      ))}
    </>
  );
}

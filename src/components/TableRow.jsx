export default function TableRow(studentInfo) {
  const {id,name,classes,scores,percentage} = studentInfo.studentInfo || {};

  return (
    <>
      {/*  <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          {classType}
        </td>
      </tr> */}
      <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">{id}</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src="./assets/avatar.png"
              width="32"
              height="32"
              alt="John Smith"
            />
            <span className="whitespace-nowrap">{name}</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">{scores}</td>
        <td className="p-5 text-sm md:text-xl text-center">{percentage}%</td>
      </tr>
    </>
  );
}

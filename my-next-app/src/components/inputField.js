import Image from "next/image";

function InputField({ label, value = 2, width = "45rem" }) {
  return (
    <div className={`mt-${value}`}>
      <p className="text-sm">{label}</p>
      <div className="relative" style={{ width }}>
        <input
          type="text"
          className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
        />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <Image src="/pencil.svg" alt="icon" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export default InputField;

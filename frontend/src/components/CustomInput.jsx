export default function CustomInput({
  type,
  placeholder,
  icon,
  value,
  form,
  setForm,
}) {
  return (
    <>
      <div id="row" className=" mt-4 rounded-[30px]">
        <div
          className=" flex justify-start rounded-[30px] w-[250px] h-[45px]  font-custom border-x-transparent border-y-transparent focus-within:border-[3px] border-s-wine "
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="p-[7px] mt-[1px]">{icon}</div>
          <div className="flex justify-around ">
            <div className=" pt-[8px] mt-[1px]">
              <input
                type={type}
                required
                className={
                  "   bg-transparent outline-none w-[180px] -ms-r placeholder:text-black placeholder: opacity-[0.650] font-bold"
                }
                placeholder={placeholder}
                value={form[value]}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [value]: e.target.value,
                  });
                }}
                style={{ filter: "invert(100%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

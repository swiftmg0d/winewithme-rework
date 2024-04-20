export default function Container({ children }) {
  return (
    <>
      <div className="flex justify-center relative mt-[100px] md:mt-[100px] ">
        <div className="container bg-red-50 rounded-[60px] w-[320px] h-[490px] md:w-[700px] md:h-[700px]  sm:w-[400px] sm:h-[630px] shadow-[inset_-12px_-8px_40px_#46464620] ">
          <section className="relative text-center mt-2 flex  flex-col justify-cente">
            <div className=" flex justify-center flex-col ">{children}</div>
          </section>
        </div>
      </div>
    </>
  );
}

export default function Container({ children }) {
  return (
    <>
      <div className="flex justify-center relative mt-[40px] md:mt-[120px] xs:mt-[30px] xl:mt-[10px] 2xl:mt-[70px]">
        <div className="container bg-white bg-opacity-[0.8] rounded-[60px] xs:w-[200px] w-[300px] h-[580px] md:w-[700px] md:h-[700px]  sm:w-[400px] sm:h-[630px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
          <section className="relative text-center mt-2 flex  flex-col justify-cente">
            <div className=" flex justify-center flex-col ">{children}</div>
          </section>
        </div>
      </div>
    </>
  );
}

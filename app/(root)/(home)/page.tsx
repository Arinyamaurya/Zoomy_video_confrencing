// app/(root)/page.tsx or app/page.tsx

import MeetingTypeList from "@/components/MeetingTypeList";


export default function HomePage() {
  const now=new Date();
  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
  });
  const date=(new Intl.DateTimeFormat('en-US' , {
    dateStyle:'full'
  })).format(now);
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="bg-[url('/images/hero-background.png')] h-[300px] w-full rounded-[20px]  bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-[#c9ddff] lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList/>
    </section>
  );
};

        

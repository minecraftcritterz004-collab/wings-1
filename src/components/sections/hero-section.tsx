import Image from 'next/image';
import { Gift, Sparkles, Snowflake, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="max-w-lg mx-auto text-center">
                  <div className="mb-0 flex flex-col items-center p-0 m-0">
                        <div className="w-35 mb-0 p-0 m-0">
                      <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83abdcc4-db4d-44a0-8a0d-ed5e2c75b052/44225b2a-8841-4fac-9781-d5d6e9dd9575-removebg-preview-1769847819158.png?width=8000&height=8000&resize=contain"
            alt="T.J. Maxx Logo"
            width={176}
            height={176}
            className="w-full h-auto object-contain drop-shadow-xl block p-0 m-0" />

                  </div>

              <div className="relative mb-6 mt-6 animate-float">
            <div className="relative inline-block">
                    <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83abdcc4-db4d-44a0-8a0d-ed5e2c75b052/Untitled-1057-x-698-px-1769848018061.png?width=8000&height=8000&resize=contain"
              alt="T.J. Maxx Valentine's Card"
              width={1057}
              height={698}
              className="w-56 h-auto mx-auto drop-shadow-2xl relative z-10 rounded-[2rem] overflow-hidden" />

                <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent blur-3xl -z-10"></div>
              </div>
            </div>
  
              <h1 className="text-lg md:text-xl font-bold text-foreground mb-1.5 px-2 relative">
                <Star className="w-2.5 h-2.5 text-accent absolute -top-0.5 left-3 animate-pulse" />
                Unlock{' '}
                    <span className="inline-flex items-center gap-1" style={{ color: '#cf102d' }}>
                      T.J. Maxx Rewards
                      <Gift className="w-4 h-4 inline-block" style={{ color: '#cf102d' }} />
                  </span>
              <Snowflake className="w-2.5 h-2.5 text-black/20 absolute -bottom-0.5 right-3 animate-pulse" />
            </h1>

            <p className="text-xs md:text-sm text-foreground/95 mb-2 font-medium px-2 relative">
              <Sparkles className="w-2.5 h-2.5 text-accent inline-block mr-1 animate-pulse" />
              Here's how to claim your{' '}
                <span className="font-bold !w-[148px] !h-[17px]" style={{ color: '#cf102d' }}>$500 Valentine&apos;s Gift Card</span>
              <Sparkles className="w-2.5 h-2.5 text-accent inline-block ml-1 animate-pulse" />
            </p>
      </div>
    </div>);

};

export default HeroSection;
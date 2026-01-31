import React from 'react';
import { Star, Sparkles, Heart, Gift } from 'lucide-react';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Heart className="absolute top-20 left-10 w-12 h-12 text-[#cf102d] animate-rotate-slow" />
        <Star className="absolute top-40 left-20 w-8 h-8 text-accent animate-float-spin" />
        <Sparkles className="absolute top-32 right-16 w-10 h-10 text-accent animate-twinkle" />
        <Gift className="absolute bottom-40 left-16 w-10 h-10 text-[#cf102d] animate-rotate-reverse" />
        <Star className="absolute bottom-60 right-20 w-12 h-12 text-accent animate-float-gentle" />
        <Heart className="absolute top-1/2 left-8 w-8 h-8 text-[#cf102d] animate-rotate-slow" />
        <Sparkles className="absolute top-1/3 right-12 w-8 h-8 text-accent animate-float-spin" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
              <Image
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=200"
                alt="Handbag"
                width={100}
                height={100}
                className="absolute top-24 left-12 w-20 h-20 object-cover animate-float-gentle rounded-full border-2 border-accent/20"
              />
              <Image
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=200"
                alt="Perfume"
                width={120}
                height={120}
                className="absolute top-32 right-16 w-24 h-24 object-cover animate-float-gentle rounded-full border-2 border-accent/20"
              />
              <Image
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=200"
                alt="Sunglasses"
                width={100}
                height={100}
                className="absolute top-1/3 left-20 w-20 h-20 object-cover animate-float-gentle rounded-full border-2 border-accent/20"
              />
              <Image
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=200"
                alt="Jewelry"
                width={120}
                height={120}
                className="absolute top-1/2 right-24 w-24 h-24 object-cover animate-float-gentle rounded-full border-2 border-accent/20"
              />
              <Image
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=200"
                alt="Heels"
                width={100}
                height={100}
                className="absolute bottom-40 left-16 w-20 h-20 object-cover animate-float-gentle rounded-full border-2 border-accent/20"
              />
              <Image
                src="https://images.unsplash.com/photo-1544816153-12ad58fd3f5a?auto=format&fit=crop&q=80&w=200"
                alt="Beauty"
                width={80}
                height={80}
                className="absolute bottom-32 right-20 w-16 h-16 object-cover animate-float-gentle rounded-full border-2 border-accent/20"
              />
          </div>
    </>
  );
};

export default AnimatedBackground;
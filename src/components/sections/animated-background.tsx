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
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83abdcc4-db4d-44a0-8a0d-ed5e2c75b052/44225b2a-8841-4fac-9781-d5d6e9dd9575-removebg-preview-1769847819158.png?width=8000&height=8000&resize=contain"
              alt=""
              width={80}
              height={80}
              className="absolute top-24 left-12 w-20 h-20 object-contain animate-float-gentle"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83abdcc4-db4d-44a0-8a0d-ed5e2c75b052/Untitled-1057-x-698-px-1769848018061.png?width=8000&height=8000&resize=contain"
              alt=""
              width={160}
              height={160}
              className="absolute top-32 right-16 w-32 h-32 object-contain animate-float-gentle rounded-lg"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83abdcc4-db4d-44a0-8a0d-ed5e2c75b052/44225b2a-8841-4fac-9781-d5d6e9dd9575-removebg-preview-1769847819158.png?width=8000&height=8000&resize=contain"
              alt=""
              width={160}
              height={160}
              className="absolute top-1/3 left-20 w-32 h-32 object-contain animate-float-gentle"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83abdcc4-db4d-44a0-8a0d-ed5e2c75b052/Untitled-1057-x-698-px-1769848018061.png?width=8000&height=8000&resize=contain"
              alt=""
              width={160}
              height={160}
              className="absolute top-1/2 right-24 w-32 h-32 object-contain animate-float-gentle rounded-lg"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83abdcc4-db4d-44a0-8a0d-ed5e2c75b052/44225b2a-8841-4fac-9781-d5d6e9dd9575-removebg-preview-1769847819158.png?width=8000&height=8000&resize=contain"
              alt=""
              width={160}
              height={160}
              className="absolute bottom-40 left-16 w-20 h-20 object-contain animate-float-gentle"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83abdcc4-db4d-44a0-8a0d-ed5e2c75b052/Untitled-1057-x-698-px-1769848018061.png?width=8000&height=8000&resize=contain"
              alt=""
              width={80}
              height={80}
              className="absolute bottom-32 right-20 w-24 h-24 object-contain animate-float-gentle rounded-lg"
            />
        </div>
    </>
  );
};

export default AnimatedBackground;
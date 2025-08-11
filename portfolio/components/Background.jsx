import Image from 'next/image';
import { assets } from '@/assets/assets';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src={assets.header_bg_color}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        quality={75}
        priority={false}
        style={{ filter: 'none' }}
      />
    </div>
  );
};

export default Background;
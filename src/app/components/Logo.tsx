
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'


// const Logo: React.FC = () => {
  
//   return (
//     <Link to="/" className="flex items-center gap-2">
//       {/* TODO: Set badger logo color */}
//       <div className="w-10 h-10 bg-gradient-to-br from-badger-white to-[color:hsl(48 89% 60%)] rounded-lg flex items-center justify-center shadow-md">
//         <span className="text-white font-bold text-xl"> 
//           <Image src="https://i.imgur.com/Zbv8Xwb.png" alt="getBadger Logo" />
//         </span>
//       </div>
//       {/* LOGO TITLE */}
//       <span className="font-bold text-xl text-foreground">Badger</span>
//     </Link>
//   );
// };

interface LogoProps {
  logoUrl: string;
  width: number;   // Add width and height to the Logo component
  height: number;
}

const Logo: React.FC<LogoProps> = ({ logoUrl, width, height }) => {
  return(
    <div className="flex items-center space-x-2">
      <Link href={'/'} className="flex items-center gap-2">
        <Image src={logoUrl} alt="Logo" width={width} height={height} className=' rounded-2xl w-10 h-10 bg-gradient-to-br from-white to-white-300 rounded-lg flex items-center justify-center shadow-md' />
        <span className="font-bold text-xl text-foreground">Badger</span>
      </Link>
    </div>
  );
};


export default Logo;

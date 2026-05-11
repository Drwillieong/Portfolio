/* eslint-disable @next/next/no-img-element */

export interface ImageProjectProps {
  imageMinia1: string;
  imageLarge: string;
  imageMinia2: string;
}

export default function ImageProject({
  imageMinia1,
  imageLarge,
  imageMinia2,
}: ImageProjectProps) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-3 flex-1 h-full">
      <div className="col-span-1 row-span-1 rounded-xl bg-background overflow-hidden flex items-center justify-center ">
        {imageMinia1 ? (
          <img
            src={imageMinia1}
            alt="Project image"
            className="w-full h-full object-cover"
            loading="eager"
          />
        ) : (
          <p className="text-sm font-normal">Aucune image disponible</p>
        )}
      </div>
      <div className="col-span-2 row-span-2 rounded-xl bg-background overflow-hidden flex items-center justify-center ">
        {imageLarge ? (
          <img
            src={imageLarge}
            alt="Project image"
            className="w-full h-full object-cover"
            loading="eager"
          />
        ) : (
          <p className="text-sm font-normal">Aucune image disponible</p>
        )}
      </div>
      <div className="col-span-1 row-span-1 rounded-xl bg-background overflow-hidden flex items-center justify-center ">
        {imageMinia2 ? (
          <img
            src={imageMinia2}
            alt="Project image"
            className="w-full h-full object-cover"
            loading="eager"
          />
        ) : (
          <p className="text-sm font-normal">Aucune image disponible</p>
        )}
      </div>
    </div>
  );
}

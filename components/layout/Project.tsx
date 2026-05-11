import ImageProject, { ImageProjectProps } from "../Project/ImageProject";
import InfosProject, { InfosProjectProps } from "../Project/InfosProject";

export default function Project({
  title,
  description,
  color,
  list,
  stack,
  imageMinia1,
  imageLarge,
  imageMinia2,
}: InfosProjectProps & ImageProjectProps) {
  return (
    <div className="flex flex-row gap-8 w-full h-fit">
      <InfosProject
        title={title}
        description={description}
        color={color}
        list={list}
        stack={stack}
      />
      <ImageProject
        imageMinia1={imageMinia1}
        imageLarge={imageLarge}
        imageMinia2={imageMinia2}
      />
    </div>
  );
}

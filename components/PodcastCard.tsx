import { PodcastCardProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
}: PodcastCardProps) => {
  const router = useRouter();

  const handleViews = () => {
    // increase views

    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  };

  return (
    <div onClick={handleViews} className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl!}
          className="bg-teal-500 aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
          width={174}
          height={174}
          alt={title}
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;

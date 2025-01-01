/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";

import { useQuery } from "convex/react";

import EmptyState from "@/components/EmptyState";
import PodcastCard from "@/components/PodcastCard";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";
import ProfileCard from "@/components/ProfileCard";
import { useEffect, useState } from "react";

const ProfilePage = ({
  params,
}: {
  params: Promise<{
    profileId: string;
  }>;
}) => {
  const [paramProfileId, setParamProfileId] = useState("");

  useEffect(() => {
    const getProfileParams = async () => {
      const id = (await params).profileId;
      setParamProfileId(id);
    };

    getProfileParams();
  }, [params]);

  const user = useQuery(api.users.getUserById, {
    clerkId: paramProfileId,
  });

  const podcastsData = useQuery(api.podcasts.getPodcastByAuthorId, {
    authorId: paramProfileId,
  });

  if (!user || !podcastsData) return <LoaderSpinner />;

  return (
    <section className="mt-9 flex flex-col">
      <h1 className="text-20 font-bold text-white-1 max-md:text-center">
        Podcaster Profile
      </h1>
      <div className="mt-6 flex flex-col gap-6 max-md:items-center md:flex-row">
        <ProfileCard
          podcastData={podcastsData!}
          imageUrl={user?.imageUrl!}
          userFirstName={user?.name!}
        />
      </div>
      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">All Podcasts</h1>
        {podcastsData && podcastsData.podcasts.length > 0 ? (
          <div className="podcast_grid">
            {podcastsData?.podcasts
              ?.slice(0, 4)
              .map((podcast) => (
                <PodcastCard
                  key={podcast._id}
                  imgUrl={podcast.imageUrl!}
                  title={podcast.podcastTitle!}
                  description={podcast.podcastDescription}
                  podcastId={podcast._id}
                />
              ))}
          </div>
        ) : (
          <EmptyState
            title="You have not created any podcasts yet"
            buttonLink="/create-podcast"
            buttonText="Create your first podcast"
          />
        )}
      </section>
    </section>
  );
};

export default ProfilePage;

"use client";

import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import Searchbar from "@/components/Searchbar";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useEffect, useState } from "react";

const Discover = ({
  searchParams,
}: {
  searchParams: Promise<{
    search: string;
  }>;
}) => {
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    const getSearchParams = async () => {
      const search = (await searchParams).search;
      setSearchParam(search);
      console.log("search params: ", search);
    };

    getSearchParams();
  }, [searchParam, searchParams]);

  const podcastsData = useQuery(api.podcasts.getPodcastBySearch, {
    search: searchParam || "",
  });

  return (
    <div className="flex flex-col gap-9">
      <Searchbar />
      <div className="flex flex-col gap-9">
        <h1 className="text-20 font-bold text-white-1">
          {!searchParam ? "Discover Trending Podcasts" : "Search results for"}{" "}
          {searchParam && <span className="text-white-2">{searchParam}</span>}
        </h1>
        {podcastsData ? (
          <>
            {podcastsData.length > 0 ? (
              <div className="podcast_grid">
                {podcastsData?.map(
                  ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
                    <PodcastCard
                      key={_id}
                      podcastId={_id}
                      imgUrl={imageUrl!}
                      title={podcastTitle}
                      description={podcastDescription}
                    />
                  )
                )}
              </div>
            ) : (
              <EmptyState title="No results found" />
            )}
          </>
        ) : (
          <LoaderSpinner />
        )}
      </div>
    </div>
  );
};

export default Discover;

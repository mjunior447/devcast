import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts: defineTable({
    podcastTitle: v.string(),
    podcastDescription: v.string(),
    audioUrl: v.optional(v.string()),
    audioStorageId: v.optional(v.id("_storage")),
    audioDuration: v.number(),
    imageUrl: v.optional(v.string()),
    imageStorageId: v.optional(v.id("_storage")),
    imagePrompt: v.string(),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
    voicePrompt: v.string(),
    voiceType: v.string(),
    user: v.id("users"),
    views: v.number(),
  })
    .searchIndex("search_author", { searchField: "author" })
    .searchIndex("search_title", { searchField: "podcastTitle" })
    .searchIndex("search_body", { searchField: "podcastDescription" }),
  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    name: v.string(),
  }),
});

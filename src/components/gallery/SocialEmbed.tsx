"use client";

import { InstagramEmbed, XEmbed } from "react-social-media-embed";
import type { GalleryImage } from "@/data/gallery-sources";

interface SocialEmbedProps {
  item: GalleryImage;
}

export default function SocialEmbed({ item }: SocialEmbedProps) {
  if (!item.embedUrl) return null;

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-dark-bg">
      {item.type === "instagram" && (
        <InstagramEmbed
          url={item.embedUrl}
          width="100%"
          captioned
        />
      )}
      {item.type === "twitter" && (
        <XEmbed
          url={item.embedUrl}
          width="100%"
        />
      )}
    </div>
  );
}

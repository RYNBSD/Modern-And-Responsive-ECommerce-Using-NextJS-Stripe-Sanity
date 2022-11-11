import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient ({
    projectId: 'btxmd4wi',
    dataset: 'production',
    apiVersion: '2022-06-11',
    useCdn: true,
    token: process.env.SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
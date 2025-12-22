import type { SanityImageSource } from "@sanity/image-url"

export type Social = {
    _id: string,
    title: string,
    url: string
}

export type Skill = {
    _id: string,
    title: string,
    progress: number,
    image: SanityImageSource & { alt: string },
    order: number
}

export type Project = {
    _id: string,
    title: string,
    image: SanityImageSource & { alt?: string },
    summary: string,
    stack: Skill[],
    linkToBuild: string
}
export type Experience = {
    _id: string,
    jobTitle: string,
    companyImage: SanityImageSource & { alt?: string },
    company: string,
    dateStarted: string,
    dateEnded: string,
    isCurrentlyWorkingHere: boolean,
    stack: Skill[],
    points: string[]
}

export type PageInfo = {
    _id: string,
    name: string,
    role: string,
    heroImage: SanityImageSource & { alt: string },
    backgroundInformation: string,
    profilePic: SanityImageSource & { alt?: string },
    phoneNumber: string,
    email: string,
    address: string,
    socials: Social[],
    resume?: { asset?: { url:string }}
}
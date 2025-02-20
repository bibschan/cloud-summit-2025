/**
 * This file defines the static list of cloud providers shown in the hero section.
 * These providers are separate from the voting system and are used only for display purposes.
 * For the voting system providers, see the admin panel and database.
 */

export interface HeroCloudProvider {
  name: string;
  icon: string;
  link: string;
}

// These are the featured cloud providers shown in the hero section
// They are separate from the voting system providers
export const heroProviders: HeroCloudProvider[] = [
  {
    name: "AWS",
    icon: "/hero-providers/aws.svg",
    link: "https://aws.amazon.com",
  },
  {
    name: "GCP",
    icon: "/hero-providers/gcp.svg",
    link: "https://cloud.google.com",
  },
  {
    name: "Azure",
    icon: "/hero-providers/azure.svg",
    link: "https://azure.microsoft.com",
  },
  {
    name: "Oracle",
    icon: "/hero-providers/oracle.svg",
    link: "https://www.oracle.com/cloud",
  },
  {
    name: "IBM",
    icon: "/hero-providers/ibm.svg",
    link: "https://www.ibm.com/cloud",
  },
  {
    name: "Alibaba",
    icon: "/hero-providers/alibaba.svg",
    link: "https://www.alibabacloud.com",
  },
  {
    name: "Tencent",
    icon: "/hero-providers/tencent.png",
    link: "https://cloud.tencent.com",
  },
  {
    name: "Huawei",
    icon: "/hero-providers/huawei.png",
    link: "https://support.huaweicloud.com",
  },
]; 
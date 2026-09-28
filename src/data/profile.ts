export type Profile = {
  name: string;
  bio: string;
  /** 프로필 사진 URL. 없으면 기본 이미지가 표시된다. */
  image?: string;
};

export type Link = {
  id: string;
  title: string;
  url: string;
};

// TODO: MongoDB 연동 전까지 사용하는 샘플 데이터
export const profile: Profile = {
  name: "유개발",
  bio: "세계 최강 바이브코더",
};

export const links: Link[] = [
  { id: "blog", title: "기술 블로그", url: "https://velog.io" },
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "youtube", title: "YouTube", url: "https://www.youtube.com" },
  { id: "portfolio", title: "포트폴리오", url: "https://example.com" },
];

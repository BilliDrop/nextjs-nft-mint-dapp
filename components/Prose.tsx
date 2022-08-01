type Props = {
  children: React.ReactNode;
};

export default function Prose({ children }: Props) {
  return <div style={{ backgroundImage: "url(https://cdn.discordapp.com/attachments/1003372616381370449/1003483484406415420/TheDropNFTVIDCARDBG.jpg)"}} className="max-w-prose mx-auto px-4">{children}</div>;
}

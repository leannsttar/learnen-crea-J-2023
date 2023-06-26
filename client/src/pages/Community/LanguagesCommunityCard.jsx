import { RoundedFlag } from "../../components/RoundedFlag";

export function LanguagesCommunityCard({ languages, status }) {
  return (
    <div className="flex items-center gap-2">
      <p className="font-[700] text-[10px] 1080:text-[13px]">{status}</p>
      <div className="flex">
        {languages.map((language, index) => (
          <RoundedFlag key={index} country={language} className="w-4 h-4 1080:h-6 1080:w-6" />
        ))}
      </div>
    </div>
  );
}

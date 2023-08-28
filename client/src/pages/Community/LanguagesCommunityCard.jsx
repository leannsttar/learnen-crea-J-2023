import { RoundedFlag } from "../../components/RoundedFlag";

export function LanguagesCommunityCard({ languages=[], status }) {
  return (
    <div className="flex items-center gap-2">
      <p className="font-[700] text-[10px] 1080:text-[13px]">{status}</p>
      <div className="flex gap-1">
        
      {languages.lenght && languages.map((language, index) => (
          <RoundedFlag key={index} country={`http://localhost:5000${language.imagen_bandera}`} className="h-6 w-6 rounded-full object-fill" />
        ))}
      </div>
    </div>
  );
}

import { useLocale, useTranslations } from "next-intl";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChangeEvent, useTransition } from "react";
import { useRouter } from "next/navigation";


const ToggleLanguage = () => {
    //Import states needed for the translation
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const localActive = useLocale()

    //Import the translation method
    const t = useTranslations("Navigation")

    const handleChange = (value: string) => {
        const nextLocale = value
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }

    return (
        <Select onValueChange={handleChange} >
            <SelectTrigger>
                <SelectValue placeholder={localActive.toUpperCase()} />
                <p className="sr-only">{t("languageSelect")}</p>
            </SelectTrigger>
            <SelectContent>
                <SelectItem disabled={isPending} className="text-accentLight cursor-pointer md:text-secondary" value="en">English</SelectItem>
                <SelectItem disabled={isPending} className="text-accentLight cursor-pointer md:text-secondary" value="ar">العربية</SelectItem>
                <SelectItem disabled={isPending} className="text-accentLight cursor-pointer md:text-secondary" value="de">Deutsch</SelectItem>
                <SelectItem disabled={isPending} className="text-accentLight cursor-pointer md:text-secondary" value="es">Español</SelectItem>
                <SelectItem disabled={isPending} className="text-accentLight cursor-pointer md:text-secondary" value="fr">Français</SelectItem>
                <SelectItem disabled={isPending} className="text-accentLight cursor-pointer md:text-secondary" value="ja">日本語</SelectItem>
                <SelectItem disabled={isPending} className="text-accentLight cursor-pointer md:text-secondary" value="pt">Português</SelectItem>
                <SelectItem disabled={isPending} className="text-accentLight cursor-pointer md:text-secondary" value="ru">Русский</SelectItem>
                <SelectItem disabled={isPending} className="text-accentLight cursor-pointer md:text-secondary" value="zh">中文</SelectItem>
            </SelectContent>
        </Select>

    );
}

export default ToggleLanguage;


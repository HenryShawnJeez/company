import { useTranslations } from "next-intl";

const Interested = () => {

    const t = useTranslations("Interest");
    
    return ( 
        <main className="text-center  bg-bgLight text-textLight w-[90%] mx-auto -mt-10">
            <div className="flex flex-col gap-y-5 p-10">
               <p>{t("question")}</p> 
            </div>
            
        </main>
     );
}
 
export default Interested;
import Link from "next/link";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";

type DocumentProps = {
    docTitle: string;
    docLink: string;
};

function DocumentTopic({ docTitle, docLink }: DocumentProps) {
    return (
        <div className="flex  align-center gap-2 w-72">
            <Image alt="pdf" width={20} height={20} src="/extensions/pdf-svgrepo-com.svg" />
            <Link className="w-64" target="_blank" href={docLink}>{docTitle}</Link>
            <IoMdDownload size={20} />

        </div>
    );
}

export default DocumentTopic;